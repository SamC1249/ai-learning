"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Journey</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Unlock your potential through modern and historical intelligence. 
              We help you discover insights about yourself through introspection.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Journey. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-500 text-sm hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/" className="text-gray-500 text-sm hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
