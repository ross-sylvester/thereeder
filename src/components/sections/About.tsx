"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "$200M+", label: "Client ARR Growth" },
  { icon: Users, value: "100+", label: "Companies Served" },
  { icon: Award, value: "2017", label: "Founded" },
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
      <div className="absolute inset-0 opacity-[0.015]" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div
            className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--reed-green)]/20 to-[var(--reed-green)]/5 border border-[var(--reed-green)]/20">
              {/* R Logo as background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  width="200" 
                  height="200" 
                  viewBox="0 0 100 100" 
                  className="opacity-30"
                >
                  <text 
                    x="50" 
                    y="72" 
                    textAnchor="middle" 
                    fill="#4ADE50" 
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="72"
                    fontWeight="900"
                    fontStyle="italic"
                  >
                    R
                  </text>
                  <text 
                    x="82" 
                    y="28" 
                    fill="#4ADE50" 
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="16"
                    fontWeight="700"
                  >
                    ®
                  </text>
                </svg>
              </div>
              {/* Green accent corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--reed-green)] opacity-10" />
            </div>
            
            {/* Stats cards */}
            <div className="absolute -bottom-6 left-4 right-4 lg:left-8 lg:right-8 grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="bg-card border border-border rounded-xl p-4 shadow-2xl text-center"
                >
                  <stat.icon className="h-5 w-5 text-[var(--reed-green)] mx-auto mb-2" />
                  <div className="text-lg font-display text-[var(--reed-green)]">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="text-sm font-bold text-[var(--reed-green)] uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-display text-foreground mt-4 mb-6">
              THE REEDER
              <br />
              <span className="text-[var(--reed-green)]">CONSULTANCY</span>
            </h2>
            
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">The Reeder is a content consultancy for B2B brands that are done playing it safe.</strong>
              </p>
              <p>
                Led by Devin Reed — the strategist behind Gong and Clari&apos;s top-of-funnel growth — 
                we help SaaS companies create unforgettable content that converts.
              </p>
              <p>
                Our approach? <span className="text-[var(--reed-green)] font-semibold">No fluff.</span> Just content that:
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
                Based in San Diego. Serving B2B brands worldwide since 2017.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--reed-green)] text-black font-bold rounded-full hover:bg-[var(--reed-green-light)] transition-all duration-300 hover:scale-105"
              >
                Our Services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#results"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-bold rounded-full hover:border-[var(--reed-green)] hover:text-[var(--reed-green)] transition-all duration-300"
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
