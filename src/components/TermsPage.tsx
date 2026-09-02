import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
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
            LEGAL &amp; COMPLIANCE
          </span>
          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-gray-900">
            Terms of Service
          </h1>
          <p className="text-xs text-gray-500 mt-2">
            Last Updated: August 2026 • ONYIIX, Bengaluru, India
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-sm text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">1. Engagement &amp; Scope</h2>
            <p>
              By engaging ONYIIX for website design, software architecture, SaaS platform development, or technical maintenance, you agree to these Terms of Service. All project scopes, deliverables, milestones, and payment schedules are defined in individual Statement of Work (SOW) agreements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">2. Intellectual Property &amp; Code Ownership</h2>
            <p>
              Upon receipt of final payment settlement, 100% of all intellectual property, source code, design assets, Figma files, and database schemas created specifically for the project are permanently transferred to the client. ONYIIX retains zero proprietary locks.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">3. 30-Day Zero-Cost Bug Warranty</h2>
            <p>
              ONYIIX guarantees all scoped deliverables against defects and functional errors for 30 calendar days following production deployment. Scoped bugs reported within this timeframe are diagnosed and patched at zero additional charge.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">4. 1-Month Free Website Maintenance SLA</h2>
            <p>
              Standard packages include thirty (30) days of bundled post-launch maintenance, encompassing uptime verification, security monitoring, technical SEO verification, and minor copy adjustments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">5. Governing Law</h2>
            <p>
              These terms and related agreements shall be governed by and construed in accordance with the laws of Bengaluru, Karnataka, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
