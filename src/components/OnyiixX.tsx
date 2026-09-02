import React from 'react';

export interface OnyiixXProps {
  className?: string;
  size?: number | string;
  variant?: 'dark' | 'white';
}

export const OnyiixX: React.FC<OnyiixXProps> = ({
  className = '',
  size = '0.84em',
  variant = 'dark',
}) => {
  const xSrc = variant === 'white' ? '/onyiix-x-white.png' : '/onyiix-x-metallic.png';

  return (
    <span
      className={`relative inline-block select-none overflow-hidden ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        verticalAlign: '-0.02em',
        aspectRatio: '195 / 171',
      }}
      aria-label="X"
    >
      <img
        src={xSrc}
        alt="X"
        className="h-full w-full object-contain block"
        draggable={false}
      />
      {/* Specular metallic shine beam masked directly to the X letter strokes */}
      <span
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          maskImage: `url("${xSrc}")`,
          WebkitMaskImage: `url("${xSrc}")`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
        aria-hidden="true"
      >
        <span className="onyiix-metallic-ambient" />
        <span className="onyiix-metallic-shine-beam" />
        <span className="onyiix-metallic-shine-secondary" />
        <span className="onyiix-metallic-glint" />
      </span>
    </span>
  );
};
