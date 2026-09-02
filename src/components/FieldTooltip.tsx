import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface FieldTooltipProps {
  message?: string;
  className?: string;
}

export const FieldTooltip: React.FC<FieldTooltipProps> = ({ message, className = '' }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -4, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 450, damping: 28 }}
          className={`relative z-20 mt-1.5 inline-flex ${className}`}
          role="alert"
        >
          <div className="relative rounded-xl border border-rose-300/85 bg-white/95 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-rose-600 shadow-[0_8px_20px_rgba(244,63,94,0.14)] backdrop-blur-xl select-none">
            {/* Pointer arrow pointing up to the input field */}
            <div
              aria-hidden="true"
              className="absolute -top-1 left-4 h-2 w-2 rotate-45 border-l border-t border-rose-300/85 bg-white"
            />
            <span className="relative z-10">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FieldTooltip;
