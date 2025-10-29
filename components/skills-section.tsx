"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CodeIcon,
  ServerIcon,
  BrainCogIcon,
  PencilRulerIcon,
  CodepenIcon,
  XIcon,
  ExternalLinkIcon,
  BookOpenIcon,
} from "lucide-react"

// Safe Space Background Component with Error Handling
const SpaceBackground = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    try {
      setIsClient(true)

      const updateSize = () => {
        if (typeof window !== "undefined") {
          const width = window.innerWidth
          const height = window.innerHeight
          setWindowSize({ width, height })
          setIsMobile(width < 768)
        }
      }

      updateSize()

      if (typeof window !== "undefined") {
        window.addEventListener("resize", updateSize)
        return () => window.removeEventListener("resize", updateSize)
      }
    } catch (error) {
      console.error("Space background error:", error)
      setHasError(true)
    }
  }, [])

  // Fallback if there's an error or not on client
  if (!isClient || hasError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        {/* Simple fallback stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${(i * 17) % 100}%`,
                top: `${(i * 23) % 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  // Reduce animations on mobile for better performance
  const starCount = isMobile ? 25 : 50
  const bigStarCount = isMobile ? 5 : 10
  const asteroidCount = isMobile ? 4 : 8
  const dustCount = isMobile ? 10 : 20

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />

      {/* Stars - Reduced count on mobile */}
      {[...Array(starCount)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Larger twinkling stars */}
      {[...Array(bigStarCount)].map((_, i) => (
        <motion.div
          key={`big-star-${i}`}
          className="absolute w-2 h-2 bg-blue-200 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Planet 1 - Large blue planet */}
      <motion.div
        className={`absolute rounded-full ${isMobile ? "w-20 h-20" : "w-32 h-32"}`}
        style={{
          background: "radial-gradient(circle at 30% 30%, #60a5fa, #1e40af, #1e3a8a)",
          boxShadow: "0 0 40px rgba(96, 165, 250, 0.3), inset -10px -10px 20px rgba(0,0,0,0.3)",
          top: "10%",
          left: "5%",
        }}
        animate={{
          rotate: 360,
          x: [0, isMobile ? 50 : 100, 0, isMobile ? -50 : -100, 0],
          y: [0, isMobile ? 25 : 50, isMobile ? 50 : 100, isMobile ? 25 : 50, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          x: { duration: isMobile ? 30 : 40, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          y: { duration: isMobile ? 30 : 40, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-300/30 to-transparent" />
        {!isMobile && (
          <>
            <div className="absolute top-4 left-6 w-8 h-8 rounded-full bg-blue-400/40" />
            <div className="absolute bottom-6 right-4 w-6 h-6 rounded-full bg-blue-300/30" />
          </>
        )}
      </motion.div>

      {/* Planet 2 - Medium purple planet */}
      <motion.div
        className={`absolute rounded-full ${isMobile ? "w-12 h-12" : "w-20 h-20"}`}
        style={{
          background: "radial-gradient(circle at 30% 30%, #a855f7, #7c3aed, #5b21b6)",
          boxShadow: "0 0 30px rgba(168, 85, 247, 0.3), inset -8px -8px 15px rgba(0,0,0,0.3)",
          top: "20%",
          right: "10%",
        }}
        animate={{
          rotate: -360,
          x: [0, isMobile ? -40 : -80, 0, isMobile ? 40 : 80, 0],
          y: [0, isMobile ? 40 : 80, isMobile ? 80 : 160, isMobile ? 40 : 80, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          x: { duration: isMobile ? 25 : 35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          y: { duration: isMobile ? 25 : 35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-300/20 to-transparent" />
      </motion.div>

      {/* Planet 3 - Small orange planet */}
      <motion.div
        className={`absolute rounded-full ${isMobile ? "w-10 h-10" : "w-16 h-16"}`}
        style={{
          background: "radial-gradient(circle at 30% 30%, #fb923c, #ea580c, #c2410c)",
          boxShadow: "0 0 25px rgba(251, 146, 60, 0.3), inset -6px -6px 12px rgba(0,0,0,0.3)",
          bottom: "15%",
          left: "15%",
        }}
        animate={{
          rotate: 360,
          x: [0, isMobile ? 60 : 120, isMobile ? 120 : 240, isMobile ? 60 : 120, 0],
          y: [0, isMobile ? -30 : -60, 0, isMobile ? 30 : 60, 0],
        }}
        transition={{
          rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          x: { duration: isMobile ? 20 : 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          y: { duration: isMobile ? 20 : 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-orange-200/30 to-transparent" />
        {!isMobile && <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-orange-300/50" />}
      </motion.div>

      {/* Planet 4 - Tiny green planet */}
      <motion.div
        className={`absolute rounded-full ${isMobile ? "w-8 h-8" : "w-12 h-12"}`}
        style={{
          background: "radial-gradient(circle at 30% 30%, #34d399, #059669, #047857)",
          boxShadow: "0 0 20px rgba(52, 211, 153, 0.3), inset -4px -4px 8px rgba(0,0,0,0.3)",
          top: "60%",
          right: "20%",
        }}
        animate={{
          rotate: -360,
          x: [0, isMobile ? -30 : -60, isMobile ? -60 : -120, isMobile ? -30 : -60, 0],
          y: [0, isMobile ? 20 : 40, 0, isMobile ? -20 : -40, 0],
        }}
        transition={{
          rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          x: { duration: isMobile ? 15 : 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          y: { duration: isMobile ? 15 : 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-green-200/40 to-transparent" />
      </motion.div>

      {/* Asteroid belt - Reduced on mobile */}
      {[...Array(asteroidCount)].map((_, i) => (
        <motion.div
          key={`asteroid-${i}`}
          className="absolute w-2 h-2 bg-gray-400 rounded-full"
          style={{
            left: `${20 + i * (isMobile ? 12 : 8)}%`,
            top: `${40 + Math.sin(i) * 10}%`,
          }}
          animate={{
            x: [0, isMobile ? 5 : 10, 0, isMobile ? -5 : -10, 0],
            y: [0, isMobile ? 2 : 5, 0, isMobile ? -2 : -5, 0],
            rotate: 360,
          }}
          transition={{
            duration: 8 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Nebula clouds */}
      <motion.div
        className={`absolute top-1/4 left-1/3 rounded-full opacity-10 ${isMobile ? "w-48 h-48" : "w-96 h-96"}`}
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.2), transparent)",
          filter: isMobile ? "blur(20px)" : "blur(40px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Shooting stars - Only on desktop and when window is available */}
      {!isMobile &&
        typeof window !== "undefined" &&
        windowSize.width > 0 &&
        [...Array(2)].map((_, i) => (
          <motion.div
            key={`shooting-star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: "-10%",
              top: `${20 + i * 30}%`,
            }}
            animate={{
              x: [0, windowSize.width * 1.2],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 10 + 5,
              ease: "easeOut",
            }}
          >
            <div
              className="absolute right-0 top-0 w-20 h-0.5 bg-gradient-to-r from-white to-transparent"
              style={{ transform: "translateX(100%)" }}
            />
          </motion.div>
        ))}

      {/* Cosmic dust particles */}
      {[...Array(dustCount)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute w-0.5 h-0.5 bg-purple-200/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * (isMobile ? 10 : 20) - (isMobile ? 5 : 10)],
            y: [0, Math.random() * (isMobile ? 10 : 20) - (isMobile ? 5 : 10)],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * (isMobile ? 8 : 10) + 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Mobile performance indicator */}
      {isMobile && (
        <div className="absolute bottom-4 right-4 text-xs text-white/50 bg-black/20 px-2 py-1 rounded">
          Mobile Optimized
        </div>
      )}
    </div>
  )
}

// Skill data
const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <CodeIcon className="h-5 w-5" />,
    description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
    skills: [
      {
        name: "HTML5",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "bg-orange-500",
        description: "Semantic markup and modern HTML5 features for web applications",
        experience: "3+ years",
        projects: ["Netflix Clone", "Resume Creator", "Portfolio Website"],
        resources: ["MDN Web Docs", "W3Schools", "HTML5 Specification"],
      },
      {
        name: "CSS3",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "bg-blue-500",
        description: "Advanced styling with Flexbox, Grid, animations, and responsive design",
        experience: "3+ years",
        projects: ["Movie Booking System", "The Avengers", "Smart Sport Strategy"],
        resources: ["CSS-Tricks", "Flexbox Froggy", "Grid Garden"],
      },
      {
        name: "JavaScript",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "bg-yellow-500",
        description: "Modern ES6+ JavaScript, DOM manipulation, and asynchronous programming",
        experience: "2+ years",
        projects: ["Netflix Clone", "Movie Booking System", "Interactive Games"],
        resources: ["JavaScript.info", "MDN JavaScript", "You Don't Know JS"],
      },
      {
        name: "React",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "bg-blue-400",
        description: "Component-based UI development with hooks, state management, and modern patterns",
        experience: "2+ years",
        projects: ["Resume Creator", "Smart Sport Strategy", "The Avengers"],
        resources: ["React Documentation", "React Patterns", "Kent C. Dodds Blog"],
      },
      {
        name: "Next.js",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "bg-black",
        description: "Full-stack React framework with SSR, SSG, and API routes",
        experience: "1+ years",
        projects: ["Portfolio Website", "Resume Creator", "Blog Platform"],
        resources: ["Next.js Documentation", "Vercel Guides", "Lee Robinson's Content"],
      },
    ],
    software: [
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "bg-blue-500",
        description: "Primary code editor with extensive extensions and customizations",
        experience: "Daily use for 3+ years",
      },
      {
        name: "Chrome DevTools",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
        color: "bg-blue-600",
        description: "Debugging, performance analysis, and responsive design testing",
        experience: "Expert level",
      },
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "bg-purple-500",
        description: "UI/UX design, prototyping, and design system creation",
        experience: "2+ years",
      },
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "bg-orange-600",
        description: "Version control, branching strategies, and collaborative development",
        experience: "Advanced user",
      },
      {
        name: "npm",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        color: "bg-red-500",
        description: "Package management and dependency handling",
        experience: "Daily use",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <ServerIcon className="h-5 w-5" />,
    description: "Developing robust server-side applications and APIs with various technologies.",
    skills: [
      {
        name: "Node.js",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "bg-green-600",
        description: "Server-side JavaScript runtime for building scalable applications",
        experience: "2+ years",
        projects: ["Movie Booking API", "Chat Application", "REST APIs"],
        resources: ["Node.js Documentation", "Express.js Guide", "Node.js Best Practices"],
      },
      {
        name: "Python",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "bg-blue-500",
        description: "Versatile programming language for web development, data science, and automation",
        experience: "3+ years",
        projects: ["Data Analysis Scripts", "Web Scrapers", "Machine Learning Models"],
        resources: ["Python.org", "Real Python", "Automate the Boring Stuff"],
      },
      {
        name: "SQL",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "bg-blue-700",
        description: "Database design, complex queries, and performance optimization",
        experience: "2+ years",
        projects: ["Movie Booking Database", "User Management System", "Analytics Dashboard"],
        resources: ["W3Schools SQL", "SQLBolt", "PostgreSQL Documentation"],
      },
      {
        name: "Java",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        color: "bg-red-600",
        description: "Object-oriented programming, enterprise applications, and Android development",
        experience: "2+ years",
        projects: ["Console Applications", "Data Structures Implementation", "Algorithm Solutions"],
        resources: ["Oracle Java Docs", "Java: The Complete Reference", "Codecademy Java"],
      },
      {
        name: "C#",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        color: "bg-purple-600",
        description: "Microsoft's programming language for .NET applications and game development",
        experience: "1+ years",
        projects: ["Desktop Applications", "Unity Game Scripts", "Web APIs"],
        resources: ["Microsoft Learn", "C# Documentation", "Unity Learn"],
      },
    ],
    software: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "bg-green-600",
        description: "NoSQL database for flexible, document-based data storage",
        experience: "Intermediate",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "bg-blue-600",
        description: "Relational database management system for structured data",
        experience: "Advanced",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "bg-indigo-600",
        description: "Advanced open-source relational database with powerful features",
        experience: "Intermediate",
      },
      {
        name: "Express",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "bg-gray-600",
        description: "Fast, unopinionated web framework for Node.js applications",
        experience: "Advanced",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        color: "bg-blue-500",
        description: "Containerization platform for consistent development environments",
        experience: "Beginner",
      },
    ],
  },
  {
    id: "ai",
    name: "AI / ML",
    icon: <BrainCogIcon className="h-5 w-5" />,
    description: "Exploring and implementing machine learning models and AI solutions.",
    skills: [
      {
        name: "TensorFlow",
        level: 65,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        color: "bg-orange-500",
        description: "Open-source machine learning framework for building and training models",
        experience: "1+ years",
        projects: ["Image Classification", "Neural Networks", "Deep Learning Models"],
        resources: ["TensorFlow Documentation", "TensorFlow Tutorials", "Coursera ML Course"],
      },
      {
        name: "PyTorch",
        level: 60,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        color: "bg-red-500",
        description: "Dynamic neural network framework for research and production",
        experience: "6+ months",
        projects: ["Computer Vision", "NLP Models", "Research Projects"],
        resources: ["PyTorch Documentation", "Fast.ai", "PyTorch Tutorials"],
      },
      {
        name: "Scikit-learn",
        level: 75,
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        color: "bg-orange-600",
        description: "Machine learning library for classical algorithms and data preprocessing",
        experience: "1+ years",
        projects: ["Predictive Models", "Data Classification", "Regression Analysis"],
        resources: ["Scikit-learn Documentation", "Hands-On ML Book", "Kaggle Learn"],
      },
      {
        name: "Pandas",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        color: "bg-blue-400",
        description: "Data manipulation and analysis library for Python",
        experience: "2+ years",
        projects: ["Data Analysis", "Data Cleaning", "Statistical Analysis"],
        resources: ["Pandas Documentation", "Python for Data Analysis", "DataCamp"],
      },
      {
        name: "NumPy",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        color: "bg-blue-500",
        description: "Fundamental package for scientific computing with Python",
        experience: "2+ years",
        projects: ["Mathematical Computations", "Array Operations", "Scientific Computing"],
        resources: ["NumPy Documentation", "Scientific Python", "NumPy Tutorials"],
      },
    ],
    software: [
      {
        name: "Jupyter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        color: "bg-orange-500",
        description: "Interactive computing environment for data science and research",
        experience: "Daily use",
      },
      {
        name: "Anaconda",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg",
        color: "bg-green-500",
        description: "Python distribution for data science and machine learning",
        experience: "Regular use",
      },
      {
        name: "Keras",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
        color: "bg-red-500",
        description: "High-level neural networks API for rapid prototyping",
        experience: "Intermediate",
      },
      {
        name: "Google Colab",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
        color: "bg-yellow-500",
        description: "Cloud-based Jupyter notebook environment with free GPU access",
        experience: "Regular use",
      },
      {
        name: "MATLAB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
        color: "bg-blue-600",
        description: "Programming platform for algorithm development and data analysis",
        experience: "Academic use",
      },
    ],
  },
  {
    id: "design",
    name: "UI / UX",
    icon: <PencilRulerIcon className="h-5 w-5" />,
    description: "Designing intuitive and aesthetically pleasing user experiences.",
    skills: [
      {
        name: "Figma",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "bg-purple-500",
        description: "Collaborative design tool for UI/UX design and prototyping",
        experience: "2+ years",
        projects: ["Portfolio Design", "App Mockups", "Design Systems"],
        resources: ["Figma Academy", "Design Systems", "UI/UX Patterns"],
      },
      {
        name: "Adobe XD",
        level: 70,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        color: "bg-pink-500",
        description: "Vector-based design tool for web and mobile app design",
        experience: "1+ years",
        projects: ["Mobile App Designs", "Web Prototypes", "User Flows"],
        resources: ["Adobe XD Tutorials", "XD Guru", "Adobe Creative Cloud"],
      },
      {
        name: "Tailwind CSS",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        color: "bg-cyan-500",
        description: "Utility-first CSS framework for rapid UI development",
        experience: "2+ years",
        projects: ["Portfolio Website", "Resume Creator", "All Recent Projects"],
        resources: ["Tailwind Documentation", "Tailwind UI", "Headless UI"],
      },
      {
        name: "Bootstrap",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        color: "bg-purple-600",
        description: "CSS framework for responsive and mobile-first web development",
        experience: "2+ years",
        projects: ["Early Web Projects", "Responsive Layouts", "Component Libraries"],
        resources: ["Bootstrap Documentation", "Bootstrap Examples", "Bootstrap Themes"],
      },
      {
        name: "SASS",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        color: "bg-pink-600",
        description: "CSS preprocessor with variables, nesting, and mixins",
        experience: "1+ years",
        projects: ["Custom Stylesheets", "Theme Systems", "Component Styling"],
        resources: ["Sass Documentation", "Sass Guidelines", "CSS-Tricks Sass"],
      },
    ],
    software: [
      {
        name: "Photoshop",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        color: "bg-blue-600",
        description: "Image editing and graphic design software",
        experience: "Intermediate",
      },
      {
        name: "Illustrator",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
        color: "bg-orange-500",
        description: "Vector graphics editor for logos and illustrations",
        experience: "Beginner",
      },
      {
        name: "Sketch",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
        color: "bg-yellow-500",
        description: "Digital design toolkit for UI/UX design",
        experience: "Basic",
      },
      {
        name: "InVision",
        logo: "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
        color: "bg-red-500",
        description: "Digital product design platform for prototyping",
        experience: "Basic",
      },
      {
        name: "Canva",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        color: "bg-blue-400",
        description: "Graphic design platform for social media and presentations",
        experience: "Regular use",
      },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    icon: <CodepenIcon className="h-5 w-5" />,
    description: "Proficiency in various programming and human languages.",
    skills: [
      {
        name: "C/C++",
        level: 90,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        color: "bg-blue-600",
        description: "System programming, data structures, and competitive programming",
        experience: "3+ years",
        projects: ["Algorithm Implementations", "System Programs", "Competitive Programming"],
        resources: ["GeeksforGeeks", "LeetCode", "Competitive Programming Handbook"],
      },
      {
        name: "Python",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "bg-blue-500",
        description: "General-purpose programming for web, data science, and automation",
        experience: "3+ years",
        projects: ["Web Applications", "Data Analysis", "Machine Learning"],
        resources: ["Python.org", "Real Python", "Python Crash Course"],
      },
      {
        name: "Java",
        level: 80,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        color: "bg-red-600",
        description: "Object-oriented programming and enterprise application development",
        experience: "2+ years",
        projects: ["Desktop Applications", "Algorithm Solutions", "OOP Projects"],
        resources: ["Oracle Java Docs", "Java: The Complete Reference", "Codecademy"],
      },
      {
        name: "JavaScript",
        level: 85,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "bg-yellow-500",
        description: "Web development, both frontend and backend applications",
        experience: "2+ years",
        projects: ["Web Applications", "Interactive UIs", "Node.js APIs"],
        resources: ["MDN Web Docs", "JavaScript.info", "Eloquent JavaScript"],
      },
      {
        name: "C#",
        level: 75,
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        color: "bg-purple-600",
        description: "Microsoft ecosystem development and game programming",
        experience: "1+ years",
        projects: ["Desktop Apps", "Unity Games", "Web APIs"],
        resources: ["Microsoft Learn", "C# Documentation", "Unity Learn"],
      },
    ],
    software: [
      {
        name: "Visual Studio",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
        color: "bg-purple-600",
        description: "Integrated development environment for Microsoft technologies",
        experience: "Regular use",
      },
      {
        name: "Eclipse",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
        color: "bg-purple-500",
        description: "Java development environment with extensive plugin support",
        experience: "Academic use",
      },
      {
        name: "IntelliJ IDEA",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
        color: "bg-red-500",
        description: "Powerful IDE for Java and other JVM languages",
        experience: "Regular use",
      },
      {
        name: "PyCharm",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
        color: "bg-green-500",
        description: "Python IDE with intelligent code assistance",
        experience: "Regular use",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        color: "bg-gray-700",
        description: "Version control and collaborative development platform",
        experience: "Daily use",
      },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("frontend")
  const [selectedSkill, setSelectedSkill] = useState<any>(null)
  const [selectedSoftware, setSelectedSoftware] = useState<any>(null)

  const handleSkillClick = (skill: any, category: string) => {
    setSelectedSkill({ ...skill, category })
  }

  const handleSoftwareClick = (software: any, category: string) => {
    setSelectedSoftware({ ...software, category })
  }

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />

      {/* Content overlay */}
      <div className="relative z-10">
        {/* Gradient overlays for better text readability */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/80 to-transparent" />

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">My Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-white/90 drop-shadow-md">
              I've developed a diverse set of skills across various domains of software development, from frontend and
              backend technologies to AI/ML and design. Click on any skill to learn more!
            </p>
          </motion.div>

          <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-background/20 backdrop-blur-md border border-white/20">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-white text-white/80"
                >
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-2 text-white drop-shadow-lg">{category.name} Skills</h3>
                    <p className="text-white/80 mb-6 drop-shadow-md">{category.description}</p>
                  </div>

                  {/* Skills Cards Grid */}
                  <div className="mb-12">
                    <h4 className="text-xl font-medium mb-4 text-white drop-shadow-lg">Technical Skills</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Card
                            className="h-full hover:shadow-xl transition-all border-white/20 hover:border-primary/50 cursor-pointer group bg-background/10 backdrop-blur-md"
                            onClick={() => handleSkillClick(skill, category.name)}
                          >
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center text-center">
                                <motion.div
                                  className="w-20 h-20 flex items-center justify-center mb-3 relative"
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.6 }}
                                >
                                  <Image
                                    src={skill.logo || "/placeholder.svg"}
                                    alt={skill.name}
                                    width={64}
                                    height={64}
                                    className="object-contain group-hover:drop-shadow-lg transition-all"
                                  />
                                </motion.div>
                                <h5 className="font-medium mb-2 group-hover:text-primary transition-colors text-white">
                                  {skill.name}
                                </h5>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Software/Tools Cards Grid */}
                  <div className="mb-12">
                    <h4 className="text-xl font-medium mb-4 text-white drop-shadow-lg">Software & Tools</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {category.software.map((software, index) => (
                        <motion.div
                          key={software.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Card
                            className="hover:shadow-xl transition-all border-white/20 hover:border-primary/50 cursor-pointer group bg-background/10 backdrop-blur-md"
                            onClick={() => handleSoftwareClick(software, category.name)}
                          >
                            <CardContent className="p-4 flex items-center gap-3">
                              <motion.div
                                className="w-10 h-10 flex items-center justify-center flex-shrink-0 relative"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <Image
                                  src={software.logo || "/placeholder.svg"}
                                  alt={software.name}
                                  width={32}
                                  height={32}
                                  className="object-contain group-hover:drop-shadow-lg transition-all"
                                />
                              </motion.div>
                              <div>
                                <h5 className="font-medium text-sm group-hover:text-primary transition-colors text-white">
                                  {software.name}
                                </h5>
                                <Badge variant="secondary" className="mt-1 bg-primary/20 text-white border-white/20">
                                  Proficient
                                </Badge>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-primary/20"
              initial={{ scale: 0.5, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 180, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-16 h-16 flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Image
                        src={selectedSkill.logo || "/placeholder.svg"}
                        alt={selectedSkill.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{selectedSkill.name}</h3>
                      <p className="text-muted-foreground">{selectedSkill.category}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedSkill(null)}
                    className="hover:bg-destructive/10 hover:text-destructive"
                  >
                    <XIcon className="h-5 w-5" />
                  </Button>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpenIcon className="h-4 w-4" />
                    Description
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedSkill.description}</p>
                </div>

                {/* Experience */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Experience</h4>
                  <Badge variant="outline" className="text-primary border-primary">
                    {selectedSkill.experience}
                  </Badge>
                </div>

                {/* Projects */}
                {selectedSkill.projects && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Projects Using This Skill</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.projects.map((project: string) => (
                        <Badge key={project} variant="secondary">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Resources */}
                {selectedSkill.resources && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Learning Resources</h4>
                    <div className="space-y-2">
                      {selectedSkill.resources.map((resource: string) => (
                        <div key={resource} className="flex items-center gap-2">
                          <ExternalLinkIcon className="h-4 w-4 text-primary" />
                          <span className="text-sm">{resource}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <div className="flex justify-center pt-4">
                  <Button onClick={() => setSelectedSkill(null)} className="px-8">
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Software Detail Modal */}
      <AnimatePresence>
        {selectedSoftware && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSoftware(null)}
          >
            <motion.div
              className="bg-background rounded-2xl shadow-2xl max-w-lg w-full border border-primary/20"
              initial={{ scale: 0.5, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 180, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Image
                        src={selectedSoftware.logo || "/placeholder.svg"}
                        alt={selectedSoftware.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{selectedSoftware.name}</h3>
                      <p className="text-sm text-muted-foreground">{selectedSoftware.category}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedSoftware(null)}
                    className="hover:bg-destructive/10 hover:text-destructive"
                  >
                    <XIcon className="h-5 w-5" />
                  </Button>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">About</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedSoftware.description}</p>
                </div>

                {/* Experience */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Experience Level</h4>
                  <Badge variant="outline" className="text-primary border-primary">
                    {selectedSoftware.experience}
                  </Badge>
                </div>

                {/* Action Button */}
                <div className="flex justify-center pt-4">
                  <Button onClick={() => setSelectedSoftware(null)} className="px-8">
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
