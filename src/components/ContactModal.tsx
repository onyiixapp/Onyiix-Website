import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Mail, Globe, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
  prefillDetails?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefillService = '',
  prefillDetails = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Custom Website / Web Platform');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillService) {
      setService(prefillService);
    }
    if (prefillDetails) {
      setMessage((prev) => (prev ? prev : `Selected Configuration: ${prefillDetails}`));
    }
  }, [prefillService, prefillDetails]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#38BDF8', '#0284C7', '#0369A1'],
      });
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
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content with no scrollbar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg liquid-glass-elevated rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-white/15 max-h-[92vh] overflow-y-auto no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <span className="text-sky-400 font-mono text-xs uppercase tracking-wider block mb-1">
                  DIRECT ENGINEERING INTAKE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                  Start Your Project
                </h2>
                <p className="text-sm text-white/70 mt-1 mb-6 font-sans">
                  Brief the <strong className="text-white">ASME Studio</strong> team directly. We review your specifications and reply with a complete architectural breakdown in &lt; 4 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-sky-400/60 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-sky-400/60 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1">
                      Target Package / Capability
                    </label>
                    <input
                      type="text"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      placeholder="e.g. Starter Package, SaaS Platform, E-Commerce"
                      className="w-full rounded-xl border border-white/15 bg-[#0a1120] px-4 py-3 text-sm text-white focus:border-sky-400/60 focus:outline-none transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1">
                      Project Brief &amp; Goals *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us what you want to build, desired features, and target timeline..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-sky-400/60 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-sky-300 py-1">
                    <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>30-Day Zero-Cost Warranty + 1-Month Free Maintenance</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-semibold text-sm sm:text-base py-3.5 rounded-full hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-2xl"
                  >
                    {isSubmitting ? (
                      'Transmitting...'
                    ) : (
                      <>
                        <span>Send Project Brief to ASME Studio</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>

                {/* Sleek Icon Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/50">Direct Studio Channels</span>
                  
                  <div className="flex items-center gap-2.5">
                    <a
                      href="mailto:maazmohammed112@gmail.com"
                      aria-label="Email ASME Studio"
                      title="Email ASME Studio"
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-sky-400/50 hover:bg-white/10 transition-all shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                    </a>

                    <a
                      href="https://maazprofile.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Studio Portfolio"
                      title="Studio Portfolio"
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-sky-400/50 hover:bg-white/10 transition-all shadow-md"
                    >
                      <Globe className="w-4 h-4" />
                    </a>

                    <a
                      href="https://linkedin.com/in/mohammed-maaz-a-0aa730217/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-sky-400/50 hover:bg-white/10 transition-all shadow-md"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 border border-sky-400/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white font-sans">
                  Brief Received by ASME Studio!
                </h3>
                <p className="text-sm text-white/70 max-w-xs mx-auto leading-relaxed font-sans">
                  Thank you, <strong className="text-white">{name}</strong>. The engineering team is reviewing your requirements for <span className="text-sky-300 font-mono">{service}</span> and will reply to <span className="text-sky-300 font-mono">{email}</span> within 4 hours.
                </p>
                <div className="pt-2 text-xs font-mono text-sky-400">
                  ✦ Handcrafted in Bengaluru, India • Delivered across India &amp; Worldwide
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="liquid-glass rounded-full px-6 py-2.5 text-xs font-semibold text-white mt-4 hover:bg-white/10 border border-white/15"
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
