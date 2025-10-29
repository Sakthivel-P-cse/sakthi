"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, DownloadIcon, SparklesIcon, StarIcon, ZapIcon } from "lucide-react"
import SplineModel from "@/components/spline-model"

const roles = ["Computer Science Engineer", "Full-Stack Developer", "Problem Solver", "AI Enthusiast", "Tech Innovator"]

export default function HeroSection() {
  const ref = useRef(null)
  const controls = useAnimation()
  const [currentRole, setCurrentRole] = useState(0)
  const [isNameHovered, setIsNameHovered] = useState(false)
  const [isPhotoHovered, setIsPhotoHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Animated role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Floating animation for profile picture
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    })
  }, [controls])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Enhanced Background */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
        <SplineModel />
      </motion.div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-12"
        style={{ y, opacity }}
      >
        <div className="flex-1 text-center md:text-left">
          <motion.div
            className="flex items-center gap-2 mb-4 justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SparklesIcon className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-primary font-medium">Welcome to my portfolio</span>
          </motion.div>

          {/* Enhanced Name with Hover Animation */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent cursor-pointer relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setIsNameHovered(true)}
            onHoverEnd={() => setIsNameHovered(false)}
            whileHover={{ scale: 1.05 }}
          >
            Hi, I'm{" "}
            <span className="text-primary relative inline-block">
              <motion.span
                animate={
                  isNameHovered
                    ? {
                        textShadow: [
                          "0 0 0px hsl(var(--primary))",
                          "0 0 20px hsl(var(--primary))",
                          "0 0 40px hsl(var(--primary))",
                          "0 0 20px hsl(var(--primary))",
                          "0 0 0px hsl(var(--primary))",
                        ],
                        scale: [1, 1.1, 1.05, 1.1, 1],
                      }
                    : {}
                }
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                Bhuvaneswar
              </motion.span>

              {/* Floating particles around name on hover */}
              {isNameHovered && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [0, (Math.random() - 0.5) * 100],
                        y: [0, (Math.random() - 0.5) * 100],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  ))}

                  {/* Sparkle effects */}
                  <motion.div
                    className="absolute -top-4 -right-4"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{
                      scale: [0, 1.5, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <StarIcon className="h-6 w-6 text-yellow-400" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{
                      scale: [0, 1.2, 0],
                      rotate: [0, -180, -360],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
                  >
                    <ZapIcon className="h-5 w-5 text-blue-400" />
                  </motion.div>

                  {/* Glow effect behind name */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-lg blur-xl -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.5, 1.2],
                      opacity: [0, 0.6, 0.3],
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </>
              )}

              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl text-muted-foreground mb-6 h-12 flex items-center justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          <motion.p
            className="text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Passionate about creating innovative solutions with expertise in full-stack development, AI, and
            problem-solving. Let's build something amazing together! 🚀
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" className="group relative overflow-hidden" asChild>
              <a href="#contact">
                <span className="relative z-10">Get in Touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </Button>

            <Button variant="outline" size="lg" className="group bg-transparent" asChild>
              <a href="https://flowcv.com/resume/wkwfq9ci91" target="_blank" rel="noopener noreferrer">
                <DownloadIcon className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                View Resume
              </a>
            </Button>

            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a
                  href="https://github.com/BHUVI-SHIP-IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a
                  href="https://www.linkedin.com/in/bhuvaneswar123/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Profile Photo with Hover Animation */}
        <motion.div
          className="relative cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onHoverStart={() => setIsPhotoHovered(true)}
          onHoverEnd={() => setIsPhotoHovered(false)}
        >
          {/* Animated rings around profile */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ width: "120%", height: "120%", top: "-10%", left: "-10%" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ width: "140%", height: "140%", top: "-20%", left: "-20%" }}
          />

          {/* Photo hover effects */}
          {isPhotoHovered && (
            <>
              {/* Energy rings on hover */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary/60"
                style={{ width: "110%", height: "110%", top: "-5%", left: "-5%" }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [0.8, 1.2, 1],
                  opacity: [0, 0.8, 0.4],
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/40"
                style={{ width: "130%", height: "130%", top: "-15%", left: "-15%" }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: [0.9, 1.3, 1.1],
                  opacity: [0, 0.6, 0.2],
                }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              />

              {/* Floating icons around photo */}
              {[
                { icon: SparklesIcon, position: { top: "10%", right: "10%" }, color: "text-yellow-400", delay: 0 },
                { icon: StarIcon, position: { bottom: "15%", right: "15%" }, color: "text-blue-400", delay: 0.2 },
                { icon: ZapIcon, position: { top: "20%", left: "10%" }, color: "text-purple-400", delay: 0.4 },
                { icon: SparklesIcon, position: { bottom: "10%", left: "20%" }, color: "text-green-400", delay: 0.6 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.color}`}
                  style={item.position}
                  initial={{ scale: 0, rotate: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.5, 1.2],
                    rotate: [0, 360, 180],
                    opacity: [0, 1, 0.7],
                    y: [0, -20, -10],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: item.delay,
                    ease: "easeOut",
                  }}
                >
                  <item.icon className="h-6 w-6" />
                </motion.div>
              ))}

              {/* Particle burst effect */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: [0, Math.cos((i * 30 * Math.PI) / 180) * 150],
                    y: [0, Math.sin((i * 30 * Math.PI) / 180) * 150],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Glow effect behind photo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-full blur-2xl -z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.8, 1.5],
                  opacity: [0, 0.8, 0.5],
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </>
          )}

          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl"
            animate={controls}
            whileHover={{
              scale: isPhotoHovered ? 1.1 : 1.05,
              boxShadow: isPhotoHovered
                ? "0 0 60px rgba(var(--primary), 0.8), 0 0 100px rgba(var(--primary), 0.4)"
                : "0 0 40px rgba(var(--primary), 0.6)",
              borderWidth: isPhotoHovered ? "8px" : "6px",
              rotate: isPhotoHovered ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: isPhotoHovered ? 0.6 : 0.3,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/professional-headshot.jpg"
              alt="M. Bhuvaneswar"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />

            {/* Shimmer effect on hover */}
            {isPhotoHovered && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            )}
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
          >
            Available for work
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ArrowDownIcon className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
