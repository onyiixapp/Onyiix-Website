import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Full-Stack Web Development');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
            8
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Connect With Us
          </div>
        </div>

        {/* Heading H2 */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16 px-5 sm:px-8 lg:px-12 max-w-5xl">
          Let&rsquo;s engineer something extraordinary.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-5 sm:px-8 lg:px-12">
          {/* Left Column: Direct Founder Contacts & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-1">
                  HEADQUARTERS &amp; GEO
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  ASME Digital Studio
                </h3>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>Bengaluru, Karnataka, India • 12.9716° N, 77.5946° E</span>
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href="mailto:maazmohammed112@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-gray-800"
                >
                  <Mail className="w-4 h-4 text-[#F26522] shrink-0" />
                  <span>maazmohammed112@gmail.com</span>
                </a>

                <a
                  href="tel:+918884949216"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-gray-800"
                >
                  <Phone className="w-4 h-4 text-[#F26522] shrink-0" />
                  <span>+91 88849 49216</span>
                </a>
              </div>

              {/* Direct Instant Channels */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold text-gray-500 block mb-3">
                  Direct Founder Chat Channels
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/918884949216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold hover:bg-emerald-100 transition-colors border border-emerald-200"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Founder</span>
                  </a>

                  <a
                    href="https://t.me/maazmohammed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold hover:bg-sky-100 transition-colors border border-sky-200"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram Channel</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm">
              {!submitted ? (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Submit a Project Brief
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-6">
                    Tell us about what you want to build. We reply with a scoped estimate within 24 hours.
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
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#F26522] focus:outline-none transition-all"
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
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#F26522] focus:outline-none transition-all"
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
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:bg-white focus:border-[#F26522] focus:outline-none transition-all"
                      >
                        <option value="CMS & WordPress Websites">CMS &amp; WordPress Websites</option>
                        <option value="SaaS & Custom Web Applications">SaaS &amp; Custom Web Applications</option>
                        <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                        <option value="Ongoing Support & Optimization">Ongoing Support &amp; Optimization</option>
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
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-[#F26522] focus:outline-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#F26522] hover:bg-[#e05a1a] text-white font-medium text-sm py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        'Sending brief...'
                      ) : (
                        <>
                          <span>Submit Scoped Brief</span>
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
                    Thank you, <strong className="text-gray-900">{name}</strong>. Our engineering leads will review your requirements and get back to <span className="text-gray-900 font-medium">{email}</span> within 24 hours.
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
          </div>
        </div>
      </div>
    </section>
  );
};
