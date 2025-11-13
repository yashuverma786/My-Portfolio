"use client"

import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  const projects = [
    {
      name: "Visaa.in - Visa Immigration Company",
      description:
        "A comprehensive visa processing platform with modern UI, quote forms, and expert guidance system. Built with Next.js for optimal performance and user experience.",
      technologies: ["Next.js", "Node.js", "MongoDB", "React", "Tailwind CSS"],
      imageUrl: "/images/visaa-screenshot.png",
      liveUrl: "https://visaa.in/",
      githubUrl: "#",
    },
    {
      name: "JMT Travel - Holiday Trip & Tour Website",
      description:
        "A dynamic travel booking platform featuring destination search, trip planning, and booking management. Powered by WordPress with custom functionality.",
      technologies: ["WordPress", "PHP", "Elementor", "WooCommerce", "JavaScript"],
      imageUrl: "/images/jmt-travel-screenshot.png",
      liveUrl: "https://jmt.travel/",
      githubUrl: "#",
    },
    {
      name: "Portfolio Website",
      description:
        "My personal portfolio website showcasing projects, skills, and professional experience with modern design and smooth animations.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      imageUrl: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "https://github.com/yashuverma786",
    },
    {
      name: "Travel Booking Platform",
      description:
        "A comprehensive travel booking system with custom themes, SEO optimization, and integrated payment solutions.",
      technologies: ["WordPress", "PHP", "Laravel", "MySQL", "Bootstrap"],
      imageUrl: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      name: "E-commerce Store",
      description:
        "Full-featured online store with product management, shopping cart, payment integration, and admin dashboard.",
      technologies: ["WordPress", "WooCommerce", "Elementor", "PHP", "JavaScript"],
      imageUrl: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-900 pt-20 md:pt-24 pb-12 relative overflow-hidden">
      <div className="floating-shapes"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center animate-fade-in-up mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            My <span className="text-silver-200">Projects</span>
          </h2>
          <p className="max-w-3xl text-white/90 text-lg leading-relaxed font-semibold drop-shadow-md">
            Here's a showcase of my recent work, demonstrating expertise in full-stack development, modern web
            technologies, and creating exceptional user experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
