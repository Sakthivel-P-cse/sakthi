"use client"

import { motion } from "framer-motion"

export default function SectionDivider() {
  return (
    <div className="w-full h-24 bg-gradient-to-b from-background/0 to-background/50 relative overflow-hidden">
      <motion.svg
        viewBox="0 0 1000 100"
        className="w-full h-full"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Code-like pattern */}
        {[...Array(15)].map((_, i) => (
          <motion.g
            key={i}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <line
              x1={i * 70}
              y1="20"
              x2={i * 70 + 40}
              y2="20"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity="0.4"
            />
            <circle cx={i * 70 + 45} cy="20" r="2" fill="hsl(var(--primary))" opacity="0.5" />
          </motion.g>
        ))}

        {/* Center wave */}
        <motion.path
          d="M 0 50 Q 250 30 500 50 T 1000 50"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.svg>
    </div>
  )
}
