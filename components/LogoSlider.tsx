"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import "./LogoSlider.css"

interface Logo {
  src: string
  alt: string
  url: string
}

const logos: Logo[] = [
  { src: "/images/logos/airtable.png", alt: "Airtable", url: "https://airtable.com" },
  { src: "/images/logos/calendly.png", alt: "Calendly", url: "https://calendly.com" },
  { src: "/images/logos/cedar.png", alt: "Cedar", url: "https://www.cedar.com" },
  { src: "/images/logos/figma.png", alt: "Figma", url: "https://figma.com" },
  { src: "/images/logos/gitlab.png", alt: "GitLab", url: "https://gitlab.com" },
  { src: "/images/logos/grafana-labs.png", alt: "Grafana Labs", url: "https://grafana.com" },
  { src: "/images/logos/lucid.png", alt: "Lucid", url: "https://lucid.co" },
  { src: "/images/logos/scale.png", alt: "Scale", url: "https://scale.com" },
  { src: "/images/logos/slack.png", alt: "Slack", url: "https://slack.com" },
]

export default function LogoSlider() {
  const [isPaused, setIsPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (index: number) => {
    setIsPaused(true)
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
    setActiveIndex(null)
  }

  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="logo-slider-container">
      <div
        ref={containerRef}
        className={`logo-slider-track ${isPaused ? "paused" : ""}`}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className={`logo-item ${activeIndex === index % logos.length ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(index % logos.length)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(logo.url)}
          >
            <div className="logo-wrapper">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="logo-image"
              />
              <div className="shine-overlay" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
