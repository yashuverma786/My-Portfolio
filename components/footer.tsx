import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-silver-400/30 bg-gradient-to-r from-red-900 to-red-800 py-8 md:py-12 relative">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container flex flex-col items-center justify-between gap-4 md:gap-6 px-4 md:flex-row md:px-6 relative z-10">
        <div className="text-center md:text-left">
          <p className="text-white/90 mb-1 md:mb-2 font-semibold drop-shadow-md text-sm md:text-base">
            &copy; {new Date().getFullYear()} Yash Verma. All rights reserved.
          </p>
          <p className="text-silver-200 text-xs md:text-sm font-medium">Crafted with passion and precision</p>
        </div>
        <div className="flex gap-4 md:gap-6">
          <Link
            href="https://github.com/yashuverma786"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-silver-200 transition-colors duration-300 hover:scale-110"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/yash-verma-a54975257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-silver-200 transition-colors duration-300 hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:yashverma.u786@gmail.com"
            className="text-white/80 hover:text-silver-200 transition-colors duration-300 hover:scale-110"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
