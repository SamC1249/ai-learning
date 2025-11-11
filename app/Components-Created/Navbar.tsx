"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Brain } from "lucide-react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // Remove border and make background fully transparent
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
          </motion.div>
        </Link>

        <div className="flex items-center gap-1">
          <Link href="/discover">
            <motion.div
              className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
              whileHover={{ y: -1 }}
            >
              Discover
            </motion.div>
          </Link>
          <Link href="/reflect">
            <motion.div
              className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
              whileHover={{ y: -1 }}
            >
              Reflect
            </motion.div>
          </Link>
          <motion.button
            className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-500 transition-all shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
