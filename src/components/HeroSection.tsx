import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Clock, Globe2, Menu, ShieldCheck, X, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { siClaude, siFirebase, siMongodb, siNodedotjs, siSupabase, siWordpress } from 'simple-icons';
import { AsmeLogo } from './AsmeLogo';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenProject: () => void;
}

const CYCLING_WORDS = ['websites', 'SaaS platforms', 'AI workflows', 'growth engines', 'digital systems'];
const GLOBAL_QUOTES = [
  { language: 'EN', text: 'Every idea deserves a place in the digital world.', font: "'Kalam', cursive" },
  { language: 'KN', text: 'ಪ್ರತಿ ಆಲೋಚನೆಗೂ ಡಿಜಿಟಲ್ ಜಗತ್ತಿನಲ್ಲಿ ಸ್ಥಾನವಿದೆ.', font: "'Baloo Tamma 2', sans-serif" },
  { language: 'HI', text: 'हर विचार को डिजिटल दुनिया में जगह मिलनी चाहिए।', font: "'Kalam', cursive" },
  { language: 'FR', text: 'Chaque idée mérite sa place dans le monde numérique.', font: "'Kalam', cursive" },
  { language: 'DE', text: 'Jede Idee verdient einen Platz in der digitalen Welt.', font: "'Kalam', cursive" },
  { language: 'ES', text: 'Cada idea merece un lugar en el mundo digital.', font: "'Kalam', cursive" },
];
const STACK_MARKS = [siClaude, siSupabase, siFirebase, siMongodb, siWordpress, siNodedotjs];
const NAVIGATION = [
  { label: 'Journey', href: '#journey' },
  { label: 'Studio', href: '#studio' },
  { label: 'Work', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Packages', href: '#packages' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenProject }) => {
  const [bengaluruTime, setBengaluruTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    const updateTime = () => setBengaluruTime(new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false,
    }).format(new Date()));
    updateTime();
    const interval = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setWordIndex((current) => (current + 1) % CYCLING_WORDS.length), 2200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const quote = GLOBAL_QUOTES[quoteIndex].text;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVisibleCharacters(quote.length);
      const reducedMotionTimer = window.setTimeout(() => {
        setQuoteIndex((current) => (current + 1) % GLOBAL_QUOTES.length);
        setVisibleCharacters(0);
      }, 3600);
      return () => window.clearTimeout(reducedMotionTimer);
    }

    const timer = window.setTimeout(() => {
      if (visibleCharacters < quote.length) {
        setVisibleCharacters((current) => current + 1);
      } else {
        setQuoteIndex((current) => (current + 1) % GLOBAL_QUOTES.length);
        setVisibleCharacters(0);
      }
    }, visibleCharacters < quote.length ? 32 : 1900);

    return () => window.clearTimeout(timer);
  }, [quoteIndex, visibleCharacters]);

  const activeQuote = GLOBAL_QUOTES[quoteIndex];

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#F8FAFF] px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-36">
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-55" />
      <div aria-hidden="true" className="hero-orb hero-orb--one" />
      <div aria-hidden="true" className="hero-orb hero-orb--two" />
      <div aria-hidden="true" className="absolute left-[8%] top-[22%] h-px w-[28vw] bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />

      <header className="fixed inset-x-0 top-0 z-50 p-3 sm:p-4">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between rounded-[1.3rem] border border-white/70 bg-white/[0.88] px-3 py-2 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-4">
          <a href="#home" aria-label="Meyvaro Studio home" className="group flex items-center">
            <AsmeLogo symbolSize={34} />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 xl:flex">
            {NAVIGATION.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full px-4 py-2 text-xs font-bold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-2 text-[11px] font-bold text-slate-600">
              <Clock className="h-3.5 w-3.5 text-blue-600" />
              {bengaluruTime || '--:--'} IST
            </div>
            <button type="button" onClick={onOpenBooking} className="flex items-center gap-1.5 rounded-full bg-[#0B1020] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700">
              Start a project <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <button type="button" onClick={onOpenBooking} className="rounded-full bg-[#0B1020] px-3 py-2 text-[11px] font-bold text-white">Inquire</button>
            <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} aria-expanded={mobileMenuOpen} aria-label="Toggle navigation" className="rounded-full border border-slate-200 bg-white p-2 text-slate-950">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="fixed inset-0 z-[60] flex items-end p-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button type="button" aria-label="Close navigation" onClick={() => setMobileMenuOpen(false)} className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm" />
            <motion.div initial={{ y: 60 }} animate={{ y: 0 }} exit={{ y: 60 }} transition={{ type: 'spring', stiffness: 310, damping: 30 }} className="relative w-full rounded-[2rem] bg-white p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between"><AsmeLogo symbolSize={34} /><button type="button" onClick={() => setMobileMenuOpen(false)} className="rounded-full bg-slate-100 p-2"><X className="h-4 w-4" /></button></div>
              <nav className="grid grid-cols-2 gap-2">
                {NAVIGATION.map((item) => <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900">{item.label}</a>)}
              </nav>
              <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenProject(); }} className="mt-4 flex w-full items-center justify-between rounded-full bg-blue-600 px-5 py-3.5 text-sm font-bold text-white">Build with us <ArrowRight className="h-4 w-4" /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-6 flex min-h-12 w-full max-w-2xl items-center justify-center rounded-2xl border border-blue-200/80 bg-white/75 px-4 py-2.5 text-slate-700 shadow-sm backdrop-blur-xl sm:rounded-full"
          aria-label={`${activeQuote.language}: ${activeQuote.text}`}
        >
          <span className="text-balance text-lg font-normal leading-6 sm:text-xl" style={{ fontFamily: activeQuote.font }} aria-hidden="true">
            {activeQuote.text.slice(0, visibleCharacters)}
            <span className="ml-0.5 inline-block h-[1em] w-px animate-pulse bg-blue-600 align-[-0.1em]" />
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="max-w-6xl text-balance text-[clamp(2.8rem,7.8vw,7.8rem)] font-black leading-[0.91] tracking-[-0.065em] text-[#0B1020]">
          We build{' '}
          <span className="relative inline-grid min-w-[6.2em] overflow-hidden align-bottom text-blue-600">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={CYCLING_WORDS[wordIndex]} initial={{ y: '82%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '-82%', opacity: 0 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} className="col-start-1 row-start-1 whitespace-nowrap">
                {CYCLING_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>{' '}
          <br />that move business.
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-7 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
          Meyvaro Studio turns ambitious ideas into fast, search-ready digital products and measurable growth experiences—with direct founder access and full code ownership.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }} className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <button type="button" onClick={onOpenProject} className="group flex items-center justify-center gap-2 rounded-full bg-[#0B1020] px-7 py-4 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-700">
            Discuss your build <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a href="#journey" className="flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-4 text-sm font-bold text-slate-900 backdrop-blur-xl transition hover:border-blue-300 hover:text-blue-700">
            Drive the service line <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 gap-2 sm:grid-cols-3">
        {[
          { Icon: ShieldCheck, title: '100% code ownership' },
          { Icon: Zap, title: '30-day bug warranty' },
          { Icon: Globe2, title: 'India + global delivery' },
        ].map(({ Icon, title }) => (
          <div key={title} className="flex items-center justify-center gap-2 rounded-2xl border border-white/80 bg-white/60 px-4 py-3 text-[11px] font-bold text-slate-600 shadow-sm backdrop-blur-lg">
            <Icon className="h-4 w-4 text-blue-600" /> {title}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.42 }}
        className="relative z-10 mx-auto mt-3 w-full max-w-2xl"
      >
        <p className="mb-2 text-center text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Selected tools we build with</p>
        <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-8 sm:gap-2">
          <div className="tech-mark" title="ChatGPT">
            <img src="/brands/chatgpt.png" alt="ChatGPT" className="h-6 w-6 object-contain" />
          </div>
          <div className="tech-mark" title="Google Antigravity">
            <img src="/brands/antigravity.png" alt="Google Antigravity" className="h-7 w-7 object-contain" />
          </div>
          {STACK_MARKS.map((mark) => (
            <div key={mark.title} className="tech-mark" title={mark.title}>
              <svg role="img" aria-label={`${mark.title} logo`} viewBox="0 0 24 24" className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" style={{ color: `#${mark.hex}` }}>
                <path d={mark.path} fill="currentColor" />
              </svg>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
