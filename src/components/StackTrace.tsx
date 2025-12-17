import { useState, useEffect } from 'react';

const traces = [
  'at Runtime.exec(core.ts:142)',
  'at Worker.process(pool.ts:89)',
  'at Queue.dispatch(main.ts:256)',
  'at Scheduler.run(thread.ts:73)',
  'at Context.init(app.ts:18)',
  'at Module.load(bundle.ts:401)',
  'at Handler.invoke(route.ts:55)',
  'at Promise.then(async.ts:127)'
];

export function StackTrace() {
  const [trace, setTrace] = useState(traces[0]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showInterval = setInterval(() => {
      if (Math.random() < 0.25) {
        setTrace(traces[Math.floor(Math.random() * traces.length)]);
        setVisible(true);
        
        setTimeout(() => {
          setVisible(false);
        }, 3000);
      }
    }, 6000);

    return () => clearInterval(showInterval);
  }, []);

  return (
    <span 
      className={`text-[9px] text-amber-600/40 transition-opacity duration-500 select-none font-mono ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {trace}
    </span>
  );
}
