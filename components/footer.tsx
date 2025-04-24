import Link from "next/link"
import { GitlabIcon as GitHub, Linkedin, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              tarush<span className="text-gray-500">.dev</span>
            </Link>
            <p className="mt-2 text-gray-600 max-w-md">
              Building exceptional digital experiences with modern technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/tarush5253"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <GitHub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarushruhela/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/t_rush0r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a href="mailto:tarushruhela1234@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} tarush . All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
