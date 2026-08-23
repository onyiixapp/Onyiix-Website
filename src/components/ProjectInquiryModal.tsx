import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, ShieldCheck, User, Mail, MessageSquare } from 'lucide-react';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('High-Converting Landing Page & Forms');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.5 },
      });
    }, 700);
  };

  const handleClose = () => {
    setSubmitted(false);
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
            onClick={handleClose}
            className="fixed inset-0 bg-[#121316]/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg bg-white border border-[#E6E2D8] rounded-2xl p-6 sm:p-8 shadow-paper-elevated z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF8F3] text-[#6B6862] hover:text-[#121316] hover:bg-[#EAE4D7] transition-colors border border-[#E6E2D8]"
            >
              <X className="h-4 w-4" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#EEA22A] mb-1.5">
                  <span>● DIRECT PRIORITY BRIEF</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#121316]">
                  Start Your Build with Maaz &amp; Suman
                </h3>

                <p className="text-xs text-[#6B6862] mt-1 mb-5">
                  Get a comprehensive quote &amp; technical roadmap in &lt; 4 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#121316] flex items-center gap-1">
                      <User className="h-3 w-3 text-[#EEA22A]" /> Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-[#E6E2D8] bg-[#FAF8F3] px-3.5 py-2.5 text-xs text-[#121316] focus:border-[#EEA22A] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#121316] flex items-center gap-1">
                      <Mail className="h-3 w-3 text-[#EEA22A]" /> Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-[#E6E2D8] bg-[#FAF8F3] px-3.5 py-2.5 text-xs text-[#121316] focus:border-[#EEA22A] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#121316]">
                      Selected Platform
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-lg border border-[#E6E2D8] bg-[#FAF8F3] px-3.5 py-2.5 text-xs text-[#121316] focus:border-[#EEA22A] focus:outline-none"
                    >
                      <option value="High-Converting Landing Page & Forms">High-Converting Landing Page &amp; Forms</option>
                      <option value="AI Web Application / Chatbot">AI Web Application / Chatbot</option>
                      <option value="Headless E-Commerce Store">Headless E-Commerce Store</option>
                      <option value="Full-Scale MVP / SaaS Platform">Full-Scale MVP / SaaS Platform</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-[#121316] flex items-center gap-1">
                      <MessageSquare className="h-3 w-3 text-[#EEA22A]" /> Brief / Requirements
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us what you want to build..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-lg border border-[#E6E2D8] bg-[#FAF8F3] px-3.5 py-2.5 text-xs text-[#121316] focus:border-[#EEA22A] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#059669] py-1">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>30-Day Free Bug Warranty Included</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-amber flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold disabled:opacity-50"
                  >
                    {isSubmitting ? <span>Dispatching...</span> : <span>Send Direct to Founders</span>}
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#059669]/10 text-[#059669] border border-[#059669]/30">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#121316]">
                  Inquiry Dispatched!
                </h3>
                <p className="text-xs text-[#6B6862] max-w-xs mx-auto">
                  Maaz &amp; Suman have received your brief and will email you back within 4 hours.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-paper mt-3 rounded-lg px-4 py-2 text-xs font-semibold"
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
