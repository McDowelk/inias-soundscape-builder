import { Button } from "@/components/ui/button";
import { Play, Music, Instagram, Music2 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      </div>

      {/* Floating glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow animate-float blur-3xl opacity-30" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-glow animate-float blur-3xl opacity-20" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            INIAS
          </h1>
          <p className="text-2xl md:text-3xl font-light text-muted-foreground mb-8">
            Electronic Music Producer & DJ
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-hero hover:shadow-glow transition-smooth">
            <Play className="mr-2 h-5 w-5" />
            Listen Now
          </Button>
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 transition-smooth">
            <Music className="mr-2 h-5 w-5" />
            View Discography
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
            <Music2 className="h-8 w-8" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
            <Instagram className="h-8 w-8" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;