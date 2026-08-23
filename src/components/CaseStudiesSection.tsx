import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, ShoppingBag, Wrench } from 'lucide-react';

interface CaseStudiesSectionProps { onSelectProject?: (title: string) => void; }

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectProject }) => (
  <section id="projects" className="overflow-hidden bg-[#F3F6FB] px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-blue-700"><ShoppingBag className="h-3.5 w-3.5" /> Selected work</div>
          <h2 className="max-w-4xl text-[clamp(2.2rem,5.4vw,5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#0B1020]">One system, from storefront to operations.</h2>
        </motion.div>
        <p className="max-w-md text-sm leading-7 text-slate-600">A focused look at the interfaces, workflows and operational thinking behind delivered client work.</p>
      </div>

      <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:rounded-[2.5rem]">
        <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex flex-col justify-between bg-[#102D43] p-6 text-white sm:p-9 lg:p-10">
            <div>
              <img src="/projects/primkart-brand.png" alt="Primkart Kitchenware" className="h-auto w-full max-w-[420px] rounded-2xl" loading="lazy" />
              <div className="mt-7 flex flex-wrap gap-2"><span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-300">Live &amp; delivered</span><span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-bold text-white/70"><MapPin className="h-3 w-3" /> Bengaluru, India</span></div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">B2B commerce that keeps the warehouse moving.</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">A responsive kitchenware catalogue and distributor ordering system supported by product management and automated order dispatch.</p>
            </div>
            <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-xs font-semibold text-white/75">
              {['Responsive storefront and product discovery', 'Distributor-ready ordering workflows', 'Operational visibility from the same system'].map((item) => <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-blue-300" />{item}</div>)}
            </div>
          </div>

          <div className="grid gap-3 bg-[#DDEAFF] p-3 sm:gap-4 sm:p-4">
            <figure className="group relative overflow-hidden rounded-[1.4rem] bg-[#071526] sm:rounded-[2rem]">
              <img src="/projects/primkart-storefront.webp" alt="Primkart responsive B2B kitchenware storefront shown on desktop and mobile" className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" loading="lazy" width="1536" height="1024" />
              <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-xl sm:bottom-5 sm:left-5">01 · Storefront experience</figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-[1.4rem] bg-[#071526] sm:rounded-[2rem]">
              <img src="/projects/primkart-operations.webp" alt="Primkart inventory and order operations dashboard" className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" loading="lazy" width="1536" height="1024" />
              <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-xl sm:bottom-5 sm:left-5">02 · Operations layer</figcaption>
            </figure>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <div className="flex flex-wrap gap-2">{['Next.js', 'Commerce UX', 'Order automation', 'Responsive UI'].map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-600">{tag}</span>)}</div>
          <a href="https://primkart.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 hover:text-blue-800">Visit primkart.app <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </motion.article>

      <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 grid gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 shadow-[0_10px_30px_rgba(37,99,235,0.12)]"><Wrench className="h-6 w-6" /></div>
        <div><div className="flex flex-wrap items-center gap-2"><h3 className="text-xl font-extrabold text-slate-950">Workshop Management SaaS</h3><span className="rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-blue-700">In development · France</span></div><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">A multi-tenant platform for job cards, parts, customer updates and workshop operations—designed as one calm control centre.</p></div>
        <button type="button" onClick={() => onSelectProject?.('Workshop Management SaaS')} className="group inline-flex items-center gap-2 rounded-full bg-[#0B1020] px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-700">Discuss a similar build <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></button>
      </motion.article>
    </div>
  </section>
);
