"use client"

interface Button1Props {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
}

export default function Button1({ children, onClick, className = "", type = "button" }: Button1Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 bg-black rounded-lg transition-all duration-300 hover:bg-gray-600 ${className}`}
    >
      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-medium">
        {children}
      </span>
    </button>
  )
}