export interface ProjectOption {
  id: string;
  name: string;
  basePrice: number;
  baseDays: number;
  description: string;
  iconName: string;
}

export interface FeatureOption {
  id: string;
  name: string;
  price: number;
  days: number;
  description: string;
  category: 'core' | 'ai' | 'payments' | 'security';
}

export const projectTypes: ProjectOption[] = [
  {
    id: 'landing',
    name: 'High-Converting Landing Page',
    basePrice: 650,
    baseDays: 5,
    description: 'Bespoke high-speed lead capture with multi-step interactive forms, CRM webhook syncing, and 100/100 Lighthouse performance.',
    iconName: 'Layout'
  },
  {
    id: 'ai_app',
    name: 'AI Web Application / Chatbot',
    basePrice: 1450,
    baseDays: 9,
    description: 'Custom AI platform with real-time token streaming, vector database RAG, document analysis, and multi-model LLM orchestration.',
    iconName: 'Bot'
  },
  {
    id: 'ecommerce',
    name: 'Headless E-Commerce Store',
    basePrice: 1850,
    baseDays: 12,
    description: '0ms optimistic cart, custom Stripe checkout, headless catalog, multi-currency conversion, and lightning fast inventory search.',
    iconName: 'ShoppingBag'
  },
  {
    id: 'saas',
    name: 'Full-Scale MVP / SaaS Platform',
    basePrice: 2600,
    baseDays: 16,
    description: 'Complete multi-tenant SaaS with authentication (OAuth/Passkeys), Stripe subscription tiers, live dashboard, and user role management.',
    iconName: 'Layers'
  }
];

export const featureOptions: FeatureOption[] = [
  {
    id: 'forms_crm',
    name: 'Multi-Step Form & Webhook Automations',
    price: 150,
    days: 1,
    description: 'Sync leads in real-time to Telegram, Slack, Notion, and HubSpot with spam protection.',
    category: 'core'
  },
  {
    id: 'ai_chatbot',
    name: 'Custom AI Streaming Assistant & RAG',
    price: 450,
    days: 3,
    description: 'Trained on your knowledge base with vector embeddings (pgvector) and source citation chips.',
    category: 'ai'
  },
  {
    id: 'stripe_billing',
    name: 'Stripe Subscriptions & Customer Portal',
    price: 350,
    days: 2,
    description: 'Complete billing workflows with trial periods, invoice generation, and tier upgrade/downgrade logic.',
    category: 'payments'
  },
  {
    id: 'user_auth_rbac',
    name: 'Enterprise Auth & Role-Based Permissions',
    price: 300,
    days: 2,
    description: 'Google/GitHub OAuth, Magic Links, 2FA, and granular permissions (Admin, Manager, Member).',
    category: 'security'
  },
  {
    id: 'realtime_dashboards',
    name: 'Real-Time Analytics & SVG Chart Visualizations',
    price: 400,
    days: 2,
    description: 'WebSocket data syncing with interactive time-range filtering and export capabilities.',
    category: 'core'
  },
  {
    id: 'custom_3d_shaders',
    name: 'WebGL 3D Shaders & Framer Physics',
    price: 250,
    days: 1,
    description: 'Cinematic interactive canvas, magnetic buttons, and spotlight gradient cards.',
    category: 'core'
  }
];
