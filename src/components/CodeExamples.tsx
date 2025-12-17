import { MemoryAddress } from './MemoryAddress';
import { CodeComment } from './CodeComment';
import { SystemMessage } from './SystemMessage';
import { BinaryString } from './BinaryString';
import { StackTrace } from './StackTrace';
import { useState, useRef, useEffect } from 'react';
import { StreamingSection } from './StreamingSection';

interface Position {
  x: number;
  y: number;
}

function DraggableCodeWindow({ 
  title, 
  code, 
  index 
}: { 
  title: string; 
  code: string; 
  index: number;
}) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; startPosX: number; startPosY: number } | null>(null);

  // Highlight workflow() and step() functions
  const highlightCode = (text: string) => {
    const parts = text.split(/(workflow\(\)|step\(\))/g);
    return parts.map((part, i) => {
      if (part === 'workflow()' || part === 'step()') {
        return (
          <span 
            key={i} 
            className="text-gray-300 bg-gray-800/40 px-1.5 py-0.5 rounded"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPosX: position.x,
      startPosY: position.y
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !dragRef.current) return;
    
    const deltaX = e.clientX - dragRef.current.startX;
    const deltaY = e.clientY - dragRef.current.startY;
    
    setPosition({
      x: dragRef.current.startPosX + deltaX,
      y: dragRef.current.startPosY + deltaY
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    dragRef.current = null;
  };

  // Add/remove global mouse event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, position.x, position.y]);

  return (
    <div 
      className="border border-gray-700/40 bg-black/50 relative group transition-shadow hover:shadow-lg"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'default',
        transition: isDragging ? 'none' : 'transform 0.2s ease-out'
      }}
    >
      {/* Window title bar with drag handle */}
      <div 
        className="border-b border-gray-700/40 px-4 py-2.5 text-xs text-gray-600 text-glow-subtle flex items-center justify-between flex-wrap gap-2 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-3">
          {/* macOS-style window controls */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-700/60 hover:bg-red-500/40 transition-colors"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-700/60 hover:bg-yellow-500/40 transition-colors"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-700/60 hover:bg-green-500/40 transition-colors"></div>
          </div>
          <span>{title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-gray-800 opacity-40">
            <BinaryString length={6} />
          </span>
          <span className="text-[9px] text-gray-800 opacity-0 group-hover:opacity-40 transition-opacity">
            [DRAG_TO_MOVE]
          </span>
        </div>
      </div>
      
      <pre className="p-6 text-xs sm:text-sm overflow-x-auto leading-relaxed">
        <code className="text-gray-400 text-glow-subtle">{highlightCode(code)}</code>
      </pre>
      
      {/* Corner annotations */}
      <div className="absolute bottom-2 right-2 flex flex-col items-end gap-1 text-[8px] text-gray-800 opacity-20">
        <MemoryAddress />
        <SystemMessage />
      </div>
      
      {/* Top left annotation */}
      <div className="absolute top-14 left-2 text-[8px] text-gray-800 opacity-0 group-hover:opacity-20 transition-opacity">
        <BinaryString length={12} />
      </div>
    </div>
  );
}

export function CodeExamples() {
  // Helper to highlight workflow() and step() in descriptions
  const highlightDescription = (text: string) => {
    const parts = text.split(/(workflow\(\)|step\(\))/g);
    return (
      <>
        {parts.map((part, i) => {
          if (part === 'workflow()' || part === 'step()') {
            return (
              <span 
                key={i} 
                className="text-gray-300 bg-gray-800/40 px-1.5 py-0.5 rounded inline-block"
              >
                {part}
              </span>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </>
    );
  };

  const examples = [
    {
      title: 'Workflows & Steps',
      subtitle: 'Workflows make orchestration simple.',
      description: 'Two functions: workflow() and step(). Pure async/await—no DSLs, no class hierarchies. When you need production orchestration, Temporal handles it under the hood.',
      code: `workflow({
  name: 'contentPipeline',
  fn: async (input) => {
    const draft = await generateDraft(input);
    const reviewed = await reviewContent(draft);
    return await publishContent(reviewed);
  }
});`,
    },
    {
      title: 'Prompts as Code',
      subtitle: 'Prompts live in your repo.',
      description: 'Version-controlled .prompt files with LiquidJS templating. Review prompts in PRs. Deploy with your code. No external dashboards, no scattered strings.',
      code: `---
provider: anthropic
model: claude-sonnet-4-20250514
---

<assistant>{{ role }}</assistant>
<user>{{ message }}</user>`,
    },
    {
      title: 'Evaluators',
      subtitle: 'Built-in LLM-as-Judge evaluation.',
      description: 'Specialized evaluators with confidence scores and reasoning. Boolean, numeric, or categorical—judge quality at every step.',
      code: `evaluator({
  name: 'checkQuality',
  fn: async (content) => {
    return new EvaluationBooleanResult({
      value: result.isQuality,
      confidence: result.confidence,
      reasoning: result.reasoning
    });
  }
});`,
    },
    {
      title: 'Tracing',
      subtitle: 'See everything. Replay anything.',
      description: 'Every LLM call, every step, every decision—traced automatically. Store locally or sync to S3. When something goes wrong, replay the exact execution. Debug AI systems the way they need to be debugged.',
      code: `// Every workflow execution is traced automatically
// Query traces locally or sync to S3

const trace = await getTrace(workflowRunId);

// Replay any execution for debugging
await replayWorkflow({
  traceId: trace.id,
  fromStep: 'generateDraft'
});`,
    },
    {
      title: 'Claude Code Integration',
      subtitle: 'Claude Code at the core.',
      description: 'Output is built for AI-assisted development. Describe workflows in plain English, let Claude scaffold them, iterate in conversation. Native Claude Code commands and sub-agents. The framework assumes you\'re building with AI—because you are.',
      code: `# Scaffold a new workflow by describing it
output workflow plan "A workflow that takes a URL,
scrapes the content, summarizes it, and posts
to Slack"

# Claude designs the workflow, you refine it
output workflow generate

# Native slash commands in Claude Code
/output run my-workflow --input data.json`,
    }
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* 44px top border */}
          <div className="w-[88px] h-px bg-gray-700/20 mb-24 sm:mb-32"></div>
          <div className="mb-20">
            <h2 className="mb-4 text-gray-300 text-glow">Code Examples</h2>
          </div>

          <div className="space-y-24">
            {examples.map((example, index) => (
              <StreamingSection key={example.title} delay={index * 200}>
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                  {/* Description */}
                  <div className="lg:col-span-5 relative">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <div className="text-xs text-gray-600 text-glow-subtle">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="text-[8px] text-gray-800 opacity-30">
                        <MemoryAddress />
                      </div>
                      <SystemMessage />
                      <BinaryString length={8} />
                    </div>
                    <h3 className="mb-4 text-gray-400 text-glow-subtle">
                      {example.subtitle}
                    </h3>
                    <div>
                      <p className="text-sm leading-relaxed text-gray-500 font-light text-glow-subtle">
                        {highlightDescription(example.description)}
                      </p>
                      <div className="mt-3 flex flex-col gap-1">
                        <CodeComment />
                        <StackTrace />
                      </div>
                    </div>
                    
                    {/* Measurement line */}
                    <div className="hidden lg:block absolute -left-4 top-0 bottom-0 w-px bg-gray-800/20">
                      <div className="absolute top-0 -left-1 w-2 h-px bg-gray-800/20"></div>
                      <div className="absolute bottom-0 -left-1 w-2 h-px bg-gray-800/20"></div>
                    </div>
                  </div>

                  {/* Code */}
                  <div className="lg:col-span-7 relative">
                    <DraggableCodeWindow 
                      title={example.title} 
                      code={example.code} 
                      index={index}
                    />
                  </div>
                </div>
              </StreamingSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}