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
  const [budget, setBudget] = useState('Need recommendation');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${initialType} — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nEngagement: ${initialType}\nScope preference: ${budget}\n\nProject brief:\n${projectDetails}`);
    window.location.href = `mailto:maazmohammed112@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
                <span className="text-[12px] font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
                  MEYVARO STUDIO INTAKE
                </span>
                <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 tracking-tight">
                  {initialType.includes('Book') || initialType.includes('Strategy')
                    ? 'Book a Strategy Call'
                    : 'Start Your Project'}
                </h2>
                <p className="text-[14px] text-gray-600 mt-1 mb-6 leading-relaxed">
                  Tell us about the goal. We review the brief and reply within one working day.
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
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all"
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
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Preferred Scope
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all"
                    >
                      <option value="Need recommendation">Need a recommendation</option>
                      <option value="Focused launch">Focused launch</option>
                      <option value="Growth platform">Growth platform</option>
                      <option value="Full SaaS or custom system">Full SaaS or custom system</option>
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
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer mt-2"
                  >
                    <span>Prepare Email Brief</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-[#2563EB]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-medium text-gray-900">
                  Email Draft Prepared
                </h3>
                <p className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                  Your email app should now contain the brief, <strong className="text-gray-900">{name}</strong>. Send it when ready and we&rsquo;ll reply to <span className="text-gray-900 font-medium">{email}</span> within one working day.
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
