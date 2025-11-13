"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { ContactForm } from "@/components/contact-form"
import { FloatingTalkButton } from "@/components/floating-talk-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  Globe,
  Database,
  Smartphone,
  Award,
  Users,
  Coffee,
  ExternalLink,
  Check,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full Stack Development",
      description: "End-to-end web application development with modern technologies",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful, responsive designs that engage and convert users",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Solutions",
      description: "Scalable server-side architecture and database management",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Responsive",
      description: "Optimized experiences across all devices and screen sizes",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites with superior user experience",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "SEO & Marketing",
      description: "Search engine optimization and digital marketing strategies",
    },
  ]

  const stats = [
    { icon: <Award className="h-8 w-8" />, number: "1 yr +", label: "Experience" },
    { icon: <Code className="h-8 w-8" />, number: "5+", label: "Projects Completed" },
    { icon: <Users className="h-8 w-8" />, number: "100%", label: "Client Satisfaction" },
    { icon: <Coffee className="h-8 w-8" />, number: "500+", label: "Cups of Coffee" },
  ]

  const pricingPackages = [
    {
      type: "Static Website",
      pages: "4–5 pages",
      features: ["HTML/CSS/JS", "Responsive Design", "Contact Form", "SEO Optimized"],
      rate: "₹7,000–₹10,000",
      popular: false,
    },
    {
      type: "Dynamic Website",
      pages: "Unlimited pages",
      features: ["Admin Panel", "Blog System", "Dashboard", "SEO", "Database Integration"],
      rate: "₹15,000–₹30,000",
      popular: true,
    },
    {
      type: "E-commerce Site",
      pages: "10–15 pages",
      features: ["WooCommerce/Shopify", "Payment Gateway", "Product Management", "Order Tracking"],
      rate: "₹25,000+",
      popular: false,
    },
    {
      type: "Landing Page",
      pages: "1 page",
      features: ["Animations", "Call-to-Action", "Lead Capture", "Mobile Optimized"],
      rate: "₹3,000–₹5,000",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Floating Talk Button */}
      <FloatingTalkButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 md:pb-20 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Background gradient effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center relative z-10 max-w-6xl">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="text-amber-400 font-semibold text-base md:text-lg tracking-wide">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white break-words">
                Yash Verma
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">Full Stack Web Developer</p>
            </div>

            <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge technologies. I build scalable web applications
              that combine beautiful design with powerful functionality.
            </p>

            {/* Skills Icons */}
            <div className="pt-2">
              <p className="text-white font-semibold mb-3 text-sm md:text-base">Technologies I Work With:</p>
              <img
                src="https://skillicons.dev/icons?i=html,css,js,react,php,laravel,nodejs,mongodb,wordpress,git"
                alt="Skills"
                className="max-w-full h-auto"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/projects">
                <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-base">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-2 border-gray-600 hover:border-gray-400 text-white hover:bg-gray-900 px-8 py-6 text-base bg-transparent"
              >
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
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:max-w-md">
              <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-gray-700 shadow-2xl">
                <Image src="/images/yash-profile-1.png" alt="Yash Verma" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
        <div className="container px-4 md:px-6 max-w-6xl">
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 text-center hover:border-gray-700 transition-colors"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="text-amber-400 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <p className="text-gray-400 font-medium text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-black border-t border-gray-800">
        <div className="container px-4 md:px-6 max-w-6xl">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              What I <span className="text-amber-400">Do</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I provide comprehensive web development services to bring your digital vision to life
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-amber-400 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
        <div className="container px-4 md:px-6 max-w-6xl">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Website Development <span className="text-amber-400">Pricing</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Transparent pricing for professional web development services tailored to your needs
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {pricingPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`transition-all hover:border-amber-400/50 ${
                  pkg.popular
                    ? "bg-gray-800/80 border-amber-400/50 ring-2 ring-amber-400/20"
                    : "bg-gray-900/50 border-gray-800"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-amber-500 text-black font-bold">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg md:text-xl font-bold text-white">{pkg.type}</CardTitle>
                  <p className="text-gray-400 text-sm">{pkg.pages}</p>
                  <div className="text-2xl md:text-3xl font-bold text-amber-400 mt-4">{pkg.rate}</div>
                </CardHeader>
                <CardContent className="space-y-4 p-4 md:p-6">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <Check className="h-4 w-4 text-amber-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-4 font-bold ${
                      pkg.popular
                        ? "bg-amber-500 hover:bg-amber-600 text-black"
                        : "bg-red-600 hover:bg-red-700 text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black border-t border-gray-800">
        <div className="container px-4 md:px-6 text-center relative z-10 max-w-4xl">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Ready to Start Your <span className="text-amber-400">Next Project?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Let's collaborate and create something amazing together. I'm always excited to work on new challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-base">
                    Get In Touch
                  </Button>
                </DialogTrigger>
                <ContactForm />
              </Dialog>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-600 hover:border-gray-400 text-white hover:bg-gray-900 px-8 py-6 text-base bg-transparent"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
