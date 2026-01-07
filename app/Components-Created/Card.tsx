"use client"

import { useState, useRef } from "react"
import { X } from "lucide-react"

interface CardProps {
  title: string
  description: string
  className?: string
  children?: React.ReactNode
  expandedContent?: React.ReactNode
}

interface CardRect {
  top: number
  left: number
  width: number
  height: number
}

export default function Card({ title, description, className = "", children, expandedContent }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [cardRect, setCardRect] = useState<CardRect | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleOpen = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setCardRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      })
    }
    // Lock body scroll when modal opens
    document.body.style.overflow = 'hidden'
    setIsAnimating(true)
    setIsClosing(false)
    // Small delay to ensure the initial position is set before animating
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsExpanded(true)
      })
    })
  }

  const handleClose = () => {
    const modal = modalRef.current
    
    // If scrolled down, first scroll to top smoothly
    if (modal && modal.scrollTop > 0) {
      setIsClosing(true)
      modal.scrollTo({ top: 0, behavior: "smooth" })
      
      // Wait for scroll to complete, then animate close
      const scrollDuration = Math.min(modal.scrollTop / 2, 300) // Max 300ms for scroll
      setTimeout(() => {
        setIsExpanded(false)
        setTimeout(() => {
          setIsAnimating(false)
          setIsClosing(false)
          setCardRect(null)
          // Restore body scroll when modal fully closes
          document.body.style.overflow = ''
        }, 500)
      }, scrollDuration)
    } else {
      // Already at top, close immediately
      setIsExpanded(false)
      setTimeout(() => {
        setIsAnimating(false)
        setCardRect(null)
        // Restore body scroll when modal fully closes
        document.body.style.overflow = ''
      }, 500)
    }
  }

  // Calculate modal styles based on state
  const getModalStyle = (): React.CSSProperties => {
    if (!cardRect) return {}

    if (!isExpanded) {
      // Starting position: match the card exactly
      return {
        top: cardRect.top,
        left: cardRect.left,
        width: cardRect.width,
        height: cardRect.height,
        transform: "none",
      }
    }

    // Final position: centered, 2/3 width, with breathing room at top
    return {
      top: "6vh",
      left: "16.67%",
      width: "66.67%",
      height: "94vh",
      transform: "none",
    }
  }

  return (
    <>
      {/* Card */}
      <div
        ref={cardRef}
        onClick={handleOpen}
        className={`bg-zinc-900 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/50 hover:-translate-y-1 ${className}`}
      >
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        {children}
      </div>

      {/* Modal Overlay - darker for focus, z-[60] to cover navbar */}
      {isAnimating && (
        <div
          onClick={handleClose}
          className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] transition-all duration-500 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Expanded Modal */}
      {isAnimating && (
        <div
          ref={modalRef}
          style={getModalStyle()}
          className={`fixed z-[70] bg-zinc-900 transition-all duration-500 ease-out ${
            isExpanded ? "rounded-2xl overflow-y-auto p-8" : "rounded-xl overflow-hidden p-6"
          }`}
        >
          {/* Close button - only visible when expanded */}
          <button
            onClick={handleClose}
            className={`absolute top-6 right-6 text-gray-400 hover:text-white transition-all duration-300 z-10 ${
              isExpanded && !isClosing ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <X size={28} />
          </button>

          {/* Card content - visible when closing (for smooth animation back to card) */}
          <div
            className={`transition-all duration-300 ${
              isExpanded ? "opacity-0 absolute pointer-events-none" : "opacity-100"
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>

          {/* Expanded content - 100% customizable, only visible when expanded */}
          <div
            className={`transition-all duration-300 ${
              isExpanded && !isClosing ? "opacity-100 delay-200" : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            {expandedContent}
          </div>
        </div>
      )}
    </>
  )
}