import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Layers, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onOpenContactModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenContactModal }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="pricing"
      ref={ref}
      className="bg-black py-24 sm:py-32 px-4 sm:px-6 overflow-hidden max-w-4xl mx-auto relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="liquid-glass rounded-3xl p-8 sm:p-12 border border-white/15 text-center relative overflow-hidden shadow-2xl backdrop-blur-2xl"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        {/* Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-mono text-white/80 mb-6">
          <Layers className="w-3.5 h-3.5 text-white" />
          <span>03 / Transparent Investment</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-white tracking-tight mb-4">
          Best Affordable Pricing <br />
          <span className="font-serif italic text-white/60">Coming Soon.</span>
        </h2>

        {/* Short & Clean Message */}
        <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-sans">
          We are finalizing our most accessible, high-value pricing packages for startups and businesses. In the meantime, get a custom quote tailored to your exact specifications within 4 hours.
        </p>

        {/* Action Button & Warranty */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenContactModal}
            className="w-full sm:w-auto bg-white text-black font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-2xl"
          >
            <span>Request Custom Scope &amp; Quote</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Bottom 30-Day Guarantee */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs font-mono text-white/60">
          <ShieldCheck className="w-4 h-4 text-white/80" />
          <span>Every build includes our 30-Day Zero-Cost Bug Warranty</span>
        </div>
      </motion.div>
    </section>
  );
};
