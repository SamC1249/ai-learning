"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface Button2Props {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
  showIcon?: boolean
}

export default function Button2({ children, onClick, className = "", type = "button", showIcon = false }: Button2Props) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-2.5 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg font-medium text-sm hover:from-blue-800 hover:to-blue-700 transition-all flex items-center gap-2 shadow-sm ${className}`}
    >
      {children}
      {showIcon && <ArrowRight className="w-4 h-4" />}
    </motion.button>
  )
}