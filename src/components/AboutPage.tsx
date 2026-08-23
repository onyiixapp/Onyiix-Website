import React from 'react';
import { ArrowLeft, Globe, Mail, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-ambient-blue text-white selection:bg-sky-500/20 selection:text-white relative overflow-x-hidden no-scrollbar">
      {/* Top Floating Navbar for About Page */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6 pointer-events-none">
        <nav className="max-w-5xl mx-auto liquid-glass rounded-full px-5 sm:px-7 py-3 flex items-center justify-between pointer-events-auto shadow-2xl backdrop-blur-xl border border-white/10">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-sky-400/50 transition-colors">
              <Globe className="w-4 h-4 text-white transition-transform duration-300 group-hover:rotate-45" />
            </div>
            <span className="font-sans font-bold text-lg text-white tracking-tight">
              ASME
            </span>
            <span className="text-[10px] font-sans font-semibold tracking-wider text-sky-400 bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-400/30">
              STUDIO
            </span>
          </a>

          <button
            type="button"
            onClick={handleGoHome}
            className="liquid-glass rounded-full px-5 py-2 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-1.5 border border-white/15 shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-36 pb-24 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center sm:text-left mb-12"
        >
          <span className="text-sky-400 text-xs font-sans font-semibold tracking-wider uppercase block mb-2">
            ABOUT ASME STUDIO
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-normal text-white tracking-tight">
            Pioneering digital <span className="font-serif italic text-sky-300">architectures</span> for minds that build.
          </h1>
          <p className="text-white/70 text-base sm:text-lg mt-4 leading-relaxed font-sans max-w-2xl">
            We are a boutique software engineering studio founded on engineering transparency, sub-second latency, and bespoke digital craftsmanship.
          </p>
        </motion.div>

        {/* The 2024 Genesis Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="liquid-glass-elevated rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4 font-sans tracking-tight">
            Our Genesis &amp; Philosophy
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
            <p>
              Founded in <strong className="text-white font-semibold">2024</strong> during our academic journey by two relentless software builders, <strong className="text-white font-semibold">Mohammed Maaz A</strong> &amp; <strong className="text-white font-semibold">Suman Kumar Singh</strong>, ASME Studio was born out of a shared obsession: to engineer production-ready web platforms, distributed SaaS systems, and autonomous AI workflows that solve genuine business problems.
            </p>
            <p>
              Instead of chasing conventional academic metrics or relying on generic template builders, we immersed ourselves in real-world systems engineering—mastering optimistic UI states, edge caching, PostgreSQL multi-tenancy, and high-converting micro-interactions.
            </p>
            <p>
              Today, ASME Studio delivers bespoke software for ambitious founders and enterprises worldwide, backed by our ironclad 30-Day Zero-Cost Bug Warranty and 100% Code Ownership guarantee.
            </p>
          </div>
        </motion.div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Mohammed Maaz A */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="liquid-glass rounded-3xl p-7 sm:p-8 border border-white/15 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-300 shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-xs text-sky-300 font-semibold tracking-wider uppercase bg-sky-950/60 px-3 py-1 rounded-full border border-sky-400/30">
                  CO-FOUNDER &amp; PRINCIPAL ARCHITECT
                </span>
                <MapPin className="w-4 h-4 text-white/40" />
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Mohammed Maaz A
              </h3>
              <p className="text-xs text-white/50 mt-1 mb-4 font-sans">
                Bengaluru, India • BCA, MCA (Pursuing) • Analyst @ Cognizant
              </p>

              <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans">
                Full-stack software architect specializing in ultra-fast React/Next.js platforms, distributed API engines, and autonomous token-streaming AI workflows.
              </p>
            </div>

            {/* Clean Icon Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50 font-sans">Connect Directly</span>
              
              <div className="flex items-center gap-2.5">
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

          {/* Suman Kumar Singh */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="liquid-glass rounded-3xl p-7 sm:p-8 border border-white/15 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-300 shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-xs text-sky-300 font-semibold tracking-wider uppercase bg-sky-950/60 px-3 py-1 rounded-full border border-sky-400/30">
                  CO-FOUNDER &amp; SYSTEMS ENGINEER
                </span>
                <MapPin className="w-4 h-4 text-white/40" />
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Suman Kumar Singh
              </h3>
              <p className="text-xs text-white/50 mt-1 mb-4 font-sans">
                Delhi, India • BCA Graduate • Systems &amp; Next.js Specialist
              </p>

              <p className="text-sm text-white/70 leading-relaxed mb-6 font-sans">
                Systems engineer focused on edge caching, headless checkout velocity, scalable database schemas, and zero-downtime client deployments.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-sans">
              <span>Location: Delhi, India</span>
              <span className="text-sky-300 font-medium">100% SLA Delivery</span>
            </div>
          </motion.div>
        </div>

        {/* Quality Charter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80 font-sans">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <span>
              <strong className="text-white font-semibold">Handcrafted in Bengaluru, India</strong> • Delivered across India &amp; Worldwide with our <strong>30-Day Zero-Cost Bug Warranty</strong>.
            </span>
          </div>

          <a
            href="/"
            className="liquid-glass rounded-full px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition-colors shrink-0 border border-white/15"
          >
            Explore Platform ↗
          </a>
        </motion.div>
      </main>
    </div>
  );
};
