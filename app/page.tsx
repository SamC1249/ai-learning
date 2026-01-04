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
              className="w-1/4"
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
              className="w-1/4"
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
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="w-full h-[80vh]">
          <div className="pl-30">
            <h1 className="text-5xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Think Daringly
            </h1>
            <p className="text-gray-400 text-24 leading-relaxed mt-2 w-[500px]">
              <span className="text-white font-bold">
                Journey for ideas. 
              </span>{" "}
              We lead you to the answers you seek. The platform keeps memory of previous conversations, analyzes conversations, and maintains ideas that have shaped human history.
            </p>
          </div>

          {/* Single Large TiltedCard with Navigation */}
          <div className="flex flex-col pl-30 mt-8">
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
                      overlayContent={<p className="tilted-card-demo-text">{tiltedCardData[currentCardIndex].overlayText}</p>}
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
            <div className="flex gap-2 justify-center mt-6" style={{ marginLeft: '46px', width: '600px' }}>
              {tiltedCardData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCardIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentCardIndex ? "bg-white w-6" : "bg-zinc-600 hover:bg-zinc-500 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* CardSwap container - needs relative parent for absolute positioning */}
        <div className="relative w-[600px] h-[400px]">
          <CardSwap
            width={400}
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
                  Modern LLMs conform to their user&apos;s thoughts. We create intelligence that dares to think contrarian and radically.
                </p>
              </div>
              <p className="text-blue-400 text-sm font-medium mt-6">Challenge assumptions →</p>
            </div>
            <div className="card !bg-zinc-900 !border-zinc-700 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Historical Wisdom</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Learn from the greatest minds in history. From Alexander to Jung, access timeless insights for modern challenges.
                </p>
              </div>
              <p className="text-blue-400 text-sm font-medium mt-6">Explore the past →</p>
            </div>
            <div className="card !bg-zinc-900 !border-zinc-700 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Deep Introspection</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Who looks outside, dreams; who looks inside, awakes. Discover insights about yourself through guided reflection.
                </p>
              </div>
              <p className="text-blue-400 text-sm font-medium mt-6">Look within →</p>
            </div>
          </CardSwap>
        </div>
      </section>


      {/* Section 4: Use Cases */}
      <section className="bg-relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-60 bg-black">

        <div className="w-full h-[80vh]">
          <div className="flex items-center justify-start pl-30">
            <h1 className="text-5xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              World Class Talent at Your Fingertips
            </h1>
          </div>
        </div>
      </section>

       {/* Section 5: Technology */}
       <section className="bg-relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-60 bg-black">

      <div className="w-full h-[80vh]">
        <div className="flex items-center justify-start pl-30">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            World Class Talent at Your Fingertips
          </h1>
        </div>
      </div>
      </section>

      {/* Section 6: CTA */}
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
