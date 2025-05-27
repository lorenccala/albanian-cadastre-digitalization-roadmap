
import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VisionGoalsSection } from './components/VisionGoalsSection';
import { KeyDeadlinesSection } from './components/KeyDeadlinesSection';
import { ActionPlanSection } from './components/ActionPlanSection';
import { ActorsSection } from './components/ActorsSection';
import { CurrentProgressSection } from './components/CurrentProgressSection';
import { TechnologySection } from './components/TechnologySection';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-brand-light via-white to-blue-50 text-brand-text">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <VisionGoalsSection />
        <KeyDeadlinesSection />
        <CurrentProgressSection />
        <ActionPlanSection />
        <ActorsSection />
        <TechnologySection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
