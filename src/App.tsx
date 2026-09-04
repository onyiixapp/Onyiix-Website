import { useState, useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { ProcessSection } from './components/ProcessSection';
import { TrustAndFaqSection } from './components/TrustAndFaqSection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { AboutPage } from './components/AboutPage';
import { CareersPage } from './components/CareersPage';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { SitemapPage } from './components/SitemapPage';
import { NotFoundPage } from './components/NotFoundPage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SERVICE_LANDING_PAGES, ServiceLandingPage } from './components/ServiceLandingPage';
import { GlobalDeliveryPage } from './components/GlobalDeliveryPage';
import { AgentationDev } from './components/AgentationDev';
import { ContentProtection } from './components/ContentProtection';
import { AutoJourneySection } from './components/AutoJourneySection';
// New premium UI components
import { LandingAccordionItem } from './components/ui/interactive-image-accordion';
import { HeroParallax, onyiixProducts } from './components/blocks/hero-parallax';
import { WorldMap } from './components/ui/world-map';
import { Pricing, onyiixPlans } from './components/blocks/pricing';
import HoverFooter from './components/HoverFooter';
import { motion } from 'framer-motion';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('Strategy Call');

  useEffect(() => {
    const handleLocation = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  useEffect(() => {
    const routeMeta: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'ONYIIX | Design • Build • Deliver',
        description: 'Founder-led web, SaaS, AI, technical SEO and digital marketing systems from Bengaluru for India and global teams.',
      },
      '/about': {
        title: 'About ONYIIX | Founder-Led Product Engineering',
        description: 'Meet Maaz and Suman, the Bengaluru founders behind ONYIIX and its web, SaaS and automation work.',
      },
      '/careers': {
        title: 'Careers at ONYIIX',
        description: 'View current opportunities and future collaboration options at ONYIIX in Bengaluru.',
      },
      '/terms': {
        title: 'Terms of Service | ONYIIX',
        description: 'ONYIIX project terms, ownership, warranties and delivery commitments.',
      },
      '/privacy': {
        title: 'Privacy Policy | ONYIIX',
        description: 'How ONYIIX handles project inquiries and client information.',
      },
      '/sitemap': {
        title: 'HTML Sitemap | ONYIIX',
        description: 'Navigate ONYIIX services, work, company pages and legal information.',
      },
      '/services/web-development': {
        title: 'Web Development Agency | ONYIIX',
        description: 'Fast, conversion-focused websites with technical SEO, analytics and full code ownership from ONYIIX.',
      },
      '/services/saas-platforms': {
        title: 'SaaS Platform Development | ONYIIX',
        description: 'Multi-tenant SaaS product design and engineering with clear workflows, resilient architecture and phased delivery.',
      },
      '/services/ai-workflows': {
        title: 'AI Workflow Automation | ONYIIX',
        description: 'Practical AI workflows, integrations and human approval systems for operations, support and knowledge teams.',
      },
      '/services/digital-marketing': {
        title: 'Digital Marketing, Technical SEO & Analytics | ONYIIX',
        description: 'Technical SEO, conversion landing pages, analytics and campaign measurement built as one connected growth system.',
      },
      '/services/digital-systems': {
        title: 'Custom Digital Systems & Dashboards | ONYIIX',
        description: 'Custom dashboards, portals and internal systems that connect operations, data and business workflows.',
      },
      '/global': {
        title: 'Global Digital Product Delivery from Bengaluru | ONYIIX',
        description: 'ONYIIX works from Bengaluru with remote-first teams across India, Europe, North America and worldwide.',
      },
    };

    const meta = routeMeta[currentPath];
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const titleTag = document.querySelector<HTMLMetaElement>('meta[name="title"]');
    const robotsTag = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const ogTitleTag = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescriptionTag = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const ogUrlTag = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const twitterTitleTag = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    const twitterDescriptionTag = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    document.getElementById('route-structured-data')?.remove();

    if (meta) {
      document.title = meta.title;
      titleTag?.setAttribute('content', meta.title);
      descriptionTag?.setAttribute('content', meta.description);
      robotsTag?.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      ogTitleTag?.setAttribute('content', meta.title);
      ogDescriptionTag?.setAttribute('content', meta.description);

      const canonicalUrl = `https://asme.studio${currentPath === '/' ? '/' : currentPath}`;
      canonicalTag?.setAttribute('href', canonicalUrl);
      ogUrlTag?.setAttribute('content', canonicalUrl);
      twitterTitleTag?.setAttribute('content', meta.title);
      twitterDescriptionTag?.setAttribute('content', meta.description);

      if (currentPath !== '/') {
        const routeSchema = document.createElement('script');
        const serviceData = SERVICE_LANDING_PAGES[currentPath];
        routeSchema.id = 'route-structured-data';
        routeSchema.type = 'application/ld+json';
        routeSchema.text = JSON.stringify(serviceData ? {
          '@context': 'https://schema.org', '@type': 'Service', name: serviceData.eyebrow,
          description: meta.description, url: canonicalUrl, areaServed: 'Worldwide',
          provider: { '@type': 'Organization', name: 'ONYIIX', url: 'https://asme.studio/' },
        } : {
          '@context': 'https://schema.org', '@type': 'Organization', name: 'ONYIIX',
          url: canonicalUrl, address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
          areaServed: 'Worldwide', description: meta.description,
        });
        document.head.appendChild(routeSchema);
      }
    } else {
      document.title = 'Page Not Found | ONYIIX';
      robotsTag?.setAttribute('content', 'noindex, follow');
    }
  }, [currentPath]);

  useEffect(() => {
    const handleAnchorNavigation = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = anchor?.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState({}, '', hash);
    };

    document.addEventListener('click', handleAnchorNavigation);
    return () => document.removeEventListener('click', handleAnchorNavigation);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProject = (customType?: string) => {
    setModalType(customType || 'Start a Project');
    setModalOpen(true);
  };

  // Dedicated Route Views
  if (currentPath === '/about') {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <AboutPage
          onBack={() => navigateTo('/')}
          onOpenProject={() => handleOpenProject('About Page Direct Inquiry')}
        />
        <HoverFooter />
        <ContactModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialType={modalType}
        />
      </div>
    );
  }

  if (currentPath === '/careers') {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <CareersPage onBack={() => navigateTo('/')} />
        <HoverFooter />
        <ContactModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialType={modalType}
        />
      </div>
    );
  }

  if (currentPath === '/terms') {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <TermsPage onBack={() => navigateTo('/')} />
        <HoverFooter />
        <ContactModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialType={modalType}
        />
      </div>
    );
  }

  if (currentPath === '/privacy') {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <PrivacyPage onBack={() => navigateTo('/')} />
        <HoverFooter />
        <ContactModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialType={modalType}
        />
      </div>
    );
  }

  if (currentPath === '/sitemap') {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <SitemapPage onBack={() => navigateTo('/')} />
        <HoverFooter />
        <ContactModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialType={modalType}
        />
      </div>
    );
  }

  const serviceLandingData = SERVICE_LANDING_PAGES[currentPath];
  if (serviceLandingData) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <ServiceLandingPage data={serviceLandingData} onBack={() => navigateTo('/')} onOpenProject={() => handleOpenProject(`Service: ${serviceLandingData.eyebrow}`)} />
        <HoverFooter />
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialType={modalType} />
      </div>
    );
  }

  if (currentPath === '/global') {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <GlobalDeliveryPage onBack={() => navigateTo('/')} onOpenProject={() => handleOpenProject('Global Project Inquiry')} />
        <HoverFooter />
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialType={modalType} />
      </div>
    );
  }

  // 404 handler for unmatched paths
  if (currentPath !== '/' && !currentPath.startsWith('/#')) {
    return <NotFoundPage onBack={() => navigateTo('/')} />;
  }

  // Main Landing Page with All Sections
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#2563EB]/20 selection:text-[#1D4ED8] relative">
      <main className="w-full">
        <SiteHeader onOpenProject={() => handleOpenProject('Start a Project')} />

        {/* The cinematic service journey is the opening experience. */}
        <AutoJourneySection />

        {/* SERVICE SHOWCASE: Interactive image accordion */}
        <LandingAccordionItem />

        {/* CASE STUDIES: Parallax product grid */}
        <section id="projects" className="bg-[#F4F7FC] overflow-hidden">
          <HeroParallax products={onyiixProducts} />
        </section>

        {/* GLOBAL DELIVERY: Animated world map */}
        <section className="bg-white py-20 sm:py-28 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center mb-10">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-600">Global reach</span>
              <h2 className="mt-3 text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#0B1020]">
                Built in Bengaluru.
                <br />
                <motion.span
                  className="text-blue-600"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Ready everywhere.
                </motion.span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-7">
                We work with founders across India, Europe, North America and worldwide — delivering fast, remote-first with direct founder access from first call to launch.
              </p>
            </div>
            <WorldMap
              lineColor="#2563EB"
              dots={[
                // Wave 1 — Bengaluru outward
                { start: { lat: 12.9716, lng: 77.5946 }, end: { lat: 51.5074, lng: -0.1278 } },
                { start: { lat: 12.9716, lng: 77.5946 }, end: { lat: 25.2048, lng: 55.2708 } },
                { start: { lat: 12.9716, lng: 77.5946 }, end: { lat: 1.3521,  lng: 103.8198 } },
                { start: { lat: 12.9716, lng: 77.5946 }, end: { lat: 35.6762, lng: 139.6503 } },
                { start: { lat: 12.9716, lng: 77.5946 }, end: { lat: -33.8688, lng: 151.2093 } },
                // Wave 2 — Europe spreading
                { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 40.7128,  lng: -74.0060 } },
                { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 48.8566,  lng:   2.3522 } },
                { start: { lat: 48.8566, lng:  2.3522 }, end: { lat: 52.5200,  lng:  13.4050 } },
                { start: { lat: 48.8566, lng:  2.3522 }, end: { lat: 41.9028,  lng:  12.4964 } },
                // Wave 3 — Americas
                { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: 37.7749, lng: -122.4194 } },
                { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: 19.4326, lng:  -99.1332 } },
                { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: -23.5505, lng: -46.6333 } },
                { start: { lat: -23.5505, lng: -46.6333 }, end: { lat: -34.6037, lng: -58.3816 } },
                // Wave 4 — Middle East & Africa
                { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 30.0444, lng:  31.2357 } },
                { start: { lat: 30.0444, lng: 31.2357 }, end: { lat:  -1.2921, lng:  36.8219 } },
                { start: { lat: -1.2921, lng: 36.8219 }, end: { lat: -26.2041, lng:  28.0473 } },
                // Wave 5 — SE Asia & Pacific
                { start: { lat: 1.3521,  lng: 103.8198 }, end: { lat: 22.3193, lng: 114.1694 } },
                { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: 37.5665, lng: 126.9780 } },
                { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: 37.7749, lng: -122.4194 } },
                { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: -36.8485, lng: 174.7633 } },
              ]}

            />
          </div>
        </section>

        <TestimonialsSection />

        {/* ENGINEERING PIPELINE */}
        <ProcessSection />

        {/* PRICING: Animated cards with confetti annual toggle */}
        <section id="packages">
          <Pricing
            plans={onyiixPlans}
            title="Choose the right starting lane."
            description="Every engagement is scoped after a short technical call.\nNo hidden template restrictions and no lock-in."
            onSelectPlan={(plan) => handleOpenProject(`Tier Selected: ${plan}`)}
          />
        </section>

        {/* TRUST & FAQS */}
        <TrustAndFaqSection />

        {/* CONTACT */}
        <ContactSection />
      </main>

      {/* HOVER FOOTER */}
      <HoverFooter />

      {/* Strategy Call / Project Intake Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />

      {/* Dev-only Agentation overlay */}
      <AgentationDev />

      {/* Global strict right-click, inspect, and copy protection */}
      <ContentProtection />
    </div>
  );
}

export default App;
