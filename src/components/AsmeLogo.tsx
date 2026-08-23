import React from 'react';

interface AsmeLogoProps {
  className?: string;
  symbolSize?: number;
  textColor?: string;
  showText?: boolean;
}

export const AsmeLogo: React.FC<AsmeLogoProps> = ({
  className = '',
  symbolSize = 34,
  textColor = 'text-neutral-950',
  showText = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Clean Geometric Red Monogram Symbol (Inspired by modern geometric design) */}
      <svg
        width={symbolSize}
        height={symbolSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        {/* Top Concave Curve */}
        <path
          d="M8 10C14 16 26 16 32 10"
          stroke="#DC2626"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Vertical Left Top Pillar */}
        <path
          d="M8 10V20"
          stroke="#DC2626"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        {/* Vertical Right Top Pillar */}
        <path
          d="M32 10V20"
          stroke="#DC2626"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        {/* Central S-Curve Wave */}
        <path
          d="M8 20C14 26 26 14 32 20"
          stroke="#DC2626"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Vertical Left Bottom Pillar */}
        <path
          d="M8 20V30"
          stroke="#DC2626"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        {/* Vertical Right Bottom Pillar */}
        <path
          d="M32 20V30"
          stroke="#DC2626"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        {/* Bottom Concave Curve */}
        <path
          d="M8 30C14 24 26 24 32 30"
          stroke="#DC2626"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {showText && (
        <span className={`font-black text-xl sm:text-2xl tracking-tight ${textColor} leading-none`}>
          ASME
        </span>
      )}
    </div>
  );
};
