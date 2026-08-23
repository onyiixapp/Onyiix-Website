import React, { useState, useEffect } from 'react';
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';
import { Clock, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenProject }) => {
  const [londonTime, setLondonTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Live London Clock
  useEffect(() => {
    const updateTime = () => {
      const timeString = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date());
      setLondonTime(timeString);
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
            {/* Dark Circle Logo "AX" */}
            <a
              href="#"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[10px] sm:text-[11px] font-bold tracking-tight text-white">
                AX
              </span>
            </a>

            {/* Nav Links (hidden on mobile, shown md+) */}
            <div className="hidden md:flex items-center gap-6 ml-4 sm:ml-6">
              {['Projects', 'Studio', 'Journal', 'Connect'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300 font-normal"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT (hidden on mobile, shown md+) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <span className="text-[13px] text-gray-600 hidden lg:inline-block font-normal">
              Taking on projects for Q1 2026
            </span>

            <div className="flex items-center gap-1.5 text-[13px] text-gray-600 font-normal">
              <Clock className="w-3.5 h-3.5 text-gray-600 stroke-[2]" />
              <span>{londonTime ? `${londonTime} in London` : 'London'}</span>
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
                  <span>{londonTime ? `${londonTime} in London` : 'London'}</span>
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
              <div className="flex flex-col gap-3 py-2 text-[28px] sm:text-[32px] font-medium text-gray-900">
                {['Projects', 'Studio', 'Journal', 'Connect'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-gray-500 transition-colors"
                  >
                    {link}
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
          Axion Studio
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

          {/* Partner Badge */}
          <div className="bg-white rounded-[4px] px-3 py-2 sm:px-3.5 sm:py-2 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300 border border-gray-100/50 cursor-pointer">
            {/* Exact SVG Starburst Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E] shrink-0"
            >
              <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
            </svg>

            <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">
              Certified Partner
            </span>

            <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded font-medium">
              Featured
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
