"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function SplineModel() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <svg
          viewBox="0 0 1000 800"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ filter: "drop-shadow(0 0 30px rgba(var(--primary-rgb), 0.1))" }}
        >
          {/* Animated background gradients */}
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 0.05 }} />
            </linearGradient>
            <radialGradient id="radial1" cx="30%" cy="30%">
              <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.15 }} />
              <stop offset="100%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0 }} />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background shapes */}
          <rect width="1000" height="800" fill="url(#grad1)" />
          <circle cx="200" cy="150" r="300" fill="url(#radial1)" />
          <circle cx="800" cy="600" r="250" fill="url(#radial1)" />

          {/* Animated geometric shapes */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ transformOrigin: "500px 400px" }}
          >
            <polygon
              points="500,100 650,250 550,400 450,400 350,250"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              opacity="0.3"
            />
          </motion.g>

          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ transformOrigin: "500px 400px" }}
          >
            <circle cx="500" cy="400" r="200" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
            <circle cx="500" cy="400" r="150" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
            <circle cx="500" cy="400" r="100" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
          </motion.g>

          {/* Animated dots */}
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={i}
              cx={500 + 150 * Math.cos((i * Math.PI) / 3)}
              cy={400 + 150 * Math.sin((i * Math.PI) / 3)}
              r="6"
              fill="hsl(var(--primary))"
              opacity="0.6"
              animate={{
                r: [6, 10, 6],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          ))}

          {/* Flowing lines */}
          <motion.line
            x1="500"
            y1="100"
            x2="500"
            y2="700"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            opacity="0.1"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.line
            x1="200"
            y1="400"
            x2="800"
            y2="400"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            opacity="0.1"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, delay: 1, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Pulsing central element */}
          <motion.circle
            cx="500"
            cy="400"
            r="50"
            fill="hsl(var(--primary))"
            opacity="0.1"
            animate={{ r: [50, 80, 50] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <circle cx="500" cy="400" r="30" fill="hsl(var(--primary))" opacity="0.2" />

          {/* Corner accents */}
          {[
            { x: 100, y: 100 },
            { x: 900, y: 100 },
            { x: 100, y: 700 },
            { x: 900, y: 700 },
          ].map((pos, i) => (
            <motion.g key={i} style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}>
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r="40"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                opacity="0.2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10 + i, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.g>
          ))}
        </svg>
      </motion.div>
    </div>
  )
}
