"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"

// Experience data
const experiences = [
  {
    id: 1,
    role: "Founder & Lead Developer",
    company: "FreewayStudy.tech",
    period: "Jan 2022 - Present",
    location: "Remote",
    description:
      "Founded and developed an educational technology platform focused on providing accessible learning resources for computer science students. Led the development of the platform from concept to launch.",
    achievements: [
      "Designed and implemented a full-stack application using Next.js, TypeScript, and MongoDB",
      "Grew user base to over 5,000 active monthly users within the first year",
      "Implemented a scalable content management system for educational resources",
      "Optimized site performance resulting in 40% faster page load times",
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "AWS", "Tailwind CSS"],
    links: [
      { label: "Certificate", url: "#" },
      { label: "Offer Letter", url: "#" },
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "TechInnovate Solutions",
    period: "May 2021 - Dec 2021",
    location: "New York, NY (Remote)",
    description:
      "Worked as a full-stack developer intern on a team building enterprise software solutions. Contributed to both frontend and backend development of the company's flagship product.",
    achievements: [
      "Developed and maintained RESTful APIs using Node.js and Express",
      "Implemented responsive UI components using React and Material UI",
      "Participated in code reviews and agile development processes",
      "Created automated test suites that improved code coverage by 25%",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Material UI"],
    links: [
      { label: "Certificate", url: "#" },
      { label: "Offer Letter", url: "#" },
    ],
  },
  {
    id: 3,
    role: "Frontend Development Intern",
    company: "WebCraft Studios",
    period: "Jun 2020 - Aug 2020",
    location: "Remote",
    description:
      "Completed a summer internship focused on frontend development. Worked on client websites and internal tools.",
    achievements: [
      "Designed and implemented responsive web pages for client projects",
      "Collaborated with designers to translate mockups into functional interfaces",
      "Optimized website performance and accessibility",
      "Participated in daily stand-up meetings and sprint planning",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    links: [{ label: "Certificate", url: "#" }],
  },
]

export default function Experience() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gray-200 transform md:translate-x-0 translate-x-4"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-white border-2 border-gray-200 transform md:translate-x-[-50%] translate-x-[-50%] z-10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt={experience.company}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{experience.company}</h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin size={14} className="mr-1" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{experience.description}</p>

                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {experience.links.length > 0 && (
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex flex-wrap gap-3">
                          {experience.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors text-sm"
                            >
                              <ExternalLink size={14} />
                              <span>{link.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
