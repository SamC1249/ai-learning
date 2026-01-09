import React from 'react';
import { motion } from 'framer-motion';

const CodeOutputCard: React.FC = () => {
  return (
    <div className="relative">
      {/* Code output card - simple inline display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-xl border border-zinc-800/70 bg-zinc-950/50 overflow-hidden"
      >
        {/* Header */}
        <div className="px-4 py-2 border-b border-zinc-800/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
            <span className="text-xs text-zinc-500 font-mono">solution.js</span>
          </div>
          <span className="text-[11px] text-emerald-400/70 font-mono">generated</span>
        </div>

        {/* Code content */}
        <pre className="p-4 text-sm overflow-x-auto">
          <code className="font-mono whitespace-pre">
            <span className="text-purple-300">function</span>
            <span className="text-zinc-200"> </span>
            <span className="text-sky-400">compoundInterest</span>
            <span className="text-zinc-200">(</span>
            <span className="text-amber-300">principal</span>
            <span className="text-zinc-500">, </span>
            <span className="text-amber-300">rate</span>
            <span className="text-zinc-500">, </span>
            <span className="text-amber-300">years</span>
            <span className="text-zinc-500">, </span>
            <span className="text-amber-300">monthly</span>
            <span className="text-zinc-200">) {'{'}</span>
            {"\n"}
            <span className="text-zinc-500">  // Calculate with monthly compounding</span>
            {"\n"}
            <span className="text-purple-300">  const</span>
            <span className="text-zinc-200"> n = </span>
            <span className="text-emerald-300">12</span>
            <span className="text-zinc-500">;</span>
            {"\n"}
            <span className="text-purple-300">  const</span>
            <span className="text-zinc-200"> r = rate / </span>
            <span className="text-emerald-300">100</span>
            <span className="text-zinc-500">;</span>
            {"\n"}
            <span className="text-purple-300">  const</span>
            <span className="text-zinc-200"> periods = years * n</span>
            <span className="text-zinc-500">;</span>
            {"\n\n"}
            <span className="text-zinc-500">  // Future value formula</span>
            {"\n"}
            <span className="text-purple-300">  const</span>
            <span className="text-zinc-200"> fv = principal * Math.</span>
            <span className="text-sky-400">pow</span>
            <span className="text-zinc-200">(</span>
            <span className="text-emerald-300">1</span>
            <span className="text-zinc-200"> + r/n, periods)</span>
            <span className="text-zinc-500">;</span>
            {"\n"}
            <span className="text-purple-300">  const</span>
            <span className="text-zinc-200"> monthlyFv = monthly * ((Math.</span>
            <span className="text-sky-400">pow</span>
            <span className="text-zinc-200">(</span>
            <span className="text-emerald-300">1</span>
            <span className="text-zinc-200"> + r/n, periods) - </span>
            <span className="text-emerald-300">1</span>
            <span className="text-zinc-200">) / (r/n))</span>
            <span className="text-zinc-500">;</span>
            {"\n\n"}
            <span className="text-purple-300">  return</span>
            <span className="text-zinc-200"> fv + monthlyFv</span>
            <span className="text-zinc-500">;</span>
            {"\n"}
            <span className="text-zinc-200">{'}'}</span>
          </code>
        </pre>
      </motion.div>
    </div>
  );
};

export default CodeOutputCard;
