import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  className = '',
  reverse = false,
  pauseOnHover = false,
  duration = '40s',
}) => {
  return (
    <div
      className={`flex overflow-hidden ${pauseOnHover ? 'marquee-pause' : ''} ${className}`}
      style={{ '--duration': duration, '--gap': '1.5rem' } as React.CSSProperties}
    >
      <style>{`
        .marquee-track { animation: marquee var(--duration) linear infinite; }
        .marquee-track.reverse { animation-direction: reverse; }
        .marquee-pause:hover .marquee-track { animation-play-state: paused; }
      `}</style>
      {[0, 1].map((i) => (
        <div
          key={i}
          className={`marquee-track flex shrink-0 items-stretch gap-[1.5rem] ${reverse ? 'reverse' : ''}`}
          style={{ paddingRight: '1.5rem' }}
          aria-hidden={i === 1 ? 'true' : undefined}
        >
          {children}
        </div>
      ))}
    </div>
  );
};
