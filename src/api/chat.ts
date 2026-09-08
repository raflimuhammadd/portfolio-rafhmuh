import type { APIRoute } from 'astro';
import { z } from 'zod';
import { generateChatResponse } from '../lib/ai/groq-client';
import type { ChatRequest, ChatResponse, Message } from '../lib/types/chat';

// Validation schema
const MessageSchema = z.object({
  id: z.string(),
  role: z.enum(['user', 'assistant']),
  content: z.string(),
  timestamp: z.number()
});

const ChatRequestSchema = z.object({
  message: z.string().min(1).max(1000),
  history: z.array(MessageSchema).optional()
});

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Parse request body
    const body = await request.json();
    
    // 2. Validate input
    const validatedData = ChatRequestSchema.parse(body) as ChatRequest;
    
    // 3. Generate AI response
    const aiResponse = await generateChatResponse(
      validatedData.message,
      validatedData.history
    );

    // 4. Create message object
    const responseMessage: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: aiResponse,
      timestamp: Date.now()
    };

    // 5. Return success response
    return new Response(JSON.stringify({
      success: true,
      message: responseMessage
    } as ChatResponse), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    // 6. Handle errors
    console.error('Chat API error:', error);
    
    const errorMessage = error instanceof z.ZodError 
      ? 'Invalid request data'
      : error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred';

    return new Response(JSON.stringify({
      success: false,
      error: errorMessage
    } as ChatResponse), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
