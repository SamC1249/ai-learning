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
      <section className="bg-relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-60 bg-black">
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
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-900 to-black pt-32">
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
        <div className="relative px-8 lg:px-16 max-w-screen-2xl mx-auto mt-8 pb-32">
  {/* Bottom gradient overlay */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black/60 to-transparent" />

  {/* Aligned inner column (matches your title/header container) */}
  <div className="max-w-7xl mx-auto">
    <div className="flex items-start gap-48 lg:gap-48">
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

      {/* CardSwap container (breaks out to the right while TiltedCard stays aligned) */}
      <div className="relative w-[500px] h-[300px] ml-auto">
        <CardSwap
          width={500}
          height={300}
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
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-900 to-black pb-48 pt-32">Tristé Noelle Lieteau
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

          {/* Bottom two sections - smaller with spacing like Your Advantage cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center px-8 lg:px-32 py-12"
          >

          <div className="relative max-w-4xl w-full">
            {/* Thin separator line (now part of this block so the vertical divider can reach it) */}
            <div className="w-full h-px bg-zinc-800" />

            {/* Vertical separator line (extends up to the thin separator line) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800" />

            {/* Two columns */}
            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* LEFT: Knowledge Graphs */}
              <div className="py-6 pr-0 md:pr-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Personal Knowledge Graphs
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Your conversations become structured, queryable memory—nodes, edges, and evolving hypotheses you can inspect and refine.
                  Click the graph to open a live snapshot.
                </p>

                {/* Clickable knowledge graph preview (smooth open/close) */}
                <details className="group relative">
                  <summary className="list-none cursor-pointer select-none">
                    <div className="relative overflow-hidden rounded-lg bg-zinc-950/50 border border-zinc-800/50">
                      <div className="flex items-center justify-between gap-3 px-4 py-2 border-b border-zinc-800/50">
                        <span className="text-xs text-zinc-600">Knowledge Graph</span>
                        <span className="text-xs text-zinc-500">
                          <span className="group-open:hidden">Click to inspect →</span>
                          <span className="hidden group-open:inline">Click to close ✕</span>
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
                  </summary>

                  {/* Page-level overlay + animated floating card (less snappy) */}
                  <div className="fixed inset-0 z-[80] pointer-events-none">
                    {/* Dim background (fades in/out) */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 ease-out group-open:opacity-100" />

                    {/* Floating "Graph snapshot" card: left of center, slightly below center */}
                    <div
                      className="
                        absolute left-[10%] top-[56%] w-[min(520px,88vw)]
                        pointer-events-auto
                        opacity-0 translate-y-4 scale-[0.98]
                        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-open:opacity-100 group-open:translate-y-0 group-open:scale-100
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
                </details>
              </div>

              {/* RIGHT: Multimodality */}
              <div className="py-6 pl-0 md:pl-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Multimodal Understanding
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Images and text work together—summaries, reasoning, and retrieval grounded in what you show and what you say.
                  The model keeps context across modalities so your workflow feels continuous.
                </p>

                {/* Chat modal image + gradient (no MCP block) */}
                <div className="relative overflow-hidden rounded-lg bg-zinc-950/50 border border-zinc-800/50">
                  <div className="relative">
                    <Image
                      src="/images/chat-modal.png"
                      alt="Chat modal"
                      width={900}
                      height={520}
                      className="w-full h-auto opacity-95"
                    />

                    {/* Gradient applied to the right side of the chat modal */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/70 via-black/20 to-transparent" />
                    {/* Subtle bottom fade */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
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
      <section className="bg-relative pb-48 flex items-center justify-center overflow-hidden bg-black">

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
