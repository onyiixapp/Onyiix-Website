import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialType = 'Strategy Call',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [budget, setBudget] = useState('$10k - $25k');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-gray-100 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <span className="text-[12px] font-semibold text-[#F26522] uppercase tracking-wider block mb-1">
                  AXION STUDIO INTAKE
                </span>
                <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 tracking-tight">
                  {initialType.includes('Book') || initialType.includes('Strategy')
                    ? 'Book a Strategy Call'
                    : 'Start Your Project'}
                </h2>
                <p className="text-[14px] text-gray-600 mt-1 mb-6 leading-relaxed">
                  Tell us about your brand goals. We review requirements and reply within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#F26522] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#F26522] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Estimated Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-[#F26522] focus:outline-none transition-all"
                    >
                      <option value="<$10k">&lt; $10k (Small / Phase 1)</option>
                      <option value="$10k - $25k">$10k - $25k (Standard Build)</option>
                      <option value="$25k - $50k">$25k - $50k (Full Platform)</option>
                      <option value="$50k+">$50k+ (Enterprise Architecture)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Project Brief &amp; Category *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us what you are aiming to build, timeline, and vision..."
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#F26522] focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F26522] hover:bg-[#e05a1a] text-white font-medium text-sm py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-[#F26522]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900">
                  Brief Received
                </h3>
                <p className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                  Thank you, <strong className="text-gray-900">{name}</strong>. Our team will review your brief and reach out to <span className="text-gray-900 font-medium">{email}</span> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-900 text-white rounded-full px-6 py-2.5 text-xs font-medium mt-4 hover:bg-gray-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
