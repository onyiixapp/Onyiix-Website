import React from 'react';
import { ArrowLeft, Briefcase, Mail } from 'lucide-react';

interface CareersPageProps {
  onBack: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onBack }) => {
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
          <span className="text-xs font-semibold text-[#F26522] uppercase tracking-wider block mb-2">
            CAREERS AT ASME STUDIO
          </span>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900">
            Work with us
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            We are a lean engineering team focused on creating exceptional software architectures and digital experiences.
          </p>
        </div>

        {/* Current Openings Status */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200 text-center max-w-2xl mx-auto my-12">
          <div className="w-14 h-14 rounded-full bg-orange-50 text-[#F26522] flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-6 h-6" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            There are currently no active openings.
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
            We are not actively hiring full-time positions at this moment. However, exceptional freelance UI/UX designers, Next.js engineers, and AI specialists are always welcome to send their portfolio for upcoming client builds.
          </p>

          <a
            href="mailto:maazmohammed112@gmail.com?subject=ASME Studio Speculative Application / Portfolio"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-[#F26522] text-white text-xs font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send Speculative Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
};
