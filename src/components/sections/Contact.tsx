"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin, Twitter, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 lg:py-32 bg-background relative overflow-hidden scroll-mt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--reed-green)]/10 rounded-full blur-[200px]" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-sm font-bold text-[var(--reed-green)] uppercase tracking-widest">
              Let's Work Together
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-foreground mt-4 mb-6 leading-none">
              READY TO BUILD CONTENT
              <br />
              <span className="text-[var(--reed-green)]">THAT ACTUALLY WORKS?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Most content fails because it's created without strategy. 
              Let's make sure yours doesn't.
              <br /><br />
              <span className="text-foreground font-medium">
                Book a call. Tell me about your goals. Let's see if we're a fit.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <Button asChild size="lg">
              <Link href="https://calendly.com/devinreed" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="mailto:devin@thereeder.co">
                <Mail className="mr-2 h-5 w-5" />
                Send an Email
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center gap-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <Link
              href="https://linkedin.com/in/devinreed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-[var(--reed-green)] hover:bg-[var(--reed-green)]/10 hover:scale-110 transition-all duration-300"
              aria-label="Follow on LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-[var(--reed-green)]" />
            </Link>
            <Link
              href="https://twitter.com/deaborhood"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-[var(--reed-green)] hover:bg-[var(--reed-green)]/10 hover:scale-110 transition-all duration-300"
              aria-label="Follow on Twitter"
            >
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-[var(--reed-green)]" />
            </Link>
            <Link
              href="mailto:devin@thereeder.co"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-[var(--reed-green)] hover:bg-[var(--reed-green)]/10 hover:scale-110 transition-all duration-300"
              aria-label="Send email"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-[var(--reed-green)]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

