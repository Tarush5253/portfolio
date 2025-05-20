"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Code2,
  Database,
  Server,
  Layers,
  PenTool,
  Cpu,
  Globe,
  FileJson,
  Figma,
  GitBranch,
  Box,
  Workflow,
  LayoutGrid,
  Braces,
  Brackets,
  Terminal,
  Palette,
  Gauge,
} from "lucide-react"

type Skill = {
  name: string
  level: number
  category: "frontend" | "backend" | "tools" | "languages" | "frameworks"
  icon: React.ReactNode
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: <Code2 className="h-8 w-8" /> },
  { name: "JavaScript", level: 90, category: "frontend", icon: <FileJson className="h-8 w-8" /> },
  { name: "TypeScript", level: 85, category: "frontend", icon: <Braces className="h-8 w-8" /> },
  { name: "React", level: 90, category: "frontend", icon: <Layers className="h-8 w-8" /> },
  { name: "Next.js", level: 88, category: "frontend", icon: <LayoutGrid className="h-8 w-8" /> },
  { name: "Tailwind CSS", level: 92, category: "frontend", icon: <Palette className="h-8 w-8" /> },
  { name: "Framer Motion", level: 80, category: "frontend", icon: <PenTool className="h-8 w-8" /> },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: <Server className="h-8 w-8" /> },
  { name: "Express", level: 82, category: "backend", icon: <Box className="h-8 w-8" /> },
  { name: "MongoDB", level: 78, category: "backend", icon: <Database className="h-8 w-8" /> },
  { name: "PostgreSQL", level: 75, category: "backend", icon: <Database className="h-8 w-8" /> },
  { name: "GraphQL", level: 70, category: "backend", icon: <Brackets className="h-8 w-8" /> },
  { name: "REST API", level: 88, category: "backend", icon: <Globe className="h-8 w-8" /> },

  // Tools & Others
  { name: "Git", level: 90, category: "tools", icon: <GitBranch className="h-8 w-8" /> },
  { name: "Docker", level: 75, category: "tools", icon: <Box className="h-8 w-8" /> },
  { name: "AWS", level: 65, category: "tools", icon: <Server className="h-8 w-8" /> },
  { name: "Jest", level: 80, category: "tools", icon: <Terminal className="h-8 w-8" /> },
  { name: "Figma", level: 70, category: "tools", icon: <Figma className="h-8 w-8" /> },

  // Languages
  { name: "JavaScript", level: 90, category: "languages", icon: <FileJson className="h-8 w-8" /> },
  { name: "TypeScript", level: 85, category: "languages", icon: <Braces className="h-8 w-8" /> },
  { name: "Python", level: 75, category: "languages", icon: <Terminal className="h-8 w-8" /> },
  { name: "Java", level: 65, category: "languages", icon: <Cpu className="h-8 w-8" /> },
  { name: "C++", level: 60, category: "languages", icon: <Terminal className="h-8 w-8" /> },

  // Frameworks & Libraries
  { name: "React", level: 90, category: "frameworks", icon: <Layers className="h-8 w-8" /> },
  { name: "Next.js", level: 88, category: "frameworks", icon: <LayoutGrid className="h-8 w-8" /> },
  { name: "Express", level: 82, category: "frameworks", icon: <Box className="h-8 w-8" /> },
  { name: "Redux", level: 80, category: "frameworks", icon: <Workflow className="h-8 w-8" /> },
  { name: "Tailwind CSS", level: 92, category: "frameworks", icon: <Palette className="h-8 w-8" /> },
  { name: "Material UI", level: 85, category: "frameworks", icon: <LayoutGrid className="h-8 w-8" /> },
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
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
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

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredSkills.map((skill, index) => (
          <SkillCard key={`${skill.category}-${skill.name}`} skill={skill} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  // Calculate color based on skill level
  const getColor = (level: number) => {
    if (level >= 90) return "from-emerald-500 to-green-500"
    if (level >= 80) return "from-green-500 to-teal-500"
    if (level >= 70) return "from-teal-500 to-cyan-500"
    if (level >= 60) return "from-blue-500 to-indigo-500"
    return "from-indigo-500 to-purple-500"
  }

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full">
        {/* Skill Icon */}
        <motion.div
          className={`w-16 h-16 rounded-full bg-gradient-to-br ${getColor(skill.level)} p-4 mb-4 text-white flex items-center justify-center`}
          whileHover={{
            rotate: 360,
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
        >
          {skill.icon}
        </motion.div>

        {/* Skill Name */}
        <h3 className="font-bold text-gray-900 mb-2">{skill.name}</h3>

        {/* Skill Level Indicator */}
        {/* <div className="mt-auto pt-2 w-full">
          <div className="flex items-center justify-between mb-1">
            <Gauge className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">{skill.level}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${getColor(skill.level)}`}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
            />
          </div>
        </div> */}
      </div>
    </motion.div>
  )
}
