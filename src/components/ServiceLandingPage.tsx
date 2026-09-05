import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Gauge, Search, ShieldCheck, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ServiceLandingData {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  promise: string;
  outcomes: readonly string[];
  deliverables: readonly string[];
  idealFor: readonly string[];
}

export const SERVICE_LANDING_PAGES: Record<string, ServiceLandingData> = {
  '/services/web-development': {
    slug: 'web-development', eyebrow: 'Web development', title: 'Fast websites built to earn attention and action.',
    intro: 'Conversion-focused websites for ambitious businesses that need credibility, search visibility and a clear path from visit to inquiry.',
    promise: 'A responsive, maintainable website with a technical SEO foundation, analytics and full code ownership.',
    outcomes: ['Clearer positioning', 'Faster mobile experience', 'Search-ready structure'],
    deliverables: ['UX and conversion architecture', 'Responsive UI engineering', 'CMS or lead capture', 'Technical SEO and schema', 'Analytics and event setup', 'Launch QA and handover'],
    idealFor: ['Service businesses', 'Retail and commerce teams', 'Funded startups', 'Brands replacing an outdated website'],
  },
  '/services/saas-platforms': {
    slug: 'saas-platforms', eyebrow: 'SaaS platforms', title: 'SaaS products designed for the real operating day.',
    intro: 'Multi-tenant software with thoughtful roles, reliable data flows and product experiences that remain understandable as the platform grows.',
    promise: 'A phased product build with visible milestones, maintainable architecture and production-ready foundations.',
    outcomes: ['Faster validation', 'Clear product workflows', 'Architecture ready to scale'],
    deliverables: ['Product discovery sprint', 'User roles and permissions', 'Dashboards and workflows', 'Billing-ready architecture', 'Database and API design', 'Production deployment and documentation'],
    idealFor: ['Founders validating a product', 'Operations teams productising workflows', 'Vertical SaaS businesses', 'Teams rebuilding fragile internal tools'],
  },
  '/services/ai-workflows': {
    slug: 'ai-workflows', eyebrow: 'AI workflows', title: 'Practical AI automation with people still in control.',
    intro: 'Connected workflows and AI-assisted tools that reduce repetitive work, move information safely and preserve human review where it matters.',
    promise: 'A useful automation layer tied to a measurable process—not a disconnected AI demo.',
    outcomes: ['Less manual repetition', 'Faster information flow', 'Visible human oversight'],
    deliverables: ['Workflow and risk mapping', 'AI-assisted interfaces', 'Tool and API integrations', 'Prompt and retrieval design', 'Human approval controls', 'Monitoring and handover'],
    idealFor: ['Support and operations teams', 'Content-heavy workflows', 'Internal knowledge systems', 'Businesses connecting repetitive tools'],
  },
  '/services/digital-marketing': {
    slug: 'digital-marketing', eyebrow: 'Digital marketing & SEO', title: 'Digital growth built on measurement, not noise.',
    intro: 'Technical SEO, campaign-ready landing pages, analytics and conversion journeys designed as one connected growth system.',
    promise: 'A measurable marketing foundation that makes traffic easier to understand and every important action easier to track.',
    outcomes: ['Stronger search foundations', 'Clearer conversion journeys', 'Reliable campaign measurement'],
    deliverables: ['Technical SEO audit', 'Content and search architecture', 'Conversion landing pages', 'Analytics and event tracking', 'Campaign attribution setup', 'Monthly insight framework'],
    idealFor: ['Brands preparing to run campaigns', 'Businesses with unclear analytics', 'Teams improving organic discovery', 'Marketing sites that are not converting'],
  },
  '/services/digital-systems': {
    slug: 'digital-systems', eyebrow: 'Digital systems', title: 'Internal systems that make operations feel lighter.',
    intro: 'Dashboards, portals and connected business tools that replace scattered spreadsheets and unclear operational handoffs.',
    promise: 'One dependable operating layer shaped around your team, data and decision-making rhythm.',
    outcomes: ['One source of truth', 'Fewer manual handoffs', 'Clearer operational decisions'],
    deliverables: ['Operations discovery', 'Dashboard and portal UX', 'Roles and secure access', 'Data and tool integrations', 'Reporting and notifications', 'Deployment and team onboarding'],
    idealFor: ['Growing operations teams', 'Retail and distribution businesses', 'Multi-location services', 'Teams outgrowing spreadsheets'],
  },
};

interface ServiceLandingPageProps {
  data: ServiceLandingData;
  onBack: () => void;
  onOpenProject: () => void;
}

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({ data, onBack, onOpenProject }) => (
  <main className="min-h-screen bg-[#F5F8FD] pt-28 text-slate-950">
    <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <button
          type="button"
          onClick={onBack}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 hover:bg-slate-50 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Studio</span>
        </button>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div><p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-700">{data.eyebrow}</p><h1 className="mt-4 max-w-5xl text-[clamp(3rem,7vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.065em]">{data.title}</h1></div>
          <div className="lg:pb-2"><p className="text-base font-semibold leading-8 text-slate-700">{data.intro}</p><button type="button" onClick={onOpenProject} className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_16px_36px_rgba(37,99,235,0.24)] transition hover:bg-blue-700">Discuss this service <ArrowRight className="h-4 w-4" /></button></div>
        </motion.div>

        <div className="mt-14 grid gap-3 md:grid-cols-3">{data.outcomes.map((outcome, index) => <motion.div key={outcome} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.06 }} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"><span className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">{index === 0 ? <Search className="h-4 w-4" /> : index === 1 ? <Gauge className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />}</span><p className="text-sm font-extrabold">{outcome}</p></motion.div>)}</div>
      </div>
    </section>

    <section className="bg-[#0B1020] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:gap-20">
        <div><p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-300">What the engagement includes</p><h2 className="mt-4 text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-[0.96] tracking-[-0.055em]">A clear scope.<br />A useful outcome.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/60">{data.promise}</p></div>
        <div className="grid gap-3 sm:grid-cols-2">{data.deliverables.map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm font-semibold text-white/75"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />{item}</div>)}</div>
      </div>
    </section>

    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-10 rounded-[2rem] border border-slate-200 bg-[#F7FAFF] p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm"><ShieldCheck className="h-5 w-5" /></span><h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">A strong fit for teams ready to move.</h2></div>
        <div className="space-y-3">{data.idealFor.map((item) => <p key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-blue-600" />{item}</p>)}<button type="button" onClick={onOpenProject} className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700">Start with a short brief <ArrowRight className="h-4 w-4" /></button></div>
      </div>
    </section>
  </main>
);
