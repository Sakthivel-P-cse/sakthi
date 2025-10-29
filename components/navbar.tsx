"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import ColorThemeSelector from "@/components/color-theme-selector"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#home" className="flex items-center gap-2">
            <motion.div
              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              MB
            </motion.div>
            M. Bhuvaneswar
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              label={item.name}
              isActive={activeSection === item.href.substring(1)}
            />
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ColorThemeSelector />
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="relative"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XIcon className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuIcon className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-background/95 backdrop-blur-md px-4 py-6 shadow-lg border-t border-border/50">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="py-3"
                >
                  <a
                    href={item.href}
                    className={`block text-lg font-medium transition-colors hover:text-primary ${
                      activeSection === item.href.substring(1) ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }} className="relative">
      <a
        href={href}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative group ${
          isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
        }`}
      >
        {label}
        <motion.span
          className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-full group-hover:left-0"
          animate={{ width: isActive ? "100%" : "0%", left: isActive ? "0%" : "50%" }}
          transition={{ duration: 0.3 }}
        />
      </a>
    </motion.div>
  )
}
