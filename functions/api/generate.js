export async function onRequestPost(context) {
  // 1. Get the request body from the client
  const { request, env } = context;
  const body = await request.json();

  // 2. Check if API Key is set in environment variables
  if (!env.ABHIBOTS_API_KEY) {
    return new Response(JSON.stringify({ error: "Server config error: Missing API Key" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    // 3. Forward the request to AbhiBots with the secure Key
    const apiResponse = await fetch("https://abhibots.com/api/tts/generate", {
      method: "POST",
      headers: {
        "X-API-Key": env.ABHIBOTS_API_KEY, // Key is injected here, server-side
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    // 4. Return the response back to your frontend
    // We forward the status and body exactly as received
    return new Response(apiResponse.body, {
      status: apiResponse.status,
      headers: apiResponse.headers
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to connect to TTS provider" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}