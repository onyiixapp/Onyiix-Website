import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ShowcaseStrip } from './components/ShowcaseStrip';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveSelector } from './components/InteractiveSelector';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PackagesSection } from './components/PackagesSection';
import { MaintenanceSection } from './components/MaintenanceSection';
import { TrustAndFaqSection } from './components/TrustAndFaqSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { NotFoundPage } from './components/NotFoundPage';

export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalPrefillService, setModalPrefillService] = useState('');
  const [modalPrefillDetails, setModalPrefillDetails] = useState('');
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/' && path !== '/index.html' && path !== '') {
      setIs404(true);
    }
  }, []);

  const handleOpenContactModal = (service?: string, details?: string) => {
    setModalPrefillService(service || 'Custom Website / Web Platform');
    setModalPrefillDetails(details || '');
    setIsContactModalOpen(true);
  };

  if (is404) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-ambient-blue text-white selection:bg-sky-500/20 selection:text-white relative no-scrollbar">
      {/* Fixed Floating Liquid-Glass Navbar on Scroll */}
      <Navbar onOpenContactModal={(service) => handleOpenContactModal(service)} />

      {/* Main Single-Page Content */}
      <main className="relative z-10">
        {/* Section 1: Hero with Video, Positioning & Slogan */}
        <HeroSection onOpenContactModal={(service) => handleOpenContactModal(service)} />

        {/* Section 2: Scrolling Feature & Engineering Standards Showcase */}
        <ShowcaseStrip />

        {/* Section 3: 4 Solution Pillars (CMS, SaaS, Full-Stack, Optimization) */}
        <ServicesSection onOpenContactModal={(service) => handleOpenContactModal(service)} />

        {/* Section 4: Interactive Package / Service Selector Tool */}
        <InteractiveSelector
          onSelectPackage={(pkg, details) => handleOpenContactModal(pkg, details)}
        />

        {/* Section 5: 8-Stage Development Process Pipeline */}
        <ProcessSection />

        {/* Section 6: Living Portfolio & Case Studies (primkart.app & SaaS Builds) */}
        <ProjectsSection onOpenContactModal={(service) => handleOpenContactModal(service)} />

        {/* Section 7: Packages & Pricing System (Starter to SaaS / Custom) */}
        <PackagesSection onOpenContactModal={(pkg) => handleOpenContactModal(pkg)} />

        {/* Section 8: 1-Month Free Maintenance Offer & Recurring Plans */}
        <MaintenanceSection onOpenContactModal={(tier) => handleOpenContactModal(tier)} />

        {/* Section 9: Trust Charter, Code Ownership & Interactive FAQ */}
        <TrustAndFaqSection />

        {/* Section 10: About Us & Founders (Maaz & Suman, Academic Genesis) */}
        <AboutSection onOpenContactModal={() => handleOpenContactModal('Founder Consultation')} />
      </main>

      {/* Upgraded Footer */}
      <Footer onOpenContactModal={() => handleOpenContactModal()} />

      {/* Interactive Contact & Project Brief Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        prefillService={modalPrefillService}
        prefillDetails={modalPrefillDetails}
      />
    </div>
  );
}

export default App;
