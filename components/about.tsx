import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Globe, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code with TypeScript and modern best practices",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed with SSG, SSR, and efficient state management",
    },
    {
      icon: Globe,
      title: "Internationalization",
      description:
        "Building multilingual applications with next-i18next and localization expertise",
    },
    {
      icon: Users,
      title: "User Experience",
      description:
        "Creating intuitive interfaces with responsive design and accessibility in mind",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 text-lg font-medium">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground text-balance">
            Passionate about building exceptional web experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm a dedicated React and Next.js developer with extensive
            experience in modern web technologies. I specialize in creating
            scalable, performant applications with a focus on user experience
            and code quality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                My Journey
              </h3>
              <div className="space-y-6 text-foreground leading-relaxed">
                <p className="text-lg">
                  With over 1 year of experience in frontend development, I've
                  worked on diverse projects including a professional hospital
                  website for experienced doctors, the RunHotel platform (both
                  frontend and Payload CMS versions), and the Tabla Tunes music
                  website.
                </p>
                <p className="text-lg">
                  My expertise spans the React ecosystem, with particular
                  strength in Next.js, state management, and
                  internationalization. I'm passionate about staying current
                  with the latest technologies and best practices, constantly
                  learning and adapting to deliver the best solutions for each
                  project.
                </p>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold mb-4 text-foreground text-lg">
                Core Expertise
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "React Query",
                  "i18n",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium hover:shadow-xl hover:-translate-y-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-accent/10 to-secondary/10 p-8 flex items-center justify-center border border-border/20 backdrop-blur-sm">
              <img
                src="/professional-developer-portrait.png"
                alt="Developer portrait"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-3 text-foreground text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
