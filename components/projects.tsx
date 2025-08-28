"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Eye } from "lucide-react";

export function Projects() {
  const projects = {
    featured: [
      {
        title: "Professional Hospital Website",
        description:
          "Modern, responsive website for a small hospital owned by professional doctors, featuring appointment booking, doctor profiles, and patient information systems.",
        image: "/hospital-website-interface.png",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "React Query",
          "Formik",
        ],
        features: [
          "Doctor profile management system",
          "Online appointment booking",
          "Patient information portal",
          "Mobile-responsive design",
          "Professional medical interface",
        ],
        github: "#",
        demo: "#",
        category: "Frontend",
      },
      {
        title: "RunHotel - Hotel Management Platform",
        description:
          "Comprehensive hotel management platform developed as frontend developer, featuring booking systems, room management, and guest services.",
        image: "/hotel-management-dashboard.png",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Redux Saga",
          "Tailwind CSS",
          "React Query",
        ],
        features: [
          "Hotel booking and reservation system",
          "Room availability management",
          "Guest check-in/check-out workflow",
          "Payment integration",
          "Real-time booking updates",
        ],
        github: "#",
        demo: "#",
        category: "Frontend",
      },
      {
        title: "Tabla Tunes - Music Platform",
        description:
          "Interactive music platform focused on tabla and traditional instruments, featuring audio players, music libraries, and educational content.",
        image: "/music-platform-interface.png",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Web Audio API",
          "React Slick",
          "Tailwind CSS",
        ],
        features: [
          "Audio player with custom controls",
          "Music library management",
          "Interactive learning modules",
          "Responsive audio interface",
          "Traditional music showcase",
        ],
        github: "#",
        demo: "#",
        category: "Frontend",
      },
    ],
    showcase: [
      {
        title: "RunHotel Payload CMS",
        description:
          "Custom content management system built with Payload CMS for RunHotel platform, managing hotel content and bookings.",
        technologies: [
          "Payload CMS",
          "Node.js",
          "TypeScript",
          "MongoDB",
          "React",
        ],
        category: "Full Stack",
      },
      {
        title: "React Component Library",
        description:
          "Reusable component library with comprehensive documentation and testing for consistent UI development.",
        technologies: ["React", "TypeScript", "Storybook", "Jest", "Rollup"],
        category: "Library",
      },
      {
        title: "Multi-Carousel Implementation",
        description:
          "Advanced carousel implementations using multiple libraries, showcasing expertise in different carousel solutions.",
        technologies: [
          "React Slick",
          "React Multi Carousel",
          "Swiper.js",
          "React Image Gallery",
        ],
        category: "Frontend",
      },
      {
        title: "Internationalization System",
        description:
          "Multi-language support system with dynamic content translation and cultural adaptations.",
        technologies: ["next-i18next", "React", "i18next", "TypeScript"],
        category: "Frontend",
      },
    ],
  };

  const categories = ["All", "Full Stack", "Frontend", "Library"];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 text-lg font-medium">
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Featured Projects & Case Studies
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Real-world applications showcasing expertise in React ecosystem,
            internationalization, and modern web development practices.
          </p>
        </div>

        <Tabs defaultValue="featured" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-1 rounded-lg">
            <TabsTrigger
              value="featured"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm transition-all duration-200"
            >
              Featured Projects
            </TabsTrigger>
            <TabsTrigger
              value="showcase"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm transition-all duration-200"
            >
              Project Showcase
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-8">
            {projects.featured.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-fit object-cover"
                    />
                    <div className=" absolute inset-0 lg:bottom-10 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  <div
                    className={`p-2 sm:p-4 ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-foreground mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full sm:w-auto"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div> */}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="showcase">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.showcase.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Technology Highlights */}
        <Card className="bg-gradient-to-r from-accent/10 to-secondary/10">
          <CardContent className="p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Specialized Expertise
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2">Carousel Mastery</h4>
                <p className="text-sm text-foreground">
                  Implemented 5+ different carousel libraries across projects,
                  each chosen for specific use cases and performance
                  requirements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">i18n Excellence</h4>
                <p className="text-sm text-foreground">
                  Built applications supporting 10+ languages with seamless
                  translation workflows and cultural adaptations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Performance Focus</h4>
                <p className="text-sm text-foreground">
                  Optimized applications achieving 95+ Lighthouse scores through
                  SSG, code splitting, and efficient state management.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
