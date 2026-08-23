import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Architecture & UX Blueprint',
    timeline: 'Days 1 – 3',
    description: 'We meet directly with your team to establish data schemas, user flows, and technical requirements, delivering an interactive prototype.',
    deliverables: ['System Architecture Blueprint', 'Interactive Prototype', 'Scope Agreement'],
    iconName: 'Compass'
  },
  {
    number: '02',
    title: 'High-Velocity Build Sprint',
    timeline: 'Days 4 – 10',
    description: 'Maaz & Suman engineer your full application using Next.js 15, TypeScript, and custom APIs with continuous staging previews.',
    deliverables: ['Live Staging URL', 'Database & API Integration', 'Framer Micro-Interactions'],
    iconName: 'Code2'
  },
  {
    number: '03',
    title: 'QA & Cross-Device Audit',
    timeline: 'Days 11 – 13',
    description: 'Testing across mobile, tablet, laptop, and 4K displays with Lighthouse 98+ performance tuning and spam protection.',
    deliverables: ['Lighthouse 100/100 Audit', 'Cross-Device Verification', 'Turnstile Spam Shield'],
    iconName: 'ShieldCheck'
  },
  {
    number: '04',
    title: 'Production Deploy & Warranty',
    timeline: 'Day 14+',
    description: 'Zero-downtime edge deployment, complete GitHub repository handover, and automatic activation of our 30-day bug warranty.',
    deliverables: ['100% IP & Repo Handover', '30-Day Free Bug Warranty', 'Direct Founder Hotline'],
    iconName: 'Rocket'
  }
];
