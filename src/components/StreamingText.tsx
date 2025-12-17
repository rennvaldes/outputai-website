import { useEffect, useRef, useState } from 'react';

interface StreamingTextProps {
  children: React.ReactNode;
  delay?: number;
  speed?: number;
  className?: string;
}

export function StreamingText({ children, delay = 0, speed = 20, className = '' }: StreamingTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // Convert children to string
  const text = typeof children === 'string' ? children : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  useEffect(() => {
    if (isVisible && text) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [isVisible, text, speed]);

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? displayedText : <span className="opacity-0">{text}</span>}
      {isVisible && displayedText.length < text.length && (
        <span className="animate-pulse">▊</span>
      )}
    </div>
  );
}
