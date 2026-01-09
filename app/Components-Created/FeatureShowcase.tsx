"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Types for the component
interface FeaturePanel {
  title: string
  description: string
  content?: React.ReactNode
}

interface FeatureShowcaseProps {
  // Header section
  title: string
  subtitle?: string
  highlightText?: string
  description?: string
  learnMoreHref?: string
  
  // Main showcase (large center element)
  mainContent?: React.ReactNode
  mainImageSrc?: string
  mainImageAlt?: string
  
  // Bottom panels (2 side-by-side)
  leftPanel?: FeaturePanel
  rightPanel?: FeaturePanel
  
  // Styling
  className?: string
  variant?: "default" | "gradient" | "dark"
}

export default function FeatureShowcase({
  title,
  subtitle,
  highlightText,
  description,
  learnMoreHref,
  mainContent,
  mainImageSrc,
  mainImageAlt = "Feature showcase",
  leftPanel,
  rightPanel,
  className = "",
  variant = "default",
}: FeatureShowcaseProps) {
  
  const bgClass = {
    default: "bg-black",
    gradient: "bg-gradient-to-b from-zinc-900 to-black",
    dark: "bg-zinc-950",
  }[variant]

  return (
    <section className={`relative min-h-screen overflow-hidden py-24 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            {title}
          </h1>
          
          {(subtitle || highlightText || description) && (
            <div className="max-w-xl">
              {highlightText && (
                <p className="text-gray-300 text-lg leading-relaxed">
                  <span className="text-white font-semibold">{highlightText}</span>
                  {" "}{description}
                </p>
              )}
              {!highlightText && description && (
                <p className="text-gray-400 text-lg leading-relaxed">
                  {description}
                </p>
              )}
              {subtitle && (
                <p className="text-gray-400 text-base mt-2">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          
          {learnMoreHref && (
            <motion.a
              href={learnMoreHref}
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors border border-zinc-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          )}
        </motion.div>

        {/* Main Showcase Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12"
        >
          {/* Custom content or image */}
          {mainContent ? (
            <div className="relative">
              {mainContent}
            </div>
          ) : mainImageSrc ? (
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-2xl shadow-black/50">
                <Image
                  src={mainImageSrc}
                  alt={mainImageAlt}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none" />
              </div>
            </div>
          ) : (
            // Placeholder when no content provided
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="aspect-[4/3] rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center">
                <span className="text-zinc-600 text-sm">Main content area</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Bottom Feature Panels */}
        {(leftPanel || rightPanel) && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Left Panel */}
            {leftPanel && (
              <FeaturePanelCard panel={leftPanel} />
            )}
            
            {/* Right Panel */}
            {rightPanel && (
              <FeaturePanelCard panel={rightPanel} />
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}

// Sub-component for feature panels
function FeaturePanelCard({ panel }: { panel: FeaturePanel }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-zinc-700 transition-all duration-300">
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {panel.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {panel.description}
        </p>
        
        {/* Custom content area (code snippets, images, etc.) */}
        {panel.content && (
          <div className="mt-4">
            {panel.content}
          </div>
        )}
      </div>
      
      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 to-zinc-700/0 group-hover:from-zinc-800/20 group-hover:to-zinc-700/10 transition-all duration-500 pointer-events-none" />
    </div>
  )
}

// Pre-built content components for panels
export function CodeSnippet({ code, language = "json" }: { code: string; language?: string }) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-zinc-950 border border-zinc-800">
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border-b border-zinc-800">
        <span className="text-xs text-zinc-500 font-mono">{language}</span>
      </div>
      <pre className="p-4 text-sm overflow-x-auto">
        <code className="text-zinc-300 font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  )
}

export function DropdownShowcase({ 
  title, 
  options 
}: { 
  title: string
  options: Array<{ icon?: React.ReactNode; label: string; tag?: string; selected?: boolean }>
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800/30 bg-zinc-950/50 backdrop-blur-xl shadow-xl shadow-black/20">
      {/* Dark overlay mask for muted effect - pointer-events-none allows interaction through */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />
      
      {/* Dropdown header */}
      <div className="relative z-10 px-4 py-3 border-b border-zinc-800/30">
        <span className="text-zinc-500 text-sm">{title}</span>
      </div>
      
      {/* Options list */}
      <div className="relative z-10 py-2">
        {options.map((option, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors cursor-pointer ${
              option.selected ? "bg-white/[0.05]" : ""
            }`}
          >
            {option.icon && (
              <span className="w-6 h-6 flex items-center justify-center text-zinc-500/70">
                {option.icon}
              </span>
            )}
            <span className="text-zinc-300/80 text-sm font-medium flex-1">{option.label}</span>
            {option.tag && (
              <span className="px-2 py-0.5 bg-zinc-800/30 text-zinc-500 text-xs rounded-md">
                {option.tag}
              </span>
            )}
            {option.selected && (
              <svg className="w-5 h-5 text-zinc-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Placeholder image component
export function PlaceholderImage({ className = "" }: { className?: string }) {
  return (
    <div className={`aspect-[4/3] rounded-xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center ${className}`}>
      <span className="text-zinc-600 text-sm">Image placeholder</span>
    </div>
  )
}
