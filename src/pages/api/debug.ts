import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    // Debug environment variables
    const envData = {
      groqKey: import.meta.env.GROQ_API_KEY,
      groqKeyLength: import.meta.env.GROQ_API_KEY?.length,
      groqKeyFirst10: import.meta.env.GROQ_API_KEY?.substring(0, 10),
      groqKeyStartsWithGsk: import.meta.env.GROQ_API_KEY?.startsWith('gsk_'),
      allEnvKeys: Object.keys(import.meta.env).filter(key => key.includes('GROQ') || key.includes('KEY')),
      nodeEnv: import.meta.env.NODE_ENV,
      envMode: import.meta.env.MODE,
    };

    return new Response(JSON.stringify({
      success: true,
      debug: envData,
      timestamp: Date.now(),
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