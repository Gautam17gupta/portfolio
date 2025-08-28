import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-accent/5" />
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-20 bg-cover bg-center" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-2 text-sm font-medium"
        >
          Available for new opportunities
        </Badge>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          React & Next.js
          <span className="block text-accent bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Building modern, scalable web applications with 1+ years of frontend
          expertise in React ecosystem, internationalization, and cutting-edge
          technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            // size="lg"
            className="group flex items-center rounded-2xl btn-hover bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            href="#projects"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
          </a>
          <div className="flex gap-3">
            <a
              href="https://github.com/Gautam17gupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="btn-hover cursor-pointer border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent bg-transparent"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/gautam-gupta-791542243/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="btn-hover cursor-pointer border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent bg-transparent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:gautamgupta001723@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="btn-hover cursor-pointer border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent bg-transparent"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 card-hover">
            <div className="text-3xl font-bold text-accent mb-1">1+</div>
            <div className="text-sm text-muted-foreground font-medium">
              Years Experience
            </div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 card-hover">
            <div className="text-3xl font-bold text-accent mb-1">10+</div>
            <div className="text-sm text-muted-foreground font-medium">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 card-hover">
            <div className="text-3xl font-bold text-accent mb-1">15+</div>
            <div className="text-sm text-muted-foreground font-medium">
              Technologies
            </div>
          </div>
          <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 card-hover">
            <div className="text-3xl font-bold text-accent mb-1">100%</div>
            <div className="text-sm text-muted-foreground font-medium">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
