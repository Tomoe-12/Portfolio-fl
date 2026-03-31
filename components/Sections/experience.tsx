"use client";
import React, { useState } from "react";
import Image from "next/image";
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
        icon: <Shield className="h-4 w-4" />,
        label: "Bootcamp",
        colorClass:
          "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        dotClass: "bg-blue-500",
      };
    case "hackathon":
      return {
        icon: <Zap className="h-4 w-4" />,
        label: "Hackathon",
        colorClass:
          "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        dotClass: "bg-amber-500",
      };
    case "competition":
      return {
        icon: <Trophy className="h-4 w-4" />,
        label: "Competition",
        colorClass:
          "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        dotClass: "bg-emerald-500",
      };
    case "work":
    default:
      return {
        icon: <Briefcase className="h-4 w-4" />,
        label: type === "work" ? "Work" : type,
        colorClass: "bg-primary/10 text-primary border-primary/20",
        dotClass: "bg-primary",
      };
  }
};

const Experience: React.FC<ExperienceProps> = ({
  visibleSections,
  currentLanguage,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visibleSections.has("experience")
              ? "animate-fade-in-up"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {currentLanguage === "en" ? "Experience" : "အတွေ့အကြုံများ"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {currentLanguage === "en"
              ? "Bootcamps, hackathons, and competitions that have sharpened my skills and broadened my perspective."
              : "ကျွန်တော့်ကျွမ်းကျင်မှုနှင့် အမြင်ကို ပုံသွင်းပေးသော ဘွတ်ကမ်ပ်များ၊ ဟက်ကသွန်များ နှင့် ပြိုင်ပွဲများ။"}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="flex flex-col gap-14">
            {experiences.map((exp, index) => {
              const config = typeConfig(exp.type);
              const isEven = index % 2 === 0;
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    visibleSections.has("experience")
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: `${0.15 + index * 0.25}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 md:left-1/2 top-8 z-10 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`h-4 w-4 rounded-full border-2 border-background ${config.dotClass} shadow-sm`}
                    />
                  </div>

                  {/* Card — alternates sides on md+ */}
                  <div
                    className={`pl-14 md:pl-0 md:w-[calc(50%-2.5rem)] ${
                      isEven
                        ? "md:mr-auto"
                        : "md:ml-auto"
                    }`}
                  >
                    <div className="group rounded-2xl border border-border bg-card overflow-hidden hover-lift transition-all duration-300 shadow-sm hover:shadow-md">
                      {/* Image */}
                      <div className="relative w-full h-44 overflow-hidden">
                        <Image
                          src={exp.image || "/placeholder.svg"}
                          alt={exp.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent" />

                        {/* Type badge */}
                        <div className="absolute top-3 left-3">
                          <Badge
                            variant="outline"
                            className={`flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm ${config.colorClass}`}
                          >
                            {config.icon}
                            {config.label}
                          </Badge>
                        </div>

                        {/* External link */}
                        {exp.link && (
                          <div className="absolute top-3 right-3">
                            <Button
                              variant="secondary"
                              size="icon"
                              asChild
                              className="h-8 w-8 rounded-full backdrop-blur-sm hover-scale"
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
                          </div>
                        )}
                      </div>

                      {/* Body */}
                      <div className="p-6 flex flex-col gap-4">
                        {/* Title block */}
                        <div>
                          <h3 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors duration-300 text-balance mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-sm font-semibold text-muted-foreground">
                            {exp.organization}
                          </p>
                          <p className="text-sm text-primary font-medium mt-0.5">
                            {exp.role}
                          </p>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
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
                            className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all"
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
                                  : "အဓိကအချက်များ"}
                              </>
                            )}
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-500 ${
                              isExpanded ? "max-h-96 mt-3" : "max-h-0"
                            }`}
                          >
                            <ul className="space-y-2">
                              {exp.highlights.map((highlight, hIndex) => (
                                <li
                                  key={hIndex}
                                  className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                                >
                                  <span
                                    className={`mt-1.5 h-1.5 w-1.5 rounded-full ${config.dotClass} flex-shrink-0`}
                                  />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs hover-scale transition-all duration-300 rounded-full"
                              style={{
                                transitionDelay: `${tagIndex * 0.04}s`,
                              }}
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
      </div>
    </section>
  );
};

export default Experience;
