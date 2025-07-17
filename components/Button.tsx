import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export default function Button({ children, variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 cursor-pointer"

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-700 hover:via-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl hover:shadow-red-500/25 focus:ring-red-400 border border-red-500/20 active:shadow-inner",
    secondary:
      "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black shadow-lg hover:shadow-xl hover:shadow-orange-500/25 focus:ring-orange-400 border border-orange-500/20 active:shadow-inner",
    outline:
      "border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white focus:ring-red-400 hover:shadow-lg hover:shadow-red-500/25 active:bg-red-600",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
