export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  metrics: string;
  deliverables: string[];
  techStack: string[];
  gradient: string;
}

export interface CalculatorState {
  projectType: 'landing' | 'ai_app' | 'ecommerce' | 'saas';
  complexity: 'mvp' | 'growth' | 'enterprise';
  features: string[];
  turnaroundTier: 'standard' | 'rush';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'warranty' | 'pricing' | 'process' | 'tech';
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  metric: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string[];
  iconName: string;
}
