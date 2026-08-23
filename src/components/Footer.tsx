import React from 'react';
import { ArrowUpRight, Globe, Mail, ShieldCheck, Briefcase, Users } from 'lucide-react';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  return (
    <footer className="bg-black/60 border-t border-white/10 pt-20 pb-14 px-4 sm:px-6 relative overflow-hidden backdrop-blur-xl">
      <div className="max-w-6xl mx-auto">
        {/* Top Callout */}
        <div className="pb-12 border-b border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <span className="font-sans text-xs font-semibold text-sky-400 uppercase tracking-widest block mb-2">
              08 / INITIATE ENGAGEMENT
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight font-sans">
              Let&apos;s engineer your <br />
              <span className="font-serif italic text-sky-300">next digital breakthrough.</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenContactModal}
            className="bg-white text-black font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-2xl shrink-0"
          >
            <span>Initiate Build</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* 3-Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-white/10 text-xs font-sans">
          {/* Col 1: Brand & Icon Action Hub */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-white">
                ASME
              </span>
              <span className="text-[10px] font-sans font-semibold tracking-wider text-sky-400 bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-400/30">
                STUDIO
              </span>
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm font-sans">
              Boutique software engineering studio. We build high-converting websites, scalable multi-tenant SaaS platforms, and intelligent AI workflows.
            </p>

            {/* Clean Icon Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="mailto:maazmohammed112@gmail.com"
                aria-label="Email Studio"
                title="Email ASME Studio"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-sky-400/50 hover:bg-white/10 transition-all shadow-md"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://maazprofile.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
                title="Studio Portfolio"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-sky-400/50 hover:bg-white/10 transition-all shadow-md"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://linkedin.com/in/mohammed-maaz-a-0aa730217/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-sky-400/50 hover:bg-white/10 transition-all shadow-md"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links with /about & /careers dedicated routes */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider text-white font-bold font-sans">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs text-white/60 font-sans">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  01 / Core Services
                </a>
              </li>
              <li>
                <a href="#selector" className="hover:text-sky-300 text-sky-400 transition-colors">
                  02 / Package Selector
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  03 / Engineering Process
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  04 / Delivered Portfolio
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  05 / Packages &amp; Pricing
                </a>
              </li>
              <li>
                <a href="#maintenance" className="hover:text-white transition-colors">
                  06 / 1-Month Free Maintenance
                </a>
              </li>
              {/* Dedicated /about tab (Footer only) */}
              <li>
                <a
                  href="/about"
                  className="hover:text-sky-300 text-white/90 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Users className="w-3 h-3 text-sky-400" />
                  <span>07 / About Studio &amp; Founders</span>
                </a>
              </li>
              {/* Dedicated /careers tab (Footer only) */}
              <li>
                <a
                  href="/careers"
                  className="hover:text-sky-300 text-white/90 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Briefcase className="w-3 h-3 text-sky-400" />
                  <span>08 / Careers</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality Charter */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-wider text-white font-bold font-sans">
              Engineering SLA
            </p>
            <div className="liquid-glass rounded-2xl p-4 space-y-2 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-sans text-sky-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>30-Day Zero-Cost Bug Warranty</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                Every client platform includes 30 days of complimentary bug resolution and direct engineering support.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} ASME DIGITAL STUDIO. All rights reserved.
          </div>
          <div>
            Bengaluru, India (12.9716° N, 77.5946° E) • Delivered Nationwide &amp; Globally
          </div>
        </div>
      </div>
    </footer>
  );
};
