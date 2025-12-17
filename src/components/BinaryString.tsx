import { useState, useEffect } from 'react';

export function BinaryString({ length = 8 }: { length?: number }) {
  const [binary, setBinary] = useState('');

  useEffect(() => {
    const generateBinary = () => {
      return Array.from({ length }, () => Math.random() > 0.5 ? '1' : '0').join('');
    };
    
    setBinary(generateBinary());
    
    const interval = setInterval(() => {
      setBinary(generateBinary());
    }, 1500 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, [length]);

  return (
    <span className="text-[8px] text-gray-700 opacity-30 select-none font-mono">
      {binary}
    </span>
  );
}
