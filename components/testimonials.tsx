"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  position: string
  company: string
  image: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechCorp Inc.",
    image: "/placeholder.svg?height=80&width=80",
    text: "Working with John was an absolute pleasure. His attention to detail and ability to translate our requirements into a beautiful, functional website exceeded our expectations. He's not just a developer, but a problem solver who brings valuable insights to the table.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "StartupBoost",
    image: "/placeholder.svg?height=80&width=80",
    text: "John's technical expertise is impressive. He helped us rebuild our entire platform, improving performance and user experience significantly. His communication was clear throughout the project, and he was always willing to go the extra mile to ensure quality.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Creative Director",
    company: "DesignHub",
    image: "/placeholder.svg?height=80&width=80",
    text: "I've worked with many developers, but John stands out for his creativity and technical skill. He transformed our design concepts into a responsive, engaging website that our clients love. His ability to suggest improvements while respecting our vision was invaluable.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="absolute top-0 left-0 -mt-8 -ml-4 text-gray-200 opacity-50">
        <Quote size={80} />
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonials[current].text}"</p>

              <div>
                <h4 className="font-bold text-gray-900">{testimonials[current].name}</h4>
                <p className="text-gray-500 text-sm">
                  {testimonials[current].position}, {testimonials[current].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2 px-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                current === index ? "bg-gray-800" : "bg-gray-300"
              }`}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
