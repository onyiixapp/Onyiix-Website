import React from 'react';
import { Building2, CheckCircle2, Megaphone, Quote, Store } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Usama',
    role: 'Owner, Primkart',
    context: 'Retail & distribution · Bengaluru',
    project: 'Commerce platform',
    quote: 'Meyvaro understood how our retail and distribution business works and turned the idea I imagined into a product we can actually use.',
    Icon: Store,
  },
  {
    name: 'Roohi Fida A',
    role: 'Founder, DigitalClink',
    context: 'Marketing & digital services',
    project: 'Marketing website',
    quote: 'Working with Meyvaro was smooth and thoughtful. They took our marketing website to the next level and made the brand feel much stronger online.',
    Icon: Megaphone,
  },
  {
    name: 'Khaisar',
    role: 'Head, KH Porta Cabin',
    context: 'Aluminium manufacturing · Bengaluru',
    project: 'Business Management System',
    quote: 'The BMS is very easy to use and user-friendly. It fits especially well on the iPad screen, which makes daily work much more convenient for our team.',
    Icon: Building2,
  },
];

export const TestimonialsSection: React.FC = () => (
  <section id="testimonials" aria-labelledby="client-words-title" className="scroll-mt-24 overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
    <div className="mx-auto max-w-[1280px]">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="mb-10 flex max-w-5xl flex-col justify-between gap-7 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-700">Client words</p>
        <h2 id="client-words-title" className="mt-3 text-[clamp(2.3rem,5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#0B1020]">
          The work should feel useful<br className="hidden sm:block" /> after the launch.
        </h2>
        </div>
        <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-800">
          <CheckCircle2 className="h-4 w-4" /> Delivered work · real feedback
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map(({ name, role, context, project, quote, Icon }, index) => (
          <motion.figure
            key={name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="group relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,#F8FAFF_0%,#EFF6FF_100%)] p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_26px_70px_rgba(15,23,42,0.09)] sm:p-8"
          >
            <div aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(191,219,254,0.72)_0%,rgba(219,234,254,0)_72%)] opacity-80 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_12px_30px_rgba(37,99,235,0.22)]"><Quote className="h-5 w-5" /></span>
                <span className="rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700">{project}</span>
              </div>
              <blockquote className="mt-7 text-lg font-semibold leading-8 tracking-[-0.02em] text-slate-900">&ldquo;{quote}&rdquo;</blockquote>
            </div>
            <figcaption className="relative mt-8 flex items-center gap-3 border-t border-slate-200/80 pt-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-sm"><Icon className="h-5 w-5" /></span>
              <span><strong className="block text-sm text-slate-950">{name}</strong><span className="mt-0.5 block text-xs font-medium text-slate-500">{role} · {context}</span></span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
