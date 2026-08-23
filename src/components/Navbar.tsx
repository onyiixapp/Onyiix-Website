import React, { useState } from 'react';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenContactModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6 pointer-events-none">
      <nav className="max-w-6xl mx-auto liquid-glass rounded-full px-5 sm:px-7 py-3 flex items-center justify-between pointer-events-auto shadow-2xl backdrop-blur-xl border border-white/10">
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-sky-400/50 transition-colors">
              <Globe className="w-4 h-4 text-white transition-transform duration-300 group-hover:rotate-45" />
            </div>
            <span className="font-sans font-bold text-lg text-white tracking-tight">
              ASME
            </span>
            <span className="text-[10px] font-sans font-semibold tracking-wider text-sky-400 bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-400/30">
              STUDIO
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 ml-8 text-xs font-medium text-white/75">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#selector" className="hover:text-white transition-colors text-sky-300">
              Package Selector
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#packages" className="hover:text-white transition-colors">
              Packages
            </a>
            <a href="#maintenance" className="hover:text-white transition-colors">
              Maintenance
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </div>
        </div>

        {/* Right CTA (Unique & High-Converting) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenContactModal()}
            className="liquid-glass rounded-full px-5 py-2 text-white text-xs sm:text-sm font-medium hover:bg-white/10 hover:border-sky-400/50 transition-all flex items-center gap-1.5 border border-white/15 shadow-md"
          >
            <span>Initiate Build</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenContactModal()}
            className="liquid-glass rounded-full px-3 py-1 text-xs text-white font-medium border border-white/15"
          >
            Build
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white rounded-full liquid-glass"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-md mx-auto mt-3 liquid-glass-elevated rounded-2xl p-6 pointer-events-auto lg:hidden space-y-4 border border-white/15 backdrop-blur-2xl"
          >
            <div className="flex flex-col space-y-3 text-sm font-medium text-white/90">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1"
              >
                01 / Services (CMS, SaaS, Full-Stack, Optimization)
              </a>
              <a
                href="#selector"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-sky-300 text-sky-400 py-1"
              >
                02 / Interactive Package Selector
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1"
              >
                03 / 8-Stage Development Process
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1"
              >
                04 / Portfolio (primkart.app &amp; SaaS Builds)
              </a>
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1"
              >
                05 / Pricing &amp; Packages (Starter to SaaS)
              </a>
              <a
                href="#maintenance"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1"
              >
                06 / 1-Month Free Maintenance Offer
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1"
              >
                07 / FAQ &amp; Code Ownership
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1"
              >
                08 / About ASME Studio &amp; Founders
              </a>
            </div>

            <div className="pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full bg-white text-black font-semibold text-sm py-3 rounded-full flex items-center justify-center gap-1.5 shadow-lg"
              >
                <span>Initiate Build Proposal</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
