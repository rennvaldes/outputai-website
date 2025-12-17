import { useState, useEffect } from 'react';

export function MemoryAddress() {
  const [address, setAddress] = useState('0x7FFE2A8B');

  useEffect(() => {
    const interval = setInterval(() => {
      const hex = Math.floor(Math.random() * 0xFFFFFFFF).toString(16).toUpperCase().padStart(8, '0');
      setAddress(`0x${hex}`);
    }, 2000 + Math.random() * 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-[9px] text-gray-700 opacity-40 select-none">
      {address}
    </span>
  );
}
