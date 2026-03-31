"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import projects from "@/data/projects";

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <div className="mb-10">
          <Button variant="ghost" asChild className="rounded-full hover-lift">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete collection of my projects — from web apps and tools to
            security utilities and hackathon builds.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift transition-all duration-500 group animate-scale-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
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
                      className="text-xs rounded-full hover-scale transition-all duration-300"
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
      </div>

      <style jsx global>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1);   }
        }
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
          opacity: 0;
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .hover-scale {
          transition: transform 0.2s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
      `}</style>
    </main>
  );
}
