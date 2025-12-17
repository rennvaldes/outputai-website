import { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
  glitchChance?: number;
}

export function GlitchText({ children, className = '', glitchChance = 0.02 }: GlitchTextProps) {
  const [text, setText] = useState(children);
  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < glitchChance) {
        const chars = children.split('');
        const numGlitches = Math.floor(Math.random() * 2) + 1;
        
        for (let i = 0; i < numGlitches; i++) {
          const pos = Math.floor(Math.random() * chars.length);
          chars[pos] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        
        setText(chars.join(''));
        
        setTimeout(() => {
          setText(children);
        }, 50 + Math.random() * 100);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [children, glitchChance]);

  return <span className={className}>{text}</span>;
}
