import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectProject?: (title: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectProject }) => {
  return (
    <section
      id="projects"
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            2
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Featured client work
          </div>
        </div>

        {/* Heading H2 */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16 px-5 sm:px-8 lg:px-12">
          Our projects
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          {/* Card 1 (Narrativ) */}
          <div
            onClick={() => onSelectProject && onSelectProject('Narrativ')}
            className="flex flex-col cursor-pointer group"
          >
            <div className="aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] relative shadow-sm">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Hover Expanding White Button */}
              <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[148px] rounded-full bg-white flex items-center justify-between px-2.5 transition-all duration-300 ease-in-out overflow-hidden shadow-md">
                <span className="text-[13px] font-medium text-gray-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 pl-2">
                  Learn more
                </span>

                {/* Link / Chain SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-gray-900 transition-transform duration-300 -rotate-45 group-hover:rotate-0 shrink-0"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
            </div>

            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed font-normal">
              Winner of Site of the Month 2025 - an interactive 3D showcase driving record engagement
            </p>
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
              Narrativ
            </h3>
          </div>

          {/* Card 2 (Luminar) */}
          <div
            onClick={() => onSelectProject && onSelectProject('Luminar')}
            className="flex flex-col cursor-pointer group"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] relative shadow-sm">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Hover Expanding Dark Button */}
              <div className="absolute bottom-4 left-4 bg-gray-900 h-9 w-9 group-hover:w-[168px] rounded-full flex items-center justify-between px-2.5 transition-all duration-300 ease-in-out overflow-hidden shadow-md">
                <span className="text-[13px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 pl-2">
                  View case study
                </span>

                <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 -rotate-45 group-hover:rotate-0 shrink-0 stroke-[2.5]" />
              </div>
            </div>

            <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed font-normal">
              Transforming a dated platform into a conversion-focused brand experience
            </p>
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
              Luminar
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
