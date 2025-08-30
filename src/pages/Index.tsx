import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-card/50 border-t border-primary/20 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              INIAS
            </h3>
            <p className="text-muted-foreground mt-2">
              Electronic Music Producer & DJ
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; 2024 Inias Music. All rights reserved.</p>
            <p className="mt-1">Brussels, Belgium</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;