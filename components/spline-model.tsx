"use client"

import { Suspense, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

// This is a placeholder component that will be replaced with actual Spline integration
export default function SplineModel() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading of 3D model
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      {!isLoaded ? (
        <div className="flex flex-col items-center">
          <Loader2 className="h-10 w-10 text-primary animate-spin mb-2" />
          <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
        </div>
      ) : (
        <Suspense fallback={<Loader2 className="h-10 w-10 text-primary animate-spin" />}>
          <motion.div
            className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-secondary/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* 
              This is where the actual Spline component would be integrated.
              For now, we're using a placeholder gradient background.
              
              Example integration:
              <Spline scene="https://prod.spline.design/your-scene-id/scene.splinecode" />
            */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="relative w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full filter blur-xl animate-pulse"></div>
                <div
                  className="absolute top-1/3 right-1/3 w-48 h-48 bg-secondary/20 rounded-full filter blur-xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/20 rounded-full filter blur-xl animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </motion.div>
        </Suspense>
      )}
    </div>
  )
}
