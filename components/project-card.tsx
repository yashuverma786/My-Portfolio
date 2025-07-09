"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  name: string
  description: string
  technologies: string[]
  imageUrl: string
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Card
      className="flex flex-col overflow-hidden glass-effect border-silver-400/30 hover:border-silver-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-white group-hover:text-silver-200 transition-colors font-bold drop-shadow-md">
          {project.name}
        </CardTitle>
        <CardDescription className="text-white/80 font-medium">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-3">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="glass-effect border-silver-400/40 text-white hover:bg-silver-400/20 transition-colors text-xs font-semibold"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-3">
        {project.githubUrl && project.githubUrl !== "#" && (
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="glass-effect border-silver-400/40 text-white hover:bg-silver-400/20 bg-transparent"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        )}
        {project.liveUrl && project.liveUrl !== "#" && (
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-red-600 to-crimson-600 hover:from-red-700 hover:to-crimson-700 text-white font-bold">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
