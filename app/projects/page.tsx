"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Code, Layout, Server, Cpu } from "lucide-react"

// Project categories
const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "dsa", label: "DSA Solutions" },
  { id: "games", label: "JS Games" },
]

// Project data
const projects = [
  {
    id: 1,
    title: "WanderLust",
    description:
      "A full-featured platform that replicates the core functionalities of Airbnb. It allows users to search for and manage rental properties.",
    image: "/project/wanderlust.png?height=300&width=500",
    category: "fullstack",
    technologies: ["EJS", "Maptiler", "Bootstrap", "MongoDB", "Express.js","Node.js","Passport.js"],
    github: "https://github.com/tarush5253/major-project",
    demo: "https://wanderlust-5lvq.onrender.com/listings",
  },
  {
    id: 2,
    title: "Attendance Management System",
    description: "A collaborative Attendance management application with real-time updates and team workspaces.",
    image: "/project/AMS.png?height=300&width=500",
    category: "fullstack",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "MUI", "MongoDB"],
    github: "https://github.com",
    demo: "https://ams-frontend-gk3u.onrender.com/",
  },
  {
    id: 3,
    title: "Music-Player",
    description: "Build a fully responsive spotify Music Player which lets you listen songs for free. lets you controls the music.",
    image: "/project/spotify.png?height=300&width=500",
    category: "frontend",
    technologies: ["HTML","CSS","JavaScript",],
    github: "https://github.com/Tarush5253/spotify",
    demo: "https://listenwithlove.netlify.app/",
  },
  {
    id: 4,
    title: "ChatBOT",
    description:
      "an AI-powered chatbot application that replicates the core functionality and experience of ChatGPT.",
    image: "/project/chatgpt.png?height=300&width=500",
    category: "frontend",
    technologies: ["React", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/Tarush5253/ChatBOT",
    demo: "https://chat-with-chatbot.vercel.app/",
  },
  {
    id: 5,
    title: "Linked List Implementation",
    description:
      "A comprehensive implementation of linked list data structure with various operations and optimizations.",
    image: "/placeholder.svg?height=300&width=500",
    category: "dsa",
    technologies: ["JavaScript", "Data Structures"],
    github: "https://github.com",
  },
  {
    id: 6,
    title: "Amazon Clone",
    description:
      "A Amazon Clone Web Page is a beginner-friendly project that marks the first step toward web development.",
    image: "/project/amazon.png?height=300&width=500",
    category: "frontend",
    technologies: ["HTML5", "CSS3", ],
    github: "https://github.com/Tarush5253/amazonClone",
    demo: "https://tarush5253.github.io/amazonClone/",
  },
  {
    id: 7,
    title: "Sorting Algorithm Visualizer",
    description: "A visual representation of various sorting algorithms to help understand their working principles.",
    image: "/placeholder.svg?height=300&width=500",
    category: "dsa",
    technologies: ["JavaScript", "HTML Canvas", "Algorithms"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 8,
    title: "dinosaur game",
    description: "It provides users with a fun and simple experience of guiding a pixelated dinosaur to avoid obstacles as it runs endlessly across the desert.",
    image: "/project/google-game.png?height=300&width=500",
    category: "games",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Tarush5253/google-game",
    demo: "https://tarush5253.github.io/google-game/",
  },
  {
    id: 9,
    title: "Simon Says Game",
    description: "This Game is a fun and challenging memory game that tests your ability to recall a sequence of colors and repeat them.",
    image: "/project/simon-says.png?height=300&width=500",
    category: "games",
    technologies: ["JavaScript", "HTML Canvas","CSS"],
    github: "https://github.com/Tarush5253/siman-says-game",
    demo: "https://tarush5253.github.io/siman-says-game/",
  },
  
  {
    id: 10,
    title: "Blogify",
    description: "A modern blog application, designed to deliver a beautiful reading/writing experience.",
    image: "/project/blogify.jpeg?height=300&width=500",
    category: "fullstack",
    technologies: ["React", "TinyMCE", "AppWrite", "Tailwind CSS"],
    github: "https://github.com/tarush5253/AppWrite_blogify",
    demo: "https://app-write-blogify.vercel.app/",
  },
  {
    id: 11,
    title: "Tic Tac Toe",
    description: "This Game is a classic 2-player game that lets players take turns marking the spaces in a 3x3 grid with either an X or an O.",
    image: "/project/tic-toc-toe.png?height=300&width=500",
    category: "games",
    technologies: ["JavaScript", "HTML","CSS"],
    github: "https://github.com/Tarush5253/PRODIGY_WD_02",
    demo: "https://tarush5253.github.io/PRODIGY_WD_02/",
  },
  {
    id: 12,
    title: "Weather App",
    description: "The Weather App is a dynamic and interactive application that provides real-time weather information for any location.",
    image: "/project/weather.png?height=300&width=500",
    category: "games",
    technologies: ["JavaScript", "HTML","CSS" , "weather Api"],
    github: "https://github.com/Tarush5253/PRODIGY_WD_01",
    demo: "https://tarush5253.github.io/PRODIGY_WD_01/",
  },
  {
    id: 13,
    title: "Stop Watch",
    description: "The Stopwatch App is a simple yet functional web application that allows users to start, stop, and reset a timer with ease.",
    image: "/project/stop-watch.png?height=300&width=500",
    category: "games",
    technologies: ["JavaScript", "HTML","CSS" , "weather Api"],
    github: "https://github.com/Tarush5253/PRODIGY_WD_01",
    demo: "https://tarush5253.github.io/PRODIGY_WD_01/",
  },
  {
    id: 14,
    title: "Currency Converter",
    description: "This is a simple and efficient web application that allows users to convert amounts between different currencies.",
    image: "/project/currency-convertor.png?height=300&width=500",
    category: "games",
    technologies: ["React", "Tailwind CSS", "Currency Api"],
    github: "https://github.com/Tarush5253/currency-convertor",
    demo: "https://currency-convertor-delta-sable.vercel.app/",
  },
  {
    id: 15,
    title: "TODO APP",
    description: "The TODO App is a simple task management tool that allows users to add, edit, delete, and mark tasks as complete.",
    image: "/project/todo.png?height=300&width=500",
    category: "games",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tarush5253/todo-app",
    demo: "https://tarush5253.github.io/todo-app/",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my work, ranging from full-stack applications to frontend designs and coding challenges.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                  activeCategory === category.id
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Categories Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Code size={24} className="text-gray-700" />
            </div>
            <h3 className="font-bold mb-2">Frontend Projects</h3>
            <p className="text-gray-600 text-sm">Interactive and responsive user interfaces</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Server size={24} className="text-gray-700" />
            </div>
            <h3 className="font-bold mb-2">Backend Projects</h3>
            <p className="text-gray-600 text-sm">Robust APIs and server-side applications</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Layout size={24} className="text-gray-700" />
            </div>
            <h3 className="font-bold mb-2">Full Stack Apps</h3>
            <p className="text-gray-600 text-sm">Complete solutions from frontend to backend</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Cpu size={24} className="text-gray-700" />
            </div>
            <h3 className="font-bold mb-2">DSA & Games</h3>
            <p className="text-gray-600 text-sm">Algorithms and interactive games</p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
