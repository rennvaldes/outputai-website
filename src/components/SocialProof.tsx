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
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* 44px top border */}
          <div className="w-[88px] h-px bg-gray-700/20 mb-24 sm:mb-32"></div>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
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

            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-800/30">
                {companies.map((company, index) => (
                  <div
                    key={company.name}
                    className="bg-black p-4 sm:p-6 md:p-8 flex items-center justify-center hover:bg-gray-900/30 transition-colors duration-150 relative group"
                  >
                    {company.logo ? (
                      <div className={company.name === 'Superhuman' ? 'overflow-hidden' : ''}>
                        <img 
                          src={company.logo} 
                          alt={company.name}
                          className={`w-auto object-contain opacity-60 hover:opacity-100 transition-opacity ${
                            company.name === 'Surge' ? 'h-9' : company.name === 'Ramp' || company.name === 'Abnormal' ? 'h-12' : company.name === 'Webflow' ? 'h-16' : 'h-24'
                          }`}
                          style={{ 
                            mixBlendMode: 'lighten',
                            filter: (company.name === 'Lovable' || company.name === 'Ramp' || company.name === 'Webflow' || company.name === 'Abnormal' || company.name === 'Reddit' || company.name === 'Airbyte' || company.name === 'Augment Code' || company.name === 'Surge') ? 'invert(1)' : 'none',
                            transform: company.name === 'Surge' || company.name === 'Abnormal' ? 'scale(0.75)' : company.name === 'Lovable' ? 'scale(1.15)' : 'none',
                            clipPath: company.name === 'Superhuman' ? 'inset(0 5% 5% 0)' : 'none'
                          }}
                        />
                      </div>
                    ) : (
                      <div className="text-sm text-gray-600 hover:text-gray-400 text-glow-subtle transition-all text-center">
                        {company.name}
                      </div>
                    )}
                    <div className="absolute top-1 right-2 text-[8px] text-gray-800 opacity-0 group-hover:opacity-30 transition-opacity">
                      <BinaryString length={4} />
                    </div>
                    {index % 3 === 0 && (
                      <div className="absolute bottom-1 left-2 text-[8px] text-gray-800 opacity-0 group-hover:opacity-20 transition-opacity">
                        <SystemMessage />
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