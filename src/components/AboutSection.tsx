import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, MapPin, Mail, Globe } from 'lucide-react';

interface AboutSectionProps {
  onOpenContactModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContactModal }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-black py-24 sm:py-32 px-4 sm:px-6 overflow-hidden max-w-5xl mx-auto relative"
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center sm:text-left mb-8"
      >
        <p className="text-white/40 text-xs font-mono tracking-widest uppercase mb-2">
          04 / About Us &amp; Founders
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight font-sans font-normal">
          Pioneering then <span className="font-serif italic text-white/60">ideas</span> for{' '}
          <br className="hidden sm:inline" />
          minds that <span className="font-serif italic text-white/60">create &amp; build</span>.
        </h2>
      </motion.div>

      {/* Story Narrative */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-12 font-sans"
      >
        Founded in <strong className="text-white font-semibold">2024</strong> during our academic journey by two relentless friends, <strong className="text-white font-semibold">Mohammed Maaz A</strong> &amp; <strong className="text-white font-semibold">Suman Kumar Singh</strong>, driven to conquer the software world by building production-grade web systems and AI architectures instead of chasing conventional CGPA.
      </motion.p>

      {/* Founder Cards Grid (Clean Icon Buttons, no full text links) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Mohammed Maaz A Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="liquid-glass rounded-3xl p-7 sm:p-8 border border-white/15 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-300 shadow-2xl"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] text-white/80 uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/10">
                CO-FOUNDER &amp; PRINCIPAL ARCHITECT
              </span>
              <MapPin className="w-4 h-4 text-white/40" />
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              Mohammed Maaz A
            </h3>
            <p className="text-xs font-mono text-white/50 mt-1 mb-4">
              Bengaluru, India • BCA, MCA (Pursuing) • Analyst @ Cognizant
            </p>

            <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed mb-6 font-sans">
              Full-stack architect specializing in ultra-fast React/Next.js platforms, distributed API engines, and autonomous token-streaming AI workflows.
            </p>
          </div>

          {/* Clean Icon Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-white/40">Founder Channels</span>
            
            <div className="flex items-center gap-2">
              <a
                href="mailto:maazmohammed112@gmail.com"
                aria-label="Email Maaz"
                title="Email Mohammed Maaz A"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-sky-400/50 hover:bg-white/10 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://maazprofile.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maaz Portfolio"
                title="Maaz Portfolio Website"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-sky-400/50 hover:bg-white/10 transition-all"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://linkedin.com/in/mohammed-maaz-a-0aa730217/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maaz LinkedIn"
                title="Maaz LinkedIn Profile"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-sky-400/50 hover:bg-white/10 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Suman Kumar Singh Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="liquid-glass rounded-3xl p-7 sm:p-8 border border-white/15 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-300 shadow-2xl"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] text-white/80 uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/10">
                CO-FOUNDER &amp; SYSTEMS ENGINEER
              </span>
              <MapPin className="w-4 h-4 text-white/40" />
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              Suman Kumar Singh
            </h3>
            <p className="text-xs font-mono text-white/50 mt-1 mb-4">
              Delhi, India • BCA Graduate • Systems &amp; Next.js Specialist
            </p>

            <p className="text-sm sm:text-[15px] text-white/70 leading-relaxed mb-6 font-sans">
              Systems engineer focused on edge caching, headless checkout velocity, scalable database schemas, and zero-downtime client deployments.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
            <span>Location: Delhi, India</span>
            <span>100% SLA Delivery</span>
          </div>
        </motion.div>
      </div>

      {/* Delivery & Warranty Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="liquid-glass rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10"
      >
        <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80 font-sans text-center sm:text-left">
          <ShieldCheck className="w-5 h-5 text-white shrink-0" />
          <span>
            <strong className="text-white font-semibold">Handcrafted in Bengaluru, India</strong> • Delivered across India &amp; Worldwide with our <strong>30-Day Zero-Cost Bug Warranty</strong>.
          </span>
        </div>

        <button
          type="button"
          onClick={onOpenContactModal}
          className="liquid-glass rounded-full px-6 py-2 text-xs font-mono text-white hover:bg-white/10 transition-colors shrink-0 border border-white/15"
        >
          Contact Founders ↗
        </button>
      </motion.div>
    </section>
  );
};
