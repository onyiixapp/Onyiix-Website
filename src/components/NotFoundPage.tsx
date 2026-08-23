import React from 'react';
import { ArrowLeft, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const NotFoundPage: React.FC = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-ambient-blue text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto liquid-glass-elevated rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl relative z-10"
      >
        <div className="w-14 h-14 rounded-full bg-sky-500/10 border border-sky-400/30 flex items-center justify-center mx-auto mb-6 text-sky-400">
          <Sparkles className="w-7 h-7" />
        </div>

        <div className="font-sans text-xs font-semibold text-sky-400 uppercase tracking-widest mb-2">
          404 / ARCHITECTURE NOT FOUND
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif italic text-white tracking-tight mb-4">
          Oops! You are beyond <br />
          <span className="text-sky-300 not-italic font-sans font-normal">imaginations</span>.
        </h1>

        <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-8 font-sans">
          The dimension or digital architecture you are looking for does not exist in this space. Return to the main studio platform below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleGoHome}
            className="w-full sm:w-auto bg-white text-black font-semibold text-xs sm:text-sm px-7 py-3 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>

          <a
            href="/"
            className="w-full sm:w-auto liquid-glass rounded-full px-6 py-3 text-xs sm:text-sm font-medium text-white/80 hover:text-white border border-white/10 flex items-center justify-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Explore Studio</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
