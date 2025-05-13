"use client"

import React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, GitlabIcon as GitHub, Linkedin } from "lucide-react"

import SkillsVisualization from "@/components/skills-visualization"
import Testimonials from "@/components/testimonials"
import GitHubActivity from "@/components/github-activity"
import FeedbackForm from "@/components/feedback-form"
import ResumeDownload from "@/components/resume-download"
import BlogPreview from "@/components/blog-preview"
import AwardsCertifications from "@/components/awards-certifications"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0" />

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-2 text-sm font-medium text-gray-500"
              >
                Hello, I'm
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Tarush!!
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl font-medium text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TypewriterEffect texts={["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"]} />
              </motion.div>

              <motion.p
                className="text-gray-600 mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                I build exceptional digital experiences with modern technologies. Focused on creating elegant solutions
                to complex problems.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  View Projects <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  Hire Me
                </Link>
              </motion.div>

              <motion.div
                className="flex gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <a
                  href="https://github.com/tarush5253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <GitHub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tarushruhela/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/tarush_photo.jpg?height=320&width=320"
                  alt="John Doe"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I've worked with a variety of technologies and frameworks to create exceptional digital experiences.
            </p>
          </motion.div>

          <SkillsVisualization />
        </div>
      </section>

      {/* Featured Projects Section 
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=500`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project, highlighting key features and technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">React</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Next.js</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Tailwind</span>
                  </div>
                  <Link
                    href="/projects"
                    className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1 text-sm font-medium"
                  >
                    View Project <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg inline-flex items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>*/}

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Feedback from clients and colleagues I've had the pleasure to work with.
            </p>
          </motion.div>

          <Testimonials />
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Contributions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A snapshot of my coding activity and open source contributions.
            </p>
          </motion.div>

          <GitHubActivity />
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From My Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">I write about web development, design, and technology.</p>
          </motion.div>

          <BlogPreview />
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition and professional certifications I've earned throughout my career.
            </p>
          </motion.div>

          <AwardsCertifications />
        </div>
      </section>

      {/* Resume & Feedback Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-center md:text-left"
              >
                <h2 className="text-3xl font-bold mb-4">Download My Resume</h2>
                <p className="text-gray-600">
                  Get a comprehensive overview of my skills, experience, and qualifications.
                </p>
              </motion.div>

              <ResumeDownload />
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8 text-center md:text-left"
              >
                <h2 className="text-3xl font-bold mb-4">Share Your Feedback</h2>
                <p className="text-gray-600">I value your opinion! Let me know what you think about my portfolio.</p>
              </motion.div>

              <FeedbackForm />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start a Project?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              I'm currently available for freelance work and exciting opportunities. Let's build something amazing
              together!
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg inline-flex items-center gap-2 hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

// Typewriter effect component
function TypewriterEffect({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0)
  const [currentText, setCurrentText] = React.useState("")
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const text = texts[currentTextIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(text.substring(0, currentText.length + 1))

          if (currentText === text) {
            setIsDeleting(true)
            setTimeout(() => {}, 1500) // Pause at the end
          }
        } else {
          setCurrentText(text.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentTextIndex((currentTextIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts])

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
