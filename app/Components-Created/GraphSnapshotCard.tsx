import React from 'react';
import Image from 'next/image';

interface GraphSnapshotCardProps {
  isHovered: boolean;
}

const GraphSnapshotCard: React.FC<GraphSnapshotCardProps> = ({ isHovered }) => {
  return (
    <>
      {/* Clickable knowledge graph preview with hover interaction */}
      <div className="relative group">
        <div className="relative overflow-hidden rounded-lg bg-zinc-950/50 border border-zinc-800/50">
          <div className="flex items-center justify-between gap-3 px-4 py-2 border-b border-zinc-800/50">
            <span className="text-xs text-zinc-600">Knowledge Graph</span>
            <span className="text-xs text-zinc-500 transition-all duration-200">
              <span className={`transition-all duration-200 ${isHovered ? 'text-blue-400 brightness-150' : ''}`}>
                Hover to inspect →
              </span>
            </span>
          </div>

          <div className="p-4">
            <Image
              src="/images/Knowledge-graph.svg"
              alt="Knowledge graph"
              width={900}
              height={520}
              className="w-full h-auto rounded-md opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Page-level overlay + animated floating card - only render when hovered */}
      {isHovered && (
        <div className="fixed inset-0 z-[80] pointer-events-none">
          {/* Dim background (fades in/out) */}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out opacity-100" />

        {/* Floating "Graph snapshot" card: left of center, slightly below center */}
        <div
          className="
            absolute left-[10%] top-[56%] w-[min(520px,88vw)]
            pointer-events-auto
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            opacity-100 translate-y-0 scale-100
          "
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/60">
              <div className="flex items-center gap-2">
                <span className="text-zinc-600">✦</span>
                <span className="text-xs text-zinc-200">Graph snapshot</span>
              </div>
              <span className="text-[11px] text-zinc-500 font-mono">user_id: 7f3a2c</span>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-zinc-600">entities</span>
                <span className="px-2 py-1 bg-zinc-900 rounded text-xs text-zinc-300">curiosity</span>
                <span className="px-2 py-1 bg-zinc-900 rounded text-xs text-zinc-300">writing</span>
                <span className="px-2 py-1 bg-zinc-900 rounded text-xs text-zinc-300">consistency</span>
                <span className="px-2 py-1 bg-zinc-900 rounded text-xs text-zinc-300">time_fear</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-600">active_threads</span>
                <span className="text-xs text-blue-400/80">identity → habits → meaning</span>
              </div>

              {/* Colored "code" panel */}
              <div className="rounded-xl border border-zinc-800/60 overflow-hidden bg-gradient-to-b from-zinc-950 to-black">
                <div className="px-4 py-2 border-b border-zinc-800/60 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-mono">// graph.query</span>
                  <span className="text-[11px] text-emerald-400/70 font-mono">ok</span>
                </div>

                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="font-mono whitespace-pre">
                    <span className="text-zinc-500">{`{`}</span>
                    {"\n"}
                    <span className="text-sky-400">{`  "user_id"`}</span>
                    <span className="text-zinc-500">{`: `}</span>
                    <span className="text-amber-300">{`"7f3a2c"`}</span>
                    <span className="text-zinc-500">{`,`}</span>
                    {"\n"}
                    <span className="text-sky-400">{`  "nodes"`}</span>
                    <span className="text-zinc-500">{`: [`}</span>
                    {"\n"}
                    <span className="text-zinc-500">{`    { `}</span>
                    <span className="text-sky-400">{`"type"`}</span>
                    <span className="text-zinc-500">{`: `}</span>
                    <span className="text-amber-300">{`"trait"`}</span>
                    <span className="text-zinc-500">{`, `}</span>
                    <span className="text-sky-400">{`"id"`}</span>
                    <span className="text-zinc-500">{`: `}</span>
                    <span className="text-amber-300">{`"curiosity"`}</span>
                    <span className="text-zinc-500">{`, `}</span>
                    <span className="text-sky-400">{`"weight"`}</span>
                    <span className="text-zinc-500">{`: `}</span>
                    <span className="text-emerald-300">{`0.82`}</span>
                    <span className="text-zinc-500">{` }`}</span>
                    <span className="text-zinc-500">{`,`}</span>
                    {"\n"}
                    <span className="text-zinc-500">{`    { `}</span>
                    <span className="text-sky-400">{`"type"`}</span>
                    <span className="text-zinc-500">{`: `}</span>
                    <span className="text-amber-300">{`"goal"`}</span>
                    <span className="text-zinc-500">{`, `}</span>
                    <span className="text-sky-400">{`"id"`}</span>
                    <span className="text-zinc-500">{`: `}</span>
                    <span className="text-amber-300">{`"write_daily"`}</span>
                    <span className="text-zinc-500">{`, `}</span>
                    <span className="text-sky-400">{`"weight"`}</span>
                    <span className="text-zinc-500">{`: `}</span>
                    <span className="text-emerald-300">{`0.66`}</span>
                    <span className="text-zinc-500">{` }`}</span>
                    {"\n"}
                    <span className="text-zinc-500">{`  ],`}</span>
                    {"\n"}
                    <span className="text-sky-400">{`  "edges"`}</span>
                    <span className="text-zinc-500">{`: [`}</span>
                    {"\n"}
                    <span className="text-zinc-500">{`    { `}</span>
                    <span className="text-sky-400">{`"from"`}</span>
                    <span className="text-zinc-500">{`: `}</span>
                    <span className="text-amber-300">{`"curiosity"`}</span>
                    <span className="text-zinc-500">{`, `}</span>
                    <span className="text-sky-400">{`"to"`}</span>
                    <span className="text-zinc-500">{`: `}</span>
                    <span className="text-amber-300">{`"write_daily"`}</span>
                    <span className="text-zinc-500">{`, `}</span>
                    <span className="text-sky-400">{`"relation"`}</span>
                    <span className="text-zinc-500">{`: `}</span>
                    <span className="text-purple-300">{`"supports"`}</span>
                    <span className="text-zinc-500">{` }`}</span>
                    {"\n"}
                    <span className="text-zinc-500">{`  ],`}</span>
                    {"\n"}
                    <span className="text-sky-400">{`  "short_term_memories"`}</span>
                    <span className="text-zinc-500">{`: [`}</span>
                    <span className="text-amber-300">{`"wants more consistency"`}</span>
                    <span className="text-zinc-500">{`, `}</span>
                    <span className="text-amber-300">{`"prefers deep work"`}</span>
                    <span className="text-zinc-500">{`],`}</span>
                    {"\n"}
                    <span className="text-sky-400">{`  "suggestions"`}</span>
                    <span className="text-zinc-500">{`: [`}</span>
                    {"\n"}
                    <span className="text-amber-300">{`    "Pin 1 daily reflection node",`}</span>
                    {"\n"}
                    <span className="text-amber-300">{`    "Auto-link repeated themes across weeks"`}</span>
                    {"\n"}
                    <span className="text-zinc-500">{`  ]`}</span>
                    {"\n"}
                    <span className="text-zinc-500">{`}`}</span>
                  </code>
                </pre>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-zinc-600">confidence</span>
                <span className="text-xs text-zinc-300">0.78</span>
              </div>
            </div>
          </div>

          {/* Hint row */}
          <div className="mt-2 text-[11px] text-zinc-500">
            Tip: this snapshot is auto-generated from your recent conversations.
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default GraphSnapshotCard;
