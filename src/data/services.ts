import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'landing-pages',
    title: 'High-Converting Landing Pages & Forms',
    badge: '7-Day Turnaround',
    tagline: 'Precision lead funnels engineered for maximum conversion & speed.',
    description: 'Bespoke landing experiences built with Next.js and Tailwind. Features multi-step questionnaire logic, anti-bot validation, instant CRM webhook delivery, and sub-second load times.',
    metrics: '3.8x Higher Conversion vs Generic Templates',
    deliverables: [
      'Multi-Step Dynamic Form Wizard',
      'Telegram, Slack, Discord & HubSpot Webhooks',
      'Lighthouse 100/100 Core Web Vitals',
      'Zero-Layout Shift Framer Motion Animations',
      'Automated Spam Protection (Turnstile)'
    ],
    techStack: ['Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Resend', 'Cloudflare'],
    gradient: 'from-accent-cyan/20 to-blue-600/10'
  },
  {
    id: 'ai-web-apps',
    title: 'AI-Integrated Web Apps & Chatbots',
    badge: 'Advanced AI Architecture',
    tagline: 'Custom LLM agents, vector embeddings & real-time streaming intelligence.',
    description: 'Transform your business logic with production AI. We build custom RAG pipelines, intelligent chatbots with citation chips, document analysis tools, and automated generative workflows.',
    metrics: '< 150ms Streaming Latency & Vector Retrieval',
    deliverables: [
      'Token-Streaming Markdown Conversational UI',
      'Retrieval-Augmented Generation (RAG) with Vector DBs',
      'Multi-Model Orchestration (OpenAI, Claude, Gemini)',
      'Source Citation Chips & Interactive Code Preview',
      'Token Usage Tracking & Rate-Limiting Engine'
    ],
    techStack: ['Vercel AI SDK', 'OpenAI / Claude', 'Supabase pgvector', 'LangChain', 'TypeScript'],
    gradient: 'from-accent-violet/20 to-pink-600/10'
  },
  {
    id: 'headless-ecommerce',
    title: 'Next-Gen Headless E-Commerce',
    badge: '0ms Optimistic Cart',
    tagline: 'Lightning-fast digital storefronts with custom checkout and instant filtering.',
    description: 'Say goodbye to bloated, laggy Shopify themes. We craft custom headless storefronts that load instantly, handle millions in revenue, and maximize checkout completion rates.',
    metrics: '0.4s Instant Catalog Navigation',
    deliverables: [
      'Headless Shopify / MedusaJS Architecture',
      '0ms Optimistic Drawer Cart & Quick-Add',
      'Custom Stripe & Apple Pay Checkout Integration',
      'Automated Dynamic Multi-Currency & Tax Rates',
      '3D Interactive Product Viewers'
    ],
    techStack: ['Next.js Commerce', 'Medusa / Shopify', 'Stripe API', 'Tailwind CSS', 'Zustand'],
    gradient: 'from-accent-amber/20 to-orange-600/10'
  },
  {
    id: 'saas-platforms',
    title: 'Full-Scale Enterprise SaaS Platforms',
    badge: 'Production-Ready Architecture',
    tagline: 'Complete multi-tenant cloud applications ready to scale to thousands of paying users.',
    description: 'From initial database schema to recurring Stripe subscriptions, we engineer resilient web applications equipped with role-based auth, live analytics dashboards, and automated onboarding.',
    metrics: '99.99% Availability & Edge Scalability',
    deliverables: [
      'Multi-Tenant Architecture with Row-Level Security',
      'OAuth, Magic Links & Passkey Authentication',
      'Stripe Subscription Billing & Metered Usage',
      'Real-Time WebSockets & Collaborative Dashboards',
      'Granular Role-Based Access Control (RBAC)'
    ],
    techStack: ['React 19', 'Next.js 15', 'Supabase / PostgreSQL', 'Prisma / Drizzle', 'Stripe'],
    gradient: 'from-accent-emerald/20 to-teal-600/10'
  }
];
