"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Skills() {
  const skillCategories = {
    frontend: {
      title: "Frontend & UI",
      skills: [
        { name: "React.js", level: "Expert", years: "5+" },
        { name: "Next.js", level: "Expert", years: "4+" },
        { name: "TypeScript", level: "Advanced", years: "4+" },
        { name: "Tailwind CSS", level: "Expert", years: "3+" },
        { name: "Ant Design", level: "Advanced", years: "3+" },
      ],
    },
    state: {
      title: "State & Data",
      skills: [
        { name: "React Query", level: "Expert", years: "3+" },
        { name: "Redux Saga", level: "Advanced", years: "3+" },
        { name: "Axios", level: "Expert", years: "4+" },
        { name: "LocalForage", level: "Advanced", years: "2+" },
        { name: "Formik + Yup", level: "Advanced", years: "3+" },
      ],
    },
    ui: {
      title: "UI Libraries",
      skills: [
        { name: "React Slick", level: "Expert", years: "3+" },
        { name: "React Multi Carousel", level: "Advanced", years: "2+" },
        { name: "React Fast Marquee", level: "Advanced", years: "2+" },
        { name: "React Image Gallery", level: "Advanced", years: "2+" },
        { name: "React Masonry CSS", level: "Advanced", years: "2+" },
      ],
    },
    tools: {
      title: "Tools & Utils",
      skills: [
        { name: "Day.js / Luxon", level: "Advanced", years: "3+" },
        { name: "Lodash", level: "Advanced", years: "4+" },
        { name: "next-i18next", level: "Expert", years: "3+" },
        { name: "JWT Auth", level: "Advanced", years: "3+" },
        { name: "ESLint / Husky", level: "Advanced", years: "4+" },
      ],
    },
  };

  const carouselLibraries = [
    {
      name: "React Slick",
      description:
        "Most versatile carousel with extensive customization options",
      features: [
        "Infinite scroll",
        "Autoplay",
        "Responsive breakpoints",
        "Custom arrows/dots",
      ],
    },
    {
      name: "React Multi Carousel",
      description: "Lightweight, responsive carousel with SSR support",
      features: [
        "Server-side rendering",
        "Touch/swipe support",
        "Custom breakpoints",
        "Lazy loading",
      ],
    },
    {
      name: "React Fast Marquee",
      description: "Smooth scrolling marquee for continuous content display",
      features: [
        "Smooth animations",
        "Pause on hover",
        "Direction control",
        "Speed customization",
      ],
    },
    {
      name: "React Image Gallery",
      description: "Feature-rich image gallery with thumbnails and fullscreen",
      features: [
        "Thumbnail navigation",
        "Fullscreen mode",
        "Keyboard navigation",
        "Touch gestures",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 text-lg font-medium">
            Technical Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
            Technologies I work with
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Extensive experience with modern React ecosystem and specialized
            expertise in carousel libraries and internationalization.
          </p>
        </div>

        <Tabs defaultValue="overview" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 bg-muted/50 p-1 rounded-lg">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm font-medium transition-all"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="frontend"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm font-medium transition-all"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="state"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm font-medium transition-all"
            >
              State & Data
            </TabsTrigger>
            <TabsTrigger
              value="ui"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm font-medium transition-all"
            >
              UI Libraries
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm font-medium transition-all"
            >
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-5 lg:mt-0 space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skillCategories).map(([key, category]) => (
                <Card key={key} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.skills.slice(0, 3).map((skill) => (
                        <div
                          key={skill.name}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm">{skill.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}
                          </Badge>
                        </div>
                      ))}
                      {category.skills.length > 3 && (
                        <div className="text-xs text-foreground">
                          +{category.skills.length - 3} more
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <Card className="mt-10 lg:mt-0">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{skill.name}</h3>
                          <Badge variant="outline">{skill.years}</Badge>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Carousel Libraries Showcase
        <div className="mb-16 w-full mx-auto ">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Carousel Libraries Expertise
          </h3>
          <Carousel
            className="max-w-5xl  mx-auto"
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {carouselLibraries.map((library, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{library.name}</CardTitle>
                      <p className="text-sm text-foreground">
                        {library.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {library.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            <span className="text-sm text-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div> */}

        {/* Internationalization Highlight */}
        <Card className="bg-gradient-to-r from-accent/10 to-secondary/10">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Internationalization (i18n) Specialist
              </h3>
              <p className="text-foreground mb-6 max-w-2xl mx-auto">
                Extensive experience building multilingual applications with
                next-i18next, language detection, and Locize integration for
                seamless translation workflows.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge>next-i18next</Badge>
                <Badge>next-language-detector</Badge>
                <Badge>Locize CLI</Badge>
                <Badge>Translation Management</Badge>
                <Badge>RTL Support</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
