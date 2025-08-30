import { Link } from 'react-router-dom';

export default function CustomSongs() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-16 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-clr-blue mb-4">Muziek op Maat</h1>
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
            Soms vraagt een moment in het leven om zijn eigen soundtrack. INIAS schrijft graag muziek op maat – 
            een persoonlijk nummer dat uw verhaal vertelt, uw emoties weergeeft, of een bijzondere gebeurtenis voor altijd vastlegt in een lied.
          </p>
          <p className="text-white leading-relaxed mb-6">
            Of het nu gaat om een huwelijk, een verjaardag, een afscheid, een nieuwe start, of gewoon een verhaal dat u graag in muziek wilt horen – 
            INIAS luistert naar uw verhaal en creëert daar een uniek nummer bij dat helemaal van u is.
          </p>
          <p className="text-white leading-relaxed">
            Het proces begint met een gesprek waarin u uw verhaal deelt. Samen bepalen we de toon, de sfeer, en de boodschap. 
            Vervolgens componeeert INIAS muziek en tekst die perfect bij uw verhaal passen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-clr-blue mb-6">Hoe werkt het?</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-clr-blue text-clr-brown rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div className="text-white">
                <h3 className="font-semibold mb-2">Eerste gesprek</h3>
                <p>We bespreken uw verhaal, de gelegenheid, en uw wensen voor het lied.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-clr-blue text-clr-brown rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div className="text-white">
                <h3 className="font-semibold mb-2">Compositie</h3>
                <p>INIAS schrijft muziek en tekst speciaal voor uw verhaal.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-clr-blue text-clr-brown rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div className="text-white">
                <h3 className="font-semibold mb-2">Verfijning</h3>
                <p>We bespreken het nummer en maken eventuele aanpassingen.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-clr-blue text-clr-brown rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div className="text-white">
                <h3 className="font-semibold mb-2">Uitvoering</h3>
                <p>Het lied kan live gebracht worden tijdens uw evenement of als opname geleverd worden.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-clr-blue mb-6">Perfecte momenten voor muziek op maat:</h2>
          <ul className="text-white space-y-2 leading-relaxed">
            <li>• Huwelijken en verlovingen</li>
            <li>• Verjaardagen en jubilea</li>
            <li>• Geboortes en doopfeesten</li>
            <li>• Afscheidsfeesten en pensioenen</li>
            <li>• Bedrijfsevents en openingen</li>
            <li>• Herdenkingsmomenten</li>
            <li>• Gewoon omdat uw verhaal een lied verdient</li>
          </ul>
        </section>

        <section>
          <div className="bg-clr-maroon/30 p-6 rounded-xl">
            <h3 className="text-clr-blue font-semibold mb-3">Interesse in muziek op maat?</h3>
            <p className="text-white mb-4">
              Neem contact op voor een vrijblijvend gesprek over de mogelijkheden. 
              Samen kijken we hoe uw verhaal het mooiste tot zijn recht komt in een persoonlijk lied.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-6 py-3 bg-clr-blue text-clr-brown font-bold rounded-xl hover:bg-opacity-90 transition-colors duration-300"
            >
              Contact opnemen
            </Link>
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