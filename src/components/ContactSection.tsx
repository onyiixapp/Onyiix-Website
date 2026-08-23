import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, CheckCircle2, Globe } from 'lucide-react';

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
      className="bg-[#F5F5F5] pt-20 sm:pt-28 pb-20 sm:pb-32 overflow-hidden relative"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shadow-sm">
            8
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 bg-white rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-gray-900 shadow-sm">
            Connect With Us
          </div>
        </div>

        {/* Heading H2 */}
        <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16 max-w-5xl">
          Let&rsquo;s engineer something extraordinary.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
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

              {/* Direct Founder Email Contacts */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/70">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <img
                        src="/founders/maaz.png"
                        alt="Mohammed Maaz A"
                        className="w-8 h-8 rounded-full object-cover border border-neutral-300"
                      />
                      <span className="font-bold text-gray-900">Mohammed Maaz A</span>
                    </div>
                    <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-md font-semibold">
                      Architect
                    </span>
                  </div>
                  <a
                    href="mailto:maazmohammed112@gmail.com"
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors pl-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-red-600" />
                    <span>maazmohammed112@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 mt-2.5 pt-2 border-t border-gray-200/50 text-xs">
                    <a
                      href="https://maazprofile.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black flex items-center gap-1"
                    >
                      <Globe className="w-3 h-3" />
                      <span>Portfolio</span>
                    </a>
                    <span>•</span>
                    <a
                      href="https://linkedin.com/in/mohammed-maaz-a-0aa730217/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/70">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <img
                        src="/founders/suman.png"
                        alt="Suman Kumar Singh"
                        className="w-8 h-8 rounded-full object-cover border border-neutral-300"
                      />
                      <span className="font-bold text-gray-900">Suman Kumar Singh</span>
                    </div>
                    <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-md font-semibold">
                      Systems Lead
                    </span>
                  </div>
                  <a
                    href="mailto:sumansingh.np13@gmail.com"
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors pl-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-red-600" />
                    <span>sumansingh.np13@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 mt-2.5 pt-2 border-t border-gray-200/50 text-xs">
                    <a
                      href="https://github.com/sumansingh13"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black flex items-center gap-1"
                    >
                      <span>GitHub: @sumansingh13</span>
                    </a>
                  </div>
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
