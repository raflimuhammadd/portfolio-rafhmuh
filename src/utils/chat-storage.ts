import type { Message } from '../lib/types/chat';

const STORAGE_KEY = 'portfolio-chat-history';
const MAX_MESSAGES = 50; // Prevent storage overflow
const MAX_AGE_DAYS = 30;

export function saveMessages(messages: Message[]): void {
  if (typeof window === 'undefined') return; // SSR check
  
  try {
    // Trim old messages if exceeding limit
    const trimmed = messages.slice(-MAX_MESSAGES);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      messages: trimmed,
      lastUpdated: Date.now()
    }));
  } catch (error) {
    console.error('Failed to save chat history:', error);
  }
}

export function loadMessages(): Message[] {
  if (typeof window === 'undefined') return []; // SSR check
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const data = JSON.parse(stored);
    
    // Check if data is too old
    const ageInDays = (Date.now() - data.lastUpdated) / (1000 * 60 * 60 * 24);
    if (ageInDays > MAX_AGE_DAYS) {
      clearHistory();
      return [];
    }

    return data.messages || [];
  } catch (error) {
    console.error('Failed to load chat history:', error);
    return [];
  }
}

export function clearHistory(): void {
  if (typeof window === 'undefined') return; // SSR check
  
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear chat history:', error);
  }
}

export function getStorageInfo(): { messageCount: number; lastUpdated: Date | null } {
  if (typeof window === 'undefined') {
    return { messageCount: 0, lastUpdated: null };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { messageCount: 0, lastUpdated: null };

    const data = JSON.parse(stored);
    return {
      messageCount: data.messages?.length || 0,
      lastUpdated: data.lastUpdated ? new Date(data.lastUpdated) : null
    };
  } catch {
    return { messageCount: 0, lastUpdated: null };
  }
}
