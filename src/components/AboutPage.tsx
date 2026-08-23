import React from 'react';
import { ArrowLeft, Mail, Globe, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onOpenProject: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, onOpenProject }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-28 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Navigation Back */}
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-black mb-8 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Studio Overview</span>
        </button>

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold mb-4">
            <Heart className="w-3.5 h-3.5" />
            <span>Our Genesis &amp; Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-950 leading-tight">
            About ASME Digital Studio
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 mt-6 leading-relaxed">
            Founded in <strong>2024</strong> during our academic journey by two relentless friends, <strong>Mohammed Maaz A</strong> and <strong>Suman Kumar Singh</strong>, ASME Studio was born with a singular purpose: to craft high-converting websites, scalable multi-tenant SaaS platforms, and automated AI systems with sub-second performance.
          </p>
        </div>

        {/* Key Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200/80">
            <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-lg font-bold text-neutral-950 mb-2">Zero-Compromise Velocity</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Every site is built with modern server components and zero-bloat styling, targeting ≤ 2.5s LCP on real-world mobile networks.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200/80">
            <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-lg font-bold text-neutral-950 mb-2">Full Code Ownership</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              100% intellectual property transfer upon delivery. No hidden monthly runtime locks or proprietary code lock-in.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200/80">
            <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-lg font-bold text-neutral-950 mb-2">1-Month Free Maintenance SLA</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Every project comes with 30 days of proactive support, uptime checks, and minor adjustments at zero extra cost.
            </p>
          </div>
        </div>

        {/* Detailed Founder Profiles */}
        <div className="space-y-10">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
            Meet the Founders &amp; Architects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mohammed Maaz A */}
            <div className="bg-neutral-50 rounded-3xl p-8 sm:p-10 border border-neutral-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                    Co-Founder &amp; Principal Architect
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Bengaluru, India</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 mb-1">
                  Mohammed Maaz A
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  BCA, MCA (Pursuing) • Analyst @ Cognizant • Lead Full-Stack Architect
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Specialized in multi-tenant SaaS architecture, React/Next.js edge caching, distributed database design, and autonomous AI token-streaming systems.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                <a
                  href="mailto:maazmohammed112@gmail.com"
                  className="text-xs font-semibold text-neutral-900 hover:text-red-600 flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-red-600" />
                  <span>maazmohammed112@gmail.com</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://maazprofile.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:text-black shadow-sm transition-colors"
                    aria-label="Maaz Portfolio"
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mohammed-maaz-a-0aa730217/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:text-black shadow-sm transition-colors"
                    aria-label="Maaz LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Suman Kumar Singh */}
            <div className="bg-neutral-50 rounded-3xl p-8 sm:p-10 border border-neutral-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                    Co-Founder &amp; Systems Engineer
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Delhi, India</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 mb-1">
                  Suman Kumar Singh
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  BCA Graduate • Systems Engineer • Performance &amp; Next.js Lead
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Specialized in zero-downtime deployment pipelines, headless commerce architectures, technical SEO structure, and high-availability database engines.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                <a
                  href="mailto:sumansingh.np13@gmail.com"
                  className="text-xs font-semibold text-neutral-900 hover:text-red-600 flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-red-600" />
                  <span>sumansingh.np13@gmail.com</span>
                </a>

                <a
                  href="https://github.com/sumansingh13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-neutral-700 hover:text-black bg-white px-3 py-1.5 rounded-full border border-neutral-200 shadow-sm transition-colors"
                >
                  GitHub: @sumansingh13
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to start your digital build?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Connect directly with Mohammed Maaz A &amp; Suman Kumar Singh today.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenProject}
            className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full transition-colors self-start sm:self-auto cursor-pointer"
          >
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};
