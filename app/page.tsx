"use client";

import { useState, useEffect, useRef } from "react";
import Nav from "@/components/nav";
import Hero from "@/components/Sections/hero";
import About from "@/components/Sections/about";
import Projects from "@/components/Sections/projects";
import Certificates from "@/components/Sections/certificates";
import Contact from "@/components/Sections/contact";
import Footer from "@/components/footer";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  const fullText = "Khun Thi Han";
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll tracking
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // Active section tracking
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "certificates", "contact"];
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're near the bottom of the page (within 100px)
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("contact");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // Dark mode toggle
  useEffect(() => {
    if (!mounted) return;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode, mounted]);

  // Typing animation effect
  useEffect(() => {
    if (!mounted) return;

    let timeout: NodeJS.Timeout;
    if (isTyping && typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 150);
    } else if (typedText.length === fullText.length) {
      setIsTyping(false);
    }
    return () => clearTimeout(timeout);
  }, [typedText, isTyping, mounted]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (!mounted) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [mounted]);


  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
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
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translateY(0);
          }
          40%,
          43% {
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
          0%,
          7% {
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
          40%,
          100% {
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

        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.5s;
        }
        .stagger-6 {
          animation-delay: 0.6s;
        }

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
          content: "|";
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
      <Nav
        mounted={mounted}
        activeSection={activeSection}
        setCurrentLanguage={setCurrentLanguage}
        currentLanguage={currentLanguage}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />

      {/* Hero Section */}
      <Hero currentLanguage={currentLanguage} typedText={typedText} />

      {/* About Section */}
      <About
        currentLanguage={currentLanguage}
        visibleSections={visibleSections}
      />

      {/* Projects Section */}
      <Projects
        visibleSections={visibleSections}
        currentLanguage={currentLanguage}
      />

      {/* Certificates Section */}
      <Certificates
        visibleSections={visibleSections}
        currentLanguage={currentLanguage}
      />
      {/* Contact Section */}
      <Contact
        visibleSections={visibleSections}
        currentLanguage={currentLanguage}
      />

      {/* Footer */}
      <Footer/>
    </div>
  );
}
