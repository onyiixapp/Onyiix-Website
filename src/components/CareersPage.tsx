import React from 'react';
import { ArrowLeft, Globe, Mail, Briefcase, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const CareersPage: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-ambient-blue text-white selection:bg-sky-500/20 selection:text-white relative overflow-x-hidden no-scrollbar">
      {/* Top Floating Navbar */}
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
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-36 pb-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="liquid-glass-elevated rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl"
        >
          <div className="w-14 h-14 rounded-full bg-sky-500/10 border border-sky-400/30 flex items-center justify-center mx-auto mb-6 text-sky-400">
            <Briefcase className="w-7 h-7" />
          </div>

          <span className="text-sky-400 text-xs font-sans font-semibold tracking-wider uppercase block mb-2">
            JOIN OUR CORE TEAM
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-white tracking-tight mb-4">
            Careers at <span className="font-serif italic text-sky-300">ASME Studio</span>
          </h1>

          <div className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/70 mb-6 font-sans">
            No active public openings currently
          </div>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg mx-auto mb-8 font-sans">
            We are currently fully staffed with our founding engineering and architectural team. However, we are always eager to connect with exceptionally gifted frontend designers, full-stack Next.js engineers, and AI systems builders.
          </p>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto mb-8">
            <h4 className="text-sm font-semibold text-white mb-2 font-sans">
              Speculative Applications
            </h4>
            <p className="text-xs text-white/60 leading-relaxed mb-4 font-sans">
              Send your GitHub profile, portfolio link, and a brief note on what you love building to our founder inbox:
            </p>
            <a
              href="mailto:careers@asme.studio"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:scale-105 transition-all shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>careers@asme.studio</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-white/50 font-sans">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>High standards, zero bureaucracy, deep craftsmanship.</span>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
