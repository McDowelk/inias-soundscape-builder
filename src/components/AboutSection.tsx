import { Card, CardContent } from "@/components/ui/card";
import { Music, Headphones, Radio } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-hero bg-clip-text text-transparent mb-8 tracking-tight">
            About Inias
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Belgian electronic music producer crafting immersive soundscapes that blend 
            ambient textures with driving rhythms. Creating music that transcends boundaries 
            and connects souls through sound.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card border-blue/30 shadow-card hover:shadow-glow transition-smooth group">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-8 group-hover:shadow-maroon transition-smooth">
                <Music className="h-10 w-10 text-cream" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue">Producer</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Crafting unique electronic compositions with attention to every detail and emotion
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-blue/30 shadow-card hover:shadow-glow transition-smooth group">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-8 group-hover:shadow-maroon transition-smooth">
                <Headphones className="h-10 w-10 text-cream" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue">DJ</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Delivering unforgettable live performances that move both body and mind
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-blue/30 shadow-card hover:shadow-glow transition-smooth group">
            <CardContent className="p-10 text-center">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-8 group-hover:shadow-maroon transition-smooth">
                <Radio className="h-10 w-10 text-cream" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-blue">Artist</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Pushing creative boundaries and exploring new sonic territories in electronic music
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;