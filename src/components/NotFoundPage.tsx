import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';

interface NotFoundPageProps {
  onBack: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#EFEFEF] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-orange-50 text-[#F26522] flex items-center justify-center mb-6 shadow-sm">
        <Compass className="w-8 h-8" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-[#F26522] mb-2">
        ERROR 404
      </span>

      <h1 className="text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight mb-4">
        Oops, you are beyond imaginations!
      </h1>

      <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
        The coordinates or page you requested could not be located in our digital index. Let&rsquo;s get you back to safety.
      </p>

      <button
        type="button"
        onClick={onBack}
        className="bg-gray-900 hover:bg-[#F26522] text-white text-sm font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to ASME Home</span>
      </button>
    </div>
  );
};
