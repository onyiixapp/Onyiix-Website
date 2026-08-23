import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, ShoppingBag, Wrench, Cpu, Layers } from 'lucide-react';

interface SingooWorkProps {
  onOpenContactModal: (service?: string) => void;
}

export const SingooWork: React.FC<SingooWorkProps> = ({ onOpenContactModal }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 'primkart',
      name: 'primkart.app',
      category: 'E-Commerce & Warehouse Distribution',
      client: 'Bengaluru, India',
      status: 'Live & Delivered',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: ShoppingBag,
      desc: 'Local retail and kitchen warehouse ordering platform engineered for distributors with real-time product catalogs and automated Telegram bot order dispatch.',
      tags: ['Next.js', 'Telegram Bot', 'E-Commerce', 'Sub-Second UI'],
      link: 'https://primkart.app',
    },
    {
      id: 'workshop',
      name: 'Workshop Management SaaS',
      category: 'SaaS Platform & Telemetry',
      client: 'France',
      status: 'Active Engineering',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Wrench,
      desc: 'Multi-tenant cloud platform managing automated repair job cards, telemetry, parts inventory deduction, and customer SMS progress alerts.',
      tags: ['Multi-Tenant SaaS', 'PostgreSQL', 'Prisma', 'RBAC Auth'],
      link: null,
    },
    {
      id: 'apex',
      name: 'Apex Engine Portal',
      category: 'Full-Stack High-Traffic Architecture',
      client: 'Global / Enterprise',
      status: 'Production Architecture',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Cpu,
      desc: 'Edge-cached digital infrastructure re-architected with Next.js 15 server components, delivering 99/100 Core Web Vitals and sub-second page loads.',
      tags: ['Next.js 15', 'Edge Caching', 'TypeScript', 'Tailwind CSS'],
      link: null,
    },
    {
      id: 'neuralflow',
      name: 'NeuralFlow Automation',
      category: 'AI Workflows & Vector RAG',
      client: 'Venture Founders',
      status: 'Engineered System',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Layers,
      desc: 'Private vector knowledge retrieval engine with token-streaming AI execution and automated webhook workflow integrations.',
      tags: ['Vector RAG', 'Token Streaming', 'Secure API', 'AI Agent'],
      link: null,
    },
  ];

  return (
    <section
      id="featured-work"
      ref={ref}
      aria-label="Featured work"
      className="w-full py-20 sm:py-32 bg-neutral-50 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant Watermark Typography in Background */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="watermark-heading text-neutral-200/70 text-left"
          >
            Work
          </motion.h2>
        </div>

        {/* Section Lead Text */}
        <div className="relative -mt-8 sm:-mt-16 lg:-mt-24 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2 font-sans">
              FEATURED CASE STUDIES
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight font-sans">
              Crafted for Growth &amp; Precision
            </h3>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 max-w-md font-sans">
            Every build is a bespoke solution engineered to load in sub-seconds and solve real operational friction.
          </p>
        </div>

        {/* 2x2 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Floating Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-4 right-4">
                  <span className="bg-neutral-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 group/title"
                      >
                        <h4 className="text-2xl font-bold text-neutral-950 group-hover/title:text-red-600 transition-colors font-sans">
                          {project.name}
                        </h4>
                        <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover/title:text-red-600 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all" />
                      </a>
                    ) : (
                      <h4 className="text-2xl font-bold text-neutral-950 font-sans">
                        {project.name}
                      </h4>
                    )}
                    <span className="text-xs font-semibold text-neutral-400 font-sans">
                      {project.client}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed mt-3 mb-6 font-sans">
                    {project.desc}
                  </p>
                </div>

                {/* Tags & Action CTA */}
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-md"
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
                      className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onOpenContactModal(project.name)}
                      className="text-xs font-bold text-neutral-900 hover:text-red-600 flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire Build</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
