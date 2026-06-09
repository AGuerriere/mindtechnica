interface Env {
  DB: D1Database;
  RESEND_API_KEY: string;
  // Optional overrides — sensible defaults applied below.
  RESEND_FROM?: string;
  NOTIFICATION_EMAIL?: string;
}

interface LeadBody {
  fullName?: string;
  companyName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const body = (await request.json()) as LeadBody;

    const fullName = body.fullName?.trim();
    const companyName = body.companyName?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!fullName || !companyName || !phone || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1. Persist the lead with a pending booking status.
    await env.DB.prepare(
      "INSERT INTO leads (fullName, companyName, phone, email, message, booking_status) VALUES (?, ?, ?, ?, ?, 'pending')"
    )
      .bind(fullName, companyName, phone, email, message)
      .run();

    // 2. Notify the team via Resend.
    if (env.RESEND_API_KEY) {
      const from = env.RESEND_FROM || "Mind Technica <onboarding@resend.dev>";
      const to = env.NOTIFICATION_EMAIL || "projects@mindtechnica.com";

      const html = `
        <h2>New "Book a Call" lead</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td><strong>Full name</strong></td><td>${escapeHtml(fullName)}</td></tr>
          <tr><td><strong>Company</strong></td><td>${escapeHtml(companyName)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
        </table>
        <p style="font-family:sans-serif;font-size:12px;color:#888">Booking status: pending</p>
      `;

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: email,
          subject: `New lead: ${fullName} (${companyName})`,
          html,
        }),
      });

      if (!resendResponse.ok) {
        // Lead is already saved — log the email failure but don't fail the request.
        const errText = await resendResponse.text();
        console.error("Resend email failed:", resendResponse.status, errText);
      }
    } else {
      console.warn("RESEND_API_KEY not configured — skipping notification email");
    }

    return new Response(
      JSON.stringify({ message: "Lead saved successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error handling book-a-call submission:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
