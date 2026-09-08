import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify({
      success: true,
      message: "API is working!",
      timestamp: Date.now(),
      nodeEnv: import.meta.env.NODE_ENV,
      hasGroqKey: !!import.meta.env.GROQ_API_KEY,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};