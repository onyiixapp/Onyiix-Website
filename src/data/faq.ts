import { FaqItem } from '../types';

export const faqData: FaqItem[] = [
  {
    category: 'warranty',
    question: 'How does the 30-Day Zero-Cost Bug Warranty work?',
    answer: 'Every project includes an unconditional 30-day post-launch warranty. If any UI layout bug, responsive anomaly, or API connection issue is identified, Maaz & Suman fix it immediately at zero cost. No retainers, no hidden fees.'
  },
  {
    category: 'process',
    question: 'Why focus strictly on web applications rather than native mobile apps?',
    answer: 'Modern web standards (Next.js 15, PWAs, Edge caching) provide sub-second speed, 100% responsive precision across iPhones, iPads, Androids, and desktops, zero App Store 30% revenue taxes, and instant zero-downtime deployments.'
  },
  {
    category: 'pricing',
    question: 'How are your rates lower than traditional agencies?',
    answer: 'Traditional agencies charge $25k–$60k+ to cover account managers and office overhead. At Veltrix, you work directly with founding engineers Maaz & Suman. You pay purely for focused senior engineering hours.'
  },
  {
    category: 'tech',
    question: 'Do we own 100% of the code and intellectual property?',
    answer: 'Yes, 100%. Upon completion and final milestone approval, full GitHub repository ownership, schemas, API keys, and deployment configurations are transferred directly to your team with documentation.'
  },
  {
    category: 'process',
    question: 'What is the standard project turnaround timeline?',
    answer: 'Landing pages and lead funnels are delivered in 5–7 days. AI applications and custom e-commerce stores take 10–14 days. Enterprise SaaS platforms take 14–21 days. Express rush sprints are also available.'
  },
  {
    category: 'tech',
    question: 'How do you guarantee sub-second load times and 99+ Core Web Vitals?',
    answer: 'We build with Next.js 15 Server Components, Tailwind CSS zero-runtime styling, edge CDN caching, and GPU-accelerated micro-animations to achieve sub-second TTFB globally.'
  }
];
