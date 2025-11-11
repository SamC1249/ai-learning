"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"

const suggestions = [
  "What's my weakness?",
  "What are my strengths?",
  "What drives me forward?",
  "What holds me back?",
  "What is my purpose?",
  "How can I grow?",
]

export default function AnimatedSearchSuggestions() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % suggestions.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
        <span className="text-xs font-medium text-white dark:text-white">
          Try asking
        </span>
      </div>
      <div className="flex flex-wrap gap-2 justify-start">
        <AnimatePresence mode="wait">
          {suggestions.map((suggestion, index) => (
            <motion.button
              key={suggestion}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0.6,
                y: 0,
              }}
              exit={{ opacity: 0, y: -10 }}
              whileHover={{ opacity: 1 }}
              className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-700 dark:text-neutral-300 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all"
            >
              {suggestion}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
