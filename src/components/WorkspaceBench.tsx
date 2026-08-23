import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const WorkspaceBench: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workspace' | 'ai' | 'design' | 'product'>('workspace');
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string; sub?: string }>>([
    { role: 'user', text: 'make the rail crop the second card' },
    { role: 'assistant', text: 'On it — a 24px reveal on the second.', sub: 'Editing WorkRail.tsx' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [activeNode, setActiveNode] = useState<string>('SHIP');

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const userMsg = inputVal;
    setInputVal('');
    setChatMessages((prev) => [...prev, { role: 'user', text: userMsg }]);

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `Optimized component layout & synced with Supabase edge route.`,
          sub: 'Updated VeltrixEngine.ts',
        },
      ]);
    }, 600);
  };

  return (
    <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Outer Browser/Desk Container matching pleurat.com screenshot */}
      <div className="rounded-2xl border border-[#E6E2D8] bg-[#FAF8F3] overflow-hidden shadow-paper-elevated">
        {/* Top Amber Bar */}
        <div className="bg-[#EEA22A] px-4 py-2.5 flex items-center justify-between font-mono text-[11px] font-bold text-[#121316] tracking-wider">
          <div className="flex items-center gap-2">
            <span className="flex gap-1 text-[#121316]">
              <span className="inline-block w-2 h-2 bg-[#121316]" />
              <span className="inline-block w-2 h-2 bg-[#121316]" />
              <span className="inline-block w-2 h-2 bg-[#121316]" />
            </span>
            <span>VELTRIX / WORKSPACE / ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            <span className="inline-block w-2 h-2 bg-[#121316]" />
            <span>READY</span>
          </div>
        </div>

        {/* Sub-header Navigation */}
        <div className="border-b border-[#E6E2D8] bg-[#F3EFE7] grid grid-cols-12 font-mono text-[11px] text-[#6B6862]">
          <div className="col-span-12 sm:col-span-3 px-4 py-2.5 border-r border-[#E6E2D8] font-bold uppercase tracking-wider text-[#948E83]">
            EXPERTISE
          </div>
          <div className="col-span-12 sm:col-span-9 px-4 py-2.5 bg-[#FAF8F3] flex items-center justify-between">
            <span className="font-bold text-[#121316] uppercase tracking-wider">
              {activeTab === 'workspace' && 'WORKSPACE'}
              {activeTab === 'ai' && 'AI WORKFLOW PIPELINE'}
              {activeTab === 'design' && 'DESIGN SYSTEM ARCHITECTURE'}
              {activeTab === 'product' && 'FULL-STACK PRODUCT SYSTEMS'}
            </span>
            <span className="text-[#948E83] hidden sm:inline">BENCH • LIVE</span>
          </div>
        </div>

        {/* Main Workspace Body: Left Sidebar + Center Interactive Canvas */}
        <div className="grid grid-cols-12 min-h-[520px]">
          {/* Left Sidebar */}
          <div className="col-span-12 sm:col-span-3 border-r border-[#E6E2D8] bg-[#F3EFE7] divide-y divide-[#E6E2D8]/60 font-mono text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('workspace')}
              className={`w-full text-left p-4 relative transition-colors ${
                activeTab === 'workspace' ? 'bg-[#FAF8F3] text-[#121316]' : 'text-[#6B6862] hover:bg-[#EAE4D7]'
              }`}
            >
              {activeTab === 'workspace' && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#121316]" />
              )}
              <div className="flex items-center gap-2 font-bold font-sans text-sm">
                <span className="text-[10px]">■</span> Workspace
              </div>
              <p className="text-[10px] text-[#948E83] uppercase tracking-wider mt-0.5">
                BENCH • LIVE
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ai')}
              className={`w-full text-left p-4 relative transition-colors ${
                activeTab === 'ai' ? 'bg-[#FAF8F3] text-[#121316]' : 'text-[#6B6862] hover:bg-[#EAE4D7]'
              }`}
            >
              {activeTab === 'ai' && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#121316]" />
              )}
              <div className="flex items-center gap-2 font-bold font-sans text-sm">
                <span className="text-[10px]">■</span> AI Workflow
              </div>
              <p className="text-[10px] text-[#948E83] uppercase tracking-wider mt-0.5">
                AGENTS • DAILY
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('design')}
              className={`w-full text-left p-4 relative transition-colors ${
                activeTab === 'design' ? 'bg-[#FAF8F3] text-[#121316]' : 'text-[#6B6862] hover:bg-[#EAE4D7]'
              }`}
            >
              {activeTab === 'design' && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#121316]" />
              )}
              <div className="flex items-center gap-2 font-bold font-sans text-sm">
                <span className="text-[10px]">■</span> Design System
              </div>
              <p className="text-[10px] text-[#948E83] uppercase tracking-wider mt-0.5">
                LIBRARY • 12 PARTS
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('product')}
              className={`w-full text-left p-4 relative transition-colors ${
                activeTab === 'product' ? 'bg-[#FAF8F3] text-[#121316]' : 'text-[#6B6862] hover:bg-[#EAE4D7]'
              }`}
            >
              {activeTab === 'product' && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#121316]" />
              )}
              <div className="flex items-center gap-2 font-bold font-sans text-sm">
                <span className="text-[10px]">■</span> Product Systems
              </div>
              <p className="text-[10px] text-[#948E83] uppercase tracking-wider mt-0.5">
                END TO END • MAAZ &amp; SUMAN
              </p>
            </button>
          </div>

          {/* Center Interactive Dot-Grid Canvas */}
          <div className="col-span-12 sm:col-span-9 bg-canvas-dots p-6 sm:p-8 relative flex flex-col justify-between overflow-x-auto">
            {/* Interactive Flowchart Diagram */}
            <div className="relative z-10 my-4 min-w-[550px]">
              {/* Floating Maaz Cursor */}
              <motion.div
                animate={{
                  x: activeNode === 'SHIP' ? [60, 280, 480, 480] : [480, 280, 60, 60],
                  y: activeNode === 'SHIP' ? [30, 20, 25, 25] : [25, 20, 30, 30],
                }}
                transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                className="absolute z-30 pointer-events-none flex items-center gap-1"
              >
                <svg className="w-4 h-4 text-[#121316] fill-current drop-shadow" viewBox="0 0 24 24">
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
                <span className="bg-[#121316] text-white font-mono text-[9px] px-1.5 py-0.5 rounded font-bold">
                  Maaz
                </span>
              </motion.div>

              {/* Flowchart Nodes */}
              <div className="flex items-center gap-3 text-xs font-mono font-semibold">
                {/* Node 1: BRIEF */}
                <button
                  type="button"
                  onClick={() => setActiveNode('BRIEF')}
                  className={`workspace-node ${activeNode === 'BRIEF' ? 'border-[#EEA22A] bg-white shadow-sm' : ''}`}
                >
                  BRIEF
                </button>

                <span className="text-[#948E83] font-mono">→</span>

                {/* Node 2: EXPLORE */}
                <button
                  type="button"
                  onClick={() => setActiveNode('EXPLORE')}
                  className={`workspace-node ${activeNode === 'EXPLORE' ? 'border-[#EEA22A] bg-white shadow-sm' : ''}`}
                >
                  EXPLORE
                </button>

                <span className="text-[#948E83] font-mono">→</span>

                {/* Node 3: IN THE SYSTEM? Diamond */}
                <button
                  type="button"
                  onClick={() => setActiveNode('SYSTEM')}
                  className="px-3 py-2 border border-[#D6D0C4] bg-[#FAF8F3] rounded text-[11px] font-mono font-bold hover:border-[#EEA22A] transition-colors"
                >
                  IN THE SYSTEM?
                </button>

                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-[#948E83] font-mono">YES →</span>
                  <button
                    type="button"
                    onClick={() => setActiveNode('REUSE')}
                    className="workspace-node mt-1"
                  >
                    REUSE
                  </button>
                </div>

                <span className="text-[#948E83] font-mono">→</span>

                {/* Node 4: SHIP Amber Block */}
                <button
                  type="button"
                  onClick={() => setActiveNode('SHIP')}
                  className="bg-[#EEA22A] text-[#121316] font-mono font-bold text-xs px-4 py-2.5 rounded border border-[#D98C1E] shadow-amber-btn hover:opacity-90 transition-all flex items-center gap-1.5"
                >
                  <span>SHIP</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>

              {/* Lower Branch (NO -> NEW PATTERN -> ADD TO LIB) */}
              <div className="flex items-center gap-4 mt-6 ml-44 text-xs font-mono">
                <span className="text-[10px] text-[#948E83]">NO ↓</span>
                <button
                  type="button"
                  onClick={() => setActiveNode('NEW')}
                  className="workspace-node"
                >
                  NEW PATTERN
                </button>
                <span className="text-[#948E83]">→</span>
                <button
                  type="button"
                  onClick={() => setActiveNode('LIB')}
                  className="workspace-node"
                >
                  ADD TO LIB
                </button>
              </div>

              {/* Sticky Notes from Screenshot */}
              <div className="flex flex-wrap items-start gap-4 mt-8">
                {/* Purple Sticky Note */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 0 }}
                  className="w-56 bg-[#EDE8F8] border border-[#DDD5EF] p-4 rounded-md shadow-sticky-note -rotate-1 font-sans text-xs text-[#2A2438] leading-relaxed cursor-pointer"
                >
                  <p className="font-medium">
                    &ldquo;Reuse before you add. Every new pattern is a thing somebody has to maintain.&rdquo;
                  </p>
                  <p className="text-[10px] text-[#6E6388] font-mono mt-2">— Veltrix Design Rule</p>
                </motion.div>

                {/* Blue Sticky Note */}
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 0 }}
                  className="w-44 bg-[#E2EFF8] border border-[#CDE3F2] p-3.5 rounded-md shadow-sticky-note rotate-1 font-sans text-xs text-[#1E3245] leading-relaxed cursor-pointer"
                >
                  <p className="font-medium">
                    Empty state? ask Maaz &amp; Suman
                  </p>
                  <p className="text-[10px] text-[#557694] font-mono mt-1.5">30-Day Bug Warranty</p>
                </motion.div>

                {/* Floating Chat Card from Screenshot */}
                <div className="ml-auto w-full md:w-64 bg-white border border-[#E6E2D8] rounded-xl p-3.5 shadow-paper-card text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E6E2D8] mb-2 font-mono text-[10px] text-[#948E83]">
                    <span>CHAT</span>
                    <span className="text-[#059669] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" /> ONLINE
                    </span>
                  </div>

                  <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                    <AnimatePresence initial={false}>
                      {chatMessages.map((msg, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-2 rounded-lg ${
                            msg.role === 'user'
                              ? 'bg-[#F3EFE7] text-[#121316] font-mono text-[11px]'
                              : 'bg-[#FEF3D6] text-[#121316] text-[11px]'
                          }`}
                        >
                          <p>{msg.text}</p>
                          {msg.sub && (
                            <p className="font-mono text-[9px] text-[#8C6B1F] mt-0.5">
                              {msg.sub}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  <form onSubmit={handleSendChat} className="mt-2.5 flex items-center gap-1.5 pt-2 border-t border-[#E6E2D8]">
                    <input
                      type="text"
                      placeholder="Ask workflow..."
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      className="flex-1 bg-[#FAF8F3] border border-[#E6E2D8] rounded px-2 py-1 text-[11px] text-[#121316] focus:outline-none focus:border-[#EEA22A]"
                    />
                    <button
                      type="submit"
                      className="p-1 bg-[#EEA22A] text-[#121316] rounded hover:opacity-90 transition-opacity"
                    >
                      <Send className="w-3 h-3" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Bottom Toolbar matching pleurat.com screenshot */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E6E2D8]/80 font-mono text-[11px] text-[#6B6862] mt-6">
              <div className="flex items-center gap-2">
                {['FIGMA', 'CURSOR', 'CLAUDE', 'NEXT.JS 15'].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded bg-white border border-[#E6E2D8] text-[10px] text-[#121316] font-bold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-[#948E83]">
                <CheckCircle2 className="w-3 h-3 text-[#059669]" />
                <span>LIVE • NEVER FINISHED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
