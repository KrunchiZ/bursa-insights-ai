export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatContext {
  selectedCompany: {
    id: number; // Added for backend API
    name: string;
    companyId: string; // Registration ID
    industry: string;
  } | null;
}

// Conversation history for API
export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}
