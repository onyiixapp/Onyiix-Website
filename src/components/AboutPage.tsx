import React from 'react';
import { ArrowLeft, Mail, Globe, MapPin, ShieldCheck, Heart, Users } from 'lucide-react';
import { siGithub } from 'simple-icons';
import { OnyiixX } from './OnyiixX';
import { Marquee } from './ui/Marquee';

const GithubMark = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d={siGithub.path} />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

interface TeamMember {
  image: string;
  name: string;
  role: string;
  location: string;
  email: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

const teamMembers: TeamMember[] = [
  {
    image: '/founders/suman.png',
    name: 'Mohammed Maaz A',
    role: 'Co-Founder & Principal Architect',
    location: 'Bengaluru, India',
    email: 'maaz@onyiix.com',
    github: 'https://github.com/maazmohammed112',
    linkedin: 'https://linkedin.com/in/mohammed-maaz-a-0aa730217/',
    portfolio: 'https://maazprofile.tech',
  },
  {
    image: '/founders/suman_new.jpg',
    name: 'Suman Kumar Singh',
    role: 'Co-Founder & Systems Engineer',
    location: 'Delhi, India',
    email: 'suman@onyiix.com',
    github: 'https://github.com/sumansingh13',
    linkedin: 'https://www.linkedin.com/in/suman-singh-4320331a4/',
  },
];

interface AboutPageProps {
  onBack: () => void;
  onOpenProject: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, onOpenProject }) => {
  // Duplicate members for marquee effect
  const marqueeMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-28 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Navigation Back */}
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 hover:bg-slate-50 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Studio</span>
        </button>
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden py-4 sm:py-8">
        {/* Decorative SVG — bottom right */}
        <svg
          className="absolute right-0 bottom-0 text-neutral-200 pointer-events-none"
          fill="none"
          height="154"
          viewBox="0 0 460 154"
          width="460"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip_about_deco)">
            <path
              d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
            />
          </g>
          <defs>
            <clipPath id="clip_about_deco">
              <rect fill="white" height="154" width="460" />
            </clipPath>
          </defs>
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Centered heading */}
          <div className="mx-auto mb-16 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0">
            <div className="mb-6 flex items-center justify-center">
              <OnyiixX size="4rem" />
            </div>

            <h1 className="relative mb-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl leading-tight flex items-center justify-center flex-wrap">
              <span>The ONYII</span>
              <OnyiixX size="0.84em" className="ml-0.5 inline-block" />
              <span className="ml-2">Team</span>
              {/* Decorative scribble */}
              <svg
                className="absolute -top-2 -right-8 -z-10 w-24 text-neutral-200"
                fill="currentColor"
                height="86"
                viewBox="0 0 108 86"
                width="108"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="28"
                />
              </svg>
            </h1>

            <p className="max-w-2xl text-neutral-600">
              Founded in <strong>2024</strong> by two relentless friends during their academic journey, ONYIIX was born to craft high-converting websites, scalable SaaS platforms, and measurable digital growth experiences.
            </p>
          </div>

          {/* Team Marquee */}
          <div className="relative w-full group">
            {/* Edge fades */}
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

            <Marquee pauseOnHover duration="30s">
              {marqueeMembers.map((member, idx) => (
                <div
                  className="flex w-64 shrink-0 flex-col"
                  key={`${member.name}-${idx}`}
                >
                  <div className="relative h-[22rem] w-full overflow-hidden rounded-2xl bg-neutral-100">
                    <img
                      alt={member.name}
                      src={member.image}
                      className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    />
                    {/* Info overlay */}
                    <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-sm p-3">
                      <h3 className="font-bold text-sm text-neutral-900">
                        {member.name}
                      </h3>
                      <p className="text-neutral-500 text-xs mb-2">
                        {member.role}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <a
                          href={`mailto:${member.email}`}
                          title={`Email ${member.name}`}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
                        >
                          <Mail className="h-3 w-3" />
                        </a>
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${member.name} on GitHub`}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
                          >
                            <GithubMark />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${member.name} on LinkedIn`}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
                          >
                            <LinkedInIcon />
                          </a>
                        )}
                        {member.portfolio && (
                          <a
                            href={member.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${member.name}'s portfolio`}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm"
                          >
                            <Globe className="h-3 w-3" />
                          </a>
                        )}
                        <span className="ml-auto flex items-center gap-1 text-[10px] text-neutral-400">
                          <MapPin className="h-2.5 w-2.5" />
                          {member.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Quote / Mission */}
        <div className="mx-auto mt-20 max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-8 font-medium text-lg text-neutral-900 leading-relaxed md:text-xl">
            "We don't just build products — we architect systems that scale, perform, and convert. Every line of code is written with intent, every pixel placed with purpose."
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="flex -space-x-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md">
                <img alt="Mohammed Maaz A" className="h-full w-full object-cover" src="/founders/suman.png" />
              </div>
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md">
                <img alt="Suman Kumar Singh" className="h-full w-full object-cover" src="/founders/suman_new.jpg" />
              </div>
            </div>
            <div className="text-center">
              <p className="font-semibold text-neutral-900 text-sm">Mohammed Maaz A & Suman Kumar Singh</p>
              <p className="text-neutral-500 text-xs">Co-Founders · ONYIIX</p>
            </div>
          </div>
        </div>

        {/* Key Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 mb-20">
          <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200/80">
            <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-neutral-950 mb-2">Zero-Compromise Velocity</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Every site is built with modern server components and zero-bloat styling, targeting ≤ 2.5s LCP on real-world mobile networks.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200/80">
            <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-neutral-950 mb-2">Full Code Ownership</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              100% intellectual property transfer upon delivery. No hidden monthly runtime locks or proprietary code lock-in.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200/80">
            <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-neutral-950 mb-2">1-Month Free Maintenance SLA</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Every project comes with 30 days of proactive support, uptime checks, and minor adjustments at zero extra cost.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-8 p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to start your digital build?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Connect directly with Mohammed Maaz A &amp; Suman Kumar Singh today.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenProject}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full transition-colors self-start sm:self-auto cursor-pointer"
          >
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};
