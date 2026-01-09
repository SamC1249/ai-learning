"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "./Components-Created/Navbar"
import AnimatedSearchSuggestions from "./Components-Created/AnimatedSearchSuggestions"
import FluidGlass from '../components/FluidGlass'
import ColorBends from '../components/ColorBends';
import Card from "./Components-Created/Card"
import Button1 from "./Components-Created/button-1"
import Button2 from "./Components-Created/button-2"
import Iridescence from '../components/Iridescence'
import Footer from "./Components-Created/Footer"
import CardSwap from "../components/CardSwap"
import TiltedCard from "../components/TiltedCard"
import LogoSlider from "../components/LogoSlider"
import FeatureShowcase, { DropdownShowcase, CodeSnippet, PlaceholderImage } from "./Components-Created/FeatureShowcase"

const tiltedCardData = [
  {
    imageSrc: "/images/linear-image-1.png",
    altText: "Strategic Planning",
    overlayText: "Strategy",
  },
  {
    imageSrc: "/images/linear-image-2.png",
    altText: "Deep Research",
    overlayText: "Research",
  },
  {
    imageSrc: "/images/linear-image-3.png",
    altText: "Innovation",
    overlayText: "Innovation",
  },
  {
    imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
    altText: "Kendrick Lamar - GNX",
    overlayText: "Inspiration",
  },
  {
    imageSrc: "/images/linear-image-1.png",
    altText: "Analysis",
    overlayText: "Analysis",
  },
  {
    imageSrc: "/images/linear-image-2.png",
    altText: "Wisdom",
    overlayText: "Wisdom",
  },
];

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const goToPrevCard = () => {
    setCurrentCardIndex((prev) => (prev === 0 ? tiltedCardData.length - 1 : prev - 1));
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prev) => (prev === tiltedCardData.length - 1 ? 0 : prev + 1));
  };
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
              <Button2 
                className="absolute right-2 top-1/2 -translate-y-1/2" 
                showIcon
              >
                Search
              </Button2>
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

      {/* Section 2: Your Advantage */}
      <section className="bg-relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-60 bg-black">
        <div className="w-full h-[80vh]">
          {/* Header with animated style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-8 lg:px-16 max-w-7xl mx-auto mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Your Advantage
            </h1>
            <div className="max-w-xl">
              <p className="text-gray-300 text-lg leading-relaxed">
                <span className="text-white font-semibold">Drown out the noise.</span>
                {" "}When you hear the noise of the world, we help you focus on what matters. One day, we will realize that super intelligence is not how we create a twin brain, but how we create a twin soul.
              </p>
            </div>
            <motion.a
              href="/"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors border border-zinc-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Try Us Out
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Card Grid with special styling so that the cards are spaced well even with resizing*/}
          <div className="pt-16 mx-auto w-full max-w-6xl grid gap-4 justify-items-center [grid-template-columns:repeat(auto-fit,minmax(18rem,1fr))]">
          <Card
              title="Be Different"
              description="The world is filled with mediocrity. To be great, you need to be different."
              className="w-full max-w-sm"
              expandedContent={
                <div>
                  <div className="relative">
                    <Image
                      src="/images/linear-image-1.png"
                      alt="Window feature"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                    {/* Dark gradient at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-180 bg-gradient-to-t from-zinc-900 to-transparent rounded-b-lg" />
                  </div>
                  
                  <h1 className="text-6xl font-bold text-white mb-2 text-center pb-10">
                    Be Different
                  </h1>

                  <p className="text-gray-300 text-sm text-center max-w-2xl mx-auto">
                    "Being different means looking where most people aren't looking. Paul Graham says, 'The way to get new ideas is to notice anomalies: things that don't quite fit.' 
                    Most people conform, but the people who make a difference are the ones who notice the secrets hiding in plain sight, and have the courage to act on them before the rest of the world wakes up. 
                    Don't just blend in—look for the edges, question assumptions, and let your curiosity lead you where others might hesitate to go."
                    <br />
                    <br />
                    Modern LLMs suffer from conforming to their user's thoughts. We create intelligence that dares to think contrarian and radically.
                  </p>
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
              className="w-full max-w-sm"
              expandedContent={
                <div>
                  <div className="relative">
                    <Image
                      src="/images/linear-image-2.png"
                      alt="Files feature"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                    {/* Dark gradient at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-180 bg-gradient-to-t from-zinc-900 to-transparent rounded-b-lg" />

                  </div>

                  <h1 className="text-6xl font-bold text-white mb-2 text-center pb-10">
                    Be Curious
                  </h1>

                  <p className="text-gray-300 text-sm text-center max-w-2xl mx-auto">
                    As Carl Jung said: "Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes." 
                    <br />
                    <br />

                    We want people to be curious about the world and themselves. We are on a mission to create intelligence that allows for the curiosity.
                  </p>
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
              className="w-full max-w-sm"
              expandedContent={
                <div>
                  <div className="relative">

                    <Image
                      src="/images/linear-image-3.png"
                      alt="Globe feature"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                    {/* Dark gradient at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-180 bg-gradient-to-t from-zinc-900 to-transparent rounded-b-lg" />

                  </div>
                  
                  <h1 className="text-6xl font-bold text-white mb-2 text-center pb-10">
                    Be Ambitious
                  </h1>

                  <p className="text-gray-300 text-sm text-center max-w-2xl mx-auto">
                    As Alexander the Great once declared: "There is nothing impossible to him who will try."
                    <br />
                    <br />

                    We believe that as intelligence accessible to everyone, the two markers of high potential people will be ambition and curiosity. We are looking to supercharge the ambitious.

                  </p>
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

      {/* Section 3: Think Daringly - Product Information*/}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
        {/* Header with animated style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-24 px-8 lg:px-16 max-w-7xl mx-auto mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Think Daringly
          </h1>
          <div className="max-w-xl">
            <p className="text-gray-300 text-lg leading-relaxed">
              <span className="text-white font-semibold">Journey for ideas.</span>{" "}
              We lead you to the answers you seek. The platform keeps memory of previous
              conversations, analyzes conversations, and maintains ideas that have shaped
              human history.
            </p>
          </div>
        </motion.div>

        {/* Wrapper for TiltedCard + CardSwap with bottom padding + bottom gradient overlay */}
        <div className="relative px-8 lg:px-16 max-w-7xl mx-auto mt-8 pb-24">
          {/* Bottom gradient overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black/60 to-transparent" />

          {/* TiltedCard and CardSwap side by side */}
          <div className="flex items-start">
            {/* Single Large TiltedCard with Navigation */}
            <div className="flex flex-col">
              {/* Card Row with Navigation Buttons */}
              <div className="flex items-center gap-6">
                {/* Left Navigation Button */}
                <motion.button
                  onClick={goToPrevCard}
                  className="w-10 h-10 rounded-full bg-black border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                {/* Card Container */}
                <div className="relative w-[600px] h-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentCardIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <TiltedCard
                        imageSrc={tiltedCardData[currentCardIndex].imageSrc}
                        altText={tiltedCardData[currentCardIndex].altText}
                        containerHeight="400px"
                        containerWidth="600px"
                        imageHeight="400px"
                        imageWidth="600px"
                        rotateAmplitude={10}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                          <p className="tilted-card-demo-text">
                            {tiltedCardData[currentCardIndex].overlayText}
                          </p>
                        }
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Navigation Button */}
                <motion.button
                  onClick={goToNextCard}
                  className="w-10 h-10 rounded-full bg-black border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Card Indicators - Below the card */}
              <div
                className="flex gap-2 justify-center mt-6"
                style={{ marginLeft: "46px", width: "600px" }}
              >
                {tiltedCardData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCardIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentCardIndex
                        ? "bg-white w-6"
                        : "bg-zinc-600 hover:bg-zinc-500 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CardSwap container - needs relative parent for absolute positioning */}
            <div className="relative w-[600px] h-[400px]">
              <CardSwap
                width={600}
                height={400}
                delay={4000}
                pauseOnHover={true}
                cardDistance={40}
                verticalDistance={50}
                skewAmount={4}
                onCardClick={(index: number) => console.log(`Card ${index} clicked`)}
              >
                <div className="card !bg-zinc-900 !border-zinc-700 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Contrarian Analysis</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Modern LLMs conform to their user&apos;s thoughts. We create intelligence
                      that dares to think contrarian and radically.
                    </p>
                  </div>
                  <p className="text-blue-400 text-sm font-medium mt-6">Challenge assumptions →</p>
                </div>

                <div className="card !bg-zinc-900 !border-zinc-700 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Historical Wisdom</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Learn from the greatest minds in history. From Alexander to Jung, access
                      timeless insights for modern challenges.
                    </p>
                  </div>
                  <p className="text-blue-400 text-sm font-medium mt-6">Explore the past →</p>
                </div>

                <div className="card !bg-zinc-900 !border-zinc-700 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Deep Introspection</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Who looks outside, dreams; who looks inside, awakes. Discover insights
                      about yourself through guided reflection.
                    </p>
                  </div>
                  <p className="text-blue-400 text-sm font-medium mt-6">Look within →</p>
                </div>
              </CardSwap>
            </div>
          </div>
        </div>
      </section>



       {/* Section 4: Trusted By */}
       <section className="relative flex flex-col items-center justify-center overflow-hidden py-20 bg-black">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-2">
              Trusted by industry leaders
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Powering the world&apos;s best teams
            </h2>
          </div>
          <LogoSlider />
        </div>
      </section>

       {/* Section 5: Technology */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
       {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-24 px-8 lg:px-16 max-w-7xl mx-auto mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              AI-Powered Knowledge Systems
            </h1>
            <div className="max-w-xl">
              <p className="text-gray-300 text-lg leading-relaxed">
                <span className="text-white font-semibold">Intelligent guidance.</span>
                {" "}Choose from a variety of philosophical frameworks and historical perspectives to inform your journey of self-discovery and growth.
              </p>
            </div>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors border border-zinc-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Main Image Container - Full focus, overflow hidden to crop top */}
          <div className="relative w-full px-4 lg:px-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative max-w-[1400px] mx-auto"
            >
              {/* Aristotle Image - Large, centered, with stronger perspective, cropped top */}
              <div 
                className="relative flex justify-center overflow-hidden"
                style={{
                  perspective: "1000px",
                  marginTop: "-200px",
                }}
              >
                <Image
                  src="/images/Aristotle (1).svg"
                  alt="Aristotle - Philosophy Guide"
                  width={1400}
                  height={1600}
                  className="w-full max-w-[1400px] h-auto relative z-10"
                  style={{
                    transform: "rotateX(36deg)",
                    transformOrigin: "bottom center",
                  }}
                />
                
                {/* Dark blur overlays - adjusted for perspective */}
                <div 
                  className="absolute inset-0 pointer-events-none z-20"
                  style={{
                    transform: "rotateX(8deg)",
                    transformOrigin: "bottom center",
                  }}
                >
                  {/* Bottom blur - lighter */}
                  <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-black via black/60 to-transparent" />
                  {/* Left blur */}
                  <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-black via-black/60 to-transparent" />
                  {/* Right blur */}
                  <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-black via-black/60 to-transparent" />
                  {/* Top blur */}
                  <div className="absolute top-0 left-0 right-0 h-70 bg-gradient-to-b from-black via black/60 to-transparent" />
                </div>

                {/* Assign to dropdown - positioned at bottom right corner of image with overlap */}
                <div className="absolute bottom-16 right-8 z-30">
                  <DropdownShowcase
                    title="Assign to..."
                    options={[
                      { label: "Aristotle", tag: "Guide", selected: true, icon: <span>🏛️</span> },
                      { label: "Socrates", tag: "Guide", icon: <span>🤔</span> },
                      { label: "Marcus Aurelius", tag: "Guide", icon: <span>⚔️</span> },
                      { label: "Carl Jung", icon: <span>🧠</span> },
                      { label: "Sun Tzu", icon: <span>📜</span> },
                      { label: "Einstein", icon: <span>💡</span> },
                    ]}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Thin separator line */}
          <div className="flex justify-center mt-12 px-8 lg:px-32">
            <div className="w-full max-w-4xl h-px bg-zinc-800" />
          </div>

          {/* Bottom two sections - smaller with spacing like Your Advantage cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center px-8 lg:px-32 py-12"
          >
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full relative">
              {/* Left section */}
              <div className="flex-1 py-6 pr-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Self-driving introspection
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Streamline your personal development workflows with AI assistance for routine reflection tasks. Get intelligent suggestions based on your patterns and goals.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="text-zinc-600">✦</span>
                    <span>Triage Intelligence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-600">Suggestions</span>
                    <span className="px-2 py-1 bg-zinc-900 rounded text-xs text-zinc-400">nan</span>
                    <span className="px-2 py-1 bg-zinc-900 rounded text-xs text-zinc-400">Growth Path</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-600">Related to</span>
                    <span className="text-xs text-blue-500/70">Why this guide was suggested</span>
                  </div>
                </div>
              </div>

              {/* Vertical separator line */}
              <div className="hidden md:block w-px bg-zinc-800 self-stretch" />

              {/* Right section */}
              <div className="flex-1 py-6 pl-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Journey MCP
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Connect Journey to your favorite tools including Cursor, Claude, ChatGPT, and more for seamless integration.
                </p>
                <div className="relative overflow-hidden rounded-lg bg-zinc-950/50 border border-zinc-800/50">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800/50">
                    <span className="text-xs text-zinc-600 font-mono">//mcp.journey.app/sse</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-zinc-500 font-mono whitespace-pre">{`"mcpServers": {
  "journey": {
    "command": "npx"
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
      </section>


      {/* Section 6: Extended Showcase */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
      <div className="w-full h-[80vh]">

      </div>



      </section>

      {/* Section 7: CTA */}
      <section className="bg-relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 to-black">

      <div className="relative w-[60%] h-[400px] rounded-3xl overflow-hidden">        
        <div className="absolute inset-0 z-0 ">
          <Iridescence
            color={[0.7, 0.7, 0.7]}
            mouseReact={true}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 text-white text-center tracking-tight">
            Build the Future
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Button1> Talk to Sales </Button1>
            <Button2 className="!py-3 !text-base"> Get Started</Button2>
          </div>
        </div>
      </div>  
      </section>

      {/* Footer */}
      <Footer />

  </div>

  )
}
