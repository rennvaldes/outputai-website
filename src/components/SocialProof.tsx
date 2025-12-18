import { MemoryAddress } from './MemoryAddress';
import { GlitchText } from './GlitchText';
import { SystemMessage } from './SystemMessage';
import { BinaryString } from './BinaryString';
import superhumanLogo from 'figma:asset/abbc5373644085fbfbcf487baaec84d947aed4bd.png';
import redditLogo from 'figma:asset/cef001203dc76cd0b0e452f1693ab028fa8e36f7.png';
import lovableLogo from 'figma:asset/3539e629868935eaae83184de3868d4bbada0fb0.png';
import rampLogo from 'figma:asset/bfdeccd696a2d7f59a45cb375928a84a5010f803.png';
import webflowLogo from 'figma:asset/63963c4dd10310bd2a74206720199a4bd6fd0ff8.png';
import abnormalLogo from 'figma:asset/fd7e882ae113f466a16566a8d214ccf939687f95.png';
import airbyteLogo from 'figma:asset/8ee2bfff280eb32dc6231f129d09d321fbe3ea40.png';
import augmentCodeLogo from 'figma:asset/784ada4a6f2ace26c4fa1eb0bc6708d310437371.png';
import surgeLogo from 'figma:asset/0081478320a0fadd885a3a7f90b35a363b95bf55.png';

export function SocialProof() {
  const companies = [
    { name: 'Superhuman', logo: superhumanLogo },
    { name: 'Ramp', logo: rampLogo },
    { name: 'Reddit', logo: redditLogo },
    { name: 'Webflow', logo: webflowLogo },
    { name: 'Abnormal', logo: abnormalLogo },
    { name: 'Lovable', logo: lovableLogo },
    { name: 'Augment Code', logo: augmentCodeLogo },
    { name: 'Airbyte', logo: airbyteLogo },
    { name: 'Surge', logo: surgeLogo },
  ];

  return (
    <section className="py-24 sm:py-32 overflow-x-hidden w-full max-w-full">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* 44px top border */}
          <div className="w-[88px] h-px bg-gray-700/20 mb-24 sm:mb-32"></div>
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left column - Text */}
            <div className="lg:col-span-5 relative">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h2 className="text-gray-300 text-glow">
                  Born from <GlitchText glitchChance={0.01}>production.</GlitchText>
                </h2>
                <span className="text-[8px] text-gray-800 opacity-20 mt-1">
                  ORIGIN
                </span>
                <BinaryString length={8} />
              </div>
              
              <div>
                <p className="text-base leading-relaxed text-gray-400 font-light text-glow-subtle">
                  Output came from <a href="https://growthx.ai/" className="underline hover:text-white">GrowthX</a> building AI features and workflows for leading companies. The patterns that survived our real-world use cases are now available to everyone.
                </p>
              </div>
              
              {/* Technical markers */}
              <div className="flex items-center gap-3 mt-3 text-[8px] text-gray-800 opacity-20 flex-wrap">
                <MemoryAddress />
                <SystemMessage />
              </div>
            </div>

            {/* Right column - Logo Grid */}
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-800/30">
                {companies.map((company, index) => (
                  <div
                    key={company.name}
                    className="bg-black p-16 sm:p-24 md:p-32 flex items-center justify-center hover:bg-gray-900/50 transition-colors duration-150 group min-h-[300px] relative"
                  >
                    {/* Technical annotations */}
                    <div className="absolute top-2 right-3 flex flex-col items-end gap-1 text-[8px] text-gray-800 opacity-20 select-none">
                      <MemoryAddress />
                      <BinaryString length={6} />
                    </div>
                    
                    <div className="absolute bottom-2 left-3 text-[8px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                      <SystemMessage />
                    </div>
                    
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="w-full max-w-[280px] h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-150"
                      />
                    ) : (
                      <div className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors">
                        {company.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
