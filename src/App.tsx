import { useState, useEffect } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { StudioIntroSection } from './components/StudioIntroSection';
import { AboutSection } from './components/AboutSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { AutoJourneySection } from './components/AutoJourneySection';
import { ProcessSection } from './components/ProcessSection';
import { PackagesSection } from './components/PackagesSection';
import { TrustAndFaqSection } from './components/TrustAndFaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
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
        <Footer />
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
        <Footer />
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
        <Footer />
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
        <Footer />
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
        <Footer />
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
        <Footer />
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialType={modalType} />
      </div>
    );
  }

  if (currentPath === '/global') {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <GlobalDeliveryPage onBack={() => navigateTo('/')} onOpenProject={() => handleOpenProject('Global Project Inquiry')} />
        <Footer />
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
    <div className="min-h-screen bg-[#F4F7FC] text-gray-900 font-sans selection:bg-[#2563EB]/20 selection:text-[#1D4ED8] relative">
      <main className="w-full">
        <SiteHeader onOpenProject={() => handleOpenProject('Start a Project')} />

        {/* The cinematic service journey is the opening experience. */}
        <AutoJourneySection />

        <StudioIntroSection onOpenProject={() => handleOpenProject('Start a Project')} />

        <AboutSection
          onOpenAboutModal={() => handleOpenProject('About Studio Inquiry')}
        />

        {/* SECTION 3: CASE STUDIES (Light gray background, Narrativ, Luminar, primkart.app, Workshop SaaS) */}
        <CaseStudiesSection
          onSelectProject={(projectTitle) => handleOpenProject(`Case Study: ${projectTitle}`)}
        />

        <TestimonialsSection />

        {/* SECTION 6: 8-STAGE ENGINEERING PIPELINE */}
        <ProcessSection />

        {/* SECTION 7: PACKAGES & PRICING WITH 1-MONTH FREE MAINTENANCE SLA */}
        <PackagesSection
          onSelectTier={(tier) => handleOpenProject(`Tier Selected: ${tier}`)}
        />

        {/* SECTION 8: TRUST CHARTER & FAQS ACCORDION */}
        <TrustAndFaqSection />

        {/* SECTION 9: DIRECT FOUNDER INTAKE & GEO CHANNELS */}
        <ContactSection />
      </main>

      {/* MASTER FOOTER */}
      <Footer />

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
