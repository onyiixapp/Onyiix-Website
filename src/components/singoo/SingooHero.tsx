import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Globe2 } from 'lucide-react';

interface SingooHeroProps {
  onOpenContactModal: () => void;
}

export const SingooHero: React.FC<SingooHeroProps> = ({ onOpenContactModal }) => {
  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative flex flex-col items-center justify-center min-h-[92vh] pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-white"
    >
      {/* Singoo Red Luminous Radial Background Blur */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition duration-300"
        style={{
          background: 'radial-gradient(600px at 10% 10%, rgba(220, 38, 38, 0.08), transparent 70%), radial-gradient(500px at 90% 80%, rgba(220, 38, 38, 0.05), transparent 70%)',
        }}
      />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Micro-Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-semibold text-neutral-800 mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span>Boutique Software Engineering • Bengaluru, India</span>
        </motion.div>

        {/* Singoo-Style Dynamic Vertical Rotating Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-neutral-950 leading-[1.1] font-sans"
        >
          Your Data-Driven
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 my-1 sm:my-2">
            <span className="bg-blue-600 text-white px-3 sm:px-4 py-0.5 rounded-xl font-black shadow-md">
              ONYIIX
            </span>
            <div className="h-14 sm:h-20 md:h-24 overflow-hidden inline-flex">
              <div className="animate-scroll-down-hold flex flex-col">
                <div className="h-14 sm:h-20 md:h-24 flex items-center text-neutral-950 font-black">
                  Websites
                </div>
                <div className="h-14 sm:h-20 md:h-24 flex items-center text-neutral-950 font-black">
                  SaaS Platforms
                </div>
                <div className="h-14 sm:h-20 md:h-24 flex items-center text-neutral-950 font-black">
                  AI Automations
                </div>
                <div className="h-14 sm:h-20 md:h-24 flex items-center text-neutral-950 font-black">
                  Digital Systems
                </div>
              </div>
            </div>
          </div>
          Transformation partner
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-neutral-600 max-w-2xl mx-auto font-sans"
        >
          A software engineering studio that designs and develops high-converting, functional, and user-centric digital experiences with <strong>1-Month Free Maintenance</strong>.
        </motion.p>

        {/* Action Button & Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={onOpenContactModal}
            className="w-full sm:w-auto bg-neutral-950 text-white text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href="#featured-work"
            className="w-full sm:w-auto bg-neutral-100 text-neutral-800 text-sm sm:text-base font-semibold px-7 py-4 rounded-full hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Explore Case Studies</span>
          </a>
        </motion.div>

        {/* Trust Badges Under Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-neutral-600"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>30-Day Zero-Cost Bug Warranty</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>1-Month Free Maintenance</span>
          </div>
          <span className="text-neutral-300">•</span>
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-blue-600" />
            <span>100% Full Code Ownership</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
