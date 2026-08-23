import React from 'react';
import { MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-gray-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F26522] flex items-center justify-center font-bold text-xs text-white">
                AS
              </div>
              <span className="font-bold text-xl tracking-tight">ASME Studio</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              A boutique software engineering studio founded in Bengaluru, India. Building high-converting websites, multi-tenant SaaS platforms, and automated digital systems.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
              <span>Bengaluru, Karnataka, India • 12.9716° N, 77.5946° E</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-4">
              Navigation
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Core Capabilities
                </a>
              </li>
              <li>
                <a href="#selector" className="hover:text-white transition-colors">
                  Package Selector
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Engineering Pipeline
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Pricing &amp; SLA
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQs &amp; Guarantees
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Dedicated Pages */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-4">
              Company
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Studio &amp; Founders
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
                    No Openings
                  </span>
                </a>
              </li>
              <li>
                <a href="/sitemap" className="hover:text-white transition-colors">
                  Visual HTML Sitemap
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Delivered Work */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-4">
              Delivered Work
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <a
                  href="https://primkart.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F26522] transition-colors"
                >
                  primkart.app (Bengaluru)
                </a>
              </li>
              <li>
                <span className="text-gray-400">Workshop SaaS (France)</span>
              </li>
              <li>
                <span className="text-gray-400">Apex Engine Portal</span>
              </li>
              <li>
                <span className="text-gray-400">NeuralFlow Automation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} ASME Studio. All rights reserved. Handcrafted in Bengaluru, India.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/maazmohammed112/asme"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/mohammed-maaz-a-0aa730217/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://maazprofile.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
