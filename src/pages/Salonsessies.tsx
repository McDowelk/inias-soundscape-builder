import { Link } from 'react-router-dom';

export default function Salonsessies() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-16 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-clr-blue mb-4">Salonsessies</h1>
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
            De Salonsessies zijn intieme concerten waarbij INIAS zijn muziek brengt in een kleine, warme bezetting. 
            Met alleen piano en viool creëert hij een sfeer van nabijheid en authenticiteit die perfect past bij de kleinkunst traditie.
          </p>
          <p className="text-white leading-relaxed mb-6">
            Of het nu in uw huiskamer is, in de tuin tijdens een zomeravond, of in een klein zaaltje – de Salonsessies brengen 
            INIAS' verhalen en muziek heel dicht bij het publiek. Elk concert wordt een persoonlijke ervaring waar humor, 
            emotie en muzikaliteit samenkomen.
          </p>
          <p className="text-white leading-relaxed">
            Het intieme karakter laat toe om echt contact te maken met het publiek, verhalen te delen achter de liedjes, 
            en samen momenten te creëren die lang blijven hangen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-clr-blue mb-6">Wat u kunt verwachten:</h2>
          <ul className="text-white space-y-3 leading-relaxed">
            <li>• Een intieme setting met piano en viool</li>
            <li>• Persoonlijke verhalen achter de liedjes</li>
            <li>• Interactie met het publiek</li>
            <li>• Mogelijkheid tot verzoeknummers</li>
            <li>• Een warme, authentieke sfeer</li>
            <li>• Perfecte keuze voor private events en kleine venues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-clr-blue mb-6">Impressies van Salonsessies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder for salon session photos */}
            {Array.from({ length: 9 }, (_, i) => (
              <div 
                key={i}
                className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center text-muted-foreground hover:scale-105 transition-transform duration-300"
              >
                Salon Foto {i + 1}
              </div>
            ))}
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