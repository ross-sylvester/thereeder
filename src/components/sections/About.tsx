"use client";

import { useEffect, useRef, useState } from "react";
import { Linkedin, ArrowRight } from "lucide-react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.015]" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Photo placeholder */}
          <div
            className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--reed-green)]/20 to-[var(--reed-green)]/5 border border-[var(--reed-green)]/20">
              {/* R Logo as placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="text-[200px] font-display text-[var(--reed-green)]/30 font-bold leading-none">
                    R
                  </span>
                  <span className="absolute top-4 right-0 text-2xl text-[var(--reed-green)]/30">®</span>
                </div>
              </div>
              {/* Green accent corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--reed-green)] opacity-10" />
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 lg:right-8 bg-card border border-border rounded-2xl p-6 shadow-2xl">
              <div className="text-3xl font-display text-[var(--reed-green)]">$200M+</div>
              <div className="text-sm text-muted-foreground mt-1">ARR Scaled at Gong</div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="text-sm font-bold text-[var(--reed-green)] uppercase tracking-widest">
              About
            </span>
            <h2 className="text-4xl lg:text-5xl font-display text-foreground mt-4 mb-6">
              MEET DEVIN
              <br />
              <span className="text-[var(--reed-green)]">REED</span>
            </h2>
            
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">The Reeder is a content consultancy for B2B brands that are done playing it safe.</strong>
              </p>
              <p>
                I&apos;m the strategist behind Gong and Clari&apos;s top-of-funnel growth. 
                Now I help SaaS companies create unforgettable content that converts.
              </p>
              <p>
                My approach? <span className="text-[var(--reed-green)] font-semibold">No fluff.</span> Just content that:
              </p>
              <ul className="space-y-2 pl-0">
                <li className="flex items-center gap-3">
                  <ArrowRight className="h-4 w-4 text-[var(--reed-green)] flex-shrink-0" />
                  <span>Stops the scroll</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="h-4 w-4 text-[var(--reed-green)] flex-shrink-0" />
                  <span>Builds trust at scale</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="h-4 w-4 text-[var(--reed-green)] flex-shrink-0" />
                  <span>Turns awareness into pipeline ($$$)</span>
                </li>
              </ul>
              <p className="text-base italic text-muted-foreground/80 border-l-2 border-[var(--reed-green)] pl-4">
                &ldquo;Create tactical guides for strategic problems. High stakes, expensive problems 
                that make your prospects&apos; palms sweat.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://linkedin.com/in/devinreed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--reed-green)] text-black font-bold rounded-full hover:bg-[var(--reed-green-light)] transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-bold rounded-full hover:border-[var(--reed-green)] hover:text-[var(--reed-green)] transition-all duration-300"
              >
                See Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
