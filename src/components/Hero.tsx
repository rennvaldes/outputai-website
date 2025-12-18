import { GlitchText } from './GlitchText';
import { MemoryAddress } from './MemoryAddress';
import { CodeComment } from './CodeComment';
import { SystemMessage } from './SystemMessage';
import { BinaryString } from './BinaryString';
import { StackTrace } from './StackTrace';
import { TypingCursor } from './TypingCursor';
import { StreamingSection } from './StreamingSection';

export function Hero() {
  return (
    <section className="container mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40 overflow-x-hidden">
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        <StreamingSection delay={100}>
          <div className="mb-16">
            {/* Hidden metadata easter egg */}
            <div className="flex items-center gap-3 mb-2 text-[8px] text-gray-800 select-none flex-wrap">
              <span>INIT_SEQUENCE</span>
              <MemoryAddress />
              <span className="opacity-40">v2.1.0-beta</span>
              <BinaryString length={12} />
              <SystemMessage />
            </div>
            
            <h1 className="mb-8 max-w-4xl text-gray-300 text-glow relative">
              Build AI by talking to <GlitchText glitchChance={0.015}>AI.</GlitchText>
              <TypingCursor />
              <span className="hidden sm:block absolute -right-12 top-0 text-[8px] text-gray-800 opacity-30">
                ←0x01
              </span>
              <div className="hidden lg:block absolute -left-16 top-1/2 text-[8px] text-gray-800 opacity-20 -rotate-90 origin-left">
                <BinaryString length={6} />
              </div>
            </h1>
            
            <div className="mb-12 max-w-3xl space-y-6">
              <StreamingSection delay={300}>
                <div className="relative">
                  <h2 className="text-xl sm:text-2xl text-gray-400 text-glow-subtle">
                    The AI framework that scales from quick automations to complex product <GlitchText glitchChance={0.008}>features.</GlitchText>
                  </h2>
                  <div className="hidden lg:block absolute -left-8 top-0 text-[9px] text-gray-800 opacity-20">
                    ││
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-[8px] text-gray-800">
                    <SystemMessage />
                    <MemoryAddress />
                  </div>
                </div>
              </StreamingSection>
              
              <StreamingSection delay={500}>
                <div className="relative">
                  <p className="text-base leading-relaxed text-gray-500 font-light text-glow-subtle">
                    Describe what you want. Let Claude build it. Iterate in plain language. Ship production-grade AI features and workflows.
                  </p>
                  <div className="mt-2 flex flex-col gap-1">
                    <CodeComment />
                    <StackTrace />
                  </div>
                </div>
              </StreamingSection>
            </div>

            <StreamingSection delay={700}>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <button className="dos-button text-glow-subtle relative group">
                  Get Started
                  <span className="absolute -top-3 -right-3 text-[8px] text-gray-700 opacity-0 group-hover:opacity-50 transition-opacity">
                    [EXEC]
                  </span>
                  <span className="absolute -bottom-3 -left-2 text-[7px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                    <BinaryString length={8} />
                  </span>
                </button>
                
                <div className="text-sm text-gray-600 flex items-center gap-3 flex-wrap">
                  <span className="text-gray-700">—</span>
                  <span>Output 1.0</span>
                  <MemoryAddress />
                  <SystemMessage />
                </div>
              </div>
            </StreamingSection>
          </div>
        </StreamingSection>
      </div>
    </section>
  );
}