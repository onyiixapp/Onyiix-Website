import React from 'react';
import { ArrowLeft, ArrowUpRight, Globe, FileCode } from 'lucide-react';

interface SitemapPageProps {
  onBack: () => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onBack }) => {
  const sections = [
    {
      category: 'Main Studio Pages',
      links: [
        { label: 'Home & Hero Section', path: '/#home', desc: 'Main landing with WebGL shaders & live Bengaluru clock' },
        { label: 'About Studio & Founders', path: '/about', desc: 'Genesis story & profiles of Mohammed Maaz A and Suman Kumar Singh' },
        { label: 'Careers & Opportunities', path: '/careers', desc: 'Active openings & freelance speculative portfolio intake' },
      ],
    },
    {
      category: 'Engineering & Capabilities',
      links: [
        { label: 'Featured Client Projects', path: '/#projects', desc: 'primkart.app, Workshop Management SaaS, Narrativ, Luminar' },
        { label: '4-Pillar Services', path: '/#services', desc: 'CMS, SaaS, Full-Stack Web Development, and Ongoing Optimization' },
        { label: 'Interactive Package Selector', path: '/#selector', desc: '3-step qualification & recommendation tool' },
        { label: '8-Stage Engineering Pipeline', path: '/#process', desc: 'From discovery to deployment and post-launch maintenance' },
        { label: 'Packages & Pricing', path: '/#packages', desc: 'Starter, Business, Professional, and SaaS with 1-Month Free SLA' },
      ],
    },
    {
      category: 'Legal, Trust & Crawlers',
      links: [
        { label: 'Terms of Service', path: '/terms', desc: 'Client engagement rules, IP transfer, and warranties' },
        { label: 'Privacy Policy', path: '/privacy', desc: 'Data protection and confidentiality charter' },
        { label: 'XML Machine Sitemap', path: '/sitemap.xml', desc: 'Machine-readable XML sitemap for search engines' },
        { label: 'Robots Directives', path: '/robots.txt', desc: 'Crawler directives for search bots' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-28 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-black mb-8 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#F26522] text-xs font-semibold mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>SEO &amp; Navigation Directory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900">
            HTML Sitemap
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Direct navigation indexing for all public routes, documentation, legal charters, and service pillars of ASME Digital Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((sec) => (
            <div key={sec.category} className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-[#F26522]" />
                <span>{sec.category}</span>
              </h2>

              <ul className="space-y-4">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.path}
                      className="group block"
                    >
                      <div className="flex items-center justify-between text-sm font-semibold text-gray-900 group-hover:text-[#F26522] transition-colors">
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-xs text-gray-500 block mt-0.5">
                        {link.desc}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
