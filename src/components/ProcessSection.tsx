import React from 'react';

export const ProcessSection: React.FC = () => {
  const stages = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      desc: 'Deep-dive session to uncover business objectives, tech requirements, target users, and competitive benchmarks.',
    },
    {
      step: '02',
      title: 'Requirements & Scope',
      desc: 'Defining crystal-clear functional deliverables, user journeys, data schemas, milestones, and contractual SLAs.',
    },
    {
      step: '03',
      title: 'Architecture & Strategy',
      desc: 'Selecting modern stack foundations (Next.js, Tailwind, PostgreSQL) ensuring sub-second performance from day zero.',
    },
    {
      step: '04',
      title: 'Interactive UI/UX Design',
      desc: 'High-fidelity Figma prototypes, modern design systems, micro-animations, and client design sign-off.',
    },
    {
      step: '05',
      title: 'Iterative Development',
      desc: 'Bi-weekly sprint demos with clean TypeScript codebases and zero unnecessary third-party dependencies.',
    },
    {
      step: '06',
      title: 'Testing & QA Hardening',
      desc: 'Cross-browser responsive audits, load time profiling, accessibility checks, and automated security testing.',
    },
    {
      step: '07',
      title: 'Deployment & Launch',
      desc: 'Production DNS configuration, edge CDN routing, technical SEO indexing, and seamless zero-downtime launch.',
    },
    {
      step: '08',
      title: 'Warranty & 1-Month SLA',
      desc: '30-Day Zero-Cost Bug Warranty + 1-Month Free Website Maintenance SLA for guaranteed post-launch peace of mind.',
    },
  ];

  return (
    <section
      id="process"
      className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            5
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Engineering Pipeline
          </div>
        </div>

        {/* Heading H2 */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16 px-5 sm:px-8 lg:px-12 max-w-5xl">
          8-Stage development roadmap.
        </h2>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 sm:px-8 lg:px-12">
          {stages.map((st) => (
            <div
              key={st.step}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 flex flex-col justify-between hover:border-gray-300 transition-colors"
            >
              <div>
                <span className="text-xs font-bold text-[#F26522] mb-3 block">
                  Stage {st.step}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
