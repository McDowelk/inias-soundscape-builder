import { Link } from 'react-router-dom';

export default function FullBand() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-16 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-clr-blue mb-4">Full Band</h1>
        <nav>
          <Link 
            to="/" 
            className="text-clr-blue hover:underline font-medium"
          >
            ← terug naar home
          </Link>
        </nav>
      </header>

      <main className="bg-clr-brown p-12 rounded-[20px] max-w-4xl w-full shadow-2xl">
        <section className="mb-8">
          <p className="text-white leading-relaxed mb-6">
            Hier brengt INIAS zijn muziek in een brede bezetting: piano, bass, een of meerdere violen, gitaar, drums, vaak aangevuld met een gastmuzikant. 
            Het concert is een mix van rustige ballades, vrolijke nummers, entertainment, humor en kleine verrassingen.
          </p>
          <p className="text-white leading-relaxed mb-6">
            De gastheer kan steeds een verzoeknummer vragen dat door de band vaak eigenzinnig geïnterpreteerd wordt. 
            Ook hier gebeurt het dat INIAS op verzoek van de gastheer een persoonlijk nummer schrijft en brengt tijdens het concert.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-clr-blue mb-6">Beelden van Full Band concerten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder for photos - in real implementation these would be actual concert photos */}
            {Array.from({ length: 14 }, (_, i) => (
              <div 
                key={i}
                className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center text-muted-foreground hover:scale-105 transition-transform duration-300"
              >
                Concert Foto {i + 1}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-8">
            {/* Placeholder for videos */}
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="text-4xl mb-2">▶</div>
                <div>Aftermovie Release show</div>
              </div>
            </div>
            
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="text-4xl mb-2">▶</div>
                <div>Inias - Picknick van burgemeester</div>
              </div>
            </div>
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