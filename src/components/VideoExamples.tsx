import { Play } from 'lucide-react';

export function VideoExamples() {
  const videos = [
    {
      title: 'Simple Automation',
      description: 'Build a content summarizer in 5 minutes',
    },
    {
      title: 'Multi-step Agent',
      description: 'Research agent with web search',
    },
    {
      title: 'Production Feature',
      description: 'Full AI feature with evals',
    }
  ];

  return (
    <section className="py-24 sm:py-32 overflow-x-hidden w-full max-w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* 44px top border */}
          <div className="w-[88px] h-px bg-gray-700/20 mb-24 sm:mb-32"></div>

          <div className="mb-20">
            <h2 className="mb-4 text-gray-300 text-glow">See it in action.</h2>
            <p className="text-base text-gray-500 font-light text-glow-subtle max-w-2xl">
              Watch how to build production AI workflows in minutes, not months.
            </p>
          </div>

          {/* Main video */}
          <div className="border border-gray-700/40 mb-16">
            <div className="aspect-video bg-black flex items-center justify-center">
              <div className="text-gray-700 text-sm text-glow-subtle">
                Video Player
              </div>
            </div>
          </div>

          {/* Video list */}
          <div className="grid sm:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={video.title}
                className="p-8 hover:bg-gray-900/30 transition-colors duration-150 cursor-pointer group relative"
              >
                {/* Play button */}
                <div className="absolute top-8 right-8 w-8 h-8 border border-gray-700/60 flex items-center justify-center group-hover:border-gray-500 transition-colors">
                  <Play className="w-3 h-3 text-gray-700 group-hover:text-gray-400 transition-colors fill-current" />
                </div>
                
                <div className="text-xs text-gray-600 mb-4 text-glow-subtle">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mb-3 text-base text-gray-400 group-hover:text-white text-glow-subtle transition-all">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 font-light text-glow-subtle">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}