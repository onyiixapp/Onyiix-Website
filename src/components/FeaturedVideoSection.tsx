import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedVideoSectionProps {
  onOpenEstimatorModal: () => void;
}

export const FeaturedVideoSection: React.FC<FeaturedVideoSectionProps> = ({
  onOpenEstimatorModal,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="featured" ref={ref} className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl group"
      >
        {/* Background Video */}
        <video
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Bottom Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 z-10">
          {/* Left Liquid Glass Card */}
          <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md backdrop-blur-xl">
            <p className="text-white/50 text-xs font-mono tracking-widest uppercase mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>02 / Our Approach</span>
            </p>
            <p className="text-white text-sm md:text-base leading-relaxed">
              We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation and business scalability.
            </p>
          </div>

          {/* Right Action Button */}
          <motion.button
            type="button"
            onClick={onOpenEstimatorModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2 shadow-xl shrink-0"
          >
            <span>Explore Scope &amp; Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
