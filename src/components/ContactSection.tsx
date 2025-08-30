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
          <h2 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or book a performance? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're looking for original music production, DJ services, or creative collaboration, 
                I'm always excited to discuss new projects and opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">hello@iniasmusic.be</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">Brussels, Belgium</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Bookings</p>
                  <p className="text-muted-foreground">Available on request</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-primary/20 shadow-card">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" className="bg-background/50 border-primary/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background/50 border-primary/30" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="What's this about?" className="bg-background/50 border-primary/30" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-background/50 border-primary/30"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-hero hover:shadow-glow transition-smooth">
                  <Send className="mr-2 h-5 w-5" />
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