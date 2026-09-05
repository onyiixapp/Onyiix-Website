import React, { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, LoaderCircle, LockKeyhole, RotateCcw } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { FieldTooltip } from './FieldTooltip';
import { ScanningBracketHeading } from './ScanningBracketHeading';

const WEB3FORMS_ACCESS_KEY = '2bd6cc68-aeca-4abf-a8b1-0d119b71ffde';
type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  customService?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Web Development');
  const [customService, setCustomService] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [submittedName, setSubmittedName] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Gotta drop your name first, bestie';
    }

    if (!email.trim()) {
      newErrors.email = 'Drop your email so we can hit you back';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Double check that email format, bestie';
    }

    if (service === 'Want something different?' && !customService.trim()) {
      newErrors.customService = 'Tell us what custom build you are imagining';
    }

    if (!message.trim()) {
      newErrors.message = 'Give us a quick hint of what you are cooking up';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionState === 'submitting') return;

    if (!validateForm()) return;

    setSubmissionState('submitting');
    setResultMessage('');

    const finalService = service === 'Want something different?' && customService.trim()
      ? `Custom: ${customService.trim()}`
      : service;

    const formData = new FormData(event.currentTarget);
    formData.set('access_key', WEB3FORMS_ACCESS_KEY);
    formData.set('subject', `New ONYIIX project inquiry: ${finalService}`);
    formData.set('service', finalService);
    if (customService.trim()) {
      formData.set('custom_service', customService.trim());
    }
    formData.set('from_name', 'ONYIIX Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json() as { success?: boolean; message?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'We could not send your brief. Please try again.');
      }

      setSubmittedName(name.trim());
      setName('');
      setEmail('');
      setService('Web Development');
      setCustomService('');
      setMessage('');
      setErrors({});
      setResultMessage(data.message || 'Your project brief was sent successfully.');
      setSubmissionState('success');
    } catch (error) {
      setResultMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      setSubmissionState('error');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8 text-center">
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.15] tracking-[-0.04em] text-[#0B1020]">
              <ScanningBracketHeading words={['Get', 'In', 'Touch']} loop />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-4 text-sm leading-7 text-slate-500 max-w-xl mx-auto"
            >
              Have a project in mind? Let&rsquo;s create something amazing together. Share your idea and we&rsquo;ll get back within one working day.
            </motion.p>
          </div>

          <div className="rounded-[2rem] border border-gray-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
              <AnimatePresence mode="wait" initial={false}>
              {submissionState !== 'success' ? (
                <motion.div key="project-form" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Submit a Project Brief
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-6">
                    Tell us what you want to build. We reply with clear next steps within one working day.
                  </p>

                  {submissionState === 'error' && (
                    <motion.div role="alert" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="mb-5 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <div><p className="font-bold">Your brief was not sent.</p><p className="mt-0.5 text-xs leading-5 text-rose-700">{resultMessage}</p></div>
                    </motion.div>
                  )}

                  <form noValidate onSubmit={handleSubmit} className="space-y-4">
                    <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          className={`w-full rounded-xl border ${errors.name ? 'border-rose-400 bg-rose-50/40' : 'border-gray-200 bg-gray-50'} px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all`}
                        />
                        <FieldTooltip message={errors.name} />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                          }}
                          className={`w-full rounded-xl border ${errors.email ? 'border-rose-400 bg-rose-50/40' : 'border-gray-200 bg-gray-50'} px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all`}
                        />
                        <FieldTooltip message={errors.email} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={service}
                        onChange={(e) => {
                          setService(e.target.value);
                          if (errors.customService) setErrors((prev) => ({ ...prev, customService: undefined }));
                        }}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="SaaS Platform">SaaS Platform</option>
                        <option value="AI Workflow">AI Workflow</option>
                        <option value="Digital System">Digital System</option>
                        <option value="Want something different?">Want something different?</option>
                      </select>

                      <AnimatePresence>
                        {service === 'Want something different?' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                              Custom Service Requirement *
                            </label>
                            <input
                              type="text"
                              name="custom_service"
                              placeholder="Describe your custom service requirement..."
                              value={customService}
                              onChange={(e) => {
                                setCustomService(e.target.value);
                                if (errors.customService) setErrors((prev) => ({ ...prev, customService: undefined }));
                              }}
                              className={`w-full rounded-xl border ${errors.customService ? 'border-rose-400 bg-rose-50/40' : 'border-gray-200 bg-gray-50'} px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all`}
                            />
                            <FieldTooltip message={errors.customService} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Project Brief &amp; Goals *
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about the target audience, features, timeline, and goals..."
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                        }}
                        className={`w-full rounded-xl border ${errors.message ? 'border-rose-400 bg-rose-50/40' : 'border-gray-200 bg-gray-50'} px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all`}
                      />
                      <FieldTooltip message={errors.message} />
                    </div>

                    <button
                      type="submit"
                      disabled={submissionState === 'submitting'}
                      className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0B1020] py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#2563EB] disabled:cursor-wait disabled:opacity-60"
                    >
                      {submissionState === 'submitting' ? <><LoaderCircle className="h-4 w-4 animate-spin" /><span>Sending your brief&hellip;</span></> : <><span>Send Project Brief</span><ArrowRight className="w-4 h-4 stroke-[2.5]" /></>}
                    </button>
                    <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500">
                      <LockKeyhole className="h-3.5 w-3.5" /> Secure submission. No account required.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="project-success" role="status" aria-live="polite" initial={{ opacity: 0, scale: 0.97, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} className="relative overflow-hidden py-9 text-center sm:py-12">
                  <motion.div initial={{ scale: 0.5, rotate: -12 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 280, damping: 18 }} className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-[0_14px_40px_rgba(16,185,129,0.18)]">
                    <CheckCircle2 className="h-9 w-9" />
                  </motion.div>
                  <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">Brief received</p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">We&rsquo;ll be in touch shortly.</h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-600">
                    Thanks, <strong className="text-gray-900">{submittedName || 'there'}</strong>. Your project details reached the ONYIIX team successfully.
                  </p>
                  <p className="mx-auto mt-4 max-w-sm rounded-2xl bg-blue-50 px-4 py-3 text-xs font-medium leading-5 text-blue-800">
                    Tea is good for health. Just kidding—your idea is what has our attention now. ☕
                  </p>
                  <span className="sr-only">{resultMessage}</span>
                  <button
                    type="button"
                    onClick={() => { setSubmissionState('idle'); setResultMessage(''); setSubmittedName(''); }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-blue-700"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Submit another brief
                  </button>
                </motion.div>
              )}
              </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
