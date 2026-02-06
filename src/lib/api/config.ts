// API Configuration - Connected to backend
export const API_CONFIG = {
  // Base URL for your API - defaults to localhost:8000 for local development
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  
  // Dashboard endpoints
  dashboard: {
    base: '/api/dashboard/company' // GET /api/dashboard/company/{company_id}
  },
  
  // Companies endpoints
  companies: {
    list: '/api/dashboard/company', // GET /api/dashboard/company?name=search
  },
 
  // Chat endpoints  
  chat: {
    send: '/api/bot/ask', // POST /api/bot/ask
  },
  
  // Mock mode disabled - using real backend
  useMockData: false
};
