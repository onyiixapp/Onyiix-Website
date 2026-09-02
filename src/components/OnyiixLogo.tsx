import React from 'react';

export interface OnyiixLogoProps {
  className?: string;
  variant?: 'dark' | 'white' | 'auto';
  textColor?: string;
  symbolSize?: number;
  height?: number | string;
  alt?: string;
  showText?: boolean;
}

/**
 * Official ONYIIX Brand Logo: DESIGN • BUILD • DELIVER
 * Supports high-contrast white variant for dark backgrounds and dark variant for light backgrounds.
 */
export const OnyiixLogo: React.FC<OnyiixLogoProps> = ({
  className = '',
  variant,
  textColor = '',
  symbolSize,
  height,
  alt = 'ONYIIX • DESIGN • BUILD • DELIVER',
}) => {
  // If textColor is text-white or white, use white variant; otherwise dark variant
  const isWhite = variant === 'white' || (textColor && textColor.includes('white'));
  const logoSrc = isWhite ? '/onyiix-logo-white.png' : '/onyiix-logo-dark.png';
  const xSrc = isWhite ? '/onyiix-x-white.png' : '/onyiix-x-metallic.png';

  const calculatedHeight = height || (symbolSize ? Math.round(symbolSize * 0.82) : 32);

  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt={alt}
        style={{ height: typeof calculatedHeight === 'number' ? `${calculatedHeight}px` : calculatedHeight }}
        className="block w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        draggable={false}
        loading="eager"
        decoding="async"
      />

      {/* Premium Metallic Shining Effect overlaid specifically on the letter 'X' */}
      <div
        className="pointer-events-none absolute overflow-hidden"
        style={{
          left: '78.174%',
          top: '5.405%',
          width: '20.462%',
          height: '66.023%',
          maskImage: `url("${xSrc}")`,
          WebkitMaskImage: `url("${xSrc}")`,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      >
        <div className="onyiix-metallic-ambient" />
        <div className="onyiix-metallic-shine-beam" />
        <div className="onyiix-metallic-shine-secondary" />
        <div className="onyiix-metallic-glint" />
      </div>
    </div>
  );
};

export default OnyiixLogo;
