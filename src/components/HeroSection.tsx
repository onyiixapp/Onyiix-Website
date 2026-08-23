import React, { useState, useEffect } from 'react';
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';
import { Clock, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenProject }) => {
  const [bengaluruTime, setBengaluruTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <section className="min-h-screen relative bg-[#EFEFEF] flex flex-col justify-between overflow-hidden">
      {/* SECTION 1 SHADER BACKGROUND OVERLAY */}
      <div className="absolute inset-0 z-10 pointer-events-none w-full h-full">
        <Shader className="w-full h-full">
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
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
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* NAVIGATION (z-20, relative) */}
      <div className="max-w-[1440px] w-full mx-auto p-2 sm:p-3 relative z-20">
        <nav className="bg-white rounded-full p-[5px] flex items-center justify-between shadow-sm">
          {/* LEFT: Logo + Nav Links */}
          <div className="flex items-center">
            {/* Dark Circle Logo "AS" */}
            <a
              href="/"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[10px] sm:text-[11px] font-bold tracking-tight text-white">
                AS
              </span>
            </a>

            {/* Nav Links (hidden on mobile, shown md+) */}
            <div className="hidden md:flex items-center gap-6 ml-4 sm:ml-6">
              {[
                { label: 'Projects', href: '#projects' },
                { label: 'Services', href: '#services' },
                { label: 'Selector', href: '#selector' },
                { label: 'Process', href: '#process' },
                { label: 'Packages', href: '#packages' },
                { label: 'Studio', href: '#studio' },
                { label: 'Connect', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT (hidden on mobile, shown md+) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <span className="text-[13px] text-gray-600 hidden lg:inline-block font-normal">
              Taking on projects for Q1 2026
            </span>

            {/* Live Bengaluru Time */}
            <div className="flex items-center gap-1.5 text-[13px] text-gray-600 font-normal">
              <Clock className="w-3.5 h-3.5 text-gray-600 stroke-[2]" />
              <span>{bengaluruTime ? `${bengaluruTime} in Bengaluru` : 'Bengaluru, India'}</span>
            </div>

            {/* CTA Button: Book a strategy call with Text-Roll Animation */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="bg-gray-900 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 flex items-center gap-2 group cursor-pointer shadow-sm hover:bg-gray-800 transition-colors"
            >
              <div className="overflow-hidden h-[20px] flex flex-col justify-start">
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
                  Book a strategy call
                </span>
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
                  Book a strategy call
                </span>
              </div>

              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowRight className="w-3.5 h-3.5 text-gray-900 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* MOBILE TOGGLE (md:hidden) */}
          <div className="md:hidden flex items-center pr-1">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-gray-900 text-white rounded-full p-2.5 flex items-center justify-center transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-white" />
              ) : (
                <Menu className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU OVERLAY (Fixed inset-0, z-50) */}
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
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative z-10 bg-white rounded-2xl mx-3 mb-3 p-6 sm:p-8 flex flex-col gap-6 shadow-2xl"
            >
              {/* Close Button Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-gray-700" />
                  <span>{bengaluruTime ? `${bengaluruTime} in Bengaluru` : 'Bengaluru'}</span>
                  <span>•</span>
                  <span>Q1 2026</span>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-100 text-gray-900"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Large Nav Links */}
              <div className="flex flex-col gap-3 py-2 text-[26px] sm:text-[30px] font-medium text-gray-900">
                {[
                  { label: 'Projects', href: '#projects' },
                  { label: 'Services', href: '#services' },
                  { label: 'Selector', href: '#selector' },
                  { label: 'Process', href: '#process' },
                  { label: 'Packages', href: '#packages' },
                  { label: 'Studio', href: '#studio' },
                  { label: 'Contact', href: '#contact' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-gray-500 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProject();
                }}
                className="w-full bg-[#F26522] text-white text-[15px] font-medium rounded-full py-3.5 px-6 flex items-center justify-between group shadow-md"
              >
                <span>Start a project</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#F26522] stroke-[2.5]" />
                </div>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* HERO CONTENT (z-20, Bottom of viewport) */}
      <div className="flex-1 flex flex-col justify-end max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20 relative z-20">
        {/* Small Label */}
        <div className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8 font-medium">
          ASME Studio
        </div>

        {/* Headline H1 */}
        <h1 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-5xl">
          We craft digital experiences
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          for brands ready to dominate
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          their category online.
        </h1>

        {/* CTA ROW */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          {/* Orange Button: Start a project with Text-Roll */}
          <button
            type="button"
            onClick={onOpenProject}
            className="bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] sm:text-[14px] rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-3 group transition-colors duration-300 cursor-pointer shadow-sm"
          >
            <div className="overflow-hidden h-[20px] flex flex-col justify-start">
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full font-medium">
                Start a project
              </span>
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full font-medium">
                Start a project
              </span>
            </div>

            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F26522] stroke-[2.5]" />
            </div>
          </button>

          {/* Certified Partner & Free Month Badge */}
          <div className="bg-white rounded-[4px] px-3 py-2 sm:px-3.5 sm:py-2 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 border border-gray-100/50 cursor-pointer">
            <ShieldCheck className="w-5 h-5 text-[#F26522] shrink-0" />

            <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">
              1-Month Free Maintenance Included
            </span>

            <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded font-medium">
              Warranty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
