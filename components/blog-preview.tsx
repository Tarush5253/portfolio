"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    date: "April 15, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400",
    category: "Frontend",
  },
  {
    id: 2,
    title: "State Management in React: Context API vs. Redux",
    excerpt: "A comparison of different state management approaches in React applications.",
    date: "March 22, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
    category: "React",
  },
  {
    id: 3,
    title: "Getting Started with TypeScript in Next.js Projects",
    excerpt: "A beginner's guide to using TypeScript with Next.js for type-safe development.",
    date: "February 10, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
    category: "TypeScript",
  },
]

export default function BlogPreview() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold">Latest Articles</h3>
        <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1 text-sm">
          View all articles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 bg-white text-gray-700 text-xs rounded-full">{post.category}</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h4 className="font-bold text-lg mb-2">{post.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1 text-sm font-medium"
              >
                Read more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
