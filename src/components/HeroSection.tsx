import React, { useState, useEffect } from 'react';
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';
import { Clock, ArrowRight, Menu, X, ArrowUpRight, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenProject: () => void;
}

const CYCLING_WORDS = [
  'Websites',
  'SaaS Platforms',
  'AI Automations',
  'Digital Systems',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenProject }) => {
  const [bengaluruTime, setBengaluruTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  // Live Bengaluru Clock
  useEffect(() => {
    const updateTime = () => {
      const timeString = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date());
      setBengaluruTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Smooth rotating word timer
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[96vh] relative bg-white flex flex-col justify-between overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* FULL-SCREEN SHADER BACKGROUND OVERLAY */}
      <div className="absolute inset-0 z-10 pointer-events-none w-full h-full opacity-90">
        <Shader className="w-full h-full">
          <Swirl colorA="#ffffff" colorB="#f8f8f8" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#dc2626"
            leftColor="#dc2626"
            rightColor="#dc2626"
            upColor="#dc2626"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.04} />
        </Shader>
      </div>

      {/* FLOATING PILL NAVBAR (z-40, fixed) */}
      <header className="fixed top-0 left-0 right-0 z-40 p-3 sm:p-4 pointer-events-none">
        <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between pointer-events-auto">
          {/* LEFT: Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-extrabold text-xs shadow-md group-hover:scale-105 transition-transform">
                AS
              </div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-neutral-950">
                ASME
              </span>
            </a>
          </div>

          {/* CENTER: Floating Pill Navigation (md+) */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-1 rounded-full p-1.5 shadow-lg bg-white/95 backdrop-blur-md border border-neutral-200/80">
              {[
                { label: 'Work', href: '#projects' },
                { label: 'Services', href: '#services' },
                { label: 'Selector', href: '#selector' },
                { label: 'Process', href: '#process' },
                { label: 'Packages', href: '#packages' },
                { label: 'FAQs', href: '#faqs' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs sm:text-sm font-semibold transition-colors px-4 sm:px-5 py-2 rounded-full text-neutral-800 hover:text-red-600 hover:bg-neutral-50"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT: Live Clock + Social Links + Inquire Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-neutral-200/80 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-red-600" />
              <span>{bengaluruTime ? `${bengaluruTime} IST` : 'Bengaluru'}</span>
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xs font-bold text-neutral-800 hover:text-red-600 transition-colors uppercase tracking-wider"
              href="https://linkedin.com/in/mohammed-maaz-a-0aa730217/"
            >
              Ln
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio"
              className="text-xs font-bold text-neutral-800 hover:text-red-600 transition-colors uppercase tracking-wider"
              href="https://maazprofile.tech"
            >
              Pf
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="bg-neutral-950 text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-red-600 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MOBILE TOGGLE (md:hidden) */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="bg-neutral-950 text-white text-xs font-bold px-3 py-1.5 rounded-full"
            >
              Inquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-white text-neutral-950 rounded-full p-2 border border-neutral-200 shadow-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="relative z-10 bg-white rounded-3xl mx-3 mb-3 p-6 sm:p-8 flex flex-col gap-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 bg-neutral-100 px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-red-600" />
                  <span>{bengaluruTime ? `${bengaluruTime} Bengaluru` : 'Bengaluru'}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-neutral-100 text-neutral-900"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-3 py-2 text-2xl font-bold text-neutral-900">
                {[
                  { label: 'Work', href: '#projects' },
                  { label: 'Services', href: '#services' },
                  { label: 'Selector', href: '#selector' },
                  { label: 'Process', href: '#process' },
                  { label: 'Packages', href: '#packages' },
                  { label: 'FAQs', href: '#faqs' },
                  { label: 'Contact', href: '#contact' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-red-600 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProject();
                }}
                className="w-full bg-red-600 text-white text-sm font-bold rounded-full py-3.5 px-6 flex items-center justify-between group shadow-md"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* HERO MAIN CONTENT */}
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex-1 flex flex-col justify-center items-center">
        {/* Micro-Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-neutral-800 mb-6 sm:mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <span>Boutique Software Engineering • Bengaluru, India</span>
        </motion.div>

        {/* Polished, Crisp, Non-Overlapping Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Top Line */}
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-950 leading-tight">
            Your Data-Driven
          </span>

          {/* Middle Line: ASME Badge + Animated Cycling Word */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 my-2 sm:my-3">
            <span className="bg-red-600 text-white px-3 sm:px-5 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black shadow-md tracking-tight">
              ASME
            </span>

            {/* Clean, Visible Rotating Word Container */}
            <div className="relative h-10 sm:h-14 md:h-16 lg:h-20 min-w-[200px] sm:min-w-[340px] md:min-w-[420px] flex items-center justify-center sm:justify-start overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -35, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-neutral-950 tracking-tight whitespace-nowrap"
                >
                  {CYCLING_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Line */}
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-950 leading-tight">
            Transformation partner
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl mx-auto font-medium"
        >
          A creative software engineering studio that designs and develops high-converting, functional, and user-centric digital experiences with <strong>1-Month Free Maintenance</strong>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          {/* Get In Touch Pill Button */}
          <button
            type="button"
            onClick={onOpenProject}
            className="w-full sm:w-auto bg-neutral-950 hover:bg-red-600 text-white text-sm sm:text-base font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer group hover:scale-105 active:scale-95"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="#projects"
            className="w-full sm:w-auto bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm sm:text-base font-bold px-7 py-4 rounded-full transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Explore Case Studies</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-neutral-600"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            <span>30-Day Zero-Cost Warranty</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-red-600" />
            <span>1-Month Free Maintenance</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-1.5">
            <Globe2 className="w-4 h-4 text-red-600" />
            <span>100% Full Code Ownership</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
