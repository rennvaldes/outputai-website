import { MemoryAddress } from './MemoryAddress';
import { GlitchText } from './GlitchText';
import { SystemMessage } from './SystemMessage';
import { BinaryString } from './BinaryString';

export function Footer() {
  return (
    <footer className="py-16 sm:py-20 overflow-x-hidden w-full max-w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* 44px top border */}
          <div className="w-[88px] h-px bg-gray-700/30 mb-16 sm:mb-20"></div>
          <div className="grid sm:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* Minimal logo with blinking cursor */}
                <div className="relative inline-flex items-end text-white" style={{ fontFamily: 'Iosevka Term, monospace', fontSize: '0.875rem', transform: 'scale(1.02)' }}>
                  <span className="relative">
                    o
                    <svg 
                      className="absolute left-0"
                      style={{
                        width: '6.12px',
                        height: '1.224px',
                        bottom: '0px'
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
                  </span>
                </div>
                <span className="text-sm text-gray-400 text-glow-subtle">output.ai</span>
                <span className="text-[8px] text-gray-800 opacity-30">
                  <MemoryAddress />
                </span>
                <BinaryString length={6} />
              </div>
              <p className="text-sm text-gray-500 font-light text-glow-subtle">
                Built by{' '}
                <a href="https://growthx.ai/" className="underline hover:text-white">
                  <GlitchText glitchChance={0.008}>GrowthX</GlitchText>
                </a>
              </p>
              <div className="mt-2 text-[8px] text-gray-800 opacity-20">
                <SystemMessage />
              </div>
              <style>{`
                @keyframes smoothBlink {
                  0%, 49% { opacity: 1; }
                  50%, 100% { opacity: 0; }
                }
              `}</style>
            </div>
            
            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm sm:justify-end">
              <a href="#github" className="hover:text-white transition-all text-glow-subtle relative group">
                GitHub
                <span className="absolute -bottom-2 left-0 text-[7px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                  <BinaryString length={4} />
                </span>
              </a>
              <a href="#docs" className="hover:text-white transition-all text-glow-subtle relative group">
                Docs
                <span className="absolute -bottom-2 left-0 text-[7px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                  <BinaryString length={4} />
                </span>
              </a>
              <a href="#twitter" className="hover:text-white transition-all text-glow-subtle relative group">
                Twitter/X
                <span className="absolute -bottom-2 left-0 text-[7px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                  <BinaryString length={4} />
                </span>
              </a>
            </nav>
          </div>

          <div className="pt-8 text-xs text-gray-600 font-light text-glow-subtle flex items-center justify-between flex-wrap gap-3">
            <p>© 2025 Output.ai — Version 1.0</p>
            <div className="text-[8px] text-gray-800 opacity-20 flex items-center gap-4">
              <span>EOF</span>
              <MemoryAddress />
              <SystemMessage />
              <BinaryString length={8} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}