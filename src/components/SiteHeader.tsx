import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Clock, Menu, X, ChevronDown } from 'lucide-react';
import { OnyiixLogo } from './OnyiixLogo';

interface SiteHeaderProps {
  onOpenProject: () => void;
}

type NavItem = {
  label: string;
  href?: string;
  sectionId?: string;
  dropdown?: { label: string; href: string }[];
};

const navigation: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/#projects', sectionId: 'projects' },
  { label: 'Packages', href: '/#packages', sectionId: 'packages' },
  {
    label: 'Services',
    dropdown: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'SaaS Platforms', href: '/services/saas-platforms' },
      { label: 'AI Workflows', href: '/services/ai-workflows' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Digital Systems', href: '/services/digital-systems' },
    ],
  },
  { label: 'FAQs', href: '/#faqs', sectionId: 'faqs' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
];

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onOpenProject }) => {
  const [bengaluruTime, setBengaluruTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const updateTime = () => setBengaluruTime(new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false,
    }).format(new Date()));
    updateTime();
    const interval = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sectionIds = navigation.flatMap(n => n.sectionId ? [n.sectionId] : []);
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getLinkClass = (sectionId?: string) => {
    const isActive = sectionId && activeSection === sectionId;
    const base = 'rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300';
    if (scrolled) {
      return `${base} ${isActive ? 'bg-[#2563EB] text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`;
    }
    return `${base} ${isActive ? 'bg-[#2563EB] text-white' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'}`;
  };

  const getDropdownBtnClass = () => {
    const base = 'flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300';
    if (scrolled) return `${base} text-white/80 hover:bg-white/10 hover:text-white`;
    return `${base} text-slate-600 hover:bg-blue-50 hover:text-blue-700`;
  };

  return (
    <>
      {/*
        Single pill that is ALWAYS centered.
        We use CSS transition on max-width to smoothly morph size,
        and framer-motion animate only for bg/border/shadow colors.
        No layout animation = no left-flash.
      */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center p-3 sm:p-4 pointer-events-none">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: scrolled ? 'rgba(11,16,32,0.96)' : 'rgba(255,255,255,0.97)',
            borderColor: scrolled ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.90)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.38)'
              : '0 18px 55px rgba(3,7,18,0.18)',
          }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          style={{
            maxWidth: scrolled ? 'fit-content' : '1440px',
            borderRadius: scrolled ? '9999px' : '1.3rem',
            transition: 'max-width 0.4s cubic-bezier(0.22,1,0.36,1), border-radius 0.4s cubic-bezier(0.22,1,0.36,1), padding 0.4s cubic-bezier(0.22,1,0.36,1)',
            padding: scrolled ? '6px 8px' : undefined,
          }}
          className={`pointer-events-auto border flex items-center w-full ${scrolled ? '' : 'justify-between px-3 py-2 sm:px-4'}`}
        >

          {/* Logo — slides out when collapsed */}
          <div
            className="shrink-0 overflow-hidden xl:block hidden"
            style={{
              maxWidth: scrolled ? '0px' : '200px',
              opacity: scrolled ? 0 : 1,
              transition: 'max-width 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease',
              marginRight: scrolled ? '0' : '8px',
            }}
          >
            <a href="/" aria-label="ONYIIX home" className="flex items-center whitespace-nowrap">
              <OnyiixLogo height={32} />
            </a>
          </div>

          {/* Desktop Nav — always visible */}
          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 xl:flex">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="group relative">
                  <button className={getDropdownBtnClass()}>
                    {item.label}
                    <ChevronDown className="h-3 w-3 opacity-60 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <div className="flex w-48 flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl">
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.label}
                          href={dropItem.href}
                          className="rounded-xl px-3 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-blue-600"
                        >
                          {dropItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={item.label} href={item.href} className={getLinkClass(item.sectionId)}>
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Right side — clock + CTA slides out, replaced by inline CTA */}
          <div className="hidden xl:flex items-center shrink-0">
            {/* Clock — fades out */}
            <div
              className="overflow-hidden"
              style={{
                maxWidth: scrolled ? '0px' : '150px',
                opacity: scrolled ? 0 : 1,
                transition: 'max-width 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease',
                marginRight: scrolled ? '0' : '12px',
              }}
            >
              <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-2 text-[11px] font-bold text-slate-600 whitespace-nowrap">
                <Clock className="h-3.5 w-3.5 text-blue-600" />
                {bengaluruTime || '--:--'} IST
              </div>
            </div>

            {/* Divider — visible only when scrolled */}
            <div
              style={{
                width: scrolled ? '1px' : '0px',
                height: '16px',
                opacity: scrolled ? 1 : 0,
                transition: 'all 0.3s ease',
                marginLeft: scrolled ? '8px' : '0',
                marginRight: scrolled ? '8px' : '0',
              }}
              className="bg-white/20"
            />

            {/* CTA button — always visible, adapts style */}
            <button
              type="button"
              onClick={onOpenProject}
              className={`flex items-center gap-1.5 rounded-full px-4 text-xs font-bold text-white transition-all duration-300 ${
                scrolled
                  ? 'bg-white/15 py-2 hover:bg-[#2563EB]'
                  : 'bg-[#0B1020] py-2.5 hover:bg-[#2563EB]'
              }`}
            >
              Start a project <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={onOpenProject}
              className={`rounded-full font-bold text-white transition-all duration-300 ${
                scrolled
                  ? 'px-3 py-1.5 text-[11px] bg-white/15 hover:bg-[#2563EB]'
                  : 'px-3 py-2 text-[11px] bg-[#0B1020]'
              }`}
            >
              Inquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(o => !o)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
              className={`rounded-full border p-2 transition-all duration-300 ${
                scrolled
                  ? 'border-white/20 bg-white/10 text-white'
                  : 'border-slate-200 bg-white text-slate-950'
              }`}
            >
              {mobileMenuOpen
                ? <X className={scrolled ? 'h-4 w-4' : 'h-5 w-5'} />
                : <Menu className={scrolled ? 'h-4 w-4' : 'h-5 w-5'} />
              }
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-950/60"
            />
            <motion.div
              initial={{ y: 52 }}
              animate={{ y: 0 }}
              exit={{ y: 52 }}
              transition={{ type: 'spring', stiffness: 320, damping: 31 }}
              className="relative w-full rounded-[2rem] bg-white p-6 shadow-2xl"
            >
              <div className="mb-5 flex items-center justify-between">
                <OnyiixLogo height={30} />
                <button type="button" onClick={() => setMobileMenuOpen(false)} className="rounded-full bg-slate-100 p-2">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-2">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-3 text-sm font-bold text-slate-900">{item.label}</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                        {item.dropdown.map((drop) => (
                          <a
                            key={drop.label}
                            href={drop.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
                          >
                            {drop.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-bold ${activeSection === item.sectionId ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-900'}`}
                    >
                      {item.label}
                    </a>
                  )
                )}
              </nav>
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); onOpenProject(); }}
                className="mt-4 flex w-full items-center justify-between rounded-full bg-[#0B1020] px-5 py-3.5 text-sm font-bold text-white"
              >
                Start a project <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
