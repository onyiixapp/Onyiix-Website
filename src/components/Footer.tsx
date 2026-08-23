import React from 'react';
import { AsmeLogo } from './AsmeLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-neutral-800 bg-neutral-950 px-5 py-10 text-white sm:px-8 sm:py-12">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-24 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center text-center">
        <AsmeLogo symbolSize={40} textColor="text-white" />
        <p className="mt-4 max-w-md text-xs leading-5 text-neutral-400 sm:text-sm">
          Useful digital products, thoughtfully designed and engineered to last.
        </p>
        <div className="mt-7 w-full border-t border-neutral-800/90 pt-5 text-[11px] font-medium tracking-wide text-neutral-500 sm:text-xs">
          &copy; 2026 Meyvaro Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
