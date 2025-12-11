"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, TrendingUp, Users, Target, Zap } from "lucide-react";

const highlights = [
  { icon: TrendingUp, value: "$200M+", label: "Client ARR Growth" },
  { icon: Users, value: "100+", label: "Companies Served" },
  { icon: Target, value: "2017", label: "Founded" },
  { icon: Zap, value: "12+", label: "Enterprise Clients" },
];

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
      className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden scroll-mt-20"
    >
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-bold text-[var(--reed-green)] uppercase tracking-widest">
            About Us
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-foreground mt-4">
            THE REEDER
            <br />
            <span className="text-[var(--reed-green)]">CONSULTANCY</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div
            className={`transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground text-xl">The Reeder is a content consultancy for B2B brands that are done playing it safe.</strong>
              </p>
              <p>
                Led by Devin Reed — the strategist behind Gong and Clari&apos;s top-of-funnel growth — 
                we help SaaS companies create unforgettable content that converts.
              </p>
              <p>
                Our approach? <span className="text-[var(--reed-green)] font-semibold">No fluff.</span> Just content that:
              </p>
              <ul className="space-y-3 pl-0">
                <li className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-[var(--reed-green)] flex-shrink-0" />
                  <span className="text-foreground">Stops the scroll</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-[var(--reed-green)] flex-shrink-0" />
                  <span className="text-foreground">Builds trust at scale</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-[var(--reed-green)] flex-shrink-0" />
                  <span className="text-foreground">Turns awareness into pipeline ($$$)</span>
                </li>
              </ul>
              <p className="text-base italic text-muted-foreground/80 border-l-2 border-[var(--reed-green)] pl-4 mt-8">
                Based in San Diego. Serving B2B brands worldwide since 2017.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--reed-green)] text-black font-bold rounded-full hover:bg-[var(--reed-green-light)] transition-all duration-300 hover:scale-105"
              >
                Our Services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/results"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-bold rounded-full hover:border-[var(--reed-green)] hover:text-[var(--reed-green)] transition-all duration-300"
              >
                See Our Work
              </a>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div
            className={`transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-[var(--reed-green)]/50 transition-all duration-300 card-hover"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <item.icon className="h-8 w-8 text-[var(--reed-green)] mb-4" />
                  <div className="text-3xl font-display text-[var(--reed-green)]">{item.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
