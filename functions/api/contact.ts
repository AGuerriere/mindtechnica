interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { request, env } = context;
    const body: any = await request.json();

    const { firstName, lastName, email, role, message } = body;

    if (!firstName || !lastName || !email || !role || !message) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await env.DB.prepare(
      "INSERT INTO contacts (firstName, lastName, email, role, message) VALUES (?, ?, ?, ?, ?)"
    ).bind(firstName, lastName, email, role, message).run();

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
