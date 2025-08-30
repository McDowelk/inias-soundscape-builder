import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bericht verzonden",
      description: "Bedankt voor uw bericht. INIAS neemt zo spoedig mogelijk contact met u op.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-16 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-clr-blue mb-4">Contact</h1>
        <nav>
          <Link 
            to="/" 
            className="text-clr-blue hover:underline font-medium"
          >
            ← terug naar home
          </Link>
        </nav>
      </header>

      <main className="bg-clr-brown p-12 rounded-[20px] max-w-2xl w-full shadow-2xl">
        <section className="mb-8">
          <p className="text-white leading-relaxed mb-6">
            Neem gerust contact op voor boekingen, vragen over concerten, informatie over Salonsessies of Full Band optredens, 
            of een persoonlijk gesprek over muziek op maat.
          </p>
          <p className="text-white leading-relaxed">
            INIAS beantwoordt graag al uw vragen en denkt mee over de perfecte muzikale omlijsting van uw evenement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-clr-blue mb-6">Stuur een bericht</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-clr-blue font-semibold mb-2">
                  Naam *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white border-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-clr-blue font-semibold mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white border-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-clr-blue font-semibold mb-2">
                Onderwerp
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="bg-white border-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-clr-blue font-semibold mb-2">
                Bericht *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="bg-white border-none resize-none"
                placeholder="Vertel over uw evenement, uw wensen, of stel uw vragen..."
              />
            </div>

            <Button 
              type="submit"
              className="bg-clr-blue text-clr-brown hover:bg-clr-blue/90 font-bold px-8 py-3 rounded-xl"
            >
              Verstuur bericht
            </Button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl text-clr-blue mb-6">Volg INIAS</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://www.instagram.com/iniasmusic/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:opacity-90 transition-opacity duration-300 text-center"
            >
              Instagram
            </a>
            <a 
              href="https://open.spotify.com/artist/0A6lLMVTjcRMhsR3z4l9mp?si=AXkolcxNRoaqbW-NxBzVJw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:opacity-90 transition-opacity duration-300 text-center"
            >
              Spotify
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center text-clr-blue">
        <p className="mb-2">&copy; 2025 INIAS — Alle rechten voorbehouden</p>
        <p>
          <a href="https://www.instagram.com/iniasmusic/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          {' — '}
          <a href="https://open.spotify.com/artist/0A6lLMVTjcRMhsR3z4l9mp?si=AXkolcxNRoaqbW-NxBzVJw" target="_blank" rel="noopener noreferrer" className="hover:underline">Spotify</a>
        </p>
      </footer>
    </div>
  );
}