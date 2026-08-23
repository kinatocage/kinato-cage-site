export default {
  async fetch(request, env) {
    const allowedOrigins = [
      "https://kinato-cage-site.pages.dev",
      "http://localhost:4321",
      "http://localhost:3000"
    ];

    const requestOrigin = request.headers.get("Origin") || "";
    const isAllowed = allowedOrigins.includes(requestOrigin);
    const corsOrigin = isAllowed ? requestOrigin : "https://kinato-cage-site.pages.dev";

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": corsOrigin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    if (requestOrigin && !isAllowed) {
      return new Response("Forbidden: Access denied.", { status: 403 });
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return new Response("Invalid JSON body", { status: 400 });
    }

    const modelName = body.model || 'gemini-3.5-flash-lite'; 
    const googleApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${env.GEMINI_API_KEY}`;

    try {
      const response = await fetch(googleApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": corsOrigin,
        }
      });
    } catch (e) {
      return new Response("Error connecting to Gemini API", { status: 500 });
    }
  }
};
