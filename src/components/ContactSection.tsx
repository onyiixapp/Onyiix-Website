import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, LockKeyhole } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Web Development');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name}: ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject brief:\n${message}`);
    window.location.href = `mailto:maazmohammed112@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F5F5F5] py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 bg-white rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-gray-900 shadow-sm">
            Start a Conversation
          </div>
          </div>

          <h2 className="mb-4 max-w-3xl text-[clamp(2rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
            Let&rsquo;s build something useful.
          </h2>
          <p className="mb-10 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Share the outcome you need, the challenge you are solving and your ideal timeline. No account or technical brief required.
          </p>

          <div className="rounded-[2rem] border border-gray-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
              {!submitted ? (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Submit a Project Brief
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-6">
                    Tell us what you want to build. We reply with clear next steps within one working day.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Service Required
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all"
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="SaaS Platform">SaaS Platform</option>
                        <option value="AI Workflow">AI Workflow</option>
                        <option value="Digital System">Digital System</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Project Brief &amp; Goals *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about the target audience, features, timeline, and goals..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#2563EB] focus:outline-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <span>Prepare Email Brief</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                    <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500">
                      <LockKeyhole className="h-3.5 w-3.5" /> Opens a ready-to-send draft in your email app.
                    </p>
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
                    Your email app should now contain the brief, <strong className="text-gray-900">{name}</strong>. Send it when ready, or contact us directly at <a className="font-semibold text-blue-700 underline" href="mailto:maazmohammed112@gmail.com">maazmohammed112@gmail.com</a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="bg-gray-900 text-white rounded-full px-6 py-2.5 text-xs font-medium mt-4 hover:bg-gray-800 transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
