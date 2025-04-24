"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type Skill = {
  name: string
  level: number
  category: "frontend" | "backend" | "tools" | "languages" | "frameworks"
  icon?: string
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Framer Motion", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 82, category: "backend" },
  { name: "MongoDB", level: 78, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  { name: "REST API", level: 88, category: "backend" },

  // Tools & Others
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 65, category: "tools" },
  { name: "Jest", level: 80, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },

  // Languages
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "TypeScript", level: 85, category: "languages" },
  { name: "Python", level: 75, category: "languages" },
  { name: "Java", level: 65, category: "languages" },
  { name: "C++", level: 60, category: "languages" },

  // Frameworks & Libraries
  { name: "React", level: 90, category: "frameworks" },
  { name: "Next.js", level: 88, category: "frameworks" },
  { name: "Express", level: 82, category: "frameworks" },
  { name: "Redux", level: 80, category: "frameworks" },
  { name: "Tailwind CSS", level: 92, category: "frameworks" },
  { name: "Material UI", level: 85, category: "frameworks" },
]

type CategoryTab = {
  id: Skill["category"]
  label: string
}

const categories: CategoryTab[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks" },
]

export default function SkillsVisualization() {
  const [activeCategory, setActiveCategory] = useState<Skill["category"]>("frontend")

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory)

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
              activeCategory === category.id ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>

      {/* Skills Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className="bg-gray-800 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
