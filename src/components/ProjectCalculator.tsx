import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectTypes, featureOptions, ProjectOption } from '../data/calculator';
import { Check, Clock, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface ProjectCalculatorProps {
  onLockInQuote?: (quoteDetails: {
    typeName: string;
    totalPrice: number;
    totalDays: number;
    selectedFeatures: string[];
    isRush: boolean;
  }) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onLockInQuote }) => {
  const [selectedType, setSelectedType] = useState<ProjectOption>(projectTypes[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['forms_crm']);
  const [isRush, setIsRush] = useState(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const basePrice = selectedType.basePrice;
  const featuresPrice = selectedFeatures.reduce((acc, id) => {
    const f = featureOptions.find((item) => item.id === id);
    return acc + (f ? f.price : 0);
  }, 0);

  const rawPrice = basePrice + featuresPrice;
  const totalPrice = isRush ? Math.round(rawPrice * 1.25) : rawPrice;

  const baseDays = selectedType.baseDays;
  const featuresDays = selectedFeatures.reduce((acc, id) => {
    const f = featureOptions.find((item) => item.id === id);
    return acc + (f ? f.days : 0);
  }, 0);

  const rawDays = baseDays + featuresDays;
  const totalDays = isRush ? Math.max(4, Math.round(rawDays * 0.65)) : rawDays;

  const handleLockIn = () => {
    const activeFeatureNames = featureOptions
      .filter((f) => selectedFeatures.includes(f.id))
      .map((f) => f.name);

    if (onLockInQuote) {
      onLockInQuote({
        typeName: selectedType.name,
        totalPrice,
        totalDays,
        selectedFeatures: activeFeatureNames,
        isRush,
      });
    }

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-[#E6E2D8] bg-[#F3EFE7] px-4 py-1 text-xs font-mono text-[#6B6862] mb-3"
        >
          <span className="text-[#EEA22A] font-bold">04 / PRICING &amp; SCOPE ESTIMATOR</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316]"
        >
          Instant Project Estimator. <br />
          <span className="text-[#8C857B]">Transparent Founder Pricing.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-base text-[#6B6862]"
        >
          Select your platform type and required architecture to generate an instant estimate. Every project includes full code ownership and a 30-day bug warranty.
        </motion.p>
      </div>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Scope Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Base Type */}
          <div className="paper-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#EEA22A] font-bold">
                Step 01 / Core Architecture
              </span>
              <span className="text-xs font-mono text-[#948E83]">Select Base Type</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectTypes.map((type) => {
                const isSelected = selectedType.id === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`relative rounded-xl border p-4 text-left transition-all ${
                      isSelected
                        ? 'border-[#EEA22A] bg-[#FEF3D6] shadow-sm'
                        : 'border-[#E6E2D8] bg-[#FAF8F3] hover:border-[#D6D0C2]'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#EEA22A] text-[#121316]">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                    )}
                    <p className="font-display text-sm font-bold text-[#121316] mb-1">
                      {type.name}
                    </p>
                    <p className="text-[11px] text-[#6B6862] leading-relaxed mb-3">
                      {type.description}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#E6E2D8] font-mono text-xs">
                      <span className="text-[#121316] font-bold">From ${type.basePrice}</span>
                      <span className="text-[#948E83]">~{type.baseDays} Days</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Addon Features */}
          <div className="paper-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#EEA22A] font-bold">
                Step 02 / Advanced Modules
              </span>
              <span className="text-xs font-mono text-[#948E83]">Optional Modules</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featureOptions.map((f) => {
                const isChecked = selectedFeatures.includes(f.id);
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => toggleFeature(f.id)}
                    className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                      isChecked
                        ? 'border-[#EEA22A] bg-[#FEF3D6] shadow-sm'
                        : 'border-[#E6E2D8] bg-[#FAF8F3] hover:border-[#D6D0C2]'
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                        isChecked
                          ? 'border-[#EEA22A] bg-[#EEA22A] text-[#121316]'
                          : 'border-[#D6D0C2] bg-white'
                      }`}
                    >
                      {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#121316]">{f.name}</p>
                      <p className="text-[10px] text-[#6B6862] mt-0.5 leading-normal">
                        {f.description}
                      </p>
                      <p className="mt-1.5 font-mono text-[11px] font-semibold text-[#121316]">
                        +${f.price} <span className="text-[#948E83] font-normal">(+{f.days}d)</span>
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Speed Tier */}
          <div className="paper-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#EEA22A] font-bold">
                Step 03 / Velocity Tier
              </span>
              <span className="text-xs font-mono text-[#948E83]">Delivery Pace</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsRush(false)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  !isRush
                    ? 'border-[#059669] bg-[#059669]/10 shadow-sm'
                    : 'border-[#E6E2D8] bg-[#FAF8F3] hover:border-[#D6D0C2]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display text-sm font-bold text-[#121316]">
                    Standard Sprint
                  </span>
                  {!isRush && <CheckCircle2 className="h-4 w-4 text-[#059669]" />}
                </div>
                <p className="text-xs text-[#6B6862]">
                  Normal pace with weekly staging previews.
                </p>
                <p className="mt-2 font-mono text-xs text-[#059669] font-bold">
                  Standard Rate
                </p>
              </button>

              <button
                type="button"
                onClick={() => setIsRush(true)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  isRush
                    ? 'border-[#EEA22A] bg-[#FEF3D6] shadow-sm'
                    : 'border-[#E6E2D8] bg-[#FAF8F3] hover:border-[#D6D0C2]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display text-sm font-bold text-[#121316] flex items-center gap-1.5">
                    <Zap className="h-4 w-4 text-[#EEA22A]" /> Express Rush (Priority)
                  </span>
                  {isRush && <CheckCircle2 className="h-4 w-4 text-[#EEA22A]" />}
                </div>
                <p className="text-xs text-[#6B6862]">
                  Dedicated daily focus. 35-40% faster launch.
                </p>
                <p className="mt-2 font-mono text-xs text-[#EEA22A] font-bold">
                  +25% Priority Fee
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Right Sticky Summary Card */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="paper-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#E6E2D8] pb-4 mb-5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#121316] font-bold">
                Live Quote Summary
              </span>
              <span className="rounded-full bg-[#059669]/10 border border-[#059669]/30 px-2.5 py-0.5 text-[11px] font-mono text-[#059669] font-semibold flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" /> 30-Day Warranty ($0)
              </span>
            </div>

            {/* Selected Base Type */}
            <div className="mb-5 space-y-3">
              <div className="flex justify-between items-start text-sm">
                <div>
                  <p className="font-bold text-[#121316]">{selectedType.name}</p>
                  <p className="text-xs text-[#948E83]">Core Architecture</p>
                </div>
                <span className="font-mono font-bold text-[#121316]">${basePrice}</span>
              </div>

              {/* Add-ons List */}
              {selectedFeatures.length > 0 && (
                <div className="pt-2 border-t border-[#E6E2D8] space-y-1.5">
                  <p className="text-[10px] font-mono uppercase text-[#948E83]">
                    Included Add-ons ({selectedFeatures.length}):
                  </p>
                  {selectedFeatures.map((id) => {
                    const feat = featureOptions.find((f) => f.id === id);
                    if (!feat) return null;
                    return (
                      <div key={id} className="flex justify-between items-center text-xs text-[#6B6862]">
                        <span>• {feat.name}</span>
                        <span className="font-mono text-[#121316] font-semibold">+${feat.price}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {isRush && (
                <div className="pt-2 flex justify-between items-center text-xs text-[#EEA22A] border-t border-[#E6E2D8] font-bold">
                  <span>Express Rush Priority (+25%)</span>
                  <span className="font-mono">+${totalPrice - rawPrice}</span>
                </div>
              )}
            </div>

            {/* Timeline */}
            <div className="rounded-xl border border-[#E6E2D8] bg-[#FAF8F3] p-3.5 mb-5 space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#6B6862] flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#EEA22A]" /> Turnaround:
                </span>
                <span className="font-bold text-[#121316]">
                  {totalDays} Business Days
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6B6862] flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#059669]" /> Warranty:
                </span>
                <span className="font-bold text-[#059669]">
                  30 Days Included ($0)
                </span>
              </div>
            </div>

            {/* Total Estimated Price */}
            <div className="border-t border-[#E6E2D8] pt-4 mb-5">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-xs uppercase font-mono tracking-wider text-[#948E83]">
                    Estimated Investment
                  </p>
                  <p className="text-[11px] text-[#948E83]">50% Upfront, 50% on Launch</p>
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl font-bold text-[#121316]">
                    ${totalPrice.toLocaleString()}
                  </span>
                  <span className="block font-mono text-[10px] text-[#948E83]">USD (All Inclusive)</span>
                </div>
              </div>
            </div>

            {/* Founder Note */}
            <div className="mb-5 rounded-lg bg-[#FEF3D6] border border-[#EEA22A]/30 p-2.5 font-handwritten text-base text-[#121316] text-center leading-tight">
              &ldquo;Maaz &amp; Suman review every quote personally — zero agency markups.&rdquo;
            </div>

            {/* Lock In CTA */}
            <button
              type="button"
              onClick={handleLockIn}
              className="btn-amber flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold"
            >
              <span>Lock in Scope with Maaz &amp; Suman</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
