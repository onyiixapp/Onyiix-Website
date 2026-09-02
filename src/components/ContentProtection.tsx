import React, { useEffect, useState, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export const ContentProtection: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('Caught in 4K, hands off the right-click bestie');
  const timerRef = useRef<number | null>(null);

  const triggerToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);

    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    // Auto disappear after 2.6 seconds as requested
    timerRef.current = window.setTimeout(() => {
      setToastVisible(false);
    }, 2600);
  }, []);

  const hideToast = useCallback(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    setToastVisible(false);
  }, []);

  useEffect(() => {
    // 1. Intercept context menu (Right click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerToast('Caught in 4K, hands off the right-click bestie');
      return false;
    };

    // 2. Intercept DevTools & Inspect shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        triggerToast('Bro really tried to inspect the element');
        return false;
      }

      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      // Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect Element)
      if (cmdOrCtrl && e.shiftKey) {
        const key = e.key.toUpperCase();
        if (key === 'I' || key === 'J' || key === 'C') {
          e.preventDefault();
          triggerToast('Bro really tried to inspect the element');
          return false;
        }
      }

      // Ctrl+U (View Source), Ctrl+S (Save Page)
      if (cmdOrCtrl) {
        const key = e.key.toUpperCase();
        if (key === 'U' || key === 'S') {
          e.preventDefault();
          triggerToast('Nice try bestie, source code is secret sauce');
          return false;
        }
      }

      // Ctrl+C (Copy) outside input/textarea
      if (cmdOrCtrl && (e.key === 'c' || e.key === 'C')) {
        const target = e.target as HTMLElement | null;
        const isInputField = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
        if (!isInputField) {
          e.preventDefault();
          triggerToast('Bro really tried to copy the sauce');
          return false;
        }
      }
    };

    // 3. Intercept Copy event outside of input fields
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInputField = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
      if (!isInputField) {
        e.preventDefault();
        triggerToast('Bro really tried to copy the sauce');
        return false;
      }
    };

    // 4. Intercept dragstart for images and assets
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'IMG' || target.tagName === 'A')) {
        e.preventDefault();
        triggerToast('Nice try, saving images is disabled bestie');
        return false;
      }
    };

    // 5. Dismiss on scroll or screen touch
    const handleScrollOrTouch = () => {
      if (toastVisible) {
        hideToast();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu, { capture: true });
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('copy', handleCopy, { capture: true });
    window.addEventListener('dragstart', handleDragStart, { capture: true });
    window.addEventListener('scroll', handleScrollOrTouch, { passive: true });

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('copy', handleCopy, { capture: true });
      window.removeEventListener('dragstart', handleDragStart, { capture: true });
      window.removeEventListener('scroll', handleScrollOrTouch);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [triggerToast, hideToast, toastVisible]);

  return (
    <AnimatePresence>
      {toastVisible && (
        <div
          className="fixed inset-x-0 bottom-7 z-[999999] flex justify-center px-4 pointer-events-none"
          role="status"
          aria-live="polite"
        >
          {/* Pill Capsule Glassmorphism Toast Matching Attached Reference Image */}
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 420, damping: 26 }}
            onClick={hideToast}
            className="pointer-events-auto group inline-flex items-center gap-3 rounded-full border border-blue-200/80 bg-white/95 px-3.5 py-2 text-slate-800 shadow-[0_14px_40px_rgba(15,23,42,0.16)] backdrop-blur-2xl cursor-pointer select-none max-w-[94vw] sm:max-w-max transition-all hover:scale-[1.02] hover:shadow-[0_18px_48px_rgba(37,99,235,0.2)]"
          >
            {/* Left Blue Solid Circle with lowercase 'i' matching reference image */}
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0047BA] text-white shadow-sm">
              <span className="font-serif font-black text-[11px] leading-none select-none">i</span>
            </div>

            {/* Single Line Funny Gen-Z Message */}
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-[#1E3A8A] whitespace-nowrap">
              {toastMessage}
            </span>

            {/* Right Subtle Close X */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                hideToast();
              }}
              aria-label="Close"
              className="ml-0.5 rounded-full p-0.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContentProtection;
