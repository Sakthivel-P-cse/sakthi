"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RocketIcon, SparklesIcon, ZapIcon } from "lucide-react"

export default function RocketFlyover() {
  const [isFlying, setIsFlying] = useState(false)
  const [particles, setParticles] = useState<number[]>([])

  // Trigger rocket flyover every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      triggerRocketFlyover()
    }, 30000) // 30 seconds

    // Initial flyover after 5 seconds
    const initialTimeout = setTimeout(() => {
      triggerRocketFlyover()
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(initialTimeout)
    }
  }, [])

  const triggerRocketFlyover = () => {
    setIsFlying(true)

    // Create exhaust particles
    const newParticles = Array.from({ length: 20 }, (_, i) => Date.now() + i)
    setParticles(newParticles)

    // Reset after animation completes
    setTimeout(() => {
      setIsFlying(false)
      setParticles([])
    }, 4000)
  }

  // Manual trigger function (can be called from other components)
  const manualTrigger = () => {
    if (!isFlying) {
      triggerRocketFlyover()
    }
  }

  // Expose manual trigger globally
  useEffect(() => {
    ;(window as any).triggerRocket = manualTrigger
  }, [isFlying])

  return (
    <AnimatePresence>
      {isFlying && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {/* Rocket */}
          <motion.div
            className="absolute"
            initial={{
              x: -200,
              y: window.innerHeight * 0.3,
              rotate: 15,
            }}
            animate={{
              x: window.innerWidth + 200,
              y: window.innerHeight * 0.2,
              rotate: 25,
            }}
            exit={{
              x: window.innerWidth + 400,
              y: window.innerHeight * 0.1,
              opacity: 0,
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1],
            }}
            style={{ zIndex: 101 }}
          >
            {/* Rocket Body */}
            <div className="relative">
              {/* Main Rocket */}
              <motion.div
                className="relative"
                animate={{
                  y: [0, -3, 0, -2, 0],
                  rotate: [0, 2, -1, 1, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl border-2 border-primary/30">
                  <RocketIcon className="h-8 w-8 text-primary-foreground transform rotate-45" />
                </div>

                {/* Rocket Glow */}
                <div className="absolute inset-0 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-pulse" />

                {/* Rocket Trail Glow */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-32 h-2 bg-gradient-to-r from-primary/60 to-transparent blur-sm" />
              </motion.div>

              {/* Exhaust Flames */}
              <motion.div
                className="absolute -right-6 top-1/2 transform -translate-y-1/2"
                animate={{
                  scale: [1, 1.2, 0.9, 1.1, 1],
                  opacity: [0.8, 1, 0.7, 0.9, 0.8],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                {/* Main Flame */}
                <div className="w-8 h-4 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 rounded-full blur-sm" />
                <div className="absolute top-0 w-6 h-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-xs" />

                {/* Secondary Flames */}
                <div className="absolute -top-1 -right-2 w-4 h-2 bg-gradient-to-r from-red-400 to-orange-300 rounded-full blur-sm opacity-70" />
                <div className="absolute -bottom-1 -right-2 w-4 h-2 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full blur-sm opacity-70" />
              </motion.div>

              {/* Sparkle Effects */}
              <motion.div
                className="absolute -top-2 -left-2"
                animate={{
                  rotate: 360,
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <SparklesIcon className="h-4 w-4 text-yellow-400" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -right-2"
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <ZapIcon className="h-3 w-3 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Exhaust Particles */}
          {particles.map((particleId, index) => (
            <ExhaustParticle
              key={particleId}
              index={index}
              delay={index * 0.1}
              startY={window.innerHeight * 0.3}
              endY={window.innerHeight * 0.2}
            />
          ))}

          {/* Sonic Boom Effect */}
          <motion.div
            className="absolute"
            initial={{
              x: window.innerWidth * 0.3,
              y: window.innerHeight * 0.25,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: window.innerWidth * 0.7,
              y: window.innerHeight * 0.22,
              scale: [0, 2, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: "easeOut",
            }}
          >
            <div className="w-32 h-32 border-4 border-primary/40 rounded-full" />
            <div className="absolute inset-4 border-2 border-primary/60 rounded-full" />
            <div className="absolute inset-8 border border-primary/80 rounded-full" />
          </motion.div>

          {/* Speed Lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              style={{
                top: `${25 + i * 5}%`,
                width: "100%",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.6, 0],
                x: [0, 100, 200],
              }}
              transition={{
                duration: 2,
                delay: 1 + i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Atmospheric Entry Effect */}
          <motion.div
            className="absolute"
            initial={{
              x: window.innerWidth * 0.8,
              y: window.innerHeight * 0.22,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1.2,
              delay: 2.5,
              ease: "easeOut",
            }}
          >
            <div className="w-24 h-24 bg-gradient-radial from-orange-400/60 via-red-400/40 to-transparent rounded-full blur-lg" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

// Exhaust Particle Component
const ExhaustParticle = ({
  index,
  delay,
  startY,
  endY,
}: {
  index: number
  delay: number
  startY: number
  endY: number
}) => {
  const colors = ["bg-orange-400", "bg-red-400", "bg-yellow-400", "bg-orange-500", "bg-red-500"]

  const randomColor = colors[index % colors.length]
  const randomSize = Math.random() * 4 + 2 // 2-6px
  const randomOffset = (Math.random() - 0.5) * 100 // Random Y offset

  return (
    <motion.div
      className={`absolute rounded-full ${randomColor} blur-sm`}
      style={{
        width: randomSize,
        height: randomSize,
      }}
      initial={{
        x: -50,
        y: startY + randomOffset,
        opacity: 1,
        scale: 1,
      }}
      animate={{
        x: window.innerWidth + 100,
        y: endY + randomOffset + (Math.random() - 0.5) * 50,
        opacity: [1, 0.8, 0.3, 0],
        scale: [1, 0.8, 0.4, 0.1],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        delay: delay,
        ease: "easeOut",
      }}
    />
  )
}
