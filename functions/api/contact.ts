interface Env {
  // Add your environment variables here
  // SENDGRID_API_KEY: string;
}

export const onRequestPost = async (context: any) => {
  try {
    const { request, env } = context;
    const body: any = await request.json();

    const { firstName, lastName, email, role, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !role || !message) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // --- EMAIL SENDING LOGIC GOES HERE ---
    // Example using SendGrid (requires fetch):
    /*
    const sendGridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: "projects@mindtechnica.com" }] }],
        from: { email: "noreply@mindtechnica.com" },
        subject: `New Contact from ${firstName} ${lastName}`,
        content: [{ type: "text/plain", value: `Role: ${role}\nEmail: ${email}\n\nMessage:\n${message}` }],
      }),
    });

    if (!sendGridResponse.ok) {
      throw new Error("Failed to send email");
    }
    */

    // For now, we simulate a successful submission since no email provider is configured.
    console.log(`Received contact form submission:
      Name: ${firstName} ${lastName}
      Email: ${email}
      Role: ${role}
      Message: ${message}
    `);

    return new Response(JSON.stringify({ message: "Message sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error handling contact form:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
