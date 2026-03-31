'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowRight, ExternalLink, Github, MapPin, Calendar, Shield, Zap, Award } from 'lucide-react'
import { Badge } from '../ui/badge'
import projects from '@/data/projects'
import experiences from '@/data/experiences'

type ProjectsProps = {
  visibleSections: Set<string>;
  currentLanguage: string;
};

const Projects: React.FC<ProjectsProps> = ({
    visibleSections,
    currentLanguage,
}) => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visibleSections.has("projects")
              ? "animate-fade-in-up"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {currentLanguage === "en"
              ? "Featured Projects"
              : "အဓိက ပရောဂျက်များ"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {currentLanguage === "en"
              ? "Here are some of my recent projects that showcase my skills and experience."
              : "ကျွန်တော့်ရဲ့ ကျွမ်းကျင်မှုနှင့် အတွေ့အကြုံများကို ပြသသော မကြာသေးမီက ပရောဂျက်များဖြစ်ပါသည်။"}
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover-lift transition-all duration-1000 group ${
                visibleSections.has("projects")
                  ? "animate-scale-in"
                  : "opacity-0 scale-90"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
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
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
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

        {/* See All Projects Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            visibleSections.has("projects")
              ? "animate-fade-in-up"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-muted-foreground mb-6 text-lg">
            {currentLanguage === "en"
              ? "Want to see more of my work?"
              : "ကျွန်တော့်အလုပ်များကို ပိုမိုကြည့်ရှုလိုပါသလား?"}
          </p>
          <Button variant="outline" size="lg" className="hover-lift rounded-full" asChild>
            <Link href="/projects">
              <ArrowRight className="mr-2 h-5 w-5" />
              {currentLanguage === "en"
                ? "See All Projects"
                : "ပရောဂျက်အားလုံးကြည့်ရန်"}
            </Link>
          </Button>
        </div>

        {/* Divider */}
        <div
          className={`mt-24 mb-20 transition-all duration-1000 delay-700 ${
            visibleSections.has("projects")
              ? "animate-fade-in-up"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <h3 className="text-2xl md:text-3xl font-bold text-center text-balance">
              {currentLanguage === "en" ? "Achievements & Events" : "အောင်မြင်မှုများ"}
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            {currentLanguage === "en"
              ? "Bootcamps, hackathons, and competitions that have sharpened my skills."
              : "ကျွန်တော့်ကျွမ်းကျင်မှုကို ပုံသွင်းပေးသော ဘွတ်ကမ်ပ်များနှင့် ဟက်ကသွန်များ"}
          </p>
        </div>

        {/* Experience / Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => {
            const isBootcamp = exp.type === "bootcamp";
            return (
              <div
                key={index}
                className={`group rounded-2xl border border-border bg-card overflow-hidden hover-lift transition-all duration-1000 shadow-sm hover:shadow-md ${
                  visibleSections.has("projects")
                    ? "animate-scale-in"
                    : "opacity-0 scale-90"
                }`}
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
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
                      className={`flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm ${
                        isBootcamp
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                          : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                      }`}
                    >
                      {isBootcamp
                        ? <Shield className="h-3.5 w-3.5" />
                        : <Zap className="h-3.5 w-3.5" />
                      }
                      {isBootcamp ? "Bootcamp" : "Hackathon"}
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

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
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

                  {/* Certificate */}
                  {exp.certificate && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-fit rounded-full mt-1 hover-scale"
                    >
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Award className="h-3.5 w-3.5 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
