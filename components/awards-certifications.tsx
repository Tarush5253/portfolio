"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import Image from "next/image"

type AwardOrCertification = {
  id: number
  title: string
  issuer: string
  date: string
  image: string
  link?: string
  type: "award" | "certification"
}

const items: AwardOrCertification[] = [
  {
    id: 1,
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "June 2023",
    image: "/placeholder.svg?height=60&width=60",
    link: "#",
    type: "certification",
  },
  {
    id: 2,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "March 2023",
    image: "/placeholder.svg?height=60&width=60",
    link: "#",
    type: "certification",
  },
  {
    id: 3,
    title: "Best Web Application Award",
    issuer: "TechConf 2022",
    date: "November 2022",
    image: "/placeholder.svg?height=60&width=60",
    type: "award",
  },
  {
    id: 4,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "August 2022",
    image: "/placeholder.svg?height=60&width=60",
    link: "#",
    type: "certification",
  },
  {
    id: 5,
    title: "Hackathon Winner - Best UI/UX",
    issuer: "CodeFest 2022",
    date: "July 2022",
    image: "/placeholder.svg?height=60&width=60",
    type: "award",
  },
]

export default function AwardsCertifications() {
  const awards = items.filter((item) => item.type === "award")
  const certifications = items.filter((item) => item.type === "certification")

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <Award size={24} className="text-gray-800" />
        <h3 className="text-xl font-bold">Awards & Certifications</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h4 className="text-lg font-bold mb-4">Awards</h4>
          <div className="space-y-4">
            {awards.map((award) => (
              <div key={award.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image src={award.image || "/placeholder.svg"} alt={award.issuer} fill className="object-contain" />
                </div>
                <div>
                  <h5 className="font-bold">{award.title}</h5>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">{award.issuer}</p>
                    <p className="text-sm text-gray-500">{award.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h4 className="text-lg font-bold mb-4">Certifications</h4>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.issuer} fill className="object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h5 className="font-bold">{cert.title}</h5>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
