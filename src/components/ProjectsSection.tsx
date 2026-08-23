import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Clock, MapPin, ArrowUpRight, ShoppingBag, Wrench, Layers, Cpu } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenContactModal: (service?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenContactModal }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      name: 'primkart.app',
      category: 'E-Commerce',
      status: 'Delivered & Live',
      statusType: 'completed',
      client: 'Bengaluru, India',
      industry: 'Retail & Kitchen Warehouse Distribution',
      icon: ShoppingBag,
      problem: 'Local retail & warehouse merchants needed an intuitive ordering platform for regional distributors without heavy payment gateway charges or checkout friction.',
      solution: 'Engineered a high-speed headless e-commerce store with 0ms optimistic cart updates, real-time product management, and instant automated Telegram bot order dispatch.',
      tags: ['Retail & Distributors', 'Product Management', 'Telegram Bot Sync', 'Next.js', 'Sub-Second UI'],
      link: 'https://primkart.app',
    },
    {
      name: 'Workshop Management SaaS',
      category: 'SaaS & Web Apps',
      status: 'Under Active Development',
      statusType: 'in-progress',
      client: 'France',
      industry: 'Automotive & Industrial Workshop Telemetry',
      icon: Wrench,
      problem: 'Automotive repair centers struggled with disconnected paper job cards, inventory tracking errors, and manual client progress updates.',
      solution: 'Building a multi-tenant cloud platform with real-time job card telemetry, automated SMS/email customer notifications, inventory deduction, and role-based staff permissions.',
      tags: ['Next.js 15', 'PostgreSQL', 'Prisma', 'Multi-Tenant RBAC', 'Telemetry'],
      link: null,
    },
    {
      name: 'Apex Engine Portal',
      category: 'Full-Stack',
      status: 'Production Architecture',
      statusType: 'completed',
      client: 'Global / Enterprise',
      industry: 'Digital Media & High-Traffic Web Infrastructure',
      icon: Cpu,
      problem: 'Legacy monolithic architecture suffered from sluggish page transitions (> 4s LCP) and fragile mobile responsiveness.',
      solution: 'Re-architected with Next.js 15 server components, edge CDN caching, and fluid liquid-glass Framer Motion micro-interactions achieving a 99/100 Core Web Vitals score.',
      tags: ['Next.js 15', 'Edge Caching', 'TypeScript', 'Tailwind CSS', 'Sub-Second LCP'],
      link: null,
    },
    {
      name: 'NeuralFlow Automation',
      category: 'SaaS & Web Apps',
      status: 'Engineered System',
      statusType: 'completed',
      client: 'Venture & SaaS Founders',
      industry: 'AI Workflow & Knowledge Base Systems',
      icon: Layers,
      problem: 'Businesses needed custom operational AI assistants without exposing internal data to public third-party endpoints.',
      solution: 'Engineered private vector retrieval-augmented generation (RAG) knowledge engine with real-time token streaming and automated workflow tool execution.',
      tags: ['AI Workflows', 'Vector RAG', 'Token Streaming', 'Secure API', 'PostgreSQL'],
      link: null,
    },
  ];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="bg-black py-24 sm:py-32 px-4 sm:px-6 overflow-hidden max-w-6xl mx-auto relative"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
      >
        <div>
          <p className="text-sky-400 text-xs font-sans font-semibold tracking-wider uppercase mb-2">
            04 / LIVING PORTFOLIO &amp; CASE STUDIES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight font-sans font-normal">
            Delivered &amp; <span className="font-serif italic text-sky-300">Active Builds</span>.
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl font-sans">
            Every build is a testament to sub-second latency, production reliability, and custom architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10">
          {['All', 'E-Commerce', 'SaaS & Web Apps', 'Full-Stack'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                filter === tab
                  ? 'bg-sky-400 text-black font-semibold shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => {
          const Icon = project.icon;
          const isCompleted = project.statusType === 'completed';

          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="liquid-glass rounded-3xl p-7 sm:p-9 border border-white/10 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-300 group shadow-2xl"
            >
              <div>
                {/* Top Row: Category & Status */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-sans text-xs text-white/60 font-medium">
                      {project.category}
                    </span>
                  </div>

                  <span
                    className={`font-sans text-xs px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                      isCompleted
                        ? 'border-sky-400/30 bg-sky-950/40 text-sky-300 font-medium'
                        : 'border-white/15 bg-white/5 text-white/70'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <Clock className="w-3.5 h-3.5" />
                    )}
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Title (Clickable for primkart.app) */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group/title mb-2"
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover/title:text-sky-300 transition-colors">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover/title:text-sky-300 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all" />
                  </a>
                ) : (
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                    {project.name}
                  </h3>
                )}

                {/* Industry & Location (Image 5 fix) */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-white/60 mb-5">
                  <span className="flex items-center gap-1 text-white/70 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    {project.client}
                  </span>
                  <span>•</span>
                  <span>{project.industry}</span>
                </div>

                {/* Case Study Problem & Approach */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm font-sans">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="font-sans text-[11px] text-white/50 block mb-1 uppercase tracking-wider font-semibold">
                      CHALLENGE
                    </span>
                    <p className="text-white/70 leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-400/20">
                    <span className="font-sans text-[11px] text-sky-400 block mb-1 uppercase tracking-wider font-semibold">
                      ENGINEERED SOLUTION
                    </span>
                    <p className="text-white/90 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Tech Tags & Action */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="font-sans text-xs text-white/70 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onOpenContactModal(project.name)}
                    className="text-xs font-sans text-white/70 hover:text-white flex items-center gap-1 transition-colors font-medium"
                  >
                    <span>Inquire Architecture</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
