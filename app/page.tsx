"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import HackathonsSection from "@/components/hackathons-section"
import AnonymousMessagesSection from "@/components/anonymous-messages-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AIAssistant from "@/components/ai-assistant"
import RocketFlyover from "@/components/rocket-flyover"
import { Button } from "@/components/ui/button"
import { MessageSquareIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <HackathonsSection />
        <AnonymousMessagesSection />
        <ContactSection />
      </main>

      <Footer />

      {/* AI Assistant Button */}
      <AnimatePresence>
        {!isAIAssistantOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Button
              onClick={() => setIsAIAssistantOpen(true)}
              className="h-14 w-14 rounded-full shadow-lg"
              aria-label="Open AI Assistant"
            >
              <MessageSquareIcon className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Assistant Modal */}
      <AIAssistant isOpen={isAIAssistantOpen} onClose={() => setIsAIAssistantOpen(false)} />

      {/* Rocket Flyover Animation */}
      <RocketFlyover />
    </div>
  )
}
