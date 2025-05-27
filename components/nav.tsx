"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";

type NavProps = {
  mounted: boolean;
  activeSection: string;
  setCurrentLanguage: (lang: string) => void;
  currentLanguage: string;
  setIsDarkMode: (val: boolean) => void;
  isDarkMode: boolean;
  setIsMenuOpen: (val: boolean) => void;
  isMenuOpen: boolean;
  scrollY: number;
  setActiveSection: (sectionId: string) => void;
};

const Nav = ({
  mounted,
  activeSection,
  setCurrentLanguage,
  currentLanguage,
  setIsDarkMode,
  isDarkMode,
  setIsMenuOpen,
  isMenuOpen,
  scrollY,
  setActiveSection,
}: NavProps) => {
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const navLock = useRef(false);

  // Move indicator to nav button
  const moveIndicatorTo = (sectionId: string) => {
    const button = buttonRefs.current[sectionId];
    const indicator = indicatorRef.current;

    if (button && indicator) {
      const { offsetLeft, offsetWidth } = button;
      indicator.style.transform = `translateX(${offsetLeft}px)`;
      indicator.style.width = `${offsetWidth}px`;
    }
  };

  // On activeSection change → move indicator
  useEffect(() => {
    if (mounted && !navLock.current) {
      requestAnimationFrame(() => moveIndicatorTo(activeSection));
    }
  }, [activeSection, mounted]);

  const scrollToSection = (sectionId: string) => {
    if (!mounted) return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (sectionId: string) => {
    navLock.current = true;
    moveIndicatorTo(sectionId);
    setActiveSection(sectionId);
    scrollToSection(sectionId);

    // release lock after scroll finishes (~800ms or whatever your smooth scroll time)
    setTimeout(() => {
      navLock.current = false;
    }, 800);
  };

  return (
    <header className="fixed top-0 left-0 w-full px-4 py-5 z-50">
      <div className="px-2 rounded-full transition-all duration-300 flex items-center justify-center w-auto max-w-md mx-auto  ">
        {/* bg-gray-200/80 backdrop-blur-sm shadow-sm */}
        <nav
          className={`flex items-center justify-center backdrop-blur-sm rounded-full shadow-sm ${
            scrollY > 100
              ? "bg-white/80 shadow-md backdrop-saturate-150 dark:bg-gray-900/80"
              : "bg-transparent shadow-none"
          }`}
        >
          <div
            className={`floating-nav  px-4 sm:px-6 py-3 max-w-fit mx-auto ${
              isMenuOpen ? "rounded-3xl" : "rounded-full"
            } sm:rounded-full `}
            bis-skin_checked="1"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6">
              {/* Logo */}
              <div className="sm:hidden text-base sm:text-lg font-semibold whitespace-nowrap flex-shrink-0">
                Portfolio
              </div>

              {/* Desktop Navigation */}
              <div className="hidden  sm:flex items-center gap-3 lg:gap-4 xl:gap-6 relative">
                {/* White Circle Indicator */}
                <div
                  ref={indicatorRef}
                  className="absolute bottom-0 h-9 bg-white dark:bg-neutral-700 rounded-full transition-all duration-300"
                  style={{
                    willChange: "transform, width",
                    transitionProperty: "transform, width",
                  }}
                />

                {["home", "about", "projects", "certificates", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      ref={(el) => {
                        buttonRefs.current[item] = el;
                      }}
                      onClick={() => handleNavClick(item)}
                      className={`relative px-3 py-2 text-black dark:text-white text-sm font-medium transition-all duration-300 ease-in-out hover:scale-110 capitalize whitespace-nowrap flex-shrink-0 ${
                        activeSection === item
                          ? ""
                          : "hover:text-foreground"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                {/* Language Toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    setCurrentLanguage(currentLanguage === "en" ? "my" : "en")
                  }
                  className="hover-scale transition-all duration-300 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
                >
                  <span className="text-lg sm:text-lg animate-wiggle">
                    {currentLanguage === "en" ? "🇺🇸" : "🇲🇲"}
                  </span>
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
                  className="sm:hidden hover-scale transition-all duration-300 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div
                    className={`transition-transform duration-300 ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isMenuOpen ? (
                      <X className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </div>
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`sm:hidden overflow-hidden transition-all duration-300 ${
                isMenuOpen
                  ? "max-h-64 mt-4 pt-4 border-t border-border/20"
                  : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-2">
                {["home", "about", "projects", "certificates", "contact"].map(
                  (item, index) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`text-left px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary capitalize rounded-lg hover:bg-primary/10 ${
                        activeSection === item
                          ? "text-primary bg-primary/10"
                          : ""
                      } ${isMenuOpen ? "animate-fade-in-left" : "opacity-0"}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
