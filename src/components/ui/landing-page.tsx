import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Globe from "@/components/ui/globe";
import { cn } from "@/lib/utils";

interface ScrollGlobeProps {
  sections: {
    id: string;
    badge?: string;
    title: string;
    subtitle?: string;
    description: string;
    align?: 'left' | 'center' | 'right';
    features?: { title: string; description: string }[];
    actions?: { label: string; variant: 'primary' | 'secondary'; onClick?: () => void }[];
  }[];
  globeConfig?: {
    positions: {
      top: string;
      left: string;
      scale: number;
    }[];
  };
  className?: string;
}

const defaultGlobeConfig = {
  positions: [
    { top: "50%", left: "75%", scale: 1.4 },
    { top: "25%", left: "50%", scale: 0.9 },
    { top: "15%", left: "90%", scale: 2 },
    { top: "50%", left: "50%", scale: 1.8 },
  ]
};

const parsePercent = (str: string): number => parseFloat(str.replace('%', ''));

function ScrollGlobe({ sections, globeConfig = defaultGlobeConfig, className }: ScrollGlobeProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [globeTransform, setGlobeTransform] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number>();

  const calculatedPositions = useMemo(() => {
    return globeConfig.positions.map(pos => ({
      top: parsePercent(pos.top),
      left: parsePercent(pos.left),
      scale: pos.scale
    }));
  }, [globeConfig.positions]);

  const updateScrollPosition = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);
    setScrollProgress(progress);

    const viewportCenter = window.innerHeight / 2;
    let newActiveSection = 0;
    let minDistance = Infinity;

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          newActiveSection = index;
        }
      }
    });

    const currentPos = calculatedPositions[newActiveSection];
    const transform = `translate3d(${currentPos.left}vw, ${currentPos.top}vh, 0) translate3d(-50%, -50%, 0) scale3d(${currentPos.scale}, ${currentPos.scale}, 1)`;
    setGlobeTransform(transform);
    setActiveSection(newActiveSection);
  }, [calculatedPositions]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        animationFrameId.current = requestAnimationFrame(() => {
          updateScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollPosition();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [updateScrollPosition]);

  useEffect(() => {
    const initialPos = calculatedPositions[0];
    const initialTransform = `translate3d(${initialPos.left}vw, ${initialPos.top}vh, 0) translate3d(-50%, -50%, 0) scale3d(${initialPos.scale}, ${initialPos.scale}, 1)`;
    setGlobeTransform(initialTransform);
  }, [calculatedPositions]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full max-w-screen overflow-x-hidden min-h-screen bg-[#0B1020] text-white", className)}
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-white/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-900 will-change-transform"
          style={{
            transform: `scaleX(${scrollProgress})`,
            transformOrigin: 'left center',
            transition: 'transform 0.15s ease-out',
          }}
        />
      </div>

      {/* Side Navigation */}
      <div className="hidden sm:flex fixed right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="relative group">
              <div
                className={cn(
                  "absolute right-5 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2",
                  "px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs font-medium whitespace-nowrap",
                  "bg-[#0B1020]/95 backdrop-blur-md border border-white/10 shadow-xl z-50",
                  activeSection === index ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-xs text-white/80">{section.badge || `Section ${index + 1}`}</span>
                </div>
              </div>
              <button
                onClick={() => sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className={cn(
                  "relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border-2 transition-all duration-300 hover:scale-125",
                  activeSection === index
                    ? "bg-blue-400 border-blue-400 shadow-lg"
                    : "bg-transparent border-white/30 hover:border-blue-400/60"
                )}
                aria-label={`Go to ${section.badge || `section ${index + 1}`}`}
              />
            </div>
          ))}
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent -translate-x-1/2 -z-10" />
      </div>

      {/* Globe */}
      <div
        className="fixed z-10 pointer-events-none will-change-transform transition-all duration-[1400ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          transform: globeTransform,
          filter: `opacity(${activeSection === 3 ? 0.3 : 0.7})`,
        }}
      >
        <div className="scale-75 sm:scale-90 lg:scale-100">
          <Globe />
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => { (sectionRefs.current[index] = el as HTMLDivElement | null); }}
          className={cn(
            "relative min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 z-20 py-16 sm:py-20",
            "w-full max-w-full overflow-hidden",
            section.align === 'center' && "items-center text-center",
            section.align === 'right' && "items-end text-right",
            (!section.align || section.align === 'left') && "items-start text-left"
          )}
        >
          <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
            {section.badge && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-300">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                {section.badge}
              </div>
            )}

            <h2 className={cn(
              "font-bold mb-6 leading-[1.05] tracking-tight text-white",
              index === 0
                ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            )}>
              {section.subtitle ? (
                <div className="space-y-1">
                  <div>{section.title}</div>
                  <div className="text-blue-300/80 text-[0.65em] font-medium tracking-wider">{section.subtitle}</div>
                </div>
              ) : section.title}
            </h2>

            <p className="text-white/60 leading-relaxed mb-8 text-sm sm:text-base lg:text-lg font-light">
              {section.description}
            </p>

            {section.features && (
              <div className="grid gap-3 mb-8">
                {section.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="group p-4 sm:p-5 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300 hover:border-blue-400/30 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 mt-2 group-hover:bg-blue-400 transition-colors flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white text-sm sm:text-base mb-1">{feature.title}</h3>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.actions && (
              <div className={cn(
                "flex flex-col sm:flex-row flex-wrap gap-3",
                section.align === 'center' && "justify-center",
                section.align === 'right' && "justify-end",
                (!section.align || section.align === 'left') && "justify-start"
              )}>
                {section.actions.map((action) => (
                  <button
                    key={action.label}
                    onClick={action.onClick}
                    className={cn(
                      "group relative px-7 py-3.5 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm",
                      "focus:outline-none focus:ring-2 focus:ring-blue-400/30 w-full sm:w-auto",
                      action.variant === 'primary'
                        ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20"
                        : "border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/30 text-white"
                    )}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ScrollGlobe;
