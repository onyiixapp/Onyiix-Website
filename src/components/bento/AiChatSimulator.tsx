import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Terminal, FileCode2 } from 'lucide-react';

const demoResponses: Record<string, { answer: string; code?: string; sources: string[] }> = {
  'How does the 30-day warranty work?': {
    answer:
      'Maaz & Suman provide an unconditional 30-day bug warranty. If any UI defect, responsive regression, or broken endpoint occurs, we deploy a zero-cost fix within 24 hours.',
    sources: ['WarrantyCharter.ts', 'SLA_Agreement.md'],
  },
  'Can you integrate custom RAG chatbots?': {
    answer:
      'Yes. We orchestrate Supabase pgvector embeddings with LangChain and Vercel AI SDK to build streaming RAG pipelines with custom source citation chips.',
    code: `const vectorStore = new SupabaseVectorStore(embeddings, {\n  client: supabase,\n  tableName: 'documents',\n  queryName: 'match_documents',\n});`,
    sources: ['ai-engine.ts', 'pgvector-schema.sql'],
  },
  'What is your standard turnaround speed?': {
    answer:
      'High-converting landing pages are delivered in 5–7 days. Custom AI web applications and SaaS platforms are completed in 10–14 days with weekly staging previews.',
    sources: ['SprintDeliveryTimeline.pdf'],
  },
};

export const AiChatSimulator: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState('Can you integrate custom RAG chatbots?');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const fullText = demoResponses[selectedPrompt]?.answer || '';
    setDisplayedText('');
    setIsTyping(true);

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [selectedPrompt]);

  const currentData = demoResponses[selectedPrompt];

  return (
    <div className="rounded-xl border border-white/15 bg-surface/90 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
      {/* Top Header */}
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-violet/20 text-accent-violet border border-accent-violet/40">
            <Bot className="h-3.5 w-3.5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-ink-primary flex items-center gap-1.5">
              Veltrix Neural AI Agent
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-emerald animate-pulse" />
            </p>
          </div>
        </div>
        <span className="font-mono text-[10px] text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/20">
          Latency: 118ms
        </span>
      </div>

      {/* Preset Prompt Pills */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {Object.keys(demoResponses).map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => setSelectedPrompt(prompt)}
            className={`rounded-full border px-2.5 py-1 text-[11px] transition-all ${
              selectedPrompt === prompt
                ? 'border-accent-violet bg-accent-violet/15 text-ink-primary font-medium'
                : 'border-white/10 bg-surface-elevated text-ink-muted hover:border-white/20'
            }`}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Streaming Bubble */}
      <div className="rounded-lg border border-white/10 bg-surface-elevated/70 p-3 text-xs">
        <div className="flex items-start gap-2">
          <Sparkles className="mt-0.5 h-3.5 w-3.5 text-accent-violet shrink-0" />
          <div className="flex-1 space-y-2">
            <p className="text-ink-primary leading-relaxed">
              {displayedText}
              {isTyping && <span className="inline-block h-3.5 w-1.5 ml-1 bg-accent-cyan animate-pulse" />}
            </p>

            {/* Code Snippet if applicable */}
            {currentData?.code && !isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 rounded bg-black/60 p-2 font-mono text-[10px] text-accent-cyan border border-white/10 overflow-x-auto"
              >
                <div className="flex items-center gap-1 text-ink-tertiary mb-1">
                  <Terminal className="h-2.5 w-2.5" /> Vector Engine
                </div>
                <pre>{currentData.code}</pre>
              </motion.div>
            )}

            {/* Source Citations */}
            {!isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 flex flex-wrap items-center gap-1.5 pt-1"
              >
                <span className="text-[10px] font-semibold text-ink-tertiary">Verified Sources:</span>
                {currentData?.sources.map((src) => (
                  <span
                    key={src}
                    className="inline-flex items-center gap-1 rounded bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-ink-secondary border border-white/10 hover:border-accent-cyan/40 cursor-pointer transition-colors"
                  >
                    <FileCode2 className="h-2.5 w-2.5 text-accent-cyan" /> {src}
                  </span>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
