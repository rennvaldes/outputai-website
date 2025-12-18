import { MemoryAddress } from './MemoryAddress';
import { CodeComment } from './CodeComment';
import { GlitchText } from './GlitchText';
import { SystemMessage } from './SystemMessage';
import { BinaryString } from './BinaryString';
import { StackTrace } from './StackTrace';
import { StreamingSection } from './StreamingSection';

export function Features() {
  return (
    <section className="py-24 sm:py-32 overflow-x-hidden w-full max-w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* 44px top border */}
          <div className="w-[88px] h-px bg-gray-700/20 mb-24 sm:mb-32"></div>
          <StreamingSection delay={100}>
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h2 className="text-gray-300 text-glow">
                  All batteries <GlitchText glitchChance={0.01}>included.</GlitchText>
                </h2>
                <span className="text-[8px] text-gray-800 opacity-30 mt-2">
                  [FEATURE_SET]
                </span>
                <BinaryString length={10} />
                <SystemMessage />
              </div>
              
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-8">
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-400 font-light text-glow-subtle">
                      LLM calls, prompt management, tracing, evaluation, orchestration. One framework. One CLI. No assembly required.
                    </p>
                    
                    <p className="text-base leading-relaxed text-gray-500 font-light text-glow-subtle">
                      Multi-provider LLM support (Anthropic, OpenAI, Gemini, Perplexity). Built-in tracing you own. Durable execution via Temporal. Type safety with Zod. Production-ready out of the box.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-px bg-gray-800/30">
              {[
                {
                  title: 'Workflows & Orchestration',
                  desc: 'Pure async/await. No DSLs. Temporal under the hood.'
                },
                {
                  title: 'Prompts as Code',
                  desc: 'Version-controlled .prompt files. Deploy with your code.'
                },
                {
                  title: 'Built-in Evaluation',
                  desc: 'LLM-as-Judge with confidence scores and reasoning.'
                },
                {
                  title: 'Complete Tracing',
                  desc: 'Every LLM call, every step. Replay any execution.'
                },
                {
                  title: 'Claude Code Integration',
                  desc: 'Built for AI-assisted development. Describe, iterate, ship.'
                },
                {
                  title: 'Type Safety',
                  desc: 'Full TypeScript support with Zod validation.'
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-black p-8 sm:p-10 hover:bg-gray-900/30 transition-colors duration-150 group relative"
                >
                  {/* Technical annotations */}
                  <div className="absolute top-2 right-3 flex flex-col items-end gap-1 text-[8px] text-gray-800 opacity-20 select-none">
                    <MemoryAddress />
                    <BinaryString length={6} />
                  </div>
                  
                  <div className="absolute bottom-2 left-3 text-[8px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                    <SystemMessage />
                  </div>
                  
                  <h3 className="mb-4 text-gray-400 group-hover:text-white text-glow-subtle transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 font-light text-glow-subtle">
                    {feature.desc}
                  </p>
                  
                  {/* Hover reveals */}
                  <div className="mt-3 flex flex-col gap-1">
                    {index % 3 === 0 && (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <CodeComment />
                      </div>
                    )}
                    {index % 2 === 1 && (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <StackTrace />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </StreamingSection>
        </div>
      </div>
    </section>
  );
}