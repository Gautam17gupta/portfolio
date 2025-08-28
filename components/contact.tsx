"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 text-lg font-medium">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's work together
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Ready to bring your project to life? I'm available for freelance
            work and full-time opportunities. Let's discuss how we can create
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">gautamgupta001723@gmail.com</p>
                <a className="mt-4" href="mailto:gautamgupta001723@gmail.com">
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 cursor-pointer bg-transparent"
                  >
                    Send Email
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Available for remote work worldwide
                </p>
                <Badge variant="secondary" className="mt-2">
                  Remote Friendly
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-accent" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">Available for new projects</p>
                <Badge variant="secondary" className="mt-2">
                  Open to Opportunities
                </Badge>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Gautam17gupta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="cursor-pointer"
                    size="icon"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/gautam-gupta-791542243/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="cursor-pointer"
                    size="icon"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/gautam__gupta_?t=dmna0JqDNa24kkDAw-zfDQ&s=08"
                >
                  <Button
                    variant="outline"
                    className="cursor-pointer"
                    size="icon"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/xdklkjad"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project, timeline, and requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full cursor-pointer sm:w-auto"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-accent mb-2">24h</div>
                  <div className="text-sm text-foreground">Response Time</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-accent mb-2">
                    100%
                  </div>
                  <div className="text-sm text-foreground">
                    Project Success Rate
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t text-center">
          <p className="text-foreground">
            © 2025 Developer Portfolio. Built by Gautam Gupta.
          </p>
        </div>
      </div>
    </section>
  );
}
