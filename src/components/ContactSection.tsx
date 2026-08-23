import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, ShieldCheck, User, Mail, MessageSquare, Briefcase } from 'lucide-react';

interface ContactSectionProps {
  prefilledQuote?: {
    typeName: string;
    totalPrice: number;
    totalDays: number;
    selectedFeatures: string[];
    isRush: boolean;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledQuote }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'High-Converting Landing Page',
    budgetRange: '$1,000 - $3,000',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledQuote) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefilledQuote.typeName,
        budgetRange: `$${prefilledQuote.totalPrice.toLocaleString()} USD (Estimated)`,
        description: `Selected Scope: ${prefilledQuote.typeName}\nAdd-on Modules: ${prefilledQuote.selectedFeatures.join(', ')}\nDelivery Pace: ${
          prefilledQuote.isRush ? 'Express Rush Priority' : 'Standard Sprint'
        } (~${prefilledQuote.totalDays} days)\nWarranty: 30-Day Free Bug Warranty Included.`,
      }));
    }
  }, [prefilledQuote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#EEA22A', '#121316', '#059669', '#EAE4D7'],
      });
    }, 800);
  };

  return (
    <section id="contact" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="paper-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E2D8] bg-[#F3EFE7] px-4 py-1 text-xs font-mono text-[#6B6862] mb-3">
            <span className="text-[#EEA22A] font-bold">08 / START YOUR BUILD</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#121316]">
            Start Your Project with <br />
            <span className="text-[#8C857B]">Maaz &amp; Suman.</span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#6B6862]">
            Fill in your project scope below. We review every brief personally and reply with a complete technical breakdown within 4 hours.
          </p>
        </div>

        {/* Form Container */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {prefilledQuote && (
                <div className="rounded-xl border border-[#059669]/30 bg-[#059669]/10 p-3 text-xs font-mono text-[#059669] flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" /> Locked in Scope: {prefilledQuote.typeName} (~${prefilledQuote.totalPrice})
                  </span>
                  <span className="text-[11px] text-[#121316] font-bold">30-Day Warranty Free</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#121316] flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-[#EEA22A]" /> Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-[#E6E2D8] bg-[#FAF8F3] px-4 py-3 text-xs text-[#121316] placeholder:text-[#948E83] focus:border-[#EEA22A] focus:outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#121316] flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-[#EEA22A]" /> Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-[#E6E2D8] bg-[#FAF8F3] px-4 py-3 text-xs text-[#121316] placeholder:text-[#948E83] focus:border-[#EEA22A] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#121316] flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-[#EEA22A]" /> Company / Project Name
                  </label>
                  <input
                    type="text"
                    placeholder="Apex Health AI"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-xl border border-[#E6E2D8] bg-[#FAF8F3] px-4 py-3 text-xs text-[#121316] placeholder:text-[#948E83] focus:border-[#EEA22A] focus:outline-none transition-all"
                  />
                </div>

                {/* Project Category */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#121316]">
                    Project Category
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-xl border border-[#E6E2D8] bg-[#FAF8F3] px-4 py-3 text-xs text-[#121316] focus:border-[#EEA22A] focus:outline-none transition-all"
                  >
                    <option value="High-Converting Landing Page">High-Converting Landing Page &amp; Forms</option>
                    <option value="AI Web Application / Chatbot">AI Web Application &amp; Custom Chatbot</option>
                    <option value="Headless E-Commerce Store">Headless E-Commerce Store</option>
                    <option value="Full-Scale MVP / SaaS Platform">Full-Scale MVP / SaaS Platform</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#121316] flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-[#EEA22A]" /> Project Brief &amp; Requirements
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your product requirements, timelines, and features..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full rounded-xl border border-[#E6E2D8] bg-[#FAF8F3] px-4 py-3 text-xs text-[#121316] placeholder:text-[#948E83] focus:border-[#EEA22A] focus:outline-none transition-all"
                />
              </div>

              {/* Bottom Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#E6E2D8]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#059669]">
                  <ShieldCheck className="h-4 w-4" />
                  <span>30-Day Zero-Cost Bug Warranty Activated Upon Launch</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-amber flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-7 py-3 text-xs font-bold disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Send Project Brief to Maaz &amp; Suman</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center space-y-3"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#059669]/10 text-[#059669] border border-[#059669]/30">
                <CheckCircle2 className="h-7 w-7" />
              </div>

              <h3 className="font-display text-2xl font-bold text-[#121316]">
                Brief Received by Maaz &amp; Suman!
              </h3>

              <p className="text-xs sm:text-sm text-[#6B6862] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#121316] font-bold">{formData.name}</span>. We are reviewing your scope and will respond to <span className="text-[#EEA22A] font-mono">{formData.email}</span> with a custom roadmap within 4 hours.
              </p>

              <div className="pt-2 font-handwritten text-2xl text-[#C9770E]">
                &ldquo;We&apos;re excited to build something extraordinary with you!&rdquo; — Maaz &amp; Suman
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
