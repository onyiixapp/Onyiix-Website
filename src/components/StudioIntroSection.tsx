import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Globe2, ShieldCheck, Zap } from 'lucide-react';
import { siClaude, siFirebase, siMongodb, siNodedotjs, siSupabase, siWordpress } from 'simple-icons';

interface StudioIntroSectionProps {
  onOpenProject: () => void;
}

const quotes = [
  { text: 'Every idea deserves a place in the digital world.', font: "'Kalam', cursive" },
  { text: 'ಪ್ರತಿ ಆಲೋಚನೆಗೂ ಡಿಜಿಟಲ್ ಜಗತ್ತಿನಲ್ಲಿ ಸ್ಥಾನವಿದೆ.', font: "'Baloo Tamma 2', sans-serif" },
  { text: 'हर विचार को डिजिटल दुनिया में जगह मिलनी चाहिए।', font: "'Kalam', cursive" },
  { text: 'Chaque idée mérite sa place dans le monde numérique.', font: "'Kalam', cursive" },
  { text: 'Jede Idee verdient einen Platz in der digitalen Welt.', font: "'Kalam', cursive" },
  { text: 'Cada idea merece un lugar en el mundo digital.', font: "'Kalam', cursive" },
];

const stackMarks = [siClaude, siSupabase, siFirebase, siMongodb, siWordpress, siNodedotjs];

const promises = [
  { Icon: ShieldCheck, title: '100% code ownership', copy: 'Your source, assets and documentation at handover.' },
  { Icon: Zap, title: '30-day bug warranty', copy: 'Launch support is included, clearly and in writing.' },
  { Icon: Globe2, title: 'Built here. Ready anywhere.', copy: 'Founder-led delivery for India and global teams.' },
];

export const StudioIntroSection: React.FC<StudioIntroSectionProps> = ({ onOpenProject }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setQuoteIndex((current) => (current + 1) % quotes.length), 3800);
    return () => window.clearInterval(interval);
  }, []);

  const activeQuote = quotes[quoteIndex];

  return (
    <section aria-labelledby="studio-intro-title" className="relative overflow-hidden bg-[#F4F7FC] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-50" />
      <div aria-hidden="true" className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
            <h2 id="studio-intro-title" className="max-w-5xl text-balance text-[clamp(2.65rem,6.6vw,6.6rem)] font-medium leading-[0.93] tracking-[-0.065em] text-[#0B1020]">
              Digital products<br />with <span className="text-blue-600">real momentum.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
              We turn ambitious ideas into fast websites, SaaS platforms, AI workflows and measurable growth systems—with direct founder access from the first conversation to launch.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={onOpenProject} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1020] px-7 py-4 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-700">
                Discuss your build <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-900 transition hover:border-blue-300 hover:text-blue-700">See delivered work</a>
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.08 }} className="rounded-[2rem] border border-white bg-white/80 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.09)] sm:p-7">
            <div className="flex min-h-24 items-center rounded-[1.4rem] bg-[#0B1020] px-5 py-5 text-white sm:px-6">
              <Globe2 className="mr-4 h-5 w-5 shrink-0 text-blue-400" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.p key={quoteIndex} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.28 }} className="text-lg leading-7" style={{ fontFamily: activeQuote.font }}>
                  {activeQuote.text}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              <div className="intro-tech-mark" title="ChatGPT"><img src="/brands/chatgpt.png" alt="ChatGPT" className="h-7 w-7 object-contain" /></div>
              <div className="intro-tech-mark" title="Google Antigravity"><img src="/brands/antigravity.png" alt="Google Antigravity" className="h-8 w-8 object-contain" /></div>
              {stackMarks.map((mark) => (
                <div key={mark.title} className="intro-tech-mark" title={mark.title}>
                  <svg role="img" aria-label={mark.title} viewBox="0 0 24 24" className="h-6 w-6" style={{ color: `#${mark.hex}` }}><path d={mark.path} fill="currentColor" /></svg>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {promises.map(({ Icon, title, copy }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="flex items-start gap-4 rounded-[1.5rem] border border-white bg-white/75 p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.22)]"><Icon className="h-5 w-5" /></span>
              <div><h3 className="text-sm font-extrabold text-slate-950">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{copy}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
