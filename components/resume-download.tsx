"use client"

import { motion } from "framer-motion"
import { FileDown, FileText, Eye } from "lucide-react"

export default function ResumeDownload() {
  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <FileText className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold">My Resume</h3>
          </div>

          <p className="text-gray-600 mb-4">
            Download my resume to learn more about my experience, skills, and qualifications.
          </p>

          <div className="flex gap-3">
            <a
              href="https://drive.google.com/uc?export=download&id=1-48tzvvuUialWBjdiparICnIHmU9ozo6"
              className="flex-1 py-2 px-4 bg-gray-900 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1-48tzvvuUialWBjdiparICnIHmU9ozo6/view?usp=sharing"
              className="py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </a>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
          <span className="text-sm text-gray-500">Last updated: April 2023</span>
          <span className="text-sm text-gray-500">PDF, 2.4 MB</span>
        </div>
      </motion.div>
    </div>
  )
}
