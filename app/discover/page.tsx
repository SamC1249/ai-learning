"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Compass, Lightbulb, Target, Sparkles } from "lucide-react"
import Navbar from "../Components-Created/Navbar"
import FluidGlass from "../../components/FluidGlass"

export default function Discover() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/orange_sand_laptop.png"
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
              <Compass className="w-8 h-8 text-neutral-900 dark:text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white tracking-tight">
              Discover Your Path
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Every journey of self-discovery begins with curiosity. Explore questions that lead to profound understanding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exploration Areas */}
      <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-white"
          >
            Areas of Exploration
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Hidden Potential",
                description: "Uncover talents and abilities you never knew existed within you. Your potential is limitless when you know where to look.",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Core Values",
                description: "Identify what truly matters to you. Understanding your values creates clarity in every decision you make.",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Life Purpose",
                description: "Connect with your deeper calling. Find meaning in your experiences and direction for your future.",
              },
              {
                icon: <Compass className="w-6 h-6" />,
                title: "Personal Growth",
                description: "Map your journey from where you are to where you want to be. Growth happens one step at a time.",
              },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:shadow-lg dark:hover:bg-neutral-800/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-4 text-neutral-900 dark:text-white">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">{area.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guided Questions Section */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
              Questions to Guide You
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Start with these thought-provoking questions to deepen your self-understanding
            </p>
          </motion.div>

          <div className="space-y-3">
            {[
              "What moments in life have made me feel most alive?",
              "When do I feel like my most authentic self?",
              "What would I do if I knew I couldn't fail?",
              "What patterns keep repeating in my life?",
              "What am I naturally curious about?",
              "How do I want to be remembered?",
            ].map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer"
              >
                <p className="text-neutral-700 dark:text-neutral-300">{question}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-500 dark:to-orange-400 text-white rounded-xl font-semibold hover:from-orange-700 hover:to-orange-600 dark:hover:from-orange-600 dark:hover:to-orange-500 transition-all shadow-sm"
            >
              Begin Discovery
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section>
        {/* 
        FluidGlass visual effect component section.
      */}
      <section>
        <div style={{ height: '600px', position: 'relative' }}>
          <FluidGlass 
            mode="lens" // or "bar", "cube"
            lensProps={{
              scale: 0.25,
              ior: 1.15,
              thickness: 3,
              chromaticAberration: 0.2,
              anisotropy: 0.01
            }}
            barProps={{}} // add specific props if using bar mode
            cubeProps={{}} // add specific props if using cube mode
          />
        </div>
      </section>
      </section>
    </div>
  )
}
