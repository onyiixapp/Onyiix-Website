import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToContact: (quote: {
    typeName: string;
    totalPrice: number;
    totalDays: number;
    features: string[];
    isRush: boolean;
  }) => void;
}

export const EstimatorModal: React.FC<EstimatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToContact,
}) => {
  const [projectTypeIndex, setProjectTypeIndex] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['rag']);
  const [isRush, setIsRush] = useState(false);

  const projectTypes = [
    {
      name: 'High-Converting Landing Page',
      basePrice: 900,
      baseDays: 4,
      desc: 'Sub-second lead funnel, dynamic interactive forms, analytics & CRM integration.',
    },
    {
      name: 'AI Web Application & Chatbot',
      basePrice: 2200,
      baseDays: 8,
      desc: 'Token-streaming LLMs, prompt engineering, pgvector knowledge retrieval.',
    },
    {
      name: 'Headless E-Commerce Store',
      basePrice: 2800,
      baseDays: 10,
      desc: '0ms optimistic cart, pre-warmed Stripe checkout, inventory sync.',
    },
    {
      name: 'Full-Scale MVP / SaaS Platform',
      basePrice: 4500,
      baseDays: 14,
      desc: 'Multi-tenant auth, Postgres schema, Stripe billing, admin dashboard.',
    },
  ];

  const addonsList = [
    { id: 'rag', name: 'Custom Vector RAG Knowledge Base', price: 800, days: 2 },
    { id: 'analytics', name: 'Custom Telemetry & Live Dashboard', price: 500, days: 1 },
    { id: 'seo', name: 'International Multi-lingual i18n', price: 600, days: 2 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentType = projectTypes[projectTypeIndex];
  const addonsPrice = selectedAddons.reduce((sum, id) => {
    const found = addonsList.find((a) => a.id === id);
    return sum + (found ? found.price : 0);
  }, 0);
  const addonsDays = selectedAddons.reduce((sum, id) => {
    const found = addonsList.find((a) => a.id === id);
    return sum + (found ? found.days : 0);
  }, 0);

  const rawPrice = currentType.basePrice + addonsPrice;
  const totalPrice = isRush ? Math.round(rawPrice * 1.25) : rawPrice;
  const totalDays = isRush
    ? Math.max(2, Math.round((currentType.baseDays + addonsDays) * 0.65))
    : currentType.baseDays + addonsDays;

  const handleProceed = () => {
    const chosenFeatureNames = selectedAddons
      .map((id) => addonsList.find((a) => a.id === id)?.name)
      .filter(Boolean) as string[];

    onProceedToContact({
      typeName: currentType.name,
      totalPrice,
      totalDays,
      features: chosenFeatureNames,
      isRush,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl liquid-glass rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto border border-white/15"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Scope &amp; Investment Estimator</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Architectural Calculator
              </h2>
              <p className="text-xs text-white/60 mt-1">
                Transparent pricing backed by Maaz &amp; Suman&apos;s 30-Day Zero-Cost Bug Warranty.
              </p>
            </div>

            {/* 1. Project Type Selection */}
            <div className="space-y-2 mb-6">
              <label className="block text-xs font-mono text-white/70 uppercase">
                Select Platform Scope
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((pt, idx) => (
                  <button
                    key={pt.name}
                    type="button"
                    onClick={() => setProjectTypeIndex(idx)}
                    className={`text-left p-3.5 rounded-2xl border transition-all ${
                      projectTypeIndex === idx
                        ? 'border-amber-400/80 bg-amber-400/10 text-white'
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between font-semibold text-xs text-white mb-1">
                      <span>{pt.name}</span>
                      <span className="font-mono text-amber-400 font-bold">${pt.basePrice}</span>
                    </div>
                    <p className="text-[11px] text-white/50 leading-relaxed">{pt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Optional Modules */}
            <div className="space-y-2 mb-6">
              <label className="block text-xs font-mono text-white/70 uppercase">
                Add-on Modules
              </label>
              <div className="space-y-2">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs transition-all ${
                        isChecked
                          ? 'border-emerald-400/60 bg-emerald-400/10 text-white'
                          : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={`w-3.5 h-3.5 rounded-md flex items-center justify-center border text-[9px] ${
                            isChecked
                              ? 'border-emerald-400 bg-emerald-400 text-black font-bold'
                              : 'border-white/30'
                          }`}
                        >
                          {isChecked && '✓'}
                        </span>
                        <span>{addon.name}</span>
                      </span>
                      <span className="font-mono text-emerald-400">+${addon.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Rush Priority Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl border border-white/10 bg-white/5 mb-6 text-xs">
              <div className="flex items-center gap-2.5">
                <Zap className={`w-4 h-4 ${isRush ? 'text-amber-400' : 'text-white/40'}`} />
                <div>
                  <span className="font-semibold text-white">Express Priority Sprint</span>
                  <p className="text-[11px] text-white/50">Reduces delivery time by ~35%</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsRush(!isRush)}
                className={`w-10 h-6 rounded-full p-0.5 transition-colors ${
                  isRush ? 'bg-amber-400' : 'bg-white/20'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-black transition-transform ${
                    isRush ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Price & Summary Box */}
            <div className="liquid-glass rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/15 mb-6">
              <div>
                <span className="text-[10px] font-mono text-white/50 uppercase block">
                  Estimated Investment
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-white">
                    ${totalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-amber-400">USD</span>
                </div>
                <span className="text-xs text-white/60 font-mono">
                  Estimated Delivery: ~{totalDays} business days
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>30-Day Zero-Cost Warranty Included</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleProceed}
              className="w-full bg-white text-black font-semibold text-sm py-3.5 rounded-full hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-2xl"
            >
              <span>Lock In Scope &amp; Brief Founders</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
