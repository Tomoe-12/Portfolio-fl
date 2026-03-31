"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ExternalLink, MapPin, Calendar, ChevronDown, ChevronUp, Shield, Zap } from "lucide-react";
import experiences from "@/data/experiences";

interface ExperienceProps {
  visibleSections: Set<string>;
  currentLanguage: string;
}

const typeIcon = (type: string) => {
  switch (type) {
    case "bootcamp":
      return <Shield className="h-4 w-4" />;
    case "hackathon":
      return <Zap className="h-4 w-4" />;
    default:
      return null;
  }
};

const typeLabel = (type: string) => {
  switch (type) {
    case "bootcamp":
      return "Bootcamp";
    case "hackathon":
      return "Hackathon";
    case "competition":
      return "Competition";
    case "work":
      return "Work";
    default:
      return type;
  }
};

const Experience: React.FC<ExperienceProps> = ({
  visibleSections,
  currentLanguage,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
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
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {currentLanguage === "en"
              ? "Competitions, bootcamps, and hackathons that have shaped my skills and perspective."
              : "ကျွန်တော့်ကျွမ်းကျင်မှုနှင့် အမြင်ကို ပုံသွင်းပေးသော ပြိုင်ပွဲများ၊ ဘွတ်ကမ်ပ်များ၊ နှင့် ဟက်ကသွန်များ။"}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover-lift transition-all duration-1000 group ${
                visibleSections.has("experience")
                  ? "animate-scale-in"
                  : "opacity-0 scale-90"
              }`}
              style={{ animationDelay: `${0.15 + index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left image strip */}
                <div className="relative w-full md:w-64 flex-shrink-0 aspect-video md:aspect-auto overflow-hidden">
                  <Image
                    src={exp.image || "/placeholder.svg"}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/60 to-transparent" />
                  {/* Type badge overlay */}
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1 text-xs font-semibold backdrop-blur-sm bg-background/80"
                    >
                      {typeIcon(exp.type)}
                      {typeLabel(exp.type)}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <CardHeader className="p-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors duration-300 text-balance">
                          {exp.title}
                        </h3>
                        <p className="text-base font-semibold text-muted-foreground mt-1">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-primary font-medium mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      {exp.link && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="hover-scale flex-shrink-0"
                        >
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${exp.organization}`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 flex flex-col gap-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    {/* Highlights - expandable */}
                    <div>
                      <button
                        onClick={() =>
                          setExpandedIndex(
                            expandedIndex === index ? null : index
                          )
                        }
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-all"
                      >
                        {expandedIndex === index ? (
                          <>
                            <ChevronUp className="h-4 w-4" />
                            {currentLanguage === "en"
                              ? "Show less"
                              : "လျှော့ပြပါ"}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4" />
                            {currentLanguage === "en"
                              ? "Show highlights"
                              : "အဓိကအချက်များ"}
                          </>
                        )}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          expandedIndex === index
                            ? "max-h-96 mt-3"
                            : "max-h-0"
                        }`}
                      >
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
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
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
