"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleScroll = () => setScrollY(window.scrollY)
    const handleResize = () => setIsMobile(window.innerWidth < 768)

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const projects = [
    {
      title: "Visaa.in - Visa Immigration",
      description: "Comprehensive visa processing platform with modern UI and expert guidance system.",
      image: "/images/visaa-screenshot.png",
      tags: ["Next.js", "Node.js", "MongoDB"],
      link: "https://visaa.in/",
    },
    {
      title: "JMT Travel - Holiday Booking",
      description: "Dynamic travel booking platform with destination search and trip planning.",
      image: "/images/jmt-travel-screenshot.png",
      tags: ["WordPress", "PHP", "WooCommerce"],
      link: "https://jmt.travel/",
    },
  ]

  const services = [
    { title: "Full Stack Development", desc: "End-to-end web applications" },
    { title: "UI/UX Design", desc: "Beautiful, responsive designs" },
    { title: "Performance Optimization", desc: "Lightning-fast websites" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4 md:px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {!isMobile && (
            <>
              <div
                className="absolute top-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
              />
              <div
                className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
              />
            </>
          )}
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-amber-400 font-light tracking-widest text-sm uppercase">Welcome</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
                Yash <span className="font-semibold text-amber-400">Verma</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light">Full Stack Web Developer</p>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg font-light">
              Crafting exceptional digital experiences with modern technologies. I build scalable web applications that
              combine beautiful design with powerful functionality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/projects">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-6 text-base group">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                asChild
                variant="outline"
                className="border-slate-700 text-white hover:bg-slate-800 px-8 py-6 text-base bg-transparent"
              >
                <a
                  href="https://drive.google.com/file/d/1vPzsvoEdnsEM9-ZFRPct1W9uWplxeUac/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/yashuverma786" target="_blank">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-amber-400">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/yash-verma-a54975257/" target="_blank">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-amber-400">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:yashverma.u786@gmail.com">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-amber-400">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl blur-2xl" />
              <Image src="/images/yash-profile-1.png" alt="Yash Verma" fill className="object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-6 border-t border-slate-800">
        <div className="container grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <p className="text-4xl font-semibold text-amber-400 mb-2">1 yr +</p>
            <p className="text-slate-400">Professional Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-semibold text-amber-400 mb-2">5+</p>
            <p className="text-slate-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-semibold text-amber-400 mb-2">100%</p>
            <p className="text-slate-400">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 border-t border-slate-800">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            What I <span className="font-semibold text-amber-400">Offer</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-slate-400">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-6 border-t border-slate-800">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            Featured <span className="font-semibold text-amber-400">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <Card
                key={i}
                className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-amber-500/50 transition-colors group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link} target="_blank">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 border-t border-slate-800">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light">
            Ready to <span className="font-semibold text-amber-400">Collaborate?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Get in touch and let's create something amazing.
          </p>
          <Link href="mailto:yashverma.u786@gmail.com">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-6 text-base">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
