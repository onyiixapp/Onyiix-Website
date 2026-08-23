import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('Strategy Call');

  const handleOpenBooking = () => {
    setModalType('Book a strategy call');
    setModalOpen(true);
  };

  const handleOpenProject = (customType?: string) => {
    setModalType(customType || 'Start a project');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-gray-900 font-sans selection:bg-[#F26522]/20 selection:text-[#F26522] relative">
      <main className="w-full">
        {/* SECTION 1: HERO (Full viewport height with shaders overlay, pill nav & live London clock) */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenProject={() => handleOpenProject('Start a project')}
        />

        {/* SECTION 2: ABOUT (White background, responsive 3-col desktop layout, exact images) */}
        <AboutSection
          onOpenAboutModal={() => handleOpenProject('About our studio inquiry')}
        />

        {/* SECTION 3: CASE STUDIES (Light gray background, Narrativ & Luminar video cards with expanding hover buttons) */}
        <CaseStudiesSection
          onSelectProject={(projectTitle) => handleOpenProject(`Case Study: ${projectTitle}`)}
        />
      </main>

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
