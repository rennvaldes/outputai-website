import { useState, useEffect } from 'react';

export function TypingCursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(v => !v);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`text-gray-500 transition-opacity duration-100 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      _
    </span>
  );
}
