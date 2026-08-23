import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface WarrantySectionProps {
  onOpenInquiryModal: () => void;
}

export const WarrantySection: React.FC<WarrantySectionProps> = ({ onOpenInquiryModal }) => {
  const warrantyFeatures = [
    {
      title: 'Zero-Cost Regression Repairs',
      description: 'If any responsive layout anomaly, CSS glitch, or broken UI interaction appears within 30 days of launch, we patch it for free within 24 hours.',
    },
    {
      title: 'API & Webhook Resilience Guarantee',
      description: 'We guarantee your lead form webhooks, database queries, and payment APIs (Stripe, Resend, Supabase) remain stable and authenticated.',
    },
    {
      title: 'Performance & Lighthouse SLA',
      description: 'Your web application will maintain 95+ Google Lighthouse scores and sub-second load times throughout your initial growth phase.',
    },
    {
      title: '100% Source Code & IP Handover',
      description: 'Full GitHub repository ownership, environment configurations, and documented schemas transferred directly to your organization.',
    },
  ];

  return (
    <section id="warranty" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="paper-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#059669]/30 bg-[#059669]/10 px-4 py-1 text-xs font-mono font-semibold text-[#059669]">
              <ShieldCheck className="h-4 w-4" />
              <span>The Maaz &amp; Suman Quality Charter</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121316] leading-tight">
              30-Day Zero-Cost <br />
              <span className="text-[#8C857B]">Bug &amp; Quality Warranty.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6B6862] leading-relaxed">
              Most web agencies disappear the moment your final payment clears. Maaz &amp; Suman operate with complete accountability. Every website, AI application, and SaaS platform we deliver is protected by an unconditional 30-day warranty.
            </p>

            {/* Handwritten Founder Seal */}
            <div className="rounded-xl border border-[#EEA22A]/30 bg-[#FEF3D6] p-4 font-handwritten text-xl text-[#121316] leading-snug">
              &ldquo;We don&apos;t charge retainers for fixing our own code. If something isn&apos;t working as agreed, we patch it immediately at $0 cost to you.&rdquo;
              <div className="text-right text-sm text-[#6B6862] mt-1 font-sans font-medium">
                — Maaz &amp; Suman, Founding Engineers
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {warrantyFeatures.map((feat) => (
                <div key={feat.title} className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#121316]">
                    <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-[11px] text-[#6B6862] pl-6 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Warranty Badge Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ y: -4 }}
              className="w-full max-w-sm rounded-2xl border border-[#E6E2D8] bg-[#FAF8F3] p-7 text-center shadow-paper-elevated"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#059669]/10 text-[#059669] border border-[#059669]/30">
                <ShieldCheck className="h-8 w-8 stroke-[2]" />
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-[#059669] font-bold block">
                Official Studio Guarantee
              </span>

              <h3 className="font-display text-4xl sm:text-5xl font-bold text-[#121316] mt-2">
                30 DAYS
              </h3>
              <p className="text-xs font-mono text-[#059669] font-semibold mt-1">
                100% Free Maintenance &amp; Bug Fixes
              </p>

              <div className="my-5 space-y-2 text-xs text-[#6B6862] border-y border-[#E6E2D8] py-3.5 font-mono">
                <div className="flex justify-between">
                  <span>Device Coverage:</span>
                  <span className="text-[#121316] font-bold">100% (Mobile to 4K)</span>
                </div>
                <div className="flex justify-between">
                  <span>Patch Deployment:</span>
                  <span className="text-[#059669] font-bold">&lt; 24 Hours SLA</span>
                </div>
                <div className="flex justify-between">
                  <span>Client Cost:</span>
                  <span className="text-[#121316] font-bold">$0.00 USD</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenInquiryModal}
                className="btn-amber flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold"
              >
                <span>Start Risk-Free Project</span>
                <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
