"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Search, ArrowRight } from "lucide-react"
import Navbar from "./Components-Created/Navbar"
import AnimatedSearchSuggestions from "./Components-Created/AnimatedSearchSuggestions"
import FluidGlass from '../components/FluidGlass'
import ColorBends from '../components/ColorBends';
import Card from "./Components-Created/Card"
import Button1 from "./Components-Created/button-1"
import Button2 from "./Components-Created/button-2"


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Section 1: Hero with Background Image and Search */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        
        <div className="absolute inset-0 z-0">
          {/* Overlay from @page.tsx (95-108) */}
          <div className="absolute inset-0">
            <ColorBends
              colors={["#ff0000", "#00ff00", "#0000ff"]} // RGB
              rotation={0}
              speed={0.2}
              scale={1.2}
              frequency={1.0}
              warpStrength={1.0}
              mouseInfluence={1.0}
              parallax={0.5}
              noise={0.1}
              transparent={true}
            />
            {/* Extra black-to-transparent gradient for legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Unlock Your Potential Through Modern and Historical Intelligence
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
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
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Ask yourself anything..."
                className="w-full pl-14 pr-32 py-4 bg-black/80 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:outline-none transition-all shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium text-sm hover:from-blue-700 hover:to-blue-600 transition-all flex items-center gap-2 shadow-sm"
              >
                Search
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            <AnimatedSearchSuggestions />
          </motion.div>
        </div>
      </section>

    {/*
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
        <div className="w-full h-[80vh]">
          <FluidGlass
            lensProps={{ scale: 0.25}}
          />

        </div>
       
      </section>
      */}

      <section className="bg-relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
        <div className="w-full h-[80vh]">
          <div className="flex items-center justify-start pl-30">
            <h1 className="text-5xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Your Advantage
            </h1>

            <p className="text-sm md:text-sm text-gray-400 max-w-2xl mx-auto">
              When you hear the noise of the world, you need to learn to drown it out. We help you do that and thousands of others like you.
              One day, we will realize that super intelligence is not how we create a twin brain, but how we create a twin soul. <a href="/" className="font-bold text-white">Try Us Out</a>
            </p>

          </div>

          <div className="flex-1 flex items-center justify-center pt-30 gap-4">
            <Card
              title="Be Different"
              description="The world is filled with mediocrity. To be great, you need to be different."
              className="w-1/4"
              expandedContent={
                <div>
                  <Image
                    src="/images/linear-image-1.png"
                    alt="Window feature"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg mb-6"
                  />
                  <p className="text-gray-300">
                    More detailed content shown only when expanded into modal.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white">
                    Action Button
                  </button>
                </div>
              }
            >
              <Image
                src="/images/linear-image-1.png"
                alt="Window feature"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg mt-4"
              />
            </Card>

            <Card
              title="Be Curious"
              description="Embrace constant learning, failure, and pivoting."
              className="w-1/4"
              expandedContent={
                <div>
                  <Image
                    src="/images/linear-image-2.png"
                    alt="Files feature"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg mb-6"
                  />
                  <p className="text-gray-300">
                    More detailed content shown only when expanded into modal.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white">
                    Action Button
                  </button>
                </div>
              }
            >
              <Image
                src="/images/linear-image-2.png"
                alt="Files feature"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg mt-4"
              />
            </Card>

            <Card
              title="Be Ambitious"
              description="Too many people wait to do something great. Time is ticking."
              className="w-1/4"
              expandedContent={
                <div>
                  <Image
                    src="/images/linear-image-3.png"
                    alt="Globe feature"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg mb-6"
                  />
                  <p className="text-gray-300">
                    More detailed content shown only when expanded into modal.
                  </p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white">
                    Action Button
                  </button>
                </div>
              }
            >
              <Image
                src="/images/linear-image-3.png"
                alt="Globe feature"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg mt-4"
              />
            </Card>
           
          </div>





        </div>
      </section>


  </div>

  )
}
