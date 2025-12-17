import { MemoryAddress } from './MemoryAddress';
import { GlitchText } from './GlitchText';
import { SystemMessage } from './SystemMessage';
import { BinaryString } from './BinaryString';
import { CodeComment } from './CodeComment';
import { StreamingSection } from './StreamingSection';

export function GettingStarted() {
  const cards = [
    {
      label: 'Learning',
      title: 'Read the guides',
      description: 'Learn what the framework can do and how the pieces fit together.',
      link: '#docs',
    },
    {
      label: 'Contributing',
      title: 'Contribute on GitHub',
      description: 'File bug reports and make pull-requests.',
      link: '#github',
    },
    {
      label: 'Keeping up',
      title: "See what's new",
      description: 'The latest releases and updates on development.',
      link: '#updates',
    }
  ];

  return (
    <section id="started" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* 44px top border */}
          <div className="w-[88px] h-px bg-gray-700/20 mb-24 sm:mb-32"></div>

          <div className="mb-20">
            <h2 className="mb-4 text-gray-300 text-glow">Let's get started.</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {cards.map((card, index) => (
              <StreamingSection key={card.label} delay={index * 150}>
                <a
                  href={card.link}
                  className="block hover:bg-gray-900/30 transition-colors duration-150 group relative"
                >
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-xs text-gray-600 text-glow-subtle">
                        {card.label}
                      </div>
                      <div className="text-[8px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                        <BinaryString length={4} />
                      </div>
                    </div>
                    <h3 className="mb-4 text-gray-400 group-hover:text-white text-glow-subtle transition-all">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500 font-light text-glow-subtle">
                      {card.description}
                    </p>
                    <div className="mt-3 text-[8px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                      <SystemMessage />
                    </div>
                  </div>
                </a>
              </StreamingSection>
            ))}
          </div>

          {/* Quick start */}
          <StreamingSection delay={500}>
            <div className="border border-gray-700/40 bg-black/50 p-8 relative group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-gray-600 text-glow-subtle">
                  Quick Start
                </div>
                <div className="flex items-center gap-2 text-[8px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                  <BinaryString length={6} />
                  <SystemMessage />
                </div>
              </div>
              <pre className="text-sm text-gray-400 mb-2 text-glow-subtle">
                <code>$ npm install -g @output/cli</code>
              </pre>
              <pre className="text-sm text-gray-400 text-glow-subtle mb-3">
                <code>$ output init my-first-workflow</code>
              </pre>
              <div className="flex items-center gap-3 mt-4 flex-wrap">
                <CodeComment />
                <div className="text-[8px] text-gray-800 opacity-20">
                  <MemoryAddress />
                </div>
              </div>
            </div>
          </StreamingSection>
        </div>
      </div>
    </section>
  );
}