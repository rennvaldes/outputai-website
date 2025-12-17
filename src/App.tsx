import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { CodeExamples } from './components/CodeExamples';
import { VideoExamples } from './components/VideoExamples';
import { Principles } from './components/Principles';
import { GettingStarted } from './components/GettingStarted';
import { Footer } from './components/Footer';
import Group1000004197 from './imports/Group1000004197-6-920';
import { MemoryAddress } from './components/MemoryAddress';
import { BinaryString } from './components/BinaryString';
import { SystemMessage } from './components/SystemMessage';
import { GlitchText } from './components/GlitchText';

function VsHeading({ items }: { items: string[] }) {
  const [mainItem, ...subItems] = items;
  return (
    <div className="text-lg font-light text-gray-300 flex items-start gap-2">
      <div className="flex items-start gap-2 flex-shrink-0">
        <span className="inline-block flex-shrink-0 mt-1" style={{ width: '72.36px', minWidth: '72.36px', height: '21.6px', '--fill-0': 'rgb(209, 213, 219)' } as React.CSSProperties}>
          <Group1000004197 hideUnderscore={false} />
        </span>
        <span className="leading-tight">vs</span>
      </div>
      <div className="leading-tight flex-1">
        <div>{mainItem}</div>
        {subItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-400 font-mono relative">
      {/* CRT scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-30"></div>
      
      {/* CRT flicker overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 crt-flicker opacity-10"></div>
      
      <Header />
      <main className="pt-[73px]">
        <Hero />
        <SocialProof />
        <Features />
        <CodeExamples />
        <VideoExamples />
        
        {/* Comparisons Section */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
              {/* 44px top border */}
              <div className="w-[88px] h-px bg-gray-700/20 mb-24 sm:mb-32"></div>
              
              {/* Section Header */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h2 className="text-gray-300 text-glow">
                    Compared <GlitchText glitchChance={0.01}>output.</GlitchText>
                  </h2>
                  <span className="text-[8px] text-gray-800 opacity-30 mt-2">
                    [COMPARISON]
                  </span>
                  <BinaryString length={8} />
                  <SystemMessage />
                </div>
              </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-800/30" style={{ gridAutoRows: 'auto 1fr' }}>
            <div className="bg-black p-8 sm:p-10 relative group" style={{ display: 'grid', gridTemplateRows: '188px 1fr', gap: '2rem' }}>
              {/* Technical annotations */}
              <div className="absolute top-2 right-3 flex flex-col items-end gap-1 text-[8px] text-gray-800 opacity-20 select-none">
                <MemoryAddress />
                <BinaryString length={6} />
              </div>
              
              <div className="absolute bottom-2 left-3 text-[8px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                <SystemMessage />
              </div>
              
              <VsHeading items={['Langchain']} />
              <p className="text-sm text-gray-500 leading-relaxed">
                Class hierarchies, abstract base classes, endless configuration options—it's a PhD thesis disguised as a framework. <span className="yuck-hover inline-block relative cursor-pointer" data-yuck="true">Yuck.</span>
              </p>
              <style>{`
                .yuck-hover {
                  transition: color 0.3s ease;
                }
                .yuck-hover[data-yuck="true"] {
                  animation: slimedrip-once 0.8s ease-in-out 1;
                }
                .yuck-hover[data-yuck="true"]::before {
                  content: '';
                  position: absolute;
                  top: -4px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 6px;
                  height: 6px;
                  background: #00ff00;
                  border-radius: 1px;
                  animation: drip1-once 1.2s ease-in-out 1;
                  opacity: 0;
                }
                .yuck-hover[data-yuck="true"]::after {
                  content: '';
                  position: absolute;
                  bottom: -6px;
                  left: 30%;
                  width: 4px;
                  height: 8px;
                  background: #00ff00;
                  border-radius: 0 0 2px 2px;
                  animation: drip2-once 1s ease-in-out 1;
                  opacity: 0;
                }
                .yuck-hover:hover {
                  color: #00ff00;
                  animation: slimedrip 0.8s ease-in-out infinite;
                }
                .yuck-hover:hover::before {
                  content: '';
                  position: absolute;
                  top: -4px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 6px;
                  height: 6px;
                  background: #00ff00;
                  border-radius: 1px;
                  animation: drip1 1.2s ease-in-out infinite;
                }
                .yuck-hover:hover::after {
                  content: '';
                  position: absolute;
                  bottom: -6px;
                  left: 30%;
                  width: 4px;
                  height: 8px;
                  background: #00ff00;
                  border-radius: 0 0 2px 2px;
                  animation: drip2 1s ease-in-out infinite;
                }
                @keyframes slimedrip-once {
                  0%, 100% { transform: translateY(0px); color: inherit; }
                  50% { transform: translateY(2px); color: #00ff00; }
                }
                @keyframes slimedrip {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(2px); }
                }
                @keyframes drip1-once {
                  0%, 100% { opacity: 0; transform: translateX(-50%) translateY(0); }
                  50% { opacity: 1; transform: translateX(-50%) translateY(-3px); }
                }
                @keyframes drip1 {
                  0%, 100% { opacity: 0; transform: translateX(-50%) translateY(0); }
                  50% { opacity: 1; transform: translateX(-50%) translateY(-3px); }
                }
                @keyframes drip2-once {
                  0%, 100% { opacity: 0; height: 4px; }
                  50% { opacity: 1; height: 10px; }
                }
                @keyframes drip2 {
                  0%, 100% { opacity: 0; height: 4px; }
                  50% { opacity: 1; height: 10px; }
                }
              `}</style>
              <script dangerouslySetInnerHTML={{__html: `
                (function() {
                  const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                      if (entry.isIntersecting && entry.target.dataset.yuck === 'true') {
                        setTimeout(() => {
                          entry.target.dataset.yuck = 'false';
                        }, 1200);
                        observer.unobserve(entry.target);
                      }
                    });
                  }, { threshold: 0.5 });
                  
                  setTimeout(() => {
                    const yuck = document.querySelector('[data-yuck="true"]');
                    if (yuck) observer.observe(yuck);
                  }, 100);
                })();
              `}} />
            </div>
            
            <div className="bg-black p-8 sm:p-10 relative group" style={{ display: 'grid', gridTemplateRows: '188px 1fr', gap: '2rem' }}>
              {/* Technical annotations */}
              <div className="absolute top-2 right-3 flex flex-col items-end gap-1 text-[8px] text-gray-800 opacity-20 select-none">
                <MemoryAddress />
                <BinaryString length={6} />
              </div>
              
              <div className="absolute bottom-2 left-3 text-[8px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                <SystemMessage />
              </div>
              
              <VsHeading items={['Visual Builders', 'n8n', 'Flowise', 'Langflow', 'AirOps']} />
              <p className="text-sm text-gray-500 leading-relaxed">
                LLMs taught everyone to write complex code. Visual builders are condescending toys built for a world that no longer exists. Output is a real framework anyone can use—because AI writes most of the code.
              </p>
            </div>
            
            <div className="bg-black p-8 sm:p-10 relative group" style={{ display: 'grid', gridTemplateRows: '188px 1fr', gap: '2rem' }}>
              {/* Technical annotations */}
              <div className="absolute top-2 right-3 flex flex-col items-end gap-1 text-[8px] text-gray-800 opacity-20 select-none">
                <MemoryAddress />
                <BinaryString length={6} />
              </div>
              
              <div className="absolute bottom-2 left-3 text-[8px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                <SystemMessage />
              </div>
              
              <VsHeading items={['Other Frameworks', 'Mastra', 'LangGraph', 'LlamaIndex']} />
              <p className="text-sm text-gray-500 leading-relaxed">
                Every AI framework tries to reinvent the entire stack—including orchestration. Orchestration at scale is a hard, solved problem. We didn't reinvent it. We embraced <a href="https://temporal.io/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white underline">Temporal</a>, the open-source infra powering Replit, OpenAI Codex, Netflix, Stripe, Snap and more. Durable execution, automatic retries, and production-grade reliability—battle-tested.
              </p>
            </div>
            </div>
            </div>
          </div>
        </section>
        
        <Principles />
        <GettingStarted />
      </main>
      <Footer />
    </div>
  );
}