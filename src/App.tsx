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
      </main>
      <Footer />
    </div>
  );
}