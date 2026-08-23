import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPageProps {
  onBack: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-black mb-8 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="mb-10">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider block mb-2">
            PRIVACY &amp; DATA PROTECTION
          </span>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 mt-2">
            Last Updated: August 2026 • Meyvaro Studio, Bengaluru, India
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-sm text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">1. Information We Collect</h2>
            <p>
              MEYVARO Studio collects information directly from you when you submit project briefs, book strategy calls, or contact our engineering leads. This includes your name, work email, company name, project requirements, and communication preferences.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">2. How We Use Information</h2>
            <p>
              Your information is strictly used to evaluate project feasibility, prepare technical estimates, communicate deliverables, and manage service agreements. We do not sell, lease, or monetize your contact or project data with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">3. Data Security &amp; Confidentiality</h2>
            <p>
              We implement industry-standard encryption and security safeguards to protect project proposals, code repositories, and correspondence against unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">4. Contacting Data Officer</h2>
            <p>
              For privacy inquiries or data removal requests, contact Mohammed Maaz A at <a href="mailto:maazmohammed112@gmail.com" className="text-[#2563EB] underline">maazmohammed112@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
