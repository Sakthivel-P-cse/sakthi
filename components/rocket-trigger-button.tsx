"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function RocketTriggerButton() {
  const [isLaunching, setIsLaunching] = useState(false)

  const handleLaunch = () => {
    if (isLaunching) return

    setIsLaunching(true)

    // Trigger the rocket flyover
    if ((window as any).triggerRocket) {
      ;(window as any).triggerRocket()
    }

    // Reset button state
    setTimeout(() => {
      setIsLaunching(false)
    }, 4000)
  }

  return (
    <motion.div
      className="fixed bottom-20 left-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
    >
      <Button
        onClick={handleLaunch}
        disabled={isLaunching}
        className={`h-14 w-14 rounded-full shadow-lg group relative overflow-hidden ${
          isLaunching ? "animate-pulse" : ""
        }`}
        aria-label="Launch Rocket"
      >
        <motion.div
          animate={
            isLaunching
              ? {
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={{
            duration: 0.5,
            repeat: isLaunching ? 8 : 0,
            ease: "easeInOut",
          }}
        >
          <RocketIcon className="h-6 w-6" />
        </motion.div>

        {/* Button Glow Effect */}
        {isLaunching && (
          <motion.div
            className="absolute inset-0 bg-primary/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Sparkles around button */}
        {!isLaunching && (
          <>
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 0,
              }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
            />
          </>
        )}
      </Button>

      {/* Button Label */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-border whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        {isLaunching ? "🚀 Launching..." : "Launch Rocket"}
      </motion.div>
    </motion.div>
  )
}
