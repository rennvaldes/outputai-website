import { MemoryAddress } from './MemoryAddress';
import { CodeComment } from './CodeComment';
import { GlitchText } from './GlitchText';
import { SystemMessage } from './SystemMessage';
import { BinaryString } from './BinaryString';
import { StackTrace } from './StackTrace';
import { StreamingSection } from './StreamingSection';

export function Principles() {
  const principles = [
    {
      number: 1,
      title: 'Software is non-deterministic now.',
      description: 'AI systems exhibit behaviors, not bugs. Unit tests won\'t save you—you need LLM-as-judge evaluation, tracing, and visibility. Output has these as a first class feature.'
    },
    {
      number: 2,
      title: 'Prompts are your most important code.',
      description: 'They belong in your repo, reviewed in PRs, deployed with your app. Not scattered across dashboards you forgot the password to.'
    },
    {
      number: 3,
      title: 'AI writes code now. Lean into it.',
      description: 'Start by describing what you want in plain English. Let Claude scaffold it. Iterate in conversation. The framework is built for this workflow.'
    },
    {
      number: 4,
      title: 'Code beats canvas.',
      description: 'Visual builders break when you need a loop. Code means version control, testing, CI/CD. No artificial ceilings.'
    },
    {
      number: 5,
      title: 'One framework, not twelve subscriptions.',
      description: 'Prompt management, tracing, orchestration, evaluation—all in one place. Your code, your data, deploy anywhere.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 overflow-x-hidden w-full max-w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* 44px top border */}
          <div className="w-[88px] h-px bg-gray-700/20 mb-24 sm:mb-32"></div>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <h2 className="max-w-3xl text-gray-300 text-glow relative">
                Natural language is the next primary <GlitchText glitchChance={0.012}>programming</GlitchText> interface.
              </h2>
              <span className="text-[8px] text-gray-800 opacity-20 mt-2">
                THESIS_01
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4 flex-wrap text-[8px] text-gray-800 opacity-30">
              <BinaryString length={16} />
              <SystemMessage />
              <MemoryAddress />
            </div>
            <div className="max-w-2xl">
              <p className="text-base leading-relaxed text-gray-500 font-light text-glow-subtle">
                Soon, most software logic will be expressed as LLM instructions.
              </p>
              <div className="mt-2 flex flex-col gap-1">
                <CodeComment />
                <StackTrace />
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {principles.map((principle, index) => (
              <StreamingSection key={principle.number} delay={index * 150}>
                <div
                  className="grid lg:grid-cols-12 gap-8 lg:gap-12 group relative"
                >
                  <div className="lg:col-span-1 relative">
                    <div className="text-xl text-gray-600 text-glow-subtle">
                      {principle.number}
                    </div>
                    <div className="flex flex-col gap-1 text-[8px] text-gray-800 opacity-20 mt-2">
                      <MemoryAddress />
                      <BinaryString length={4} />
                    </div>
                  </div>
                  <div className="lg:col-span-11 relative">
                    <h3 className="mb-4 text-gray-400 group-hover:text-white text-glow-subtle transition-all">
                      {principle.title}
                    </h3>
                    <div>
                      <p className="text-sm leading-relaxed text-gray-500 font-light text-glow-subtle max-w-2xl">
                        {principle.description}
                      </p>
                      <div className="mt-2 flex flex-col gap-1">
                        {principle.number % 2 === 1 && (
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <CodeComment />
                          </div>
                        )}
                        {principle.number % 2 === 0 && (
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <StackTrace />
                          </div>
                        )}
                        <div className="opacity-0 group-hover:opacity-40 transition-opacity text-[8px] text-gray-800">
                          <SystemMessage />
                        </div>
                      </div>
                    </div>
                    
                    {/* Dimension marker */}
                    <div className="hidden lg:block absolute -left-6 top-0 text-[8px] text-gray-800 opacity-10">
                      │
                    </div>
                  </div>
                </div>
              </StreamingSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}