import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
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
        title: 'Meyvaro Studio | Web, SaaS, AI & Digital Marketing',
        description: 'Founder-led web, SaaS, AI, technical SEO and digital marketing systems from Bengaluru for India and global teams.',
      },
      '/about': {
        title: 'About Meyvaro Studio | Founder-Led Product Engineering',
        description: 'Meet Maaz and Suman, the Bengaluru founders behind Meyvaro Studio and its web, SaaS and automation work.',
      },
      '/careers': {
        title: 'Careers at Meyvaro Studio',
        description: 'View current opportunities and future collaboration options at Meyvaro Studio in Bengaluru.',
      },
      '/terms': {
        title: 'Terms of Service | Meyvaro Studio',
        description: 'Meyvaro Studio project terms, ownership, warranties and delivery commitments.',
      },
      '/privacy': {
        title: 'Privacy Policy | Meyvaro Studio',
        description: 'How Meyvaro Studio handles project inquiries and client information.',
      },
      '/sitemap': {
        title: 'HTML Sitemap | Meyvaro Studio',
        description: 'Navigate Meyvaro Studio services, work, company pages and legal information.',
      },
    };

    const meta = routeMeta[currentPath];
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const robotsTag = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (meta) {
      document.title = meta.title;
      descriptionTag?.setAttribute('content', meta.description);
      robotsTag?.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      canonicalTag?.setAttribute('href', `https://asme.studio${currentPath === '/' ? '/' : currentPath}`);
    } else {
      document.title = 'Page Not Found | Meyvaro Studio';
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

  const handleOpenBooking = () => {
    setModalType('Book a Strategy Call');
    setModalOpen(true);
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

  // 404 handler for unmatched paths
  if (currentPath !== '/' && !currentPath.startsWith('/#')) {
    return (
      <div className="min-h-screen bg-[#EFEFEF]">
        <NotFoundPage onBack={() => navigateTo('/')} />
      </div>
    );
  }

  // Main Landing Page with All Sections
  return (
    <div className="min-h-screen bg-[#F4F7FC] text-gray-900 font-sans selection:bg-[#2563EB]/20 selection:text-[#1D4ED8] relative">
      <main className="w-full">
        {/* SECTION 1: lightweight animated title and navigation */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenProject={() => handleOpenProject('Start a Project')}
        />

        {/* The cinematic service story is intentionally the first experience after the title. */}
        <AutoJourneySection />

        <AboutSection
          onOpenAboutModal={() => handleOpenProject('About Studio Inquiry')}
        />

        {/* SECTION 3: CASE STUDIES (Light gray background, Narrativ, Luminar, primkart.app, Workshop SaaS) */}
        <CaseStudiesSection
          onSelectProject={(projectTitle) => handleOpenProject(`Case Study: ${projectTitle}`)}
        />

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
    </div>
  );
}

export default App;
