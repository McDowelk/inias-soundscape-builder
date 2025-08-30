import { useState } from 'react';
import { Link } from 'react-router-dom';
import aboutTile from '@/assets/about-tile.jpg';
import fullbandTile from '@/assets/fullband-tile.jpg';
import salonTile from '@/assets/salon-tile.jpg';
import customTile from '@/assets/custom-tile.jpg';
import contactTile from '@/assets/contact-tile.jpg';

interface Tile {
  id: string;
  title: string;
  image: string;
  intro: string;
  path: string;
}

const tiles: Tile[] = [
  {
    id: 'about',
    title: 'OVER',
    image: aboutTile,
    intro: 'INIAS is niet zomaar een muzikant; hij is een verhalenverteller en vertolker van emoties. Met een passie voor muziek en wiskunde brengt hij een uniek perspectief op het podium.',
    path: '/over'
  },
  {
    id: 'salonsessies',
    title: 'SALONSESSIES',
    image: salonTile,
    intro: 'Intieme concerten in kleine bezetting (piano en viool) voor een klein publiek in de huiskamer, de tuin, of kleine zaaltjes.',
    path: '/salonsessies'
  },
  {
    id: 'fullband',
    title: 'FULL BAND',
    image: fullbandTile,
    intro: 'Brede bezetting met piano, bass, viool, gitaar, drums en vaak gastmuzikanten. Een mix van ballades, vrolijke nummers en verrassingen.',
    path: '/full-band'
  },
  {
    id: 'custom',
    title: 'MUZIEK OP MAAT',
    image: customTile,
    intro: 'INIAS schrijft muziek op verzoek – een persoonlijk nummer voor een belangrijk moment in het leven.',
    path: '/muziek-op-maat'
  },
  {
    id: 'contact',
    title: 'CONTACT',
    image: contactTile,
    intro: 'Neem contact op voor boekingen, vragen over concerten, of een persoonlijk gesprek over muziek op maat.',
    path: '/contact'
  }
];

export default function TileGrid() {
  const [hoveredTile, setHoveredTile] = useState<string | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-1">
      <div 
        className="flex gap-1 perspective-[1200px] justify-center flex-nowrap"
        style={{ perspective: '1200px' }}
      >
        {tiles.map((tile, index) => (
          <div
            key={tile.id}
            className={`
              relative cursor-pointer flex-shrink-0 rounded-[20px] overflow-hidden
              transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]
              ${hoveredTile && hoveredTile !== tile.id ? 'opacity-35 blur-sm brightness-45 scale-94' : ''}
              ${hoveredTile === tile.id ? 'opacity-100 scale-106 z-10' : ''}
            `}
            style={{
              width: hoveredTile === tile.id ? '400px' : '250px',
              height: '710px',
              backgroundImage: `url(${tile.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: hoveredTile === tile.id ? 'translateZ(140px) scale(1.06)' : undefined
            }}
            onMouseEnter={() => setHoveredTile(tile.id)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            {/* Dark overlay */}
            <div 
              className={`
                absolute inset-0 bg-clr-brown/35 backdrop-brightness-85
                transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                ${hoveredTile === tile.id ? 'bg-clr-brown/70' : ''}
              `}
            />
            
            {/* Title (always visible) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                className={`
                  font-extrabold text-clr-blue text-center leading-none
                  transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${hoveredTile === tile.id ? 'text-2xl opacity-90 -translate-y-40' : 'text-4xl opacity-100'}
                `}
                style={{ mixBlendMode: 'difference' }}
              >
                {tile.title}
              </span>
            </div>

            {/* Extended content on hover */}
            {hoveredTile === tile.id && (
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <div className="space-y-4">
                  <p className="text-base leading-relaxed">{tile.intro}</p>
                  <Link 
                    to={tile.path}
                    className="inline-block px-6 py-3 bg-clr-blue text-clr-brown font-bold rounded-xl hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Lees verder
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}