"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  icon: string
  color?: string
}

export function SkillBadge({ name, icon, color = "hsl(var(--primary))" }: SkillBadgeProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 relative overflow-hidden"
        animate={{ borderColor: [color + "40", color + "80", color + "40"] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `radial-gradient(circle, ${color}20, transparent)`,
          }}
        />

        {/* Icon */}
        <motion.svg
          viewBox="0 0 100 100"
          className="w-12 h-12 relative z-10"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          <text x="50" y="60" textAnchor="middle" fontSize="50" fill={color} opacity="0.8">
            {icon}
          </text>
        </motion.svg>
      </motion.div>

      {/* Label */}
      <motion.p
        className="text-xs font-medium text-center mt-2 text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ y: 0, opacity: 0 }}
        whileHover={{ y: -5, opacity: 1 }}
      >
        {name}
      </motion.p>

      {/* Hover particles */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: color,
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: Math.cos((i * Math.PI) / 2) * 40,
              y: Math.sin((i * Math.PI) / 2) * 40,
              opacity: [1, 0],
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export function SkillsGrid() {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "TypeScript", icon: "📘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
  ]

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-6 justify-items-center">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  )
}
