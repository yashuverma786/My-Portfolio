"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { ContactForm } from "./contact-form"

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full glass-effect border-b border-silver-400/30 bg-black/40 backdrop-blur-md">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-white font-bold drop-shadow-lg">Yashu</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-white transition-all duration-300 hover:text-silver-300 hover:scale-105 relative group drop-shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-silver-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="text-sm font-semibold text-white transition-all duration-300 hover:text-silver-300 hover:scale-105 relative group drop-shadow-md"
              >
                Contact Me
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-silver-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Button>
            </DialogTrigger>
            <ContactForm />
          </Dialog>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button
            asChild
            className="bg-gradient-to-r from-red-600 to-crimson-600 hover:from-red-700 hover:to-crimson-700 text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/20"
          >
            <a
              href="https://drive.google.com/file/d/1vPzsvoEdnsEM9-ZFRPct1W9uWplxeUac/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              View Resume
            </a>
          </Button>
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden glass-effect border-silver-400/50 bg-transparent"
            >
              <MenuIcon className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gradient-to-b from-red-900 to-red-800 border-silver-400/30">
            <div className="flex flex-col gap-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-white hover:text-silver-300 transition-colors"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-lg font-semibold justify-start text-white hover:text-silver-300"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Contact Me
                  </Button>
                </DialogTrigger>
                <ContactForm />
              </Dialog>
              <Button
                asChild
                className="bg-gradient-to-r from-red-600 to-crimson-600 hover:from-red-700 hover:to-crimson-700 text-white font-bold"
              >
                <a
                  href="https://drive.google.com/file/d/1vPzsvoEdnsEM9-ZFRPct1W9uWplxeUac/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsSheetOpen(false)}
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Resume
                </a>
              </Button>
              <div className="flex gap-4 mt-4">
                <Link href="https://github.com/yashuverma786" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-white hover:text-silver-300">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/yash-verma-a54975257/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="text-white hover:text-silver-300">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:yashverma.u786@gmail.com">
                  <Button variant="ghost" size="icon" className="text-white hover:text-silver-300">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
