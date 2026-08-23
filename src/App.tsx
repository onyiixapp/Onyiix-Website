import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveSelector } from './components/InteractiveSelector';
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
    <div className="min-h-screen bg-[#EFEFEF] text-gray-900 font-sans selection:bg-[#F26522]/20 selection:text-[#F26522] relative">
      <main className="w-full">
        {/* SECTION 1: HERO (Full viewport height with shaders overlay, pill nav & live Bengaluru clock) */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenProject={() => handleOpenProject('Start a Project')}
        />

        {/* SECTION 2: ABOUT (White background, responsive 3-col desktop layout, exact images & founder cards) */}
        <AboutSection
          onOpenAboutModal={() => handleOpenProject('About Studio Inquiry')}
        />

        {/* SECTION 3: CASE STUDIES (Light gray background, Narrativ, Luminar, primkart.app, Workshop SaaS) */}
        <CaseStudiesSection
          onSelectProject={(projectTitle) => handleOpenProject(`Case Study: ${projectTitle}`)}
        />

        {/* SECTION 4: 4-PILLAR SERVICES ARCHITECTURE */}
        <ServicesSection
          onOpenServiceModal={(svc) => handleOpenProject(`Service Inquiry: ${svc}`)}
        />

        {/* SECTION 5: INTERACTIVE PACKAGE SELECTOR TOOL */}
        <InteractiveSelector
          onSelectPackage={(pkg) => handleOpenProject(`Package Selected: ${pkg}`)}
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
