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
  Star,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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

  const skills = ["React", "Next.js", "Node.js", "PHP", "Laravel", "WordPress", "MongoDB", "JavaScript", "TypeScript"]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Animated Elements */}
      <div className="hidden md:block fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-20 left-10 animate-float">
          <Star className="h-6 w-6 text-silver-400/30" style={{ animationDelay: "0s" }} />
        </div>
        <div className="absolute top-40 right-20 animate-float">
          <Code className="h-8 w-8 text-red-400/20" style={{ animationDelay: "2s" }} />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Database className="h-7 w-7 text-silver-300/25" style={{ animationDelay: "4s" }} />
        </div>
        <div className="absolute top-60 left-1/3 animate-float">
          <Globe className="h-5 w-5 text-red-300/30" style={{ animationDelay: "1s" }} />
        </div>
        <div className="absolute bottom-60 right-1/4 animate-float">
          <Zap className="h-6 w-6 text-silver-400/20" style={{ animationDelay: "3s" }} />
        </div>
        <div className="absolute top-80 right-40 animate-float">
          <Palette className="h-6 w-6 text-silver-300/20" style={{ animationDelay: "5s" }} />
        </div>
        <div className="absolute bottom-80 left-40 animate-float">
          <Smartphone className="h-5 w-5 text-red-400/25" style={{ animationDelay: "6s" }} />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float">
          <Award className="h-4 w-4 text-silver-400/30" style={{ animationDelay: "7s" }} />
        </div>
      </div>

      {/* Floating Talk Button */}
      <FloatingTalkButton />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-red-silver animate-gradient-shift bg-[length:400%_400%] pt-20 md:pt-24">
        <div className="floating-shapes"></div>

        {/* Parallax Background Elements */}
        <div className="absolute inset-0 bg-black/50 z-5" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>

        {/* Abstract geometric shapes with parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div
            className="absolute top-20 left-10 w-32 h-32 border-2 border-silver-400/40 rotate-45 animate-float"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-red-500/30 to-transparent rounded-full animate-float"
            style={{ animationDelay: "2s", transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 border border-silver-500/50 rounded-full animate-float"
            style={{ animationDelay: "4s", transform: `translateY(${scrollY * 0.4}px)` }}
          ></div>
        </div>

        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center relative z-20 overflow-hidden">
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 animate-slide-in-left overflow-hidden">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-silver-200 font-bold text-lg sm:text-xl animate-fade-in-up tracking-wide drop-shadow-lg">
                  Hello, I'm
                </p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight animate-scale-in break-words">
                  <span
                    className="text-white font-extrabold drop-shadow-2xl block"
                    style={{
                      textShadow:
                        "0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4), 2px 2px 4px rgba(0,0,0,0.8)",
                      animation: "textGlow 3s ease-in-out infinite alternate",
                    }}
                  >
                    Yash Verma
                  </span>
                </h1>
                <div
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold animate-fade-in-up break-words"
                  style={{ animationDelay: "0.2s" }}
                >
                  <span className="text-white font-bold drop-shadow-lg">Full Stack </span>
                  <span
                    className="text-silver-200 font-extrabold"
                    style={{
                      textShadow:
                        "0 0 20px rgba(192,192,192,0.8), 0 0 40px rgba(192,192,192,0.4), 2px 2px 4px rgba(0,0,0,0.8)",
                      animation: "silverGlow 2s ease-in-out infinite alternate",
                    }}
                  >
                    Web Developer
                  </span>
                </div>
              </div>
              <p
                className="max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold leading-relaxed animate-fade-in-up drop-shadow-lg break-words overflow-hidden"
                style={{
                  animationDelay: "0.4s",
                  textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                Crafting exceptional digital experiences with cutting-edge technologies. I build scalable web
                applications that combine beautiful design with powerful functionality.
              </p>

              {/* Skills with Cool Icons */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <h3 className="text-white font-bold mb-4 drop-shadow-lg">Technologies I Work With:</h3>
                <div className="flex justify-center lg:justify-start">
                  <img
                    src="https://skillicons.dev/icons?i=html,css,js,react,php,laravel,nodejs,mongodb,wordpress,git"
                    alt="Skills: HTML, CSS, JavaScript, React, PHP, Laravel, Node.js, MongoDB, WordPress, Git"
                    className="max-w-full h-auto animate-scale-in hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: "0.8s" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <Link href="/projects">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-crimson-600 hover:from-red-700 hover:to-crimson-700 text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group transform hover:scale-105 border-2 border-white/30"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto glass-effect border-2 border-white/70 text-white hover:bg-white/20 hover:text-silver-200 hover:border-silver-300/70 group bg-transparent transition-all duration-300 font-bold shadow-2xl transform hover:scale-105 backdrop-blur-sm"
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
          </div>

          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Main profile image */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-2xl border-4 border-silver-300 animate-glow">
                <Image
                  src="/images/yash-profile-1.png"
                  alt="Yash Verma Profile"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-4 -left-4 w-8 h-8 bg-silver-400 rounded-full animate-float shadow-lg"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -bottom-4 left-8 w-6 h-6 bg-red-500 rounded-full animate-float shadow-lg"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Custom CSS for enhanced animations */}
        <style jsx>{`
          @keyframes textGlow {
            0% { 
              text-shadow: 0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4), 2px 2px 4px rgba(0,0,0,0.8);
              transform: scale(1);
            }
            100% { 
              text-shadow: 0 0 40px rgba(255,255,255,1), 0 0 80px rgba(255,255,255,0.6), 2px 2px 4px rgba(0,0,0,0.8);
              transform: scale(1.02);
            }
          }
          
          @keyframes silverGlow {
            0% { 
              text-shadow: 0 0 20px rgba(192,192,192,0.8), 0 0 40px rgba(192,192,192,0.4), 2px 2px 4px rgba(0,0,0,0.8);
            }
            100% { 
              text-shadow: 0 0 30px rgba(192,192,192,1), 0 0 60px rgba(192,192,192,0.6), 2px 2px 4px rgba(0,0,0,0.8);
            }
          }
        `}</style>
      </section>

      {/* Stats Section with Parallax */}
      <section
        className="py-16 bg-gradient-to-r from-red-900 to-red-800 relative overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="glass-effect border-silver-400/30 hover:border-silver-400/50 transition-all duration-300 hover:scale-105 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="text-silver-300 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white drop-shadow-lg">{stat.number}</div>
                  <p className="text-silver-200 font-semibold">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Parallax */}
      <section
        className="py-24 bg-gradient-to-b from-red-800 to-red-900 relative overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              What I <span className="text-silver-200">Do</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-semibold drop-shadow-md">
              I provide comprehensive web development services to bring your digital vision to life
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-effect border-silver-400/30 hover:border-silver-400/50 transition-all duration-300 hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-silver-300 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{service.title}</h3>
                  <p className="text-white/80 font-medium">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Website Development Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-red-900 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Website Development <span className="text-silver-200">Pricing</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-semibold drop-shadow-md">
              Transparent pricing for professional web development services tailored to your needs
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
            {pricingPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`glass-effect transition-all duration-300 hover:scale-105 animate-fade-in-up relative ${
                  pkg.popular
                    ? "border-silver-300/50 hover:border-silver-300/70 ring-2 ring-silver-400/30"
                    : "border-silver-400/30 hover:border-silver-400/50"
                }`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-silver-500 to-silver-600 text-black font-bold px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-white drop-shadow-md">{pkg.type}</CardTitle>
                  <p className="text-silver-200 font-semibold">{pkg.pages}</p>
                  <div className="text-3xl font-bold text-silver-200 mt-4">{pkg.rate}</div>
                </CardHeader>
                <CardContent className="space-y-4 p-4 md:p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/80 font-medium">
                        <Check className="h-4 w-4 text-silver-300 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 font-bold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-silver-500 to-silver-600 hover:from-silver-600 hover:to-silver-700 text-black"
                        : "bg-gradient-to-r from-red-600 to-crimson-600 hover:from-red-700 hover:to-crimson-700 text-white"
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

      {/* CTA Section with Parallax */}
      <section
        className="py-24 bg-gradient-crimson animate-gradient-shift bg-[length:400%_400%] relative overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.03}px)` }}
      >
        <div className="floating-shapes"></div>
        <div className="absolute inset-0 bg-black/40 z-5"></div>
        <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Ready to Start Your <span className="text-silver-200">Next Project?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-semibold drop-shadow-md">
              Let's collaborate and create something amazing together. I'm always excited to work on new challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-silver-500 to-silver-600 hover:from-silver-600 hover:to-silver-700 text-black font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
                  >
                    Get In Touch
                  </Button>
                </DialogTrigger>
                <ContactForm />
              </Dialog>
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-effect border-2 border-white/70 text-white hover:bg-white/20 hover:border-silver-300/70 bg-transparent transition-all duration-300 transform hover:scale-105 font-bold shadow-xl"
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
