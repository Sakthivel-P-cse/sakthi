"use client"

import { motion } from "framer-motion"

export function CircuitPattern() {
  return (
    <motion.svg
      viewBox="0 0 400 300"
      className="w-full h-full absolute inset-0"
      opacity="0.1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="2" fill="hsl(var(--primary))" />
          <line x1="10" y1="10" x2="90" y2="10" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <circle cx="90" cy="10" r="2" fill="hsl(var(--primary))" />
          <line x1="90" y1="10" x2="90" y2="90" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <circle cx="90" cy="90" r="2" fill="hsl(var(--primary))" />
          <line x1="90" y1="90" x2="10" y2="90" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <circle cx="10" cy="90" r="2" fill="hsl(var(--primary))" />
          <line x1="10" y1="90" x2="10" y2="10" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#circuit)" />
    </motion.svg>
  )
}

export function DataFlow() {
  return (
    <motion.svg viewBox="0 0 400 200" className="w-full h-full">
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Flowing lines */}
      {[...Array(3)].map((_, i) => (
        <motion.g key={i}>
          <motion.line
            x1="0"
            y1={50 + i * 50}
            x2="400"
            y2={50 + i * 50}
            stroke="url(#flowGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, 400],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </motion.g>
      ))}

      {/* Data nodes */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={80 + i * 80}
          cy="100"
          r="6"
          fill="hsl(var(--primary))"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}
    </motion.svg>
  )
}

export function RocketIcon() {
  return (
    <motion.svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(262, 83%, 58%)" />
        </linearGradient>
      </defs>

      {/* Rocket body */}
      <motion.path
        d="M 50 10 L 60 40 L 50 50 L 40 40 Z"
        fill="url(#rocketGrad)"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Rocket fins */}
      <motion.g animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
        <polygon points="40,50 30,60 40,65" fill="hsl(262, 83%, 58%)" opacity="0.8" />
        <polygon points="60,50 70,60 60,65" fill="hsl(262, 83%, 58%)" opacity="0.8" />
      </motion.g>

      {/* Rocket thrust/flame */}
      <motion.g animate={{ scaleY: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}>
        <polygon points="45,65 50,85 55,65" fill="hsl(0, 100%, 50%)" opacity="0.7" />
        <polygon points="48,70 50,80 52,70" fill="hsl(50, 100%, 50%)" opacity="0.6" />
      </motion.g>

      {/* Glow effect */}
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="hsl(var(--primary))"
        opacity="0.1"
        animate={{ r: [40, 60, 40] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.svg>
  )
}

export function PulsatingNetwork() {
  const nodes = [
    { x: 50, y: 30 },
    { x: 20, y: 70 },
    { x: 80, y: 70 },
    { x: 50, y: 100 },
  ]

  return (
    <motion.svg viewBox="0 0 100 140" className="w-full h-full">
      {/* Connection lines */}
      {nodes.map((node, i) => {
        if (i === 0) return null
        return (
          <motion.line
            key={`line-${i}`}
            x1={nodes[0].x}
            y1={nodes[0].y}
            x2={node.x}
            y2={node.y}
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Number.POSITIVE_INFINITY }}
          />
        )
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r="4"
          fill="hsl(var(--primary))"
          animate={{
            r: [4, 7, 4],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}
    </motion.svg>
  )
}
