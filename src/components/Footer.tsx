import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { OnyiixLogo } from './OnyiixLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-neutral-800 bg-neutral-950 px-5 py-10 text-white sm:px-8 sm:py-12">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-24 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-9 pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.15fr_1fr_1fr] lg:gap-10 xl:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <OnyiixLogo variant="white" height={40} />
            <p className="mt-4 max-w-sm text-xs leading-5 text-neutral-400 sm:text-sm">
              Useful digital products, thoughtfully designed and engineered to last.
            </p>
            <div className="mt-5 space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-blue-400" /><span>Bengaluru, Karnataka, India</span></div>
              <a href="mailto:maazmohammed112@gmail.com" className="flex items-center gap-2 break-all transition-colors hover:text-white"><Mail className="h-4 w-4 shrink-0 text-blue-400" /><span>maazmohammed112@gmail.com</span></a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Studio</p>
            <nav aria-label="Studio links" className="flex flex-col items-start gap-3 text-sm font-medium text-neutral-300">
              <a href="/about" className="transition-colors hover:text-blue-400">About the studio</a>
              <a href="/about#founders" className="transition-colors hover:text-blue-400">Founder profiles</a>
              <a href="/careers" className="transition-colors hover:text-blue-400">Careers</a>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Our Products</p>
            <nav aria-label="Our products links" className="flex flex-col items-start gap-3 text-sm font-medium text-neutral-300">
              <a
                href="https://discussit.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discuss - Developer discussion platform (opens in a new tab)"
                className="group flex flex-col items-start gap-1 transition-colors"
              >
                <span className="inline-flex items-center gap-1 font-medium text-neutral-300 transition-colors group-hover:text-blue-400">
                  Discuss
                  <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
                </span>
                <span className="text-xs font-normal text-neutral-400 transition-colors group-hover:text-neutral-300">
                  Developer discussion platform
                </span>
              </a>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Explore</p>
            <nav aria-label="Explore links" className="flex flex-col items-start gap-3 text-sm font-medium text-neutral-300">
              <a href="/services/web-development" className="transition-colors hover:text-blue-400">Web development</a>
              <a href="/services/saas-platforms" className="transition-colors hover:text-blue-400">SaaS platforms</a>
              <a href="/services/digital-marketing" className="transition-colors hover:text-blue-400">Digital marketing</a>
              <a href="/global" className="transition-colors hover:text-blue-400">Global delivery</a>
              <a href="/sitemap" className="transition-colors hover:text-blue-400">Sitemap</a>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Connect</p>
            <nav aria-label="Connect and legal links" className="flex flex-col items-start gap-3 text-sm font-medium text-neutral-300">
              <a href="#contact" className="inline-flex items-center gap-1.5 transition-colors hover:text-blue-400">Start a project <ArrowUpRight className="h-3.5 w-3.5" /></a>
              <a href="/terms" className="transition-colors hover:text-blue-400">Terms of service</a>
              <a href="/privacy" className="transition-colors hover:text-blue-400">Privacy policy</a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-neutral-800/90 pt-5 text-center text-[11px] font-medium tracking-wide text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-xs">
          <span>&copy; 2026 ONYIIX. All rights reserved.</span>
          <span>Founder-led in Bengaluru. Built for everywhere.</span>
        </div>
      </div>
    </footer>
  );
};
