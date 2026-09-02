import React from 'react';
import { motion } from 'framer-motion';

interface NotFoundPageProps {
  onBack: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0B1020] text-white flex items-center justify-center p-5 select-none">
      {/* Ambient background light gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-gradient-to-b from-blue-600/20 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-indigo-600/10 blur-3xl"
      />

      {/* Floating glassmorphic card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        className="relative z-10 w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12 text-center shadow-[0_25px_70px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
      >
        {/* Top ambient highlight line */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"
        />

        {/* 404 tag */}
        <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.24em] text-blue-400">
          404 ERROR
        </span>

        {/* Funnier Gen-Z Headline */}
        <h1 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Lost in the void, bestie.
        </h1>

        {/* One funny message */}
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300 max-w-sm mx-auto">
          This URL doesn&rsquo;t exist, but our studio is very much alive and building.
        </p>

        {/* Clean "Back to Studio" box button (No icons, no emojis) */}
        <div className="mt-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_12px_32px_rgba(37,99,235,0.35)] transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Back to Studio
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
