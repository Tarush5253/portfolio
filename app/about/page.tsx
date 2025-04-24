"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function About() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">My journey, education, and what drives me as a developer.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm John, a passionate developer with a love for creating elegant solutions to complex problems.
                My journey in technology began when I was in high school, tinkering with HTML and CSS to build simple
                websites.
              </p>
              <p>
                What started as curiosity has evolved into a career where I continuously push my boundaries and embrace
                new challenges. I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and mentoring.
              </p>
              <p>
                I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work
                together or just have a chat about technology!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <Image src="/tarush_photo.jpg?height=320&width=320" alt="John Doe" fill className="object-cover" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Education Timeline</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              <TimelineItem
                year="2023 - 2026"
                title="Bachelor of Computer Applications (BCA)"
                institution="IAMR group of Institution"
                description="Specialized in full-stack development with a focus on modern web technologies. Graduated with honors and completed a capstone project building a full-stack e-commerce platform."
                icon={<GraduationCap size={24} />}
                delay={0.5}
              />

              <TimelineItem
                year="2022 - 2023"
                title="12th Grade (Higher Secondary)"
                institution="SVMIC Balram Nagar, Loni"
                description="Focused on Computer Science, Mathematics, and Physics. Developed a strong foundation in programming concepts and algorithms."
                icon={<BookOpen size={24} />}
                delay={0.7}
                right
              />

              <TimelineItem
                year="2020 - 2021"
                title="10th Grade (Secondary Education)"
                institution="SVMIC Balram Nagar, Loni"
                description="Excelled in Mathematics and Science. First introduction to programming through extracurricular activities."
                icon={<Award size={24} />}
                delay={0.9}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="bg-gray-50 rounded-xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Future Goals</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            I aim to continue growing as a developer by mastering new technologies and contributing to impactful
            projects. My goal is to specialize in building scalable applications that solve real-world problems, while
            also mentoring the next generation of developers. I'm particularly interested in exploring the intersection
            of web development and emerging technologies like AI and machine learning.
          </p>
        </motion.div>
      </div>
    </main>
  )
}

interface TimelineItemProps {
  year: string
  title: string
  institution: string
  description: string
  icon: React.ReactNode
  delay: number
  right?: boolean
}

function TimelineItem({ year, title, institution, description, icon, delay, right = false }: TimelineItemProps) {
  return (
    <motion.div
      className={`relative flex items-center ${right ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Icon */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-gray-200">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className={`w-1/2 ${right ? "pr-1 md:pr-12 text-right" : "pl-1 md:pl-12"}`}>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mb-2">{year}</span>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500 mb-2">{institution}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
