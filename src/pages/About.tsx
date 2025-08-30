import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-16 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-clr-blue mb-4">
          Over <span className="font-extrabold">INIAS</span>
        </h1>
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
          <h2 className="text-2xl text-clr-blue mb-4">Wie is INIAS?</h2>
          <p className="text-white leading-relaxed mb-4">
            INIAS is niet zomaar een muzikant; hij is een verhalenverteller en vertolker van emoties, van blije, droevige, grappige momenten. Met een passie voor muziek en wiskunde brengt INIAS een uniek perspectief op het podium.
          </p>
          <p className="text-white leading-relaxed mb-4">
            Zijn muziek, een fijne Nederlandstalige mix van kleinkunst, ballades en pop met een vleugje jazz, overstijgt het gewone en duikt met <em className="text-white">zin voor relativering</em> in de menselijke ervaring.
          </p>
          <p className="text-white leading-relaxed">
            INIAS schrijft en speelt muziek die mensen verbindt – met teksten die evenveel vragen oproepen als ze beantwoorden – een frisse combinatie van humor en diepgang.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-clr-blue mb-4">INIAS brengt zijn muziek onder verschillende vormen:</h2>
          <ul className="text-white space-y-3 leading-relaxed">
            <li>
              Onder de noemer <strong><em>'Salonsessies'</em></strong> speelt hij in een kleine bezetting (piano en viool) voor een klein publiek in de huiskamer, de tuin, kleine zaaltjes
            </li>
            <li>
              Als <strong><em>'Full Band'</em></strong> met een brede bezetting (piano, bass, viool, gitaar, drums en vaak gastmuzikanten)
            </li>
            <li>
              INIAS schrijft ook muziek op verzoek – een persoonlijk nummer voor een belangrijk moment in het leven
            </li>
          </ul>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {/* Placeholder for photos - in real implementation these would be actual photos */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num}
                className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground"
              >
                Foto {num}
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