import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ShoppingBag, Wrench, Cpu, Layers } from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectProject?: (title: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectProject }) => {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  const projects = [
    {
      id: 'primkart',
      name: 'primkart.app',
      category: 'E-Commerce & Warehouse',
      client: 'Bengaluru, India',
      status: 'Live & Delivered',
      badgeColor: 'bg-emerald-500',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      desc: 'Local retail and kitchen warehouse ordering platform engineered for distributors with product management, live catalogs, and automated Telegram bot order dispatch.',
      tags: ['Next.js', 'Telegram Bot Sync', 'Distributor Portal', 'Sub-Second UI'],
      link: 'https://primkart.app',
    },
    {
      id: 'workshop',
      name: 'Workshop Management SaaS',
      category: 'SaaS & Telemetry',
      client: 'France',
      status: 'Under Development',
      badgeColor: 'bg-[#F26522]',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      desc: 'Multi-tenant cloud platform managing automotive repair job cards, vehicle telemetry, parts inventory deduction, and customer SMS progress alerts.',
      tags: ['Multi-Tenant SaaS', 'PostgreSQL', 'Prisma ORM', 'RBAC Auth'],
      link: null,
    },
    {
      id: 'apex',
      name: 'Apex Engine Portal',
      category: 'Full-Stack Architecture',
      client: 'Enterprise Client',
      status: 'Production Engine',
      badgeColor: 'bg-indigo-500',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      desc: 'Edge-cached digital infrastructure re-architected with Next.js 15 server components, delivering 99/100 Core Web Vitals and sub-second page loads.',
      tags: ['Next.js 15', 'Edge Caching', 'TypeScript', 'Tailwind CSS'],
      link: null,
    },
    {
      id: 'neuralflow',
      name: 'NeuralFlow Automation',
      category: 'AI Workflows & RAG',
      client: 'Venture Founders',
      status: 'Engineered System',
      badgeColor: 'bg-purple-500',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      desc: 'Private vector knowledge retrieval engine with token-streaming AI execution, custom webhooks, and automated Telegram dispatch workflows.',
      tags: ['Vector RAG', 'Token Streaming', 'Secure API', 'AI Agent'],
      link: null,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#F5F5F5] pt-20 sm:pt-28 pb-20 sm:pb-32 overflow-hidden relative scroll-mt-20"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Badge row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6 sm:mb-8"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center shadow-sm">
            2
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 bg-white rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-gray-900 shadow-sm">
            Featured Client Work
          </div>
        </motion.div>

        {/* Heading H2 */}
        <div className="mb-10 sm:mb-16 lg:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-4xl">
              Our delivered projects.
            </h2>
            <p className="text-xs sm:text-base text-gray-600 mt-2 sm:mt-3 max-w-xl leading-relaxed">
              Real-world systems engineered for measurable operational outcomes, sub-second performance, and client growth.
            </p>
          </motion.div>
        </div>

        {/* 2x2 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const hasError = imageError[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => !project.link && onSelectProject && onSelectProject(project.name)}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Media Header Container with Image & Non-Overlapping Header Badges */}
                <div className="aspect-[16/10] overflow-hidden bg-gray-950 relative">
                  {!hasError ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#F26522]" />
                      </div>
                      <span className="text-base sm:text-lg font-bold tracking-tight">{project.name}</span>
                      <span className="text-xs text-gray-400 mt-1">{project.category}</span>
                    </div>
                  )}

                  {/* NON-OVERLAPPING RESPONSIVE TOP BAR (Flex Row with Safe Gaps) */}
                  <div className="absolute top-0 inset-x-0 p-3 sm:p-4 flex items-center justify-between gap-2 z-10">
                    <span className="bg-white/95 backdrop-blur-md text-gray-900 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-md truncate max-w-[55%] sm:max-w-none">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-1.5 bg-gray-950/85 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-md shrink-0">
                      <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${project.badgeColor} animate-pulse`} />
                      <span>{project.status}</span>
                    </div>
                  </div>

                  {/* Bottom Left Hover Expanding Pill */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="h-8 w-8 sm:h-9 sm:w-9 group-hover:w-[156px] rounded-full bg-white flex items-center justify-between px-2 sm:px-2.5 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden shadow-lg"
                      >
                        <span className="text-[11px] sm:text-[13px] font-semibold text-gray-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 pl-2">
                          Visit primkart.app
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-900 transition-transform duration-300 -rotate-45 group-hover:rotate-0 shrink-0" />
                      </a>
                    ) : (
                      <div className="h-8 w-8 sm:h-9 sm:w-9 group-hover:w-[140px] rounded-full bg-gray-900 flex items-center justify-between px-2 sm:px-2.5 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden shadow-lg">
                        <span className="text-[11px] sm:text-[13px] font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 pl-2">
                          View details
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform duration-300 -rotate-45 group-hover:rotate-0 shrink-0" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-lg sm:text-2xl font-bold text-gray-900 hover:text-[#F26522] transition-colors group/link"
                        >
                          <span>{project.name}</span>
                          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      ) : (
                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 tracking-tight">
                          {project.name}
                        </h3>
                      )}

                      <span className="text-[11px] sm:text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                        {project.client}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2 sm:mt-3 mb-5 sm:mb-6">
                      {project.desc}
                    </p>
                  </div>

                  {/* Technical Tags & CTA */}
                  <div className="pt-3 sm:pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] sm:text-[11px] font-medium text-gray-600 bg-gray-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md"
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
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-[#F26522] hover:text-[#e05a1a] flex items-center gap-1 transition-colors"
                      >
                        <span>Open Live App</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onSelectProject && onSelectProject(project.name)}
                        className="text-xs font-bold text-gray-900 hover:text-[#F26522] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>Inquire Build</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
