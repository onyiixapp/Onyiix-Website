import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Globe2 } from 'lucide-react';

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

        {/* Studio Philosophy Narrative */}
        <div className="px-5 sm:px-8 lg:px-12 max-w-4xl mb-12 text-sm sm:text-base text-gray-700 leading-relaxed space-y-4">
          <p>
            ASME Studio is a boutique software engineering and product design practice founded in <strong>Bengaluru, India</strong>. We specialize in turning high-friction business operations into fluid, high-converting digital products, multi-tenant SaaS platforms, and automated workflow engines.
          </p>
          <p>
            Every system we deploy is backed by our <strong>30-Day Zero-Cost Bug Warranty</strong>, <strong>1-Month Free Website Maintenance SLA</strong>, and <strong>100% Code Ownership guarantee</strong>.
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

        {/* Architectural Pillars Cards */}
        <div className="px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80">
            <ShieldCheck className="w-6 h-6 text-[#F26522] mb-3" />
            <h3 className="text-base font-bold text-gray-900 mb-1">
              Engineering Rigor
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Clean TypeScript architecture with zero bloat and verified sub-second rendering across all device viewports.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80">
            <Zap className="w-6 h-6 text-[#F26522] mb-3" />
            <h3 className="text-base font-bold text-gray-900 mb-1">
              Performance First
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Strict adherence to Core Web Vitals (≤ 2.5s LCP) ensuring high search visibility and instant customer conversions.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80">
            <Globe2 className="w-6 h-6 text-[#F26522] mb-3" />
            <h3 className="text-base font-bold text-gray-900 mb-1">
              Global Delivery
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Serving fast-growing businesses across India, France, and worldwide with full intellectual property transfer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
