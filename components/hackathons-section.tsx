"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TrophyIcon,
  UsersIcon,
  CalendarIcon,
  MapPinIcon,
  ExternalLinkIcon,
  ZapIcon,
  BrainIcon,
  CodeIcon,
} from "lucide-react"

const hackathons = [
  {
    id: 1,
    name: "Hackfinity 2025",
    position: "🏆 Winner",
    team: "NeuroNinjas",
    date: "2025",
    location: "Chennai, India",
    description:
      "Our team NeuroNinjas emerged victorious in this prestigious hackathon, showcasing innovative solutions and exceptional teamwork.",
    technologies: ["AI/ML", "Python", "React", "Node.js", "MongoDB"],
    achievements: [
      "🥇 First Place Winner",
      "💡 Most Innovative Solution",
      "🤝 Best Team Collaboration",
      "🚀 Technical Excellence Award",
    ],
    impact:
      "Developed a cutting-edge solution that impressed judges with its innovation, technical implementation, and potential real-world impact.",
    teamSize: 4,
    duration: "48 hours",
    prize: "Winner",
    featured: true,
  },
]

const hackathonStats = [
  { number: "1", label: "Hackathons Won", icon: TrophyIcon },
  { number: "4", label: "Team Members", icon: UsersIcon },
  { number: "48", label: "Hours of Coding", icon: CodeIcon },
  { number: "100%", label: "Success Rate", icon: ZapIcon },
]

export default function HackathonsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="hackathons" ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            <TrophyIcon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Competitive Excellence</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Hackathons & Competitions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Showcasing innovation, teamwork, and technical excellence in competitive programming environments. Our team
            NeuroNinjas proves that great minds think alike! 🧠⚡
          </p>
        </motion.div>

        {/* Hackathon Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {hackathonStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <Card className="p-6 border-primary/20 hover:border-primary/50 transition-all bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 gap-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(hackathon.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
            >
              <Card
                className={`overflow-hidden border transition-all duration-300 ${
                  hackathon.featured
                    ? "border-primary/50 bg-gradient-to-br from-primary/5 via-background to-primary/5"
                    : "border-muted hover:border-primary/30"
                } ${hoveredCard === hackathon.id ? "shadow-2xl" : "shadow-lg"}`}
              >
                {/* Featured Badge */}
                {hackathon.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      <TrophyIcon className="h-3 w-3 mr-1" />
                      Featured Win
                    </Badge>
                  </div>
                )}

                <CardHeader className="relative">
                  {/* Winner Glow Effect */}
                  {hackathon.featured && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-primary/10 to-yellow-400/10 rounded-t-lg"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-primary mb-2">
                          {hackathon.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className="text-yellow-600 border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20"
                          >
                            {hackathon.position}
                          </Badge>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            Team: {hackathon.team}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{hackathon.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="h-4 w-4" />
                          <span>{hackathon.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <UsersIcon className="h-4 w-4" />
                          <span>
                            {hackathon.teamSize} members • {hackathon.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <CardDescription className="text-base leading-relaxed">{hackathon.description}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CodeIcon className="h-4 w-4 text-primary" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="hover:bg-primary/10 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrophyIcon className="h-4 w-4 text-primary" />
                      Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {hackathon.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <BrainIcon className="h-4 w-4 text-primary" />
                      Impact & Innovation
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{hackathon.impact}</p>
                  </div>

                  {/* Team Highlight */}
                  <motion.div
                    className="bg-gradient-to-r from-primary/5 to-primary/10 p-4 rounded-lg border border-primary/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <UsersIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-primary">Team NeuroNinjas</h5>
                        <p className="text-sm text-muted-foreground">Innovative • Collaborative • Winning</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A powerhouse team of {hackathon.teamSize} passionate developers who combine creativity, technical
                      expertise, and strategic thinking to deliver exceptional results. 🧠⚡
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <TrophyIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Ready for the Next Challenge</h3>
              <p className="text-muted-foreground mb-6">
                Looking for hackathon teammates or organizing a competition? Team NeuroNinjas is always ready to
                innovate and compete!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="#contact">
                    <UsersIcon className="h-4 w-4 mr-2" />
                    Join Our Team
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/BHUVI-SHIP-IT" target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    View Projects
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
