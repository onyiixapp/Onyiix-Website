import React from 'react';

interface AsmeLogoProps {
  className?: string;
  symbolSize?: number;
  textColor?: string;
  showText?: boolean;
}

/** Meyvaro's transparent mark: two forward ribbons form an M and a road. */
export const AsmeLogo: React.FC<AsmeLogoProps> = ({
  className = '',
  symbolSize = 36,
  textColor = 'text-neutral-950',
  showText = true,
}) => {
  const gradientBase = React.useId().replace(/:/g, '');
  const ribbonA = `${gradientBase}-ribbon-a`;
  const ribbonB = `${gradientBase}-ribbon-b`;

  return <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <svg
      width={symbolSize}
      height={symbolSize}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Meyvaro Studio logo"
      role="img"
      className="shrink-0 overflow-visible transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        <linearGradient id={ribbonA} x1="7" y1="8" x2="43" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id={ribbonB} x1="42" y1="7" x2="14" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#0B3BA7" />
        </linearGradient>
      </defs>
      <path d="M6 40V11.5C6 8.8 9.1 7.25 11.25 8.9L26 20.25L18.55 28.15L13.25 24.1V40H6Z" fill={`url(#${ribbonA})`} />
      <path d="M46 40V11.5C46 8.8 42.9 7.25 40.75 8.9L26 20.25L33.45 28.15L38.75 24.1V40H46Z" fill={`url(#${ribbonB})`} />
      <path d="M18.55 28.15L26 20.25L33.45 28.15L26 36.1L18.55 28.15Z" fill="#0B1020" />
      <path d="M38.75 35.25L46 40V31.5L38.75 35.25Z" fill="#60A5FA" />
    </svg>

    {showText && (
      <span className="flex flex-col leading-none">
        <span className={`text-[16px] font-black tracking-[-0.045em] ${textColor}`}>MEYVARO</span>
        <span className={`mt-1 text-[7px] font-extrabold uppercase tracking-[0.3em] ${textColor} opacity-55`}>
          Studio
        </span>
      </span>
    )}
  </div>;
};
