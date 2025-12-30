import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainSections from "@/components/MainSections";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <MainSections />
      <ContactSection />
    </div>
  );
};

export default Index;
