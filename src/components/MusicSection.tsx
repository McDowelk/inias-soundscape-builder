import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const MusicSection = () => {
  const releases = [
    {
      title: "Ethereal Nights",
      type: "EP",
      year: "2024",
      description: "A journey through ambient soundscapes and ethereal melodies"
    },
    {
      title: "Digital Dreams",
      type: "Single",
      year: "2024",
      description: "Pulsating rhythms meet dreamy synthesizers in this atmospheric track"
    },
    {
      title: "Neon Reflections",
      type: "Album",
      year: "2023",
      description: "Full-length exploration of electronic textures and emotional depth"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-hero bg-clip-text text-transparent mb-8 tracking-tight">
            Latest Releases
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Explore the sonic journey through carefully crafted electronic compositions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {releases.map((release, index) => (
            <Card key={index} className="bg-gradient-card border-blue/30 shadow-card hover:shadow-glow transition-smooth group">
              <CardContent className="p-8">
                {/* Album Art Placeholder */}
                <div className="w-full aspect-square bg-gradient-accent rounded-xl mb-8 flex items-center justify-center group-hover:shadow-maroon transition-smooth">
                  <Play className="h-20 w-20 text-cream opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-smooth" />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{release.title}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-3 py-1 bg-maroon/20 border border-maroon/30 rounded-full text-maroon font-medium">{release.type}</span>
                      <span className="text-muted-foreground">{release.year}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {release.description}
                  </p>

                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="bg-gradient-hero hover:shadow-glow transition-smooth">
                      <Play className="mr-2 h-5 w-5" />
                      Play
                    </Button>
                    <Button variant="outline" size="sm" className="border-blue/60 text-blue hover:bg-blue/10 transition-smooth">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Stream
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-blue/60 text-blue hover:bg-blue/10 transition-smooth text-lg px-8 py-4">
            View Full Discography
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;