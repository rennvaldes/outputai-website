import { useState, useEffect } from 'react';
import Group1000004197 from '../imports/Group1000004197-6-920';
import { MemoryAddress } from './MemoryAddress';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="text-white transition-all duration-300 group relative" style={{ width: '80.4px', height: '24px' }}>
                <div className="relative w-full h-full">
                  {/* Full logo */}
                  <div className="absolute inset-0" style={{ '--fill-0': 'white' } as React.CSSProperties}>
                    <Group1000004197 hideUnderscore={true} />
                  </div>
                  
                  {/* Overlay to fade out characters except 'o' on scroll */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: isScrolled 
                        ? 'linear-gradient(to right, transparent 0%, transparent 13.9%, black 13.9%, black 100%)'
                        : 'transparent',
                      opacity: isScrolled ? 1 : 0
                    }}
                  />
                  
                  {/* Animated blinking underscore */}
                  <svg 
                    className="absolute bottom-0 transition-all duration-500"
                    style={{
                      left: isScrolled ? '0px' : '69.9px',
                      width: '10.9px',
                      height: '2.08px'
                    }}
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 118 22"
                  >
                    <path 
                      d="M117.8 21.682H2V0H117.8V21.682Z" 
                      fill="white"
                      style={{
                        animation: 'smoothBlink 1.2s ease-in-out infinite'
                      }}
                    />
                  </svg>
                  
                  {/* Add keyframes for smooth blinking */}
                  <style>{`
                    @keyframes smoothBlink {
                      0%, 49% { opacity: 1; }
                      50%, 100% { opacity: 0; }
                    }
                  `}</style>
                </div>
                <span className="absolute -bottom-2 left-0 text-[7px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity whitespace-nowrap">
                  <MemoryAddress />
                </span>
              </a>
            </div>
            
            <nav className="flex items-center gap-4 sm:gap-8">
              <a href="#docs" className="text-xs sm:text-sm hover:text-white transition-all duration-300 relative group" style={{ opacity: isScrolled ? 0.4 : 1 }}>
                Docs
                <span className="hidden sm:block absolute -top-2 -right-2 text-[7px] text-gray-800 opacity-0 group-hover:opacity-40 transition-opacity">
                  [01]
                </span>
              </a>
              <a href="#github" className="text-xs sm:text-sm hover:text-white transition-all duration-300 relative group" style={{ opacity: isScrolled ? 0.4 : 1 }}>
                GitHub
                <span className="hidden sm:block absolute -top-2 -right-2 text-[7px] text-gray-800 opacity-0 group-hover:opacity-40 transition-opacity">
                  [02]
                </span>
              </a>
              <a href="#started" className="text-xs sm:text-sm hover:text-white transition-all duration-300 relative group" style={{ opacity: isScrolled ? 0.4 : 1 }}>
                Start
                <span className="hidden sm:block absolute -top-2 -right-2 text-[7px] text-gray-800 opacity-0 group-hover:opacity-40 transition-opacity">
                  [03]
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
      {/* 44px bottom border aligned with content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="w-[88px] h-px bg-gray-700/30"></div>
        </div>
      </div>
    </header>
  );
}