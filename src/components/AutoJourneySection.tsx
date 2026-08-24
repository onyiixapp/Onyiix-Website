import React, { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from 'framer-motion';
import { ArrowDown, Bot, Code2, Cpu, Database, type LucideIcon } from 'lucide-react';

export interface JourneyDestination {
  number: string;
  area: string;
  eyebrow: string;
  title: string;
  line: string;
  description: string;
  details: readonly string[];
  image: string;
  Icon: LucideIcon;
}

export interface AutoJourneySectionProps {
  destinations?: readonly JourneyDestination[];
  autoImageSrc?: string;
}

const DEFAULT_JOURNEY_DESTINATIONS: readonly JourneyDestination[] = [
  {
    number: '01', area: 'Jayanagar', eyebrow: 'Launch stop', title: 'Web Development', line: 'Websites with more pull than filter coffee.',
    description: 'Conversion-led websites and commerce experiences engineered to feel immediate on every screen.',
    details: ['CMS & commerce', 'Core Web Vitals', 'Search foundations'],
    image: '/journey/destination-web-development.jpg', Icon: Code2,
  },
  {
    number: '02', area: 'Koramangala', eyebrow: 'Startup district', title: 'SaaS Platforms', line: 'SaaS built for the startup district.',
    description: 'Thoughtful multi-tenant products with resilient architecture, secure access and room to scale.',
    details: ['Multi-tenant', 'Role-based access', 'Subscription-ready'],
    image: '/journey/destination-saas-platforms.jpg', Icon: Database,
  },
  {
    number: '03', area: 'Whitefield', eyebrow: 'AI tech park', title: 'AI Workflows', line: 'AI workflows without the Whitefield commute.',
    description: 'Practical agents and connected workflows that move data safely while keeping people in control.',
    details: ['Agent workflows', 'Integrations', 'Human oversight'],
    image: '/journey/destination-ai-automation.jpg', Icon: Bot,
  },
  {
    number: '04', area: 'Silk Board', eyebrow: 'Systems junction', title: 'Digital Systems', line: 'Systems that keep moving—even at Silk Board.',
    description: 'Secure dashboards and internal tools that turn scattered operations into one clear source of truth.',
    details: ['Cloud architecture', 'Operations dashboards', 'Long-term support'],
    image: '/journey/destination-digital-systems.jpg', Icon: Cpu,
  },
];

const WheelSpinner: React.FC<{ className: string; rotation: MotionValue<number> }> = ({ className, rotation }) => (
  <motion.svg aria-hidden="true" className={`journey-wheel ${className}`} style={{ rotate: rotation }} viewBox="0 0 100 100">
    <g className="journey-wheel__spokes">
      <circle cx="50" cy="50" r="39" className="journey-wheel__rim" />
      <circle cx="50" cy="50" r="31" />
      <path d="M50 19v62M19 50h62M28 28l44 44M72 28L28 72M37 21l26 58M21 37l58 26M63 21L37 79M21 63l58-26" />
      <circle cx="50" cy="50" r="8" />
    </g>
  </motion.svg>
);

const ReducedJourney: React.FC<{ destinations: readonly JourneyDestination[] }> = ({ destinations }) => (
  <section id="journey" className="bg-[#080D1A] px-5 py-20 text-white sm:px-8 sm:py-28">
    <div className="mx-auto max-w-[1440px]">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">The Bengaluru service line</p>
      <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,5.75rem)] font-medium leading-[0.96] tracking-[-0.055em]">Four destinations. One studio in the driver&rsquo;s seat.</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {destinations.map(({ number, title, description, image, Icon }) => (
          <article key={number} className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/15">
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3 text-blue-300"><Icon className="h-5 w-5" /><span className="text-xs font-bold tracking-[0.18em]">DESTINATION {number}</span></div>
              <h3 className="text-2xl font-bold">{title}</h3><p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const AutoJourneySection: React.FC<AutoJourneySectionProps> = ({
  destinations = DEFAULT_JOURNEY_DESTINATIONS,
  autoImageSrc = '/journey/asme-auto-founders.png',
}) => {
  const journeyStops = destinations.length ? destinations : DEFAULT_JOURNEY_DESTINATIONS;
  const sectionRef = useRef<HTMLElement>(null);
  const replayArmed = useRef(true);
  const activeStageRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);
  const [isCompact, setIsCompact] = useState(false);
  const [journeyCycle, setJourneyCycle] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(() => new Set());

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 165, damping: 34, mass: 0.28 });
  const progressVelocity = useVelocity(smoothProgress);
  const softenedVelocity = useSpring(progressVelocity, { stiffness: 180, damping: 32, mass: 0.25 });

  const desktopStops = ['3vw', '3vw', '3vw', '20vw', '20vw', '47vw', '47vw', '60vw', '60vw'];
  const compactStops = ['3vw', '3vw', '3vw', '5vw', '5vw', '10vw', '10vw', '14vw', '14vw'];
  const autoX = useTransform(smoothProgress, [0, 0.13, 0.23, 0.36, 0.46, 0.59, 0.69, 0.82, 1], isCompact ? compactStops : desktopStops);
  const wheelRotation = useTransform(smoothProgress, [0, 1], [0, 3240]);
  const vehicleTilt = useTransform(softenedVelocity, [-2, 0, 2], [1, 0, -1]);
  const vehicleLift = useTransform(softenedVelocity, [-2, 0, 2], [2, 0, -2]);
  const horizonDrift = useTransform(smoothProgress, [0, 1], ['-1.2%', '1.2%']);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const updateLayout = () => setIsCompact(media.matches);
    updateLayout();
    media.addEventListener('change', updateLayout);
    return () => media.removeEventListener('change', updateLayout);
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest <= 0.002) {
      replayArmed.current = true;
      activeStageRef.current = 0;
      setActiveStage(0);
    } else if (replayArmed.current && latest > 0.008) {
      replayArmed.current = false;
      setJourneyCycle((cycle) => cycle + 1);
    }

    // A small dead zone prevents a trackpad from rapidly toggling two cards
    // when the scroll position rests directly on a destination boundary.
    const boundaries = [0.33, 0.56, 0.79];
    const hysteresis = 0.012;
    let nextStage = activeStageRef.current;

    while (nextStage < boundaries.length && latest >= boundaries[nextStage] + hysteresis) nextStage += 1;
    while (nextStage > 0 && latest < boundaries[nextStage - 1] - hysteresis) nextStage -= 1;

    nextStage = Math.min(nextStage, journeyStops.length - 1);
    if (nextStage !== activeStageRef.current) {
      activeStageRef.current = nextStage;
      setActiveStage(nextStage);
    }
  });

  const goToStage = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const availableScroll = Math.max(section.offsetHeight - window.innerHeight, 0);
    const stageProgress = [0.15, 0.38, 0.61, 0.84][index] ?? 0.15;
    window.scrollTo({ top: sectionTop + availableScroll * stageProgress, behavior: 'smooth' });
  };

  if (prefersReducedMotion) return <ReducedJourney destinations={journeyStops} />;

  const destination = journeyStops[Math.min(activeStage, journeyStops.length - 1)];
  const activeImageLoaded = loadedImages.has(destination.image);
  const ActiveIcon = destination.Icon;
  const cardOnLeft = activeStage >= 2;

  return (
    <section ref={sectionRef} id="journey" aria-label="A scroll-driven journey through Meyvaro Studio services" className="journey-section relative h-[420svh] bg-[#080D1A]">
      <div className="journey-stage sticky top-0 h-[100svh] overflow-hidden bg-[#080D1A] text-white">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-[#080D1A]">
          <motion.div className="journey-background-track absolute -inset-x-[3%] inset-y-0" style={{ x: horizonDrift }}>
            <motion.div className="journey-skeleton absolute inset-0" initial={false} animate={{ opacity: activeImageLoaded ? 0 : 1 }} transition={{ duration: 0.24 }} />
            {journeyStops.map((item, index) => {
              const isLoaded = loadedImages.has(item.image);
              return (
                <motion.img
                  key={item.image}
                  src={item.image}
                  alt=""
                  loading="eager"
                  decoding="async"
                  fetchPriority={index < 2 ? 'high' : 'auto'}
                  onLoad={() => setLoadedImages((current) => {
                    if (current.has(item.image)) return current;
                    const next = new Set(current);
                    next.add(item.image);
                    return next;
                  })}
                  className="journey-background absolute inset-0 h-full w-full object-cover object-center"
                  initial={false}
                  animate={{ opacity: index === activeStage && isLoaded ? 1 : 0, scale: index === activeStage ? 1.015 : 1.025 }}
                  transition={{ opacity: { duration: 0.48, ease: 'easeOut' }, scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
                />
              );
            })}
          </motion.div>
        </div>

        <div aria-hidden="true" className="journey-grade absolute inset-0" />
        <div aria-hidden="true" className="journey-grain absolute inset-0 opacity-[0.08]" />

        <div className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-4 pt-20 sm:px-8 sm:pt-24 lg:px-12">
          <div><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80 sm:text-xs"><span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />Global builds</div><p className="mt-2 hidden text-xs text-white/55 sm:block">Four neighbourhoods. Products built for ambitious teams everywhere.</p></div>
          <div className="rounded-full border border-white/15 bg-slate-950/35 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-white/75 backdrop-blur-xl sm:px-4 sm:text-[11px]">{destination.area} / {destination.number}</div>
        </div>

        <div className="absolute inset-y-0 right-3 z-40 hidden items-center sm:flex lg:right-7">
          <nav aria-label="Service destinations" className="flex flex-col gap-2 rounded-full border border-white/15 bg-slate-950/35 p-2 backdrop-blur-xl">
            {journeyStops.map((item, index) => (
              <button key={item.number} type="button" onClick={() => goToStage(index)} aria-label={`Go to ${item.title}`} aria-current={index === activeStage ? 'step' : undefined} className={`group relative flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${index === activeStage ? 'bg-blue-500 text-white' : 'text-white/60 hover:bg-white/10 hover:text-white'}`}>
                {item.number}<span className="pointer-events-none absolute right-12 w-max translate-x-2 rounded-full bg-slate-950/[0.85] px-3 py-1.5 text-[10px] text-white opacity-0 backdrop-blur-md transition-all group-hover:translate-x-0 group-hover:opacity-100">{item.area} · {item.title}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className={`absolute left-4 right-4 top-[17%] z-30 sm:left-auto sm:right-auto sm:top-[22%] sm:w-[min(430px,37vw)] ${cardOnLeft ? 'sm:left-8 lg:left-20' : 'sm:right-20 lg:right-28'}`}>
          <AnimatePresence initial={false} mode="sync">
            <motion.article key={`${journeyCycle}-${destination.number}`} initial={{ opacity: 0, x: isCompact ? 0 : (cardOnLeft ? -18 : 18), y: isCompact ? 0 : 5 }} animate={{ opacity: 1, x: 0, y: 0 }} exit={{ opacity: 0, x: isCompact ? 0 : (cardOnLeft ? 12 : -12), y: isCompact ? 0 : -3 }} transition={{ duration: isCompact ? 0.24 : 0.38, ease: [0.22, 1, 0.36, 1] }} className="journey-copy rounded-[1.4rem] border border-white/15 bg-[#0B1020]/[0.88] p-4 shadow-2xl backdrop-blur-lg sm:rounded-[2rem] sm:p-7">
              <div className="flex items-center justify-between gap-4"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300 sm:text-xs">{destination.area} · {destination.eyebrow}</p><span className="flex h-8 w-8 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-blue-300"><ActiveIcon className="h-4 w-4" /></span></div>
              <h2 className="mt-2 text-[clamp(1.65rem,3.4vw,4rem)] font-medium leading-[0.94] tracking-[-0.05em] sm:mt-3">{destination.title}</h2>
              <p className="mt-2 text-xs font-semibold text-white/90 sm:mt-3 sm:text-base">{destination.line}</p>
              <p className="mt-3 hidden text-sm leading-relaxed text-white/60 sm:block">{destination.description}</p>
              <div className="mt-5 hidden flex-wrap gap-2 lg:flex">{destination.details.map((detail) => <span key={detail} className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold text-white/60">{detail}</span>)}</div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div aria-hidden="true" className="journey-road absolute inset-x-0 bottom-0 z-10 h-[30%] sm:h-[29%]"><div className="journey-road__shine absolute inset-0" /><div className="journey-road__lane absolute left-0 right-0 top-[63%] h-[3px]" /></div>

        <motion.div className="journey-auto absolute bottom-[4.5%] left-0 z-20 w-[82vw] max-w-[640px] will-change-transform sm:bottom-[2.5%] sm:w-[39vw] sm:min-w-[430px]" style={{ x: autoX }}>
          <div aria-hidden="true" className="absolute bottom-[1%] left-[8%] right-[4%] h-[13%] rounded-[50%] bg-black/60 blur-xl" />
          <motion.div className="journey-auto__chassis relative" style={isCompact ? undefined : { rotate: vehicleTilt, y: vehicleLift }}>
            <img src={autoImageSrc} alt="Suman driving a green and yellow Bengaluru auto rickshaw with Maaz as passenger" className="relative z-10 block h-auto w-full select-none" draggable={false} fetchPriority="high" decoding="async" />
            <WheelSpinner className="journey-wheel--rear" rotation={wheelRotation} />
            <WheelSpinner className="journey-wheel--front" rotation={wheelRotation} />
          </motion.div>
        </motion.div>

        <div className="absolute inset-x-4 bottom-4 z-40 flex items-end justify-between gap-3 sm:inset-x-8 sm:bottom-6 lg:inset-x-12"><div className="rounded-full border border-white/15 bg-slate-950/40 px-3 py-2 text-[9px] font-semibold text-white/70 backdrop-blur-xl sm:px-4 sm:text-[10px]"><span className="text-white">Suman</span> at the wheel&nbsp; • &nbsp;<span className="text-white">Maaz</span> on board</div><div className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-white/60 sm:flex">Keep scrolling <ArrowDown className="h-3.5 w-3.5 animate-bounce" /></div></div>
        <motion.div aria-hidden="true" className="absolute bottom-0 left-0 z-40 h-1 origin-left bg-blue-500" style={{ scaleX: smoothProgress, width: '100%' }} />
        <ol className="sr-only">{journeyStops.map((item) => <li key={`accessible-${item.number}`}>{item.title}: {item.description}</li>)}</ol>
      </div>
    </section>
  );
};
