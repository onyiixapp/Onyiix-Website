import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

let cachedSvgMap: string | null = null;
function getCachedSvgMap(): string {
  if (!cachedSvgMap) {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    cachedSvgMap = map.getSVG({
      radius: 0.22,
      color: "#00000030",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }
  return cachedSvgMap;
}

export function WorldMap({ dots = [], lineColor = "#3b82f6" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const svgMap = getCachedSvgMap();

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 60;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Each line draws sequentially — 0.9 s per line, so they appear one after another
  const LINE_DRAW_DURATION = 1.1;
  const LINE_STAGGER = 0.85;

  return (
    <div className="w-full aspect-[2/1] bg-transparent rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none object-cover"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="wm-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          {/* Soft glow for dots */}
          <filter id="wm-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Arc lines: each one draws after the previous finishes ── */}
        {dots.map((dot, i) => {
          const s = projectPoint(dot.start.lat, dot.start.lng);
          const e = projectPoint(dot.end.lat, dot.end.lng);
          const d = createCurvedPath(s, e);
          const delay = i * LINE_STAGGER;

          return (
            <g key={`arc-${i}`}>
              {/* Arc */}
              <motion.path
                d={d}
                fill="none"
                stroke="url(#wm-grad)"
                strokeWidth="1.3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  pathLength: {
                    duration: LINE_DRAW_DURATION,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                  opacity: { duration: 0.15, delay },
                }}
              />

              {/* ── Start dot ── */}
              <motion.circle
                cx={s.x}
                cy={s.y}
                r="2.8"
                fill={lineColor}
                filter="url(#wm-glow)"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.25, delay }}
              />
              {/* Start pulse */}
              <motion.circle
                cx={s.x}
                cy={s.y}
                r="2.8"
                fill="none"
                stroke={lineColor}
                strokeWidth="1.2"
                initial={{ scale: 1, opacity: 0.7 }}
                whileInView={{ scale: 4.5, opacity: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 1.6,
                  delay,
                  repeat: Infinity,
                  repeatDelay: 1.8,
                  ease: "easeOut",
                }}
              />

              {/* ── End dot (appears when arc arrives) ── */}
              <motion.circle
                cx={e.x}
                cy={e.y}
                r="2.8"
                fill={lineColor}
                filter="url(#wm-glow)"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.25, delay: delay + LINE_DRAW_DURATION * 0.9 }}
              />
              {/* End pulse */}
              <motion.circle
                cx={e.x}
                cy={e.y}
                r="2.8"
                fill="none"
                stroke={lineColor}
                strokeWidth="1.2"
                initial={{ scale: 1, opacity: 0.7 }}
                whileInView={{ scale: 4.5, opacity: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 1.6,
                  delay: delay + LINE_DRAW_DURATION * 0.9,
                  repeat: Infinity,
                  repeatDelay: 1.8,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
