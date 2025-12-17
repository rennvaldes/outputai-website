import { useState, useEffect } from 'react';

const comments = [
  '// TODO: optimize',
  '// FIXME: memory leak',
  '// HACK: temporary solution',
  '// NOTE: check this later',
  '// WARNING: deprecated',
  '// DEBUG: remove before prod',
  '// IDEA: refactor this',
  '// BUG: investigate',
  '// PERF: bottleneck here',
  '// REVIEW: needs testing'
];

export function CodeComment() {
  const [comment, setComment] = useState(comments[0]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        setComment(comments[Math.floor(Math.random() * comments.length)]);
        setVisible(true);
        
        setTimeout(() => {
          setVisible(false);
        }, 2000 + Math.random() * 3000);
      }
    }, 5000);

    return () => clearInterval(showInterval);
  }, []);

  return (
    <span 
      className={`text-[10px] text-green-600/50 transition-opacity duration-300 select-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {comment}
    </span>
  );
}
