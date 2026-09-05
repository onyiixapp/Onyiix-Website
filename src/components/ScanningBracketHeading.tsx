import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScanningBracketHeadingProps {
  words: string[];
  /** Color for the corner brackets */
  color?: string;
  /** How long each word stays highlighted (ms) */
  dwellMs?: number;
  /** Whether to loop or stop at the last word */
  loop?: boolean;
  className?: string;
}

const CORNER_SIZE = 14;
const CORNER_THICKNESS = 3;
const CORNER_GAP = 6; // gap between bracket corners and the word

export const ScanningBracketHeading: React.FC<ScanningBracketHeadingProps> = ({
  words,
  color = '#2563EB',
  dwellMs = 900,
  loop = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1); // -1 = not started
  const [bracketRect, setBracketRect] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  // Measure the active word and update bracket position
  const measureWord = useCallback((index: number) => {
    const container = containerRef.current;
    const wordEl = wordRefs.current[index];
    if (!container || !wordEl) return;

    const containerRect = container.getBoundingClientRect();
    const wordRect = wordEl.getBoundingClientRect();

    setBracketRect({
      x: wordRect.left - containerRect.left - CORNER_GAP,
      y: wordRect.top - containerRect.top - CORNER_GAP,
      w: wordRect.width + CORNER_GAP * 2,
      h: wordRect.height + CORNER_GAP * 2,
    });
  }, []);

  // Start scanning when in view
  useEffect(() => {
    if (!isInView) return;

    // Small delay before starting
    const startTimer = setTimeout(() => setActiveIndex(0), 300);
    return () => clearTimeout(startTimer);
  }, [isInView]);

  // Cycle through words
  useEffect(() => {
    if (activeIndex < 0) return;

    measureWord(activeIndex);

    const timer = setTimeout(() => {
      if (activeIndex < words.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (loop) {
        setActiveIndex(0);
      }
      // else stay on last word
    }, dwellMs);

    return () => clearTimeout(timer);
  }, [activeIndex, words.length, dwellMs, loop, measureWord]);

  // Re-measure on resize
  useEffect(() => {
    const handleResize = () => {
      if (activeIndex >= 0) measureWord(activeIndex);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, measureWord]);

  const started = activeIndex >= 0;

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Words */}
      {words.map((word, i) => (
        <span key={i}>
          <span
            ref={(el) => { wordRefs.current[i] = el; }}
            className="transition-all duration-500 ease-out"
            style={{
              color: !started
                ? '#0B1020'
                : i === activeIndex
                  ? '#0B1020'
                  : '#CBD5E1',
              fontWeight: !started ? 700 : i === activeIndex ? 700 : 400,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}

      {/* Corner brackets — only visible when scanning has started */}
      {started && (
        <>
          {/* Top-left corner */}
          <motion.span
            className="absolute pointer-events-none"
            animate={{
              left: bracketRect.x,
              top: bracketRect.y,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: CORNER_SIZE,
              height: CORNER_SIZE,
              borderLeft: `${CORNER_THICKNESS}px solid ${color}`,
              borderTop: `${CORNER_THICKNESS}px solid ${color}`,
            }}
          />
          {/* Top-right corner */}
          <motion.span
            className="absolute pointer-events-none"
            animate={{
              left: bracketRect.x + bracketRect.w - CORNER_SIZE,
              top: bracketRect.y,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: CORNER_SIZE,
              height: CORNER_SIZE,
              borderRight: `${CORNER_THICKNESS}px solid ${color}`,
              borderTop: `${CORNER_THICKNESS}px solid ${color}`,
            }}
          />
          {/* Bottom-left corner */}
          <motion.span
            className="absolute pointer-events-none"
            animate={{
              left: bracketRect.x,
              top: bracketRect.y + bracketRect.h - CORNER_SIZE,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: CORNER_SIZE,
              height: CORNER_SIZE,
              borderLeft: `${CORNER_THICKNESS}px solid ${color}`,
              borderBottom: `${CORNER_THICKNESS}px solid ${color}`,
            }}
          />
          {/* Bottom-right corner */}
          <motion.span
            className="absolute pointer-events-none"
            animate={{
              left: bracketRect.x + bracketRect.w - CORNER_SIZE,
              top: bracketRect.y + bracketRect.h - CORNER_SIZE,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: CORNER_SIZE,
              height: CORNER_SIZE,
              borderRight: `${CORNER_THICKNESS}px solid ${color}`,
              borderBottom: `${CORNER_THICKNESS}px solid ${color}`,
            }}
          />
        </>
      )}
    </span>
  );
};
