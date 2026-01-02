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
      className={`px-6 py-3 bg-gray-600 rounded-lg transition-all duration-300 hover:bg-gray-500 ${className}`}
    >
      <span className="text-white font-medium">
        {children}
      </span>
    </button>
  )
}