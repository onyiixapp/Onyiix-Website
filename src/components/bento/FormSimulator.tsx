import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, RefreshCw, Send, ShieldCheck, Sparkles } from 'lucide-react';

export const FormSimulator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('Scale conversions & leads');
  const [timeline, setTimeline] = useState('Rush (7 Days)');
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
  };

  return (
    <div className="relative rounded-xl border border-white/10 bg-surface/90 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
      {/* Top simulated browser bar */}
      <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-ink-tertiary">
            live-demo.lead-engine.io
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-medium text-accent-emerald">
          <ShieldCheck className="h-3 w-3" />
          <span>Turnstile Active</span>
        </div>
      </div>

      {/* Form Content */}
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key={`step-${step}`}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between text-xs font-medium text-ink-muted">
              <span className="flex items-center gap-1 text-accent-cyan">
                <Sparkles className="h-3 w-3" /> Step {step} of 2
              </span>
              <span className="text-ink-tertiary font-mono">0ms State Transition</span>
            </div>

            {step === 1 ? (
              <div className="space-y-2.5">
                <label className="block text-xs font-semibold text-ink-primary">
                  What is your primary web platform goal?
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    'Scale conversions & leads',
                    'Integrate custom AI assistant',
                    'Launch modern SaaS MVP',
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setGoal(option)}
                      className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-xs transition-all ${
                        goal === option
                          ? 'border-accent-cyan bg-accent-cyan/10 text-ink-primary font-medium shadow-sm'
                          : 'border-white/5 bg-surface-elevated/60 text-ink-muted hover:border-white/20'
                      }`}
                    >
                      <span>{option}</span>
                      {goal === option && <CheckCircle2 className="h-3.5 w-3.5 text-accent-cyan" />}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-accent-cyan/15 border border-accent-cyan/30 px-3 py-2 text-xs font-semibold text-accent-cyan hover:bg-accent-cyan/25 transition-all"
                >
                  Continue <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <div className="space-y-2.5">
                <label className="block text-xs font-semibold text-ink-primary">
                  Desired Delivery Speed:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Standard (14 Days)', 'Rush (7 Days)'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setTimeline(tier)}
                      className={`rounded-lg border p-2.5 text-center text-xs transition-all ${
                        timeline === tier
                          ? 'border-accent-cyan bg-accent-cyan/10 text-ink-primary font-medium'
                          : 'border-white/5 bg-surface-elevated/60 text-ink-muted hover:border-white/20'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 rounded-lg border border-white/10 bg-surface-elevated px-3 py-2 text-xs text-ink-muted hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-accent-cyan to-blue-600 px-3 py-2 text-xs font-semibold text-black hover:opacity-95 shadow-glow-cyan"
                  >
                    <Send className="h-3.5 w-3.5" /> Submit to Webhook
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-4 text-center space-y-3"
          >
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/40">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-ink-primary">Webhook Dispatched (200 OK)</p>
              <p className="text-[11px] text-ink-muted mt-0.5">
                Lead synced to Telegram & CRM in <span className="text-accent-emerald font-mono">142ms</span>
              </p>
            </div>
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-surface-elevated px-3 py-1.5 text-[11px] text-ink-muted hover:text-white hover:border-white/20"
            >
              <RefreshCw className="h-3 w-3" /> Re-test Simulator
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
