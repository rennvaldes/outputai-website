import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { CodeExamples } from './components/CodeExamples';
import { VideoExamples } from './components/VideoExamples';
import { Principles } from './components/Principles';
import { GettingStarted } from './components/GettingStarted';
import { Footer } from './components/Footer';

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
        <Principles />
        <GettingStarted />
        
        {/* Comparisons Section */}
        <section className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
          <div className="space-y-12">
            <div className="border border-gray-700/40 p-8 bg-black/50">
              <h3 className="text-lg font-light mb-4 text-gray-300">vs Langchain</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Class hierarchies, abstract base classes, endless configuration options—it's a PhD thesis disguised as a framework. Yuck.
              </p>
            </div>
            
            <div className="border border-gray-700/40 p-8 bg-black/50">
              <h3 className="text-lg font-light mb-4 text-gray-300">vs Visual Builders (n8n/Flowise/Langflow/AirOps)</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                LLMs taught everyone to write complex code. Visual builders are condescending toys built for a world that no longer exists. Output is a real framework anyone can use—because AI writes most of the code.
              </p>
            </div>
            
            <div className="border border-gray-700/40 p-8 bg-black/50">
              <h3 className="text-lg font-light mb-4 text-gray-300">vs Mastra / LangGraph / LlamaIndex</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every AI framework tries to reinvent the entire stack—including orchestration. Orchestration at scale is a hard, solved problem. We didn't reinvent it. We embraced <a href="https://temporal.io/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white underline">Temporal</a>, the open-source infra powering Replit, OpenAI Codex, Netflix, Stripe, Snap and more. Durable execution, automatic retries, and production-grade reliability—battle-tested.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}