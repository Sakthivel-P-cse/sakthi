"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EyeOffIcon, SparklesIcon, HeartIcon, SmileIcon, ExternalLinkIcon } from "lucide-react"

export default function AnonymousMessagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)

  const funFacts = [
    "🎭 Completely anonymous",
    "🎪 No judgment zone",
    "🎨 Get creative with your messages",
    "🎯 Ask anything you want",
    "🎊 Share your thoughts freely",
  ]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated gradient background similar to NGL */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 opacity-90" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/30"
            whileHover={{ scale: 1.05 }}
          >
            <EyeOffIcon className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Anonymous Zone</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Send Me Anonymous Messages! 🎭
          </h2>
          <div className="w-20 h-1 bg-white/80 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto text-white/90 drop-shadow-md leading-relaxed">
            Got something to say but want to stay anonymous? This is your chance! Send me anything - questions,
            compliments, roasts, random thoughts, or just say hi! 😄
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Interactive Content */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {/* Main CTA Button */}
              <motion.div
                className="text-center"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-gray-800 hover:bg-white/90 shadow-2xl text-lg px-8 py-6 rounded-2xl font-bold group relative overflow-hidden"
                >
                  <a
                    href="https://ngl.link/bhuviprime"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fcaXiFsj7oUsDjfAjyKmgUuHk59YXD.png"
                      alt="Messenger logo"
                      width={24}
                      height={24}
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    Send Anonymous Message
                    <ExternalLinkIcon className="h-5 w-5 group-hover:rotate-45 transition-transform" />
                    {/* Button glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-orange-400/20 rounded-2xl"
                      animate={isHovered ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </Button>

                {/* Floating particles around button */}
                {isHovered && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          left: "50%",
                          top: "50%",
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          x: [0, Math.cos((i * 45 * Math.PI) / 180) * 60],
                          y: [0, Math.sin((i * 45 * Math.PI) / 180) * 60],
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>

              {/* Fun Facts */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/30">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <SparklesIcon className="h-5 w-5" />
                    Why Send Anonymous Messages?
                  </h4>
                  <div className="space-y-3">
                    {funFacts.map((fact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 text-white/90"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-white/60 rounded-full" />
                        <span className="text-sm">{fact}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/30">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <motion.div whileHover={{ scale: 1.05 }} className="space-y-1">
                      <div className="text-2xl font-bold text-white">247+</div>
                      <div className="text-xs text-white/70">Messages Sent</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="space-y-1">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-xs text-white/70">Anonymous</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="space-y-1">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-xs text-white/70">Available</div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bottom Fun Section */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/30 max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <SmileIcon className="h-6 w-6 text-white" />
                    <h4 className="text-lg font-semibold text-white">Message Ideas</h4>
                    <HeartIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white/80">
                    <div>• "What's your biggest coding mistake?"</div>
                    <div>• "Rate my GitHub profile 1-10"</div>
                    <div>• "Your portfolio is fire! 🔥"</div>
                    <div>• "Can you teach me React?"</div>
                    <div>• "What's your favorite programming meme?"</div>
                    <div>• "You seem cool, let's be friends!"</div>
                  </div>
                  <p className="text-white/60 text-xs mt-4">Or send whatever's on your mind - I read them all! 😊</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent" />
    </section>
  )
}
