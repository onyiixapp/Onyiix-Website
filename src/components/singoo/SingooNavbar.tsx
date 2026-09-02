import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SingooNavbarProps {
  onOpenContactModal: () => void;
}

export const SingooNavbar: React.FC<SingooNavbarProps> = ({ onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 pointer-events-none">
      <div className="container max-w-7xl mx-auto h-24 px-4 sm:px-6 lg:px-12 flex items-center justify-between pointer-events-auto">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-md group-hover:scale-105 transition-transform">
              O
            </div>
            <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              ONYIIX
            </span>
          </a>
        </div>

        {/* Center: Singoo Floating Pill Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center space-x-1 rounded-full p-1.5 shadow-lg bg-white/95 backdrop-blur-md border border-neutral-200/80">
            <a
              href="#featured-work"
              className="text-sm font-medium transition-colors px-5 py-2 rounded-full text-neutral-800 hover:text-blue-600 hover:bg-neutral-50"
            >
              Work
            </a>
            <a
              href="#services"
              className="text-sm font-medium transition-colors px-5 py-2 rounded-full text-neutral-800 hover:text-blue-600 hover:bg-neutral-50"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm font-medium transition-colors px-5 py-2 rounded-full text-neutral-800 hover:text-blue-600 hover:bg-neutral-50"
            >
              Process
            </a>
            <a
              href="#packages"
              className="text-sm font-medium transition-colors px-5 py-2 rounded-full text-neutral-800 hover:text-blue-600 hover:bg-neutral-50"
            >
              Packages
            </a>
            <a
              href="#faqs"
              className="text-sm font-medium transition-colors px-5 py-2 rounded-full text-neutral-800 hover:text-blue-600 hover:bg-neutral-50"
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-colors px-5 py-2 rounded-full text-neutral-800 hover:text-blue-600 hover:bg-neutral-50"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Right: Social Links & Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xs font-semibold text-neutral-800 hover:text-blue-600 transition-colors uppercase tracking-wider"
            href="https://linkedin.com/in/mohammed-maaz-a-0aa730217/"
          >
            Ln
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
            className="text-xs font-semibold text-neutral-800 hover:text-blue-600 transition-colors uppercase tracking-wider"
            href="https://maazprofile.tech"
          >
            Pf
          </a>
          <button
            type="button"
            onClick={onOpenContactModal}
            className="bg-black text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-1 shadow-sm"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenContactModal}
            className="bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full"
          >
            Inquire
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-900 rounded-full bg-white shadow-sm border border-neutral-200"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 bg-white rounded-3xl p-6 shadow-2xl border border-neutral-200 pointer-events-auto"
          >
            <div className="flex flex-col space-y-3 text-base font-semibold text-neutral-900">
              <a
                href="#featured-work"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                Work
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                Services
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                Process
              </a>
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                Packages
              </a>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                FAQs
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-blue-600 py-1"
              >
                Contact
              </a>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">ONYIIX • Bengaluru</span>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
