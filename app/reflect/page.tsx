"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Brain, Eye, Flame } from "lucide-react"
import Navbar from "../components/Navbar"

export default function Reflect() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blue_scroll_laptop_dark.png"
            alt="Background"
            fill
            className="object-cover opacity-[0.3] dark:opacity-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/90 to-white dark:from-neutral-950/70 dark:via-neutral-950/90 dark:to-neutral-950"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-neutral-100 dark:bg-neutral-900 rounded-2xl">
              <Eye className="w-8 h-8 text-neutral-900 dark:text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white tracking-tight">
              Reflect & Transform
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              True transformation happens in moments of quiet reflection. Take time to understand your inner landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reflection Pillars */}
      <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-white"
          >
            Four Pillars of Reflection
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Emotional",
                description: "Honor your feelings and understand what they're telling you",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Mental",
                description: "Examine your thoughts, beliefs, and thinking patterns",
              },
              {
                icon: <Flame className="w-6 h-6" />,
                title: "Spiritual",
                description: "Connect with your deeper purpose and meaning",
              },
              {
                icon: <Eye className="w-6 h-6" />,
                title: "Physical",
                description: "Listen to your body and what it needs from you",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:shadow-lg dark:hover:bg-neutral-800/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-4 text-neutral-900 dark:text-white">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">{pillar.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Prompts */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
              Daily Reflection Prompts
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Take a few minutes each day to contemplate these questions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                category: "Morning",
                prompts: [
                  "What am I grateful for today?",
                  "What intention will guide my day?",
                  "How do I want to show up today?",
                ],
              },
              {
                category: "Evening",
                prompts: [
                  "What did I learn about myself today?",
                  "What moment brought me joy?",
                  "What would I do differently tomorrow?",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl"
              >
                <div className="inline-block px-4 py-1.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-sm font-semibold mb-6">
                  {section.category}
                </div>
                <div className="space-y-3">
                  {section.prompts.map((prompt, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></div>
                      <p className="text-neutral-700 dark:text-neutral-300 flex-1">{prompt}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
              Start Your Practice
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
              Reflection is a practice, not a destination. Begin your journey of self-awareness today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 transition-all shadow-sm"
              >
                Start Reflecting
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-xl font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>

    
  )
}
