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
          <h2 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Latest Releases
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the sonic journey through carefully crafted electronic compositions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <Card key={index} className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-smooth group">
              <CardContent className="p-8">
                {/* Album Art Placeholder */}
                <div className="w-full aspect-square bg-gradient-hero rounded-lg mb-6 flex items-center justify-center group-hover:shadow-glow transition-smooth">
                  <Play className="h-16 w-16 text-primary-foreground opacity-80 group-hover:opacity-100 transition-smooth" />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{release.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-primary/20 rounded text-primary">{release.type}</span>
                      <span>{release.year}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    {release.description}
                  </p>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="bg-gradient-hero hover:shadow-glow transition-smooth">
                      <Play className="mr-2 h-4 w-4" />
                      Play
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10 transition-smooth">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Stream
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 transition-smooth">
            View Full Discography
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;