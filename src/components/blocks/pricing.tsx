import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans?: PricingPlan[];
  title?: string;
  description?: string;
  onSelectPlan?: (planName: string) => void;
}

export function Pricing({
  title = "Pricing",
  onSelectPlan,
}: PricingProps) {
  return (
    <div id="pricing" className="py-20 px-5 sm:px-8 lg:px-12 bg-[#F4F7FC]">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-600">
            Investment
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#0B1020]">
            {title}
          </h2>
        </div>

        {/* Professional Announcement Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.05)] text-center relative overflow-hidden"
        >
          {/* Subtle ambient gradient highlight */}
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-6">
              New Engagement Model in Progress
            </span>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0B1020] leading-snug">
              We are actively structuring one of the most accessible and competitive pricing models yet, with dedicated builds starting from $499.
            </h3>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Our engineering team is refining our streamlined delivery tiers to make founder-led software engineering, web architectures, and automated digital systems available at unprecedented value.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
              Full public packages and fixed-scope sprint breakdowns will be published shortly. In the interim, custom project inquiries and early-access scoping are actively open.
            </p>

            {/* Structured Value Indicators without icons or emojis */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 border-y border-slate-100 py-6 text-left sm:text-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Entry Tier</p>
                <p className="text-lg font-bold text-[#0B1020] mt-1">Starting from $499</p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Turnaround</p>
                <p className="text-lg font-bold text-[#0B1020] mt-1">1 to 3 Weeks</p>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Assurance</p>
                <p className="text-lg font-bold text-[#0B1020] mt-1">Full IP &amp; 30-Day Warranty</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onSelectPlan?.("Early Access Scope (Starting from $499)")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold tracking-tight transition-all duration-200 shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_14px_35px_rgba(37,99,235,0.3)] hover:-translate-y-0.5"
              >
                Inquire for Early-Access Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Retained for backward compatibility
export const onyiixPlans: PricingPlan[] = [];
