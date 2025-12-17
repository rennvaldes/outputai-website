import svgPaths from "./svg-tp3l6d9fc4";

export default function Group({ hideUnderscore = false }: { hideUnderscore?: boolean }) {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 867 257">
        <g clipPath="url(#clip0_6_924)" id="Group 1000004197">
          {!hideUnderscore && <path d={svgPaths.p27a28100} fill="var(--fill-0, black)" id="Vector" />}
          <path d={svgPaths.p30a62600} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.pc27b2f0} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p1ad921f0} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p18635200} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p2dfcc100} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p23a24480} fill="var(--fill-0, black)" id="Vector_7" />
          <g id="Frame 2147259913"></g>
        </g>
        <defs>
          <clipPath id="clip0_6_924">
            <rect fill="white" height="256.357" width="866.503" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}