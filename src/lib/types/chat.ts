export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface ChatRequest {
  message: string;
  history?: Message[];
}

export interface ChatResponse {
  success: boolean;
  message?: Message;
  error?: string;
}

export interface PortfolioContext {
  bio: string;
  skills: {
    frontend: string[];
    backend: string[];
    cloud: string[];
    tools: string[];
  };
  projects: Array<{
    title: string;
    description: string;
    techStack: string[];
    category: string;
    year: number;
    links?: {
      github?: string;
      demo?: string;
    };
  }>;
  contact: {
    email: string;
    location: string;
  };
}
