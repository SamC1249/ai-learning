"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Search, ArrowRight } from "lucide-react"
import Navbar from "./Components-Created/Navbar"
import AnimatedSearchSuggestions from "./Components-Created/AnimatedSearchSuggestions"
import FluidGlass from '../components/FluidGlass'



export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />

      {/* Section 1: Hero with Background Image and Search */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/woman_tsunami_saturated.png"
            alt="Background"
            fill
            className="object-cover opacity-[0.35] dark:opacity-[0.25]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/85 to-white dark:from-neutral-950/60 dark:via-neutral-950/85 dark:to-neutral-950"></div>
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900 dark:text-white tracking-tight">
              Unlock Your Potential
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Explore the depths of your thoughts and discover insights about yourself through introspection
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Ask yourself anything..."
                className="w-full pl-14 pr-32 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white rounded-lg font-medium text-sm hover:from-blue-700 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 transition-all flex items-center gap-2 shadow-sm"
              >
                Search
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            <AnimatedSearchSuggestions />
          </motion.div>
        </div>
      </section>

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
      barProps={{



      }

      } // add specific props if using bar mode
      cubeProps={{}} // add specific props if using cube mode
    />
  </div>
    </section>



      

    </div>
  )
}
