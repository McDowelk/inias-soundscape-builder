import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-hero bg-clip-text text-transparent mb-8 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate or book a performance? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-blue">Let's Connect</h3>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                Whether you're looking for original music production, DJ services, or creative collaboration, 
                I'm always excited to discuss new projects and opportunities.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-maroon">
                  <Mail className="h-8 w-8 text-cream" />
                </div>
                <div>
                  <p className="font-bold text-lg text-blue">Email</p>
                  <p className="text-muted-foreground text-lg">hello@iniasmusic.be</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-maroon">
                  <MapPin className="h-8 w-8 text-cream" />
                </div>
                <div>
                  <p className="font-bold text-lg text-blue">Location</p>
                  <p className="text-muted-foreground text-lg">Brussels, Belgium</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-maroon">
                  <Phone className="h-8 w-8 text-cream" />
                </div>
                <div>
                  <p className="font-bold text-lg text-blue">Bookings</p>
                  <p className="text-muted-foreground text-lg">Available on request</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-blue/30 shadow-card">
            <CardContent className="p-10">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-3 text-blue">Name</label>
                    <Input placeholder="Your name" className="bg-background/50 border-blue/30 text-lg p-4" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3 text-blue">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background/50 border-blue/30 text-lg p-4" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-blue">Subject</label>
                  <Input placeholder="What's this about?" className="bg-background/50 border-blue/30 text-lg p-4" />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-blue">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-background/50 border-blue/30 text-lg p-4"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-hero hover:shadow-glow transition-smooth text-lg py-4">
                  <Send className="mr-3 h-6 w-6" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;