import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit } from 'lucide-react';

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
      className="bg-white pt-20 sm:pt-28 pb-20 sm:pb-32 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6 sm:mb-8"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shadow-sm">
            5
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-200 bg-gray-50 rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-gray-900 shadow-sm flex items-center gap-1.5">
            <GitCommit className="w-3.5 h-3.5 text-[#F26522]" />
            <span>Engineering Pipeline</span>
          </div>
        </motion.div>

        {/* Heading H2 */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-5xl">
              8-Stage development roadmap.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-xl leading-relaxed">
              Transparent sprint delivery with zero guesswork, measurable milestones, and direct founder accountability.
            </p>
          </motion.div>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((st, idx) => (
            <motion.div
              key={st.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className="bg-gray-50/80 hover:bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 hover:border-gray-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black text-[#F26522] mb-3 block tracking-wider">
                  STAGE {st.step}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 tracking-tight">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
