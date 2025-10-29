"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GithubIcon, ExternalLinkIcon, StarIcon, EyeIcon } from "lucide-react"

// Updated project data with your new projects
const projects = [
  {
    id: 1,
    title: "Grow Smart AI",
    description:
      "An intelligent farming solution that leverages AI to help farmers optimize crop growth, monitor plant health, and make data-driven agricultural decisions.",
    image: "/smart-farming-ai-dashboard-with-plants-and-data-an.jpg",
    tags: ["AI/ML", "React", "Python", "Agriculture Tech", "Data Analytics"],
    github: "https://github.com/BHUVI-SHIP-IT/farm-grow-ai",
    demo: "https://grow-smart-ai.netlify.app/",
    featured: true,
    status: "Live",
    stats: { stars: 25, views: 450 },
  },
  {
    id: 2,
    title: "Poll Management System",
    description:
      "A comprehensive polling system for CIT that enables secure voting, real-time results tracking, and efficient election management with user authentication.",
    image: "/poll-management-system-interface-with-voting-booth.jpg",
    tags: ["React", "Node.js", "MongoDB", "Authentication", "Real-time"],
    github: "https://github.com/S-Sivahari/CIT_Polling_System",
    demo: "https://cit-polling-system.vercel.app/",
    featured: true,
    status: "Live",
    stats: { stars: 20, views: 380 },
  },
  {
    id: 3,
    title: "PDF Parser",
    description:
      "A powerful PDF parsing application built for Bajaj that extracts and processes data from PDF documents with high accuracy and efficiency.",
    image: "/pdf-document-parser-interface-with-data-extraction.jpg",
    tags: ["Python", "PDF Processing", "Data Extraction", "Backend"],
    github: "https://github.com/BHUVI-SHIP-IT/Bajaj-PDFPARSER",
    demo: "#",
    featured: true,
    status: "Completed",
    stats: { stars: 18, views: 280 },
  },
  {
    id: 4,
    title: "Resume Creator",
    description:
      "A modern resume builder application that allows users to create professional resumes with customizable templates and real-time preview.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%282%29.jpg-cLbVxYrNR7uCj3Tlyz9S2z8XRkprJE.jpeg",
    tags: ["React", "Next.js", "Tailwind CSS", "PDF Generation"],
    github: "https://github.com/BHUVI-SHIP-IT/resume-creator-",
    demo: "https://v0-recreate-figma-ui-five-kohl-16.vercel.app/",
    featured: false,
    status: "Live",
    stats: { stars: 15, views: 320 },
  },
  {
    id: 5,
    title: "Smart Sport Strategy",
    description:
      "An intelligent sports strategy application that provides data-driven insights and analytics for sports teams and players.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E-2024-03-30-22.10.45-A-professional-and-realistic-thumbnail-for-smart-sports-betting-strategies-in-a-widescreen-aspect-ratio.-The-theme-revolves-around-sports-betting-f-1024x585.jpg-HzZaiELQuPBWjVEBPHGjHgq8IQw7vW.jpeg",
    tags: ["React", "Data Analytics", "Sports Tech", "Strategy"],
    github: "https://github.com/BHUVI-SHIP-IT/smart-sport-strategy-",
    demo: "https://preview--smart-sport-strategy.lovable.app/",
    featured: false,
    status: "Live",
    stats: { stars: 22, views: 478 },
  },
  {
    id: 6,
    title: "My Portfolio",
    description:
      "A modern, responsive portfolio website showcasing my projects, skills, and experience with interactive animations and AI-powered chat assistant.",
    image: "/project-portfolio.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "AI Integration"],
    github: "https://github.com/BHUVI-SHIP-IT/MY-PORTFOLIO",
    demo: "https://v0-modern-portfolio-website-navy.vercel.app/",
    featured: false,
    status: "Live",
    stats: { stars: 12, views: 200 },
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(var(--primary), 0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <StarIcon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Explore my portfolio of real-world projects that demonstrate my skills in AI/ML, web development, data
            processing, and problem-solving. Each project showcases different aspects of my technical expertise.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </motion.div>

        {/* Enhanced Problem Solving Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/20 shadow-xl">
            <CardHeader className="text-center pb-4">
              <motion.div
                className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 mx-auto"
                whileHover={{ scale: 1.05 }}
              >
                <StarIcon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Problem Solving</span>
              </motion.div>
              <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Coding Excellence
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                  <div className="text-3xl font-bold text-primary mb-2">400+</div>
                  <div className="text-sm text-muted-foreground">LeetCode Problems</div>
                </motion.div>
                <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">GitHub Repositories</div>
                </motion.div>
                <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">Live Projects</div>
                </motion.div>
              </div>

              <p className="text-lg mb-6 leading-relaxed">
                I've solved over 400+ problems on LeetCode and have extensive experience with SkillRack challenges,
                focusing on data structures, algorithms, and efficient problem-solving techniques.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="default" size="lg" className="group">
                  <a href="https://leetcode.com/u/bhuvaneswar_123/" target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="h-4 w-4 mr-2 group-hover:rotate-45 transition-transform" />
                    View LeetCode Profile
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="group bg-transparent">
                  <a href="https://github.com/BHUVI-SHIP-IT" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: any
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
      }}
      whileHover={{ y: -10 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className="group"
    >
      <Card className="h-full overflow-hidden border border-muted hover:border-primary/50 transition-all hover:shadow-2xl bg-background/50 backdrop-blur-sm">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />

          {/* Overlay with project stats */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4" />
                    <span className="text-sm">{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <EyeIcon className="h-4 w-4" />
                    <span className="text-sm">{project.stats.views}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Status badge */}
          <div className="absolute top-3 left-3">
            <Badge
              variant={project.status === "Live" ? "default" : "secondary"}
              className="bg-background/80 backdrop-blur-sm"
            >
              {project.status}
            </Badge>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge variant="default" className="bg-primary/90 backdrop-blur-sm">
                <StarIcon className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between gap-2">
          <Button variant="outline" size="sm" asChild className="flex-1 group/btn bg-transparent">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
              Code
            </a>
          </Button>
          {project.demo !== "#" ? (
            <Button size="sm" asChild className="flex-1 group/btn">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="h-4 w-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                Live Demo
              </a>
            </Button>
          ) : (
            <Button size="sm" disabled className="flex-1">
              <ExternalLinkIcon className="h-4 w-4 mr-2" />
              Demo Soon
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
