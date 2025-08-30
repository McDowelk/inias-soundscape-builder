import { Button } from "@/components/ui/button";
import { Play, Music, Instagram, Music2 } from "lucide-react";
import heroImage from "@/assets/hero-bg-brand.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-hero opacity-40" />
      </div>

      {/* Floating glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow animate-float blur-3xl opacity-40" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-glow animate-float blur-3xl opacity-30" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-black bg-gradient-hero bg-clip-text text-transparent mb-6 tracking-tight">
            INIAS
          </h1>
          <p className="text-2xl md:text-4xl font-light text-blue mb-4">
            Electronic Music Producer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            Brussels, Belgium
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button size="lg" className="bg-gradient-hero hover:shadow-glow transition-smooth text-lg px-8 py-4">
            <Play className="mr-3 h-6 w-6" />
            Latest Tracks
          </Button>
          <Button variant="outline" size="lg" className="border-blue/60 text-blue hover:bg-blue/10 transition-smooth text-lg px-8 py-4">
            <Music className="mr-3 h-6 w-6" />
            Discography
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-blue transition-smooth group">
            <Music2 className="h-10 w-10 group-hover:scale-110 transition-smooth" />
            <span className="sr-only">Spotify</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-blue transition-smooth group">
            <Instagram className="h-10 w-10 group-hover:scale-110 transition-smooth" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-blue/60 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-blue rounded-full mt-3 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;