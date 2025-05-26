'use client'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '../ui/badge'
import projects from '@/data/projects'

type ProjectsProps = {
  visibleSections: Set<string>;
  currentLanguage: string;
};

const Projects: React.FC<ProjectsProps> = ({
    visibleSections,
    currentLanguage,
}) => {
  return (
     <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-4">
                      <Button
                        variant="secondary"
                        size="icon"
                        asChild
                        className="hover-scale"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        asChild
                        className="hover-scale"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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

          {/* See More Projects Button */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-500 ${
              visibleSections.has("projects")
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-muted-foreground mb-6 text-lg">
              {currentLanguage === "en"
                ? "Want to see more of my work? Check out my complete portfolio."
                : "ကျွန်တော့်အလုပ်များကို ပိုမိုကြည့်ရှုလိုပါသလား? ကျွန်တော့်ရဲ့ အပြည့်အစုံ portfolio ကို ကြည့်ရှုပါ။"}
            </p>
            <Button
              variant="outline"
              size="lg"
              className="hover-lift rounded-full"
            >
              <ExternalLink className="mr-3 h-5 w-5" />
              {currentLanguage === "en"
                ? "See More Projects"
                : "ပရောဂျက်များ ပိုမိုကြည့်ရန်"}
            </Button>
          </div>
        </div>
      </section>
  )
}

export default Projects