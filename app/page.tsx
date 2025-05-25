"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, Sun, Moon, ChevronDown } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("en")
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)

  const fullText = "John Doe"
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll tracking
  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  // Active section tracking
  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "certificates", "contact"]
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're near the bottom of the page (within 100px)
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("contact")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  // Dark mode toggle
  useEffect(() => {
    if (!mounted) return

    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode, mounted])

  // Typing animation effect
  useEffect(() => {
    if (!mounted) return

    let timeout: NodeJS.Timeout
    if (isTyping && typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 150)
    } else if (typedText.length === fullText.length) {
      setIsTyping(false)
    }
    return () => clearTimeout(timeout)
  }, [typedText, isTyping, mounted])

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (!mounted) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [mounted])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
      tech: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-SAA-123456",
      image: "/placeholder.svg?height=100&width=100",
      verifyUrl: "#",
      skills: ["AWS", "Cloud Architecture", "EC2", "S3"],
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-789012",
      image: "/placeholder.svg?height=100&width=100",
      verifyUrl: "#",
      skills: ["GCP", "Kubernetes", "Cloud Functions", "BigQuery"],
    },
    {
      title: "Meta React Developer Certificate",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-RD-345678",
      image: "/placeholder.svg?height=100&width=100",
      verifyUrl: "#",
      skills: ["React", "JavaScript", "Frontend", "UI/UX"],
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-DEV-901234",
      image: "/placeholder.svg?height=100&width=100",
      verifyUrl: "#",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
    },
  ]

  const scrollToSection = (sectionId: string) => {
    if (!mounted) return

    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-10px);
          }
          70% {
            transform: translateY(-5px);
          }
          90% {
            transform: translateY(-2px);
          }
        }

        @keyframes wiggle {
          0%, 7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-15deg);
          }
          20% {
            transform: rotateZ(10deg);
          }
          25% {
            transform: rotateZ(-10deg);
          }
          30% {
            transform: rotateZ(6deg);
          }
          35% {
            transform: rotateZ(-4deg);
          }
          40%, 100% {
            transform: rotateZ(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out;
        }

        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .hover-scale {
          transition: transform 0.2s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .typing-cursor::after {
          content: '|';
          animation: pulse 1s infinite;
        }

        .floating-nav {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .dark .floating-nav {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .nav-indicator {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>

      {/* Floating Navigation */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          scrollY > 100 ? "animate-slide-down" : "animate-fade-in-down"
        }`}
      >
        <div className="floating-nav rounded-full px-4 sm:px-6 py-3 max-w-fit mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6">
            {/* Logo */}
            <div className="text-lg sm:text-xl font-bold whitespace-nowrap flex-shrink-0">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6">
              {["home", "about", "projects", "certificates", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-2 lg:px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 capitalize whitespace-nowrap flex-shrink-0 ${
                    activeSection === item ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full nav-indicator"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentLanguage(currentLanguage === "en" ? "my" : "en")}
                className="hover-scale transition-all duration-300 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
              >
                <span className="text-sm sm:text-lg animate-wiggle">{currentLanguage === "en" ? "🇺🇸" : "🇲🇲"}</span>
              </Button>

              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hover-scale transition-all duration-300 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4 sm:h-5 sm:w-5 animate-wiggle" />
                ) : (
                  <Moon className="h-4 w-4 sm:h-5 sm:w-5 animate-wiggle" />
                )}
              </Button>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover-scale transition-all duration-300 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>
                  {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-64 mt-4 pt-4 border-t border-border/20" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-2">
              {["home", "about", "projects", "certificates", "contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-left px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary capitalize rounded-lg hover:bg-primary/10 ${
                    activeSection === item ? "text-primary bg-primary/10" : ""
                  } ${isMenuOpen ? "animate-fade-in-left" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            <div className="mb-8 animate-scale-in">
              <div className="relative inline-block">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto border-4 border-primary/20 hover-scale animate-float"
                />
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-pulse-slow -z-10"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up stagger-2">
              {currentLanguage === "en" ? (
                <>
                  Hi, I'm <span className="text-primary typing-cursor">{typedText}</span>
                </>
              ) : (
                <>
                  မင်္ဂလာပါ၊ ကျွန်တော် <span className="text-primary typing-cursor">{typedText}</span> ပါ
                </>
              )}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in-up stagger-3">
              {currentLanguage === "en"
                ? "Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences."
                : "လှပပြီး အသုံးဝင်သော ဒစ်ဂျစ်တယ် အတွေ့အကြုံများ ဖန်တီးရာတွင် စိတ်အားထက်သန်သော Full Stack Developer တစ်ယောက်ဖြစ်ပါသည်။"}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-4">
              <Button size="lg" className="text-lg px-10 py-6 hover-lift rounded-full">
                <Download className="mr-3 h-6 w-6" />
                {currentLanguage === "en" ? "Download Resume" : "Resume ဒေါင်းလုဒ်လုပ်ရန်"}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 hover-lift rounded-full">
                <Mail className="mr-3 h-6 w-6" />
                {currentLanguage === "en" ? "Contact Me" : "ဆက်သွယ်ရန်"}
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
              <ChevronDown className="h-8 w-8 text-muted-foreground animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
              visibleSections.has("about") ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {currentLanguage === "en" ? "About Me" : "ကျွန်တော့်အကြောင်း"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              {currentLanguage === "en"
                ? "I'm a passionate full-stack developer with 5+ years of experience building web applications. I love turning complex problems into simple, beautiful, and intuitive solutions."
                : "ကျွန်တော်သည် ၅ နှစ်ကျော် အတွေ့အကြုံရှိသော စိတ်အားထက်သန်သည့် full-stack developer တစ်ယောက်ဖြစ်ပါသည်။ ရှုပ်ထွေးသော ပြဿနာများကို ရိုးရှင်းပြီး လှပသော ဖြေရှင်းချက်များအဖြစ် ပြောင်းလဲပေးရာတွင် နှစ်သက်ပါသည်။"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div
              className={`transition-all duration-1000 delay-200 ${
                visibleSections.has("about") ? "animate-fade-in-left" : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
                {currentLanguage === "en" ? "My Journey" : "ကျွန်တော့်ခရီးစဉ်"}
              </h3>
              <div className="space-y-6">
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  {currentLanguage === "en"
                    ? "Started my journey in computer science and fell in love with web development. I've worked with startups and established companies, helping them build scalable and user-friendly applications."
                    : "ကွန်ပျူတာသိပ္ပံပညာမှ စတင်ခဲ့ပြီး web development ကို နှစ်သက်လာခဲ့ပါသည်။ startup များနှင့် တည်ထောင်ပြီးသား ကုမ္ပဏီများနှင့် အလုပ်လုပ်ကိုင်ခဲ့ပြီး scalable နှင့် အသုံးပြုရလွယ်ကူသော application များ တည်ဆောက်ရာတွင် ကူညီခဲ့ပါသည်။"}
                </p>
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  {currentLanguage === "en"
                    ? "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities."
                    : "ကုဒ်မရေးနေချိန်တွင် နည်းပညာအသစ်များကို လေ့လာခြင်း၊ open-source project များတွင် ပါဝင်ကူညီခြင်း သို့မဟုတ် ပြင်ပလှုပ်ရှားမှုများကို ပျော်ရွှင်နေတတ်ပါသည်။"}
                </p>
              </div>

              {/* Experience Highlights */}
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-semibold text-primary">
                  {currentLanguage === "en" ? "Experience Highlights" : "အတွေ့အကြုံ အဓိကများ"}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">
                      {currentLanguage === "en" ? "Years Experience" : "နှစ် အတွေ့အကြုံ"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">
                      {currentLanguage === "en" ? "Projects Completed" : "ပရောဂျက် ပြီးစီး"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                visibleSections.has("about") ? "animate-fade-in-right" : "opacity-0 translate-x-8"
              }`}
            >
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
                {currentLanguage === "en" ? "Skills & Technologies" : "ကျွမ်းကျင်မှုများနှင့် နည်းပညာများ"}
              </h3>

              {/* All Skills */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "HTML5",
                    "CSS3",
                    "Node.js",
                    "Python",
                    "Express.js",
                    "FastAPI",
                    "REST APIs",
                    "GraphQL",
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "Redis",
                  ].map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`text-sm py-3 px-4 hover-scale transition-all duration-300 cursor-pointer hover:shadow-lg rounded-full ${
                        visibleSections.has("about") ? "animate-fade-in-up" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                    >
                      <span className="relative">
                        {skill}
                        <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </span>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Skill Level Indicators */}
              <div
                className={`mt-8 transition-all duration-1000 delay-1000 ${
                  visibleSections.has("about") ? "animate-fade-in-up" : "opacity-0 translate-y-4"
                }`}
              >
                <h4 className="text-lg font-medium mb-4 text-primary">
                  {currentLanguage === "en" ? "Proficiency Levels" : "ကျွမ်းကျင်မှုအဆင့်များ"}
                </h4>
                <div className="space-y-3">
                  {[
                    { skill: "React/Next.js", level: 95 },
                    { skill: "TypeScript/JavaScript", level: 90 },
                    { skill: "Node.js/Python", level: 85 },
                    { skill: "AWS/Cloud Services", level: 80 },
                    { skill: "Database Design", level: 85 },
                  ].map((item, index) => (
                    <div key={item.skill} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{item.skill}</span>
                        <span className="text-sm text-muted-foreground font-bold">{item.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full transition-all duration-1500 ease-out"
                          style={{
                            width: visibleSections.has("about") ? `${item.level}%` : "0%",
                            transitionDelay: `${1.2 + index * 0.2}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has("projects") ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {currentLanguage === "en" ? "Featured Projects" : "အဓိက ပရောဂျက်များ"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              {currentLanguage === "en"
                ? "Here are some of my recent projects that showcase my skills and experience."
                : "ကျွန်တော့်ရဲ့ ကျွမ်းကျင်မှုနှင့် အတွေ့အကြုံများကို ပြသသော မကြာသေးမီက ပရောဂျက်များဖြစ်ပါသည်။"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover-lift transition-all duration-1000 group ${
                  visibleSections.has("projects") ? "animate-scale-in" : "opacity-0 scale-90"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-4">
                      <Button variant="secondary" size="icon" asChild className="hover-scale">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="secondary" size="icon" asChild className="hover-scale">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs hover-scale transition-all duration-300 rounded-full"
                        style={{ transitionDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* See More Projects Button */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-500 ${
              visibleSections.has("projects") ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-muted-foreground mb-6 text-lg">
              {currentLanguage === "en"
                ? "Want to see more of my work? Check out my complete portfolio."
                : "ကျွန်တော့်အလုပ်များကို ပိုမိုကြည့်ရှုလိုပါသလား? ကျွန်တော့်ရဲ့ အပြည့်အစုံ portfolio ကို ကြည့်ရှုပါ။"}
            </p>
            <Button variant="outline" size="lg" className="hover-lift rounded-full">
              <ExternalLink className="mr-3 h-5 w-5" />
              {currentLanguage === "en" ? "See More Projects" : "ပရောဂျက်များ ပိုမိုကြည့်ရန်"}
            </Button>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has("certificates") ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {currentLanguage === "en" ? "Certifications" : "လက်မှတ်များ"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              {currentLanguage === "en"
                ? "Professional certifications that validate my expertise and commitment to continuous learning."
                : "ကျွန်တော့်ရဲ့ ကျွမ်းကျင်မှုနှင့် စဉ်ဆက်မပြတ် သင်ယူမှုအပေါ် ကတိကဝတ်ကို အတည်ပြုသော ပရော်ဖက်ရှင်နယ် လက်မှတ်များဖြစ်ပါသည်။"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover-lift transition-all duration-1000 group ${
                  visibleSections.has("certificates") ? "animate-scale-in" : "opacity-0 scale-90"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={`${cert.issuer} logo`}
                        width={100}
                        height={100}
                        className="rounded-xl border-2 border-primary/20 hover-scale transition-transform duration-300"
                      />
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse-slow -z-10"></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-3 flex items-center justify-between group-hover:text-primary transition-colors duration-300">
                        <span>{cert.title}</span>
                        <Button variant="ghost" size="icon" asChild className="hover-scale">
                          <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </CardTitle>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="font-medium text-base">{cert.issuer}</p>
                        <p>
                          {currentLanguage === "en" ? "Issued:" : "ထုတ်ပေးသည့်ခုနှစ်:"} {cert.date}
                        </p>
                        <p className="font-mono text-xs bg-muted px-2 py-1 rounded">ID: {cert.credentialId}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover-scale transition-all duration-300 rounded-full"
                        style={{ transitionDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Certifications Note */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-500 ${
              visibleSections.has("certificates") ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-muted-foreground mb-6 text-lg">
              {currentLanguage === "en"
                ? "Continuously expanding my knowledge through professional development"
                : "ပရော်ဖက်ရှင်နယ် ဖွံ့ဖြိုးတိုးတက်မှုများမှတစ်ဆင့် ကျွန်တော့်အသိပညာကို စဉ်ဆက်မပြတ် တိုးချဲ့နေပါသည်"}
            </p>
            <Button variant="outline" size="lg" className="hover-lift rounded-full">
              {currentLanguage === "en" ? "View All Certifications" : "လက်မှတ်အားလုံးကြည့်ရန်"}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${
            visibleSections.has("contact") ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {currentLanguage === "en" ? "Let's Work Together" : "အတူတကွ လုပ်ကိုင်ကြရအောင်"}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            {currentLanguage === "en"
              ? "I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can bring your ideas to life."
              : "ကျွန်တော်သည် အခွင့်အလမ်းအသစ်များနှင့် စိတ်လှုပ်ရှားဖွယ် ပရောဂျက်များကို အမြဲတမ်း စိတ်ဝင်စားပါသည်။ ဆက်သွယ်ပြီး သင့်အိုင်ဒီယာများကို အသက်ဝင်စေရန် မည်သို့လုပ်ဆောင်နိုင်မည်ကို ဆွေးနွေးကြရအောင်။"}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {[
              {
                icon: Mail,
                text: currentLanguage === "en" ? "Email Me" : "အီးမေးလ်ပို့ရန်",
                href: "mailto:john@example.com",
              },
              { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com" },
              { icon: Github, text: "GitHub", href: "https://github.com" },
            ].map((item, index) => (
              <Button
                key={item.text}
                size="lg"
                variant={index === 0 ? "default" : "outline"}
                asChild
                className={`hover-lift transition-all duration-1000 text-lg px-8 py-6 rounded-full ${
                  visibleSections.has("contact") ? "animate-fade-in-up" : "opacity-0 translate-y-4"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <a
                  href={item.href}
                  target={index > 0 ? "_blank" : undefined}
                  rel={index > 0 ? "noopener noreferrer" : undefined}
                >
                  <item.icon className="mr-3 h-6 w-6" />
                  {item.text}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/20 bg-muted/20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground animate-fade-in-up">
          <p className="text-lg">&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
