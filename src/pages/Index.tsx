import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Benefits } from '@/components/landing/Benefits';
import { ProjectSection } from '@/components/landing/ProjectSection';
import { InteriorsGallery } from '@/components/landing/InteriorsGallery';
import { PremiumFeatures } from '@/components/landing/PremiumFeatures';
import { ArchitectSection } from '@/components/landing/ArchitectSection';
import { CityConceptSection } from '@/components/landing/CityConceptSection';
import { PlansSection } from '@/components/landing/PlansSection';
import { WhiteBoxSection } from '@/components/landing/WhiteBoxSection';
import { NatureSection } from '@/components/landing/NatureSection';
import { SecuritySection } from '@/components/landing/SecuritySection';
import { LifestyleSection } from '@/components/landing/LifestyleSection';
import { DeveloperSection } from '@/components/landing/DeveloperSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { StepsSection } from '@/components/landing/StepsSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <ProjectSection />
          <InteriorsGallery />
          <PremiumFeatures />
          <ArchitectSection />
          <CityConceptSection />
          <PlansSection />
          <WhiteBoxSection />
          <NatureSection />
          <SecuritySection />
          <LifestyleSection />
          <DeveloperSection />
          <FAQSection />
          <StepsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
