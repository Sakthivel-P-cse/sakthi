"use client"

import { motion } from "framer-motion"

export default function HeroIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <motion.svg
        viewBox="0 0 1000 800"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="techGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="techGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(262, 83%, 58%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(221, 83%, 53%)" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="techRadial">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <filter id="techGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Background */}
        <rect width="1000" height="800" fill="url(#techGrad1)" />

        {/* Large decorative circles */}
        <circle cx="200" cy="150" r="250" fill="url(#techRadial)" opacity="0.4" />
        <circle cx="800" cy="650" r="280" fill="url(#techGrad2)" opacity="0.3" />

        {/* Central coding window frame */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          <rect x="300" y="250" width="400" height="300" fill="rgba(255,255,255,0.05)" stroke="hsl(var(--primary))" strokeWidth="2" rx="8" opacity="0.6" />
          
          {/* Window header */}
          <line x1="300" y1="280" x2="700" y2="280" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
          <circle cx="320" cy="265" r="4" fill="hsl(220, 100%, 50%)" opacity="0.8" />
          <circle cx="335" cy="265" r="4" fill="hsl(50, 100%, 50%)" opacity="0.8" />
          <circle cx="350" cy="265" r="4" fill="hsl(0, 100%, 50%)" opacity="0.8" />

          {/* Code lines */}
          {[1, 2, 3, 4, 5].map((line) => (
            <g key={line}>
              <line x1="320" y1={300 + line * 20} x2={320 + Math.random() * 150} y2={300 + line * 20} stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />
              <circle cx={320 + Math.random() * 150 + 20} cy={300 + line * 20} r="2" fill="hsl(var(--primary))" opacity="0.6" />
            </g>
          ))}
        </motion.g>

        {/* Rotating tech rings */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ transformOrigin: "500px 400px" }}
        >
          <circle cx="500" cy="400" r="200" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
          <circle cx="500" cy="400" r="150" fill="none" stroke="hsl(262, 83%, 58%)" strokeWidth="1" opacity="0.3" />
          <circle cx="500" cy="400" r="100" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.25" />
        </motion.g>

        {/* Counter-rotating tech ring */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ transformOrigin: "500px 400px" }}
        >
          <polygon points="500,250 650,320 650,460 500,530 350,460 350,320" fill="none" stroke="hsl(221, 83%, 53%)" strokeWidth="1" opacity="0.2" />
        </motion.g>

        {/* Pulsing tech nodes */}
        {[
          { x: 400, y: 300 },
          { x: 600, y: 300 },
          { x: 350, y: 450 },
          { x: 650, y: 450 },
          { x: 500, y: 550 },
        ].map((node, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill="hsl(var(--primary))"
              animate={{
                r: [8, 12, 8],
                opacity: [0.8, 0.4, 0.8],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
            <circle cx={node.x} cy={node.y} r="4" fill="hsl(var(--primary))" opacity="0.9" />
          </motion.g>
        ))}

        {/* Connection lines between nodes */}
        <motion.line
          x1="400"
          y1="300"
          x2="600"
          y2="300"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          opacity="0.3"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.line
          x1="500"
          y1="300"
          x2="500"
          y2="550"
          stroke="hsl(262, 83%, 58%)"
          strokeWidth="1"
          opacity="0.3"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, delay: 1, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Floating code snippets */}
        <motion.g
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          <text x="150" y="500" fontSize="12" fill="hsl(var(--primary))" opacity="0.3" fontFamily="monospace">
            {"{ react }"}
          </text>
        </motion.g>

        <motion.g
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, delay: 1, repeat: Number.POSITIVE_INFINITY }}
        >
          <text x="800" y="250" fontSize="12" fill="hsl(262, 83%, 58%)" opacity="0.3" fontFamily="monospace">
            {"[ AI ]"}
          </text>
        </motion.g>

        {/* Corner accent elements */}
        {[
          { x: 100, y: 100 },
          { x: 900, y: 100 },
          { x: 100, y: 700 },
          { x: 900, y: 700 },
        ].map((pos, i) => (
          <motion.g key={i} style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}>
            <motion.rect
              x={pos.x - 30}
              y={pos.y - 30}
              width="60"
              height="60"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity="0.2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12 + i * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.g>
        ))}

        {/* Central glowing circle */}
        <motion.circle
          cx="500"
          cy="400"
          r="60"
          fill="hsl(var(--primary))"
          opacity="0.08"
          animate={{ r: [60, 100, 60] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <circle cx="500" cy="400" r="35" fill="hsl(var(--primary))" opacity="0.15" filter="url(#techGlow)" />

        {/* AI/Tech inspired wavy lines */}
        <motion.path
          d="M 100 650 Q 250 600 400 650 T 700 650 T 1000 650"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.svg>
    </div>
  )
}
