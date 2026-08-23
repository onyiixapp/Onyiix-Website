import React from 'react';
import { ArrowRight, Mail, Globe, MapPin } from 'lucide-react';

interface AboutSectionProps {
  onOpenAboutModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAboutModal }) => {
  const smallImageUrl =
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85';
  const largeImageUrl =
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85';

  return (
    <section
      id="studio"
      className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-20 lg:pb-28 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            1
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Introducing ASME Studio
          </div>
        </div>

        {/* Heading H2 */}
        <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-20 px-5 sm:px-8 lg:px-12 max-w-5xl">
          Strategy-led creatives, delivering
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          results in digital and beyond.
        </h2>

        {/* Story Narrative */}
        <div className="px-5 sm:px-8 lg:px-12 max-w-4xl mb-12 text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
          <p>
            Founded in <strong className="text-gray-900 font-semibold">2024</strong> during our academic journey by two relentless friends, <strong className="text-gray-900 font-semibold">Mohammed Maaz A</strong> &amp; <strong className="text-gray-900 font-semibold">Suman Kumar Singh</strong>, ASME Studio was forged on an ambition: to build high-converting websites, scalable multi-tenant SaaS platforms, and automated AI systems with sub-second performance.
          </p>
          <p>
            Handcrafted in Bengaluru, India, we partner with founders and enterprises across India, France, and globally. Every platform we deploy is backed by our <strong>30-Day Zero-Cost Bug Warranty</strong>, <strong>1-Month Free Maintenance</strong>, and <strong>100% Code Ownership guarantee</strong>.
          </p>
        </div>

        {/* Desktop 3-Column Grid */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12 mb-16">
          {/* Left Column (self-end) */}
          <div className="self-end w-full">
            <img
              src={smallImageUrl}
              alt="ASME Studio Creative Process"
              loading="lazy"
              className="w-full aspect-[438/346] rounded-2xl object-cover shadow-sm"
            />
          </div>

          {/* Center Column (self-start, flex justify-end) */}
          <div className="self-start flex flex-col justify-end items-start h-full pb-2">
            <p className="text-[16px] xl:text-[18px] leading-[1.65] font-medium text-gray-900 whitespace-nowrap mb-8">
              Through research, creative thinking and iteration
              <br />
              we help growing brands realize their
              <br />
              digital full potential.
            </p>

            <button
              type="button"
              onClick={onOpenAboutModal}
              className="bg-[#F26522] hover:bg-[#e05a1a] text-white text-[14px] rounded-full pl-6 pr-2 py-2 flex items-center gap-3 group transition-colors duration-300 cursor-pointer shadow-sm"
            >
              <div className="overflow-hidden h-[20px] flex flex-col justify-start">
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full font-medium">
                  About our studio
                </span>
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full font-medium">
                  About our studio
                </span>
              </div>

              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <ArrowRight className="w-4 h-4 text-[#F26522] stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Right Column (self-end) */}
          <div className="self-end w-full">
            <img
              src={largeImageUrl}
              alt="ASME Studio Design Showcase"
              loading="lazy"
              className="w-full aspect-[3/2] rounded-2xl object-cover shadow-sm"
            />
          </div>
        </div>

        {/* Mobile/Tablet Stacked Media */}
        <div className="lg:hidden px-5 sm:px-8 mb-12">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <img
              src={smallImageUrl}
              alt="ASME Studio Creative Process"
              loading="lazy"
              className="w-full sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-2xl object-cover"
            />
            <img
              src={largeImageUrl}
              alt="ASME Studio Design Work"
              loading="lazy"
              className="w-full sm:w-[55%] aspect-[900/600] rounded-xl sm:rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Founder Profiles Grid */}
        <div className="px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mohammed Maaz A */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80 flex flex-col justify-between hover:border-gray-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F26522] bg-orange-50 px-3 py-1 rounded-full">
                  Co-Founder &amp; Principal Architect
                </span>
                <MapPin className="w-4 h-4 text-gray-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Mohammed Maaz A
              </h3>
              <p className="text-xs text-gray-500 mt-1 mb-4">
                Bengaluru, India • BCA, MCA (Pursuing) • Analyst @ Cognizant
              </p>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Full-stack software architect specializing in ultra-fast React/Next.js platforms, distributed API engines, and autonomous token-streaming AI workflows.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs text-gray-500">Founder Channels</span>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:maazmohammed112@gmail.com"
                  aria-label="Email Maaz"
                  className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-400 transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://maazprofile.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maaz Portfolio"
                  className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-400 transition-colors shadow-sm"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com/in/mohammed-maaz-a-0aa730217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maaz LinkedIn"
                  className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-400 transition-colors shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Suman Kumar Singh */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80 flex flex-col justify-between hover:border-gray-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F26522] bg-orange-50 px-3 py-1 rounded-full">
                  Co-Founder &amp; Systems Engineer
                </span>
                <MapPin className="w-4 h-4 text-gray-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Suman Kumar Singh
              </h3>
              <p className="text-xs text-gray-500 mt-1 mb-4">
                Delhi, India • BCA Graduate • Systems &amp; Next.js Specialist
              </p>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Systems engineer focused on edge caching, headless checkout velocity, scalable database schemas, and zero-downtime client deployments.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
              <span>Location: Delhi, India</span>
              <span className="font-semibold text-gray-900">100% SLA Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
