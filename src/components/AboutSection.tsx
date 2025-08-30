import { Card, CardContent } from "@/components/ui/card";
import { Music, Headphones, Radio } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            About Inias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Belgian electronic music producer crafting immersive soundscapes that blend 
            ambient textures with driving rhythms. Creating music that transcends boundaries 
            and connects souls through sound.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Producer</h3>
              <p className="text-muted-foreground">
                Crafting unique electronic compositions with attention to every detail and emotion
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">DJ</h3>
              <p className="text-muted-foreground">
                Delivering unforgettable live performances that move both body and mind
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Radio className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Artist</h3>
              <p className="text-muted-foreground">
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