import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Play, Sliders, Terminal, Copy, Check, FileCode, Cpu, ShieldCheck, Database } from 'lucide-react';

interface AiModel {
  id: string;
  name: string;
  provider: string;
  speed: string;
  badge: string;
  color: string;
}

const models: AiModel[] = [
  {
    id: 'claude-3-5',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    speed: '120 tok/s',
    badge: 'Premier Reasoning',
    color: 'text-[#7C3AED] border-[#7C3AED]/30 bg-[#7C3AED]/10',
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o Omnimodal',
    provider: 'OpenAI',
    speed: '145 tok/s',
    badge: 'Vision & Tool Calling',
    color: 'text-[#0284C7] border-[#0284C7]/30 bg-[#0284C7]/10',
  },
  {
    id: 'deepseek-v3',
    name: 'DeepSeek-V3 MoE',
    provider: 'DeepSeek AI',
    speed: '180 tok/s',
    badge: 'Code Synthesis',
    color: 'text-[#059669] border-[#059669]/30 bg-[#059669]/10',
  },
  {
    id: 'gemini-2-flash',
    name: 'Gemini 2.0 Flash',
    provider: 'Google DeepMind',
    speed: '210 tok/s',
    badge: 'Sub-100ms Streaming',
    color: 'text-[#EEA22A] border-[#EEA22A]/30 bg-[#EEA22A]/10',
  },
];

const presets: Record<
  string,
  { prompt: string; response: string; code: string; citations: string[] }
> = {
  'Architect RAG Vector Pipeline': {
    prompt: 'Synthesize a high-concurrency Supabase pgvector retrieval pipeline with hybrid search in Next.js 15.',
    response:
      'We initialize an asynchronous hybrid search pipeline combining cosine distance vector embeddings with full-text BM25 rankings. The edge server action streams tokens directly to the client with sub-150ms TTFT.',
    code: `// app/api/chat/route.ts - Veltrix Neural Engine\nimport { streamText } from 'ai';\nimport { createClient } from '@supabase/supabase-js';\n\nexport async function POST(req: Request) {\n  const { prompt, embedding } = await req.json();\n  const { data: chunks } = await supabase.rpc('hybrid_vector_match', {\n    query_embedding: embedding,\n    match_count: 5,\n    similarity_threshold: 0.82\n  });\n  \n  return streamText({\n    model: anthropic('claude-3-5-sonnet-20241022'),\n    system: 'You are Veltrix AI. Cite sources using verified chunk IDs.',\n    messages: [{ role: 'user', content: prompt }]\n  }).toDataStreamResponse();\n}`,
    citations: ['pgvector_v2.sql', 'hybrid_matcher.ts', 'edge_runtime.config.ts'],
  },
  '0ms Optimistic Cart & Stripe': {
    prompt: 'Implement a zero-layout shift, optimistic drawer cart with instant Stripe checkout session pre-warm.',
    response:
      'Optimistic state updates apply in 0ms before the background sync acknowledges. A lightweight Web Worker pre-fetches the encrypted Stripe Checkout Client Secret.',
    code: `// lib/cart/store.ts\nexport const useCart = create<CartState>((set, get) => ({\n  items: [],\n  addItem: (product) => {\n    // 0ms Optimistic UI update\n    set((state) => ({ items: [...state.items, product] }));\n    // Background checkout pre-warming\n    navigator.sendBeacon('/api/cart/sync', JSON.stringify(product));\n  }\n}));`,
    citations: ['stripe_session.ts', 'optimistic_cart.tsx'],
  },
  'Multi-Tenant SaaS RBAC': {
    prompt: 'Generate Row Level Security policy & role hierarchy for enterprise SaaS organization isolation.',
    response:
      'Granular PostgreSQL Row Level Security enforces strict multi-tenant data boundaries. Organization tokens are verified at the Edge middleware layer.',
    code: `CREATE POLICY tenant_isolation_policy ON organization_data\n  FOR ALL\n  USING (tenant_id = current_setting('app.current_tenant_id')::uuid);\n\nALTER TABLE organization_data ENABLE ROW LEVEL SECURITY;`,
    citations: ['schema_rls.sql', 'auth_middleware.ts'],
  },
};

export const AiStudioPlayground: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<AiModel>(models[0]);
  const [selectedPreset, setSelectedPreset] = useState<string>('Architect RAG Vector Pipeline');
  const [temperature, setTemperature] = useState<number>(0.3);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [tokenCount, setTokenCount] = useState<number>(0);

  const activePresetData = presets[selectedPreset];

  const triggerInference = () => {
    setIsStreaming(true);
    setDisplayedText('');
    setTokenCount(0);

    const fullResponse = activePresetData.response;
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullResponse.length) {
        setDisplayedText((prev) => prev + fullResponse.charAt(index));
        setTokenCount((prev) => prev + Math.floor(Math.random() * 2 + 1));
        index++;
      } else {
        setIsStreaming(false);
        clearInterval(interval);
      }
    }, 14);
  };

  useEffect(() => {
    triggerInference();
  }, [selectedPreset, selectedModel]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activePresetData.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="ai-studio" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-[#E6E2D8] bg-[#F3EFE7] px-4 py-1 text-xs font-mono text-[#6B6862] mb-3"
        >
          <span className="text-[#EEA22A] font-bold">03 / AI ENGINEERING LAB</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121316]"
        >
          Production AI Intelligence. <br />
          <span className="text-[#8C857B]">Engineered Into Your Web Apps.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-base text-[#6B6862]"
        >
          Experience how Maaz &amp; Suman integrate custom LLM agents, vector embeddings, and real-time streaming interfaces into client web platforms.
        </motion.p>
      </div>

      {/* Interactive Studio Console */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="paper-card rounded-2xl p-6 sm:p-8 relative overflow-hidden"
      >
        {/* Top Control Toolbar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#E6E2D8]">
          {/* Model Selector Pills */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#948E83] flex items-center gap-1.5 font-bold">
              <Cpu className="h-3.5 w-3.5 text-[#121316]" /> Select Foundation Model
            </span>
            <div className="flex flex-wrap gap-2">
              {models.map((model) => (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelectedModel(model)}
                  className={`flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-all ${
                    selectedModel.id === model.id
                      ? 'border-[#EEA22A] bg-[#FEF3D6] text-[#121316] font-bold shadow-sm'
                      : 'border-[#E6E2D8] bg-[#FAF8F3] text-[#6B6862] hover:border-[#D6D0C2]'
                  }`}
                >
                  <span>{model.name}</span>
                  <span className="font-mono text-[10px] text-[#948E83]">{model.speed}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Temperature & Metrics */}
          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
            <div className="flex items-center gap-3 rounded-lg border border-[#E6E2D8] bg-[#FAF8F3] px-3.5 py-2 text-xs">
              <Sliders className="h-3.5 w-3.5 text-[#6B6862]" />
              <span className="text-[#6B6862]">Temp:</span>
              <span className="font-mono font-bold text-[#121316]">{temperature}</span>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-20 accent-[#EEA22A] cursor-pointer"
              />
            </div>

            <button
              type="button"
              onClick={triggerInference}
              disabled={isStreaming}
              className="btn-amber flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold disabled:opacity-50"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>{isStreaming ? 'Streaming...' : 'Re-Run Stream'}</span>
            </button>
          </div>
        </div>

        {/* Preset Prompt Switcher */}
        <div className="py-5 border-b border-[#E6E2D8]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#948E83] flex items-center gap-1.5 font-bold">
              <Bot className="h-3.5 w-3.5 text-[#121316]" /> Real-World Architecture Presets
            </span>
            <span className="text-[11px] font-mono text-[#059669] flex items-center gap-1 font-semibold">
              <ShieldCheck className="h-3 w-3" /> Live Inference Ready
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.keys(presets).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedPreset(key)}
                className={`rounded-xl border p-3.5 text-left transition-all ${
                  selectedPreset === key
                    ? 'border-[#EEA22A] bg-[#FEF3D6] text-[#121316] font-semibold shadow-sm'
                    : 'border-[#E6E2D8] bg-[#FAF8F3] text-[#6B6862] hover:border-[#D6D0C2]'
                }`}
              >
                <p className="text-xs">{key}</p>
                <p className="text-[11px] text-[#948E83] mt-1 font-normal line-clamp-1">
                  {presets[key].prompt}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Streaming Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
          {/* Left: Natural Language Streaming */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#948E83] flex items-center gap-1.5 font-bold">
                <Terminal className="h-3.5 w-3.5 text-[#121316]" /> Neural Stream Output
              </span>
              <span className="text-[#EEA22A] font-bold">
                {tokenCount} Tokens
              </span>
            </div>

            <div className="rounded-xl border border-[#E6E2D8] bg-[#FAF8F3] p-4 min-h-[200px] text-xs leading-relaxed text-[#121316] flex flex-col justify-between">
              <div>
                <p className="font-semibold text-[#121316] mb-2 font-mono text-[11px]">
                  &gt; Query: &ldquo;{activePresetData.prompt}&rdquo;
                </p>
                <p className="text-[#6B6862] leading-relaxed">
                  {displayedText}
                  {isStreaming && (
                    <span className="inline-block h-3.5 w-1.5 ml-1 bg-[#EEA22A] animate-pulse" />
                  )}
                </p>
              </div>

              {/* Citations */}
              <div className="pt-3 border-t border-[#E6E2D8] mt-4">
                <span className="text-[10px] font-mono text-[#948E83] block mb-1.5">
                  Verified Vector Documents:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activePresetData.citations.map((src) => (
                    <span
                      key={src}
                      className="inline-flex items-center gap-1 rounded bg-white border border-[#E6E2D8] px-2 py-0.5 font-mono text-[10px] text-[#6B6862]"
                    >
                      <Database className="h-2.5 w-2.5 text-[#EEA22A]" /> {src}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Production TypeScript Code Snippet */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#948E83] flex items-center gap-1.5 font-bold">
                <FileCode className="h-3.5 w-3.5 text-[#121316]" /> Production Code Implementation
              </span>
              <button
                type="button"
                onClick={handleCopyCode}
                className="flex items-center gap-1 text-[11px] font-mono text-[#6B6862] hover:text-[#121316] bg-white px-2.5 py-1 rounded-md border border-[#E6E2D8] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-[#059669]" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" /> Copy Code
                  </>
                )}
              </button>
            </div>

            <div className="rounded-xl border border-[#E6E2D8] bg-[#121316] p-4 font-mono text-xs text-[#EEA22A] overflow-x-auto min-h-[200px]">
              <pre className="text-[11px] leading-relaxed text-[#E6E2D8]">
                <code>{activePresetData.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
