import Groq from 'groq-sdk';
import { buildPortfolioContext } from './context';
import { SYSTEM_PROMPT } from './prompts';
import type { Message } from '../types/chat';

// Initialize Groq client
const groq = new Groq({
  apiKey: import.meta.env.GROQ_API_KEY,
  dangerouslyAllowBrowser: false, // Only allow server-side usage
});

// Model selection
const MODEL = 'groq/compound'; // Fast, capable model (llama-3.1-70b-versatile deprecated)

export async function generateChatResponse(
  userMessage: string,
  conversationHistory: Message[] = []
): Promise<string> {
  try {
    // 1. Build portfolio context
    const portfolioContext = await buildPortfolioContext();

    // 2. Format conversation history for Groq
    const formattedHistory = conversationHistory.map(msg => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content
    }));

    // 3. Call Groq API
    const completion = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: `${SYSTEM_PROMPT}\n\n${portfolioContext}`
        },
        ...formattedHistory,
        {
          role: 'user',
          content: userMessage
        }
      ],
      temperature: 0.7, // Balance between creativity and consistency
      max_tokens: 500,  // Limit response length
      top_p: 1,
      stream: false,
    });

    // 4. Extract and return response
    const response = completion.choices[0]?.message?.content;
    
    if (!response) {
      throw new Error('No response generated');
    }

    return response;

  } catch (error) {
    console.error('Groq API error:', error);
    throw new Error('Failed to generate response. Please try again.');
  }
}
