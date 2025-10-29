"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  CodeIcon,
  BrainIcon,
  GraduationCapIcon,
  TrophyIcon,
  RocketIcon,
  HeartIcon,
  GamepadIcon,
  MusicIcon,
} from "lucide-react"

const achievements = [
  { number: "400+", label: "LeetCode Problems", icon: CodeIcon },
  { number: "50+", label: "GitHub Repos", icon: BrainIcon },
  { number: "5+", label: "Live Projects", icon: RocketIcon },
  { number: "10+", label: "Certifications", icon: TrophyIcon },
]

const skills = [
  { name: "Problem Solving", level: 95 },
  { name: "Full-Stack Development", level: 88 },
  { name: "Python Programming", level: 92 },
  { name: "Data Structures & Algorithms", level: 90 },
]

const interests = [
  { name: "Gaming", icon: GamepadIcon, color: "text-purple-500" },
  { name: "Anime", icon: HeartIcon, color: "text-pink-500" },
  { name: "Stage Speaking", icon: TrophyIcon, color: "text-yellow-500" },
  { name: "Mathematics", icon: BrainIcon, color: "text-blue-500" },
  { name: "Movies", icon: RocketIcon, color: "text-red-500" },
  { name: "Music", icon: MusicIcon, color: "text-green-500" },
  { name: "Spiritual Seeker", icon: HeartIcon, color: "text-orange-500" },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="about" ref={ref} className="py-20 bg-background relative overflow-hidden min-h-screen">
      {/* Simple Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <HeartIcon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get to know me</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"></div>

          {/* Main Description */}
          <div className="text-lg max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-4">
            <p>
              Hi, I'm <span className="text-primary font-semibold">M. Bhuvaneswar</span>, a passionate Computer Science
              and Engineering (CSE) student at{" "}
              <span className="text-primary font-semibold">Chennai Institute of Technology</span>. I'm a tech
              enthusiast, advanced Python programmer, and full-stack developer with strong skills in C, C++, Java, SQL,
              and web technologies.
            </p>
            <p>
              I actively solve coding challenges — with{" "}
              <span className="text-primary font-semibold">400+ problems completed on LeetCode</span> — and I've earned
              certifications in <span className="text-primary font-semibold">Cybersecurity (Cisco)</span>,{" "}
              <span className="text-primary font-semibold">Artificial Intelligence (Cisco)</span>, and more. I'm also an
              active member of the <span className="text-primary font-semibold">CodeBees club</span>, a community that
              supports top coders in excelling at placements.
            </p>
            <p>
              My interests go beyond coding: I enjoy gaming, anime, stage speaking, mathematics, movies, music, and
              being a <span className="text-primary font-semibold">Spiritual Seeker</span>. With a deep belief in{" "}
              <span className="text-primary font-semibold">Lord Shiva</span> and a vision to create a{" "}
              <span className="text-primary font-semibold">tech-enabled, safe society</span>, I strive to combine
              technology and innovation to make a positive impact. 🚀
            </p>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={achievement.label} className="text-center">
              <Card className="p-6 border-primary/20 hover:border-primary/50 transition-all bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="p-0">
                  <achievement.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Animation Side */}
          <div className="flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-background to-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden relative">
                <div className="relative z-10 text-center">
                  <CodeIcon className="h-20 w-20 text-primary mb-4 mx-auto" />
                  <div className="text-lg font-semibold text-primary">Coding Passion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards Side */}
          <div className="space-y-6">
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <CodeIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Advanced Python Developer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate about creating clean, efficient code with Python and building scalable applications with
                  modern web technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <BrainIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Problem Solving Expert</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Solved 400+ problems on LeetCode, focusing on algorithms and data structures with optimal solutions.
                  Active CodeBees club member.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <GraduationCapIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">CSE Student & Learner</h3>
                <p className="text-muted-foreground leading-relaxed">
                  B.Tech in Computer Science at Chennai Institute of Technology (2024-2028), constantly learning and
                  growing in tech.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <TrophyIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Certified Professional</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Multiple certifications from Cisco in Cybersecurity, AI, and more. Committed to continuous
                  professional development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Beyond Coding
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={interest.name}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <interest.icon className={`h-6 w-6 ${interest.color}`} />
                  <span className="font-medium">{interest.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Skills Progress Section */}
        <div>
          <Card className="p-8 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
