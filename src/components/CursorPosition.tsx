import { useState, useEffect } from 'react';

export function CursorPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle updates
      if (Math.random() > 0.9) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <span className="text-[8px] text-gray-700 opacity-30 select-none font-mono">
      x:{position.x.toString().padStart(4, '0')} y:{position.y.toString().padStart(4, '0')}
    </span>
  );
}
