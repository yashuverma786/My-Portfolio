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
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl md:text-2xl font-bold text-white">
          Yashu
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:text-white">
                Contact Me
              </Button>
            </DialogTrigger>
            <ContactForm />
          </Dialog>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold">
            <a
              href="https://drive.google.com/file/d/15n22j-c3UVXGvE3M1ml4GQHQMesHianf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Resume
            </a>
          </Button>
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden border-gray-700 bg-transparent">
              <MenuIcon className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 border-gray-800">
            <div className="flex flex-col gap-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-white"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="justify-start text-lg font-medium text-gray-300 hover:text-white"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Contact Me
                  </Button>
                </DialogTrigger>
                <ContactForm />
              </Dialog>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold">
                <a
                  href="https://drive.google.com/file/d/1ej7efsND_O3zeyc1VWQ7Tgh38iAfR6VT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Resume
                </a>
              </Button>
              <div className="flex gap-4 mt-4 pt-4 border-t border-gray-700">
                <Link href="https://github.com/yashuverma786" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/yash-verma-a54975257/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:yashverma.u786@gmail.com">
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
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
