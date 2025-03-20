"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  live?: string
  image: string
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "STL_C",
      description:
        "C implementation of STL structures from C++, providing efficient data structures and algorithms for C developers.",
      technologies: ["C", "Data Structures", "Algorithms"],
      github: "https://github.com/Vallabhkulkarni/STL_C",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Userland Threading Library",
      description:
        "Python-based threading library supporting One-One and Many-One models for efficient concurrent programming.",
      technologies: ["Python", "Threading", "Concurrency"],
      github: "#",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "HTTP Server",
      description:
        "C-based HTTP/1.1 server supporting GET, POST, PUT, DELETE, and HEAD methods with robust error handling.",
      technologies: ["C", "Networking", "HTTP Protocol"],
      github: "#",
      image: "/images/project3.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work and personal projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="project-card"
              onMouseEnter={() => {
                setHoveredProject(project.id)
              }}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`project-card-inner ${hoveredProject === project.id ? "transform" : ""}`}>
                <Card className="h-full overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || `/placeholder.svg?height=200&width=400`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    {/* Fix: Move the technologies outside of CardDescription */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        window.open(project.github, "_blank")
                      }}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    {project.live && (
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => {
                          window.open(project.live, "_blank")
                        }}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              window.open("https://github.com/Vallabhkulkarni", "_blank")
            }}
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
          <div
            className="mt-4 text-primary font-medium cursor-help easter-egg"
            onClick={() => {
              alert("Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!")
            }}
          >
            Discover a hidden joke
          </div>
        </motion.div>
      </div>
    </section>
  )
}

