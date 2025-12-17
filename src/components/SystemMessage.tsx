import { useState, useEffect } from 'react';

const messages = [
  'PROCESS_INIT',
  'HEAP_ALLOC',
  'GC_CYCLE',
  'THREAD_SPAWN',
  'CACHE_MISS',
  'BUFFER_FLUSH',
  'STACK_PUSH',
  'QUEUE_EMPTY',
  'MUTEX_LOCK',
  'EVENT_FIRED',
  'SOCKET_OPEN',
  'PARSER_OK',
  'COMPILE_START',
  'RUNTIME_ERR',
  'SIGNAL_RECV'
];

export function SystemMessage() {
  const [message, setMessage] = useState(messages[0]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      
      setTimeout(() => {
        setMessage(messages[Math.floor(Math.random() * messages.length)]);
        setVisible(true);
      }, 200);
    }, 3000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`text-[8px] text-gray-700 font-mono transition-opacity duration-200 select-none ${
        visible ? 'opacity-40' : 'opacity-0'
      }`}
    >
      [{message}]
    </span>
  );
}
