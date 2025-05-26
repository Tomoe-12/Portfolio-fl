import React from "react";
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
}: NavProps) => {
  const scrollToSection = (sectionId: string) => {
    if (!mounted) return;

    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        scrollY > 100 ? "animate-slide-down" : "animate-fade-in-down"
      }`}
    >
      <div className="floating-nav rounded-full px-4 sm:px-6 py-3 max-w-fit mx-auto">
        <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6">
          {/* Logo */}
          <div className="text-lg sm:text-xl font-bold whitespace-nowrap flex-shrink-0">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-6">
            {["home", "about", "projects", "certificates", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-2 lg:px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 capitalize whitespace-nowrap flex-shrink-0 ${
                    activeSection === item
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full nav-indicator"></div>
                  )}
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
              <span className="text-sm sm:text-lg animate-wiggle">
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
              className="md:hidden hover-scale transition-all duration-300 rounded-full h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
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
          className={`md:hidden overflow-hidden transition-all duration-300 ${
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
                    activeSection === item ? "text-primary bg-primary/10" : ""
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
  );
};

export default Nav;
