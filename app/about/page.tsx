"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "ReactJS", "Elementor"],
    backend: ["PHP", "Laravel", "NodeJS", "ExpressJS", "MongoDB"],
    cms: ["WordPress", "WooCommerce", "Website Deployment"],
    seo: ["On-page SEO", "Technical SEO", "Website Speed Optimization"],
    tools: ["Git", "GitHub", "VS Code", "Hosting & Domain Setup"],
  }

  const experience = [
    {
      title: "Web Developer",
      company: "JMT Travel Services Pvt Ltd",
      duration: "April 2024 - Present (1+ Year)",
      description: [
        "Developed and maintained PHP & Laravel-based web applications.",
        "Designed and optimized company websites using WordPress & WooCommerce.",
        "Implemented SEO strategies to improve website visibility and traffic.",
        "Managed website maintenance, bug fixes, and performance optimization.",
        "Collaborated with the marketing team to enhance lead generation.",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Business Administration (BBA)",
      institution: "IGNOU",
      status: "Pursuing",
    },
    {
      degree: "12th CBSE",
      institution: "CBSE Board",
      year: "2022",
    },
    {
      degree: "Customer Care Executive (CCE) Certification",
      institution: "Mind Sharper Society",
    },
  ]

  const certifications = [
    "Completed SEO & Digital Marketing training.",
    "Hands-on experience in Laravel-based projects.",
    "Developed multiple responsive websites & landing pages.",
  ]

  const lookingFor = [
    "A full-time Web Developer role in a company with a strong tech environment.",
    "Opportunities to work on real-world projects and enhance full-stack skills.",
    "A chance to contribute to scalable and high-performing web applications.",
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-900 pt-20 md:pt-24 pb-12 relative overflow-hidden">
      <div className="floating-shapes"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                About <span className="text-silver-200">Me</span>
              </h2>
              <p className="text-white/90 text-lg leading-relaxed font-semibold drop-shadow-md">
                Passionate Full Stack Developer with expertise in Frontend and Backend Development. Seeking a
                challenging role in a dynamic company where I can leverage my skills in React, PHP, Laravel, and
                WordPress to develop scalable and optimized web applications.
              </p>
            </div>

            <Card className="glass-effect border-silver-400/30 animate-fade-in-up">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-silver-200 font-bold text-lg md:text-xl">Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:gap-6 p-4 md:p-6 pt-0">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-bold capitalize mb-3 text-white drop-shadow-md">
                      {category.replace(/([A-Z])/g, " $1")}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="glass-effect border-silver-400/40 text-white hover:bg-silver-400/20 transition-colors font-semibold shadow-lg"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-effect border-silver-400/30 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-silver-200 font-bold text-lg md:text-xl">Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6 pt-0">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-silver-400/50 pl-6">
                    <h3 className="text-xl font-bold text-white drop-shadow-md">{exp.title}</h3>
                    <p className="text-silver-200 mb-3 font-semibold">
                      {exp.company} | {exp.duration}
                    </p>
                    <ul className="list-disc list-inside text-white/80 space-y-2 font-medium">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 animate-slide-in-right">
            <div className="grid gap-6">
              {/* Profile Images */}
              <div className="relative">
                <div className="relative w-full max-w-[400px] h-[400px] mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-silver-300 animate-glow">
                  <Image
                    src="/images/yash-profile-1.png"
                    alt="Yash Verma Profile"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <Card className="glass-effect border-silver-400/30 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-silver-200 font-bold text-lg md:text-xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6 pt-0">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-silver-400/50 pl-4">
                    <h3 className="font-bold text-white drop-shadow-md">{edu.degree}</h3>
                    <p className="text-white/80 font-medium">
                      {edu.institution} {edu.year && `(${edu.year})`} {edu.status && `(${edu.status})`}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-effect border-silver-400/30 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-silver-200 font-bold text-lg md:text-xl">
                  Certifications & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <ul className="list-disc list-inside text-white/80 space-y-2 font-medium">
                  {certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-silver-400/30 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-silver-200 font-bold text-lg md:text-xl">What I'm Looking For</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <ul className="list-disc list-inside text-white/80 space-y-2 font-medium">
                  {lookingFor.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm text-silver-200 mt-6 p-4 glass-effect rounded-lg border border-silver-400/40 font-semibold">
                  <strong>Note:</strong> Open to relocate and available for remote work. Ready to learn and adapt
                  quickly!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
