import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Clock, Menu, X } from 'lucide-react';
import { OnyiixLogo } from './OnyiixLogo';

interface SiteHeaderProps {
  onOpenProject: () => void;
}

const navigation = [
  { label: 'Journey', href: '#journey' },
  { label: 'Studio', href: '#studio' },
  { label: 'Work', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Packages', href: '#packages' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onOpenProject }) => {
  const [bengaluruTime, setBengaluruTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => setBengaluruTime(new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false,
    }).format(new Date()));
    updateTime();
    const interval = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 p-3 sm:p-4">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between rounded-[1.3rem] border border-white/90 bg-white/[0.97] px-3 py-2 shadow-[0_18px_55px_rgba(3,7,18,0.18)] sm:px-4">
          <a href="#journey" aria-label="ONYIIX journey" className="group flex items-center">
            <OnyiixLogo height={32} />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 xl:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full px-4 py-2 text-xs font-bold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-2 text-[11px] font-bold text-slate-600">
              <Clock className="h-3.5 w-3.5 text-blue-600" /> {bengaluruTime || '--:--'} IST
            </div>
            <button type="button" onClick={onOpenProject} className="flex items-center gap-1.5 rounded-full bg-[#0B1020] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700">
              Start a project <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <button type="button" onClick={onOpenProject} className="rounded-full bg-[#0B1020] px-3 py-2 text-[11px] font-bold text-white">Inquire</button>
            <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} aria-expanded={mobileMenuOpen} aria-label="Toggle navigation" className="rounded-full border border-slate-200 bg-white p-2 text-slate-950">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="fixed inset-0 z-[60] flex items-end p-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button type="button" aria-label="Close navigation" onClick={() => setMobileMenuOpen(false)} className="absolute inset-0 bg-slate-950/60" />
            <motion.div initial={{ y: 52 }} animate={{ y: 0 }} exit={{ y: 52 }} transition={{ type: 'spring', stiffness: 320, damping: 31 }} className="relative w-full rounded-[2rem] bg-white p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between"><OnyiixLogo height={30} /><button type="button" onClick={() => setMobileMenuOpen(false)} className="rounded-full bg-slate-100 p-2"><X className="h-4 w-4" /></button></div>
              <nav className="grid grid-cols-2 gap-2">
                {navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900">{item.label}</a>)}
              </nav>
              <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenProject(); }} className="mt-4 flex w-full items-center justify-between rounded-full bg-blue-600 px-5 py-3.5 text-sm font-bold text-white">Build with us <ArrowRight className="h-4 w-4" /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
