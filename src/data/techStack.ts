export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'infra';
  description: string;
  badge: string;
}

export const techStackData: TechItem[] = [
  {
    name: 'Next.js 15',
    category: 'frontend',
    description: 'Server Components, Turbopack, App Router & Server Actions.',
    badge: 'Core Framework'
  },
  {
    name: 'React 19',
    category: 'frontend',
    description: 'Concurrent rendering, optimistic state updates & React Actions.',
    badge: 'UI Engine'
  },
  {
    name: 'TypeScript 5',
    category: 'frontend',
    description: 'Strict type safety end-to-end, zero runtime type errors.',
    badge: 'Type System'
  },
  {
    name: 'Tailwind CSS v4',
    category: 'frontend',
    description: 'Zero-runtime CSS with custom dark luxury glassmorphism tokens.',
    badge: 'Styling'
  },
  {
    name: 'Framer Motion',
    category: 'frontend',
    description: 'Spring physics, layout animations & smooth scroll choreography.',
    badge: 'Animation'
  },
  {
    name: 'Supabase / PostgreSQL',
    category: 'backend',
    description: 'Relational database with Row Level Security and real-time sockets.',
    badge: 'Database'
  },
  {
    name: 'pgvector & LangChain',
    category: 'ai',
    description: 'Vector search, document retrieval and custom LLM workflows.',
    badge: 'AI & RAG'
  },
  {
    name: 'Stripe API & Billing',
    category: 'backend',
    description: 'Custom checkout, tiered subscription plans, and customer portals.',
    badge: 'Monetization'
  },
  {
    name: 'Resend & Webhooks',
    category: 'backend',
    description: 'Transactional email delivery & Telegram/Slack instant lead routing.',
    badge: 'Integrations'
  },
  {
    name: 'Cloudflare & Vercel Edge',
    category: 'infra',
    description: 'Sub-50ms TTFB worldwide with Turnstile anti-spam protection.',
    badge: 'Edge Hosting'
  }
];

export const clientMetrics = [
  { label: 'Average Load Time', value: '< 0.8s', note: '100% Core Web Vitals' },
  { label: 'Free Bug Warranty', value: '30 Days', note: 'Zero-Cost Post-Launch' },
  { label: 'Typical Delivery', value: '7–14 Days', note: 'Rapid Agile Sprints' },
  { label: 'Screen Support', value: '100%', note: 'Mobile, iPad, 4K Displays' },
];
