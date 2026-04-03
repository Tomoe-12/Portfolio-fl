"use client";
import React, { useState } from "react";
import ImageWithSkeleton from "../ui/image-with-skeleton";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  ExternalLink,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Shield,
  Zap,
  Trophy,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import experiences from "@/data/experiences";

interface ExperienceProps {
  visibleSections: Set<string>;
  currentLanguage: string;
}

const typeConfig = (type: string) => {
  switch (type) {
    case "bootcamp":
      return {
        icon: <Shield className="h-3.5 w-3.5" />,
        label: "Bootcamp",
        colorClass:
          "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        accentClass: "border-blue-500",
        dotClass: "bg-blue-500",
        glowClass: "shadow-blue-500/10",
      };
    case "hackathon":
      return {
        icon: <Zap className="h-3.5 w-3.5" />,
        label: "Hackathon",
        colorClass:
          "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        accentClass: "border-amber-500",
        dotClass: "bg-amber-500",
        glowClass: "shadow-amber-500/10",
      };
    case "competition":
      return {
        icon: <Trophy className="h-3.5 w-3.5" />,
        label: "Competition",
        colorClass:
          "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        accentClass: "border-emerald-500",
        dotClass: "bg-emerald-500",
        glowClass: "shadow-emerald-500/10",
      };
    case "work":
    default:
      return {
        icon: <Briefcase className="h-3.5 w-3.5" />,
        label: type === "work" ? "Work" : type,
        colorClass: "bg-primary/10 text-primary border-primary/20",
        accentClass: "border-primary",
        dotClass: "bg-primary",
        glowClass: "shadow-primary/10",
      };
  }
};

const Experience: React.FC<ExperienceProps> = ({
  visibleSections,
  currentLanguage,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const getImageIndex = (expIndex: number) =>
    activeImageIndex[expIndex] ?? 0;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visibleSections.has("experience")
              ? "animate-fade-in-up"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 border border-border rounded-full px-4 py-1.5">
            {currentLanguage === "en" ? "Achievements" : "အောင်မြင်မှုများ"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {currentLanguage === "en" ? "Experience" : "အတွေ့အကြုံများ"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {currentLanguage === "en"
              ? "Bootcamps, hackathons, and programs that have sharpened my skills and broadened my perspective."
              : "ကျွန်တော့်ကျွမ်းကျင်မှုနှင့် အမြင်ကို ပုံသွင်းပေးသော ဘွတ်ကမ်ပ်များ၊ ဟက်ကသွန်များ နှင့် ပြိုင်ပွဲများ။"}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => {
            const config = typeConfig(exp.type);
            const isExpanded = expandedIndex === index;
            const currentImageIdx = getImageIndex(index);
            const images = exp.coverImages ?? (exp.image ? [exp.image] : []);

            return (
              <div
                key={index}
                className={`group transition-all duration-1000 ${
                  visibleSections.has("experience")
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${0.15 + index * 0.2}s` }}
              >
                <div
                  className={`rounded-2xl border bg-card overflow-hidden transition-shadow duration-300 hover:shadow-xl ${config.glowClass} border-l-4 ${config.accentClass}`}
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Left: Image Panel */}
                    <div className="md:col-span-2 relative overflow-hidden bg-muted min-h-56 md:min-h-full">
                      {images.length > 0 && (
                        <>
                          <ImageWithSkeleton
                            src={images[currentImageIdx] || "/placeholder.svg"}
                            alt={exp.title}
                            fill
                            loading="lazy"
                            className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden md:block" />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent md:hidden" />
                        </>
                      )}

                      {/* Type badge over image */}
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="outline"
                          className={`flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm ${config.colorClass}`}
                        >
                          {config.icon}
                          {config.label}
                        </Badge>
                      </div>

                      {/* Image switcher dots */}
                      {images.length > 1 && (
                        <div className="absolute bottom-4 left-4 flex gap-1.5">
                          {images.map((_, imgIdx) => (
                            <button
                              key={imgIdx}
                              aria-label={`View image ${imgIdx + 1}`}
                              onClick={() =>
                                setActiveImageIndex((prev) => ({
                                  ...prev,
                                  [index]: imgIdx,
                                }))
                              }
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                imgIdx === currentImageIdx
                                  ? `w-5 ${config.dotClass}`
                                  : "w-1.5 bg-white/50 hover:bg-white/80"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right: Content Panel */}
                    <div className="md:col-span-3 p-6 lg:p-8 flex flex-col gap-5">
                      {/* Title block */}
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <h3 className="text-xl font-bold leading-snug text-balance group-hover:text-primary transition-colors duration-300 flex-1">
                            {exp.title}
                          </h3>
                          {exp.link && (
                            <Button
                              variant="ghost"
                              size="icon"
                              asChild
                              className="h-8 w-8 rounded-full flex-shrink-0 mt-0.5 hover-scale"
                            >
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${exp.organization}`}
                              >
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            </Button>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-muted-foreground">
                          {exp.organization}
                        </p>
                        <p className={`text-sm font-semibold mt-0.5 ${
                          exp.type === "bootcamp"
                            ? "text-blue-600 dark:text-blue-400"
                            : exp.type === "hackathon"
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-primary"
                        }`}>
                          {exp.role}
                        </p>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                          {exp.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Expandable highlights */}
                      <div>
                        <button
                          onClick={() =>
                            setExpandedIndex(isExpanded ? null : index)
                          }
                          className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline underline-offset-4 transition-all"
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="h-3.5 w-3.5" />
                              {currentLanguage === "en"
                                ? "Show less"
                                : "လျှော့ပြပါ"}
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-3.5 w-3.5" />
                              {currentLanguage === "en"
                                ? "Show highlights"
                                : "အဓိကအချက်များ ကြည့်ရန်"}
                            </>
                          )}
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            isExpanded ? "max-h-[500px] mt-4" : "max-h-0"
                          }`}
                        >
                          <ul className="space-y-2.5">
                            {exp.highlights.map((highlight, hIndex) => (
                              <li
                                key={hIndex}
                                className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed"
                              >
                                <CheckCircle2
                                  className={`h-3.5 w-3.5 mt-0.5 flex-shrink-0 ${
                                    exp.type === "bootcamp"
                                      ? "text-blue-500"
                                      : exp.type === "hackathon"
                                      ? "text-amber-500"
                                      : "text-primary"
                                  }`}
                                />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs hover-scale transition-all duration-300 rounded-full"
                            style={{ transitionDelay: `${tagIndex * 0.04}s` }}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
