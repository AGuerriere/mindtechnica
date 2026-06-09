interface Env {
  DB: D1Database;
  // Optional: Cal.com webhook signing secret. If set, signatures are verified.
  CAL_WEBHOOK_SECRET?: string;
}

interface CalWebhookBody {
  triggerEvent?: string;
  payload?: {
    attendees?: Array<{ email?: string; name?: string }>;
    responses?: {
      email?: { value?: string };
    };
  };
}

// Verify Cal.com's x-cal-signature-256 (HMAC-SHA256 of the raw body, hex).
async function verifySignature(
  rawBody: string,
  signature: string,
  secret: string
): Promise<boolean> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const mac = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(rawBody)
  );
  const expected = [...new Uint8Array(mac)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Constant-time-ish comparison.
  if (expected.length !== signature.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return diff === 0;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;

    // Read the raw body once so we can verify the signature against it.
    const rawBody = await request.text();

    if (env.CAL_WEBHOOK_SECRET) {
      const signature = request.headers.get("x-cal-signature-256") || "";
      const valid = await verifySignature(
        rawBody,
        signature,
        env.CAL_WEBHOOK_SECRET
      );
      if (!valid) {
        return new Response(JSON.stringify({ message: "Invalid signature" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    const body = JSON.parse(rawBody) as CalWebhookBody;

    // Only act on confirmed bookings.
    if (body.triggerEvent !== "BOOKING_CREATED") {
      return new Response(
        JSON.stringify({ message: `Ignored event: ${body.triggerEvent}` }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // The attendee email is the booker — match it to a lead.
    const email =
      body.payload?.attendees?.[0]?.email ||
      body.payload?.responses?.email?.value;

    if (!email) {
      return new Response(
        JSON.stringify({ message: "No attendee email in payload" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Update the most recent pending lead for this email.
    const result = await env.DB.prepare(
      `UPDATE leads
         SET booking_status = 'booked'
       WHERE id = (
         SELECT id FROM leads
          WHERE email = ? AND booking_status != 'booked'
          ORDER BY createdAt DESC
          LIMIT 1
       )`
    )
      .bind(email.trim())
      .run();

    const updated = result.meta?.changes ?? 0;

    return new Response(
      JSON.stringify({
        message: updated
          ? "Lead marked as booked"
          : "No matching pending lead found",
        email,
        updated,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error handling Cal.com webhook:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
