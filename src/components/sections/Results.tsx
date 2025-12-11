"use client";

import { useEffect, useRef, useState } from "react";

const results = [
  {
    company: "Gong",
    role: "Head of Content",
    achievement: "Built the content engine that scaled Gong's brand and drove top-of-funnel growth",
    metric: "10x",
  },
  {
    company: "Clari",
    role: "Director of Content",
    achievement: "Transformed content strategy and broke company engagement records",
    metric: "Record",
  },
  {
    company: "Notion",
    role: "Advisor",
    achievement: "Strategic content guidance during hypergrowth phase",
    metric: "Advisor",
  },
  {
    company: "Wiz",
    role: "Advisor",
    achievement: "Content strategy for the fastest-growing security company",
    metric: "Advisor",
  },
];

const clients = [
  "Notion",
  "Wiz", 
  "FloQast",
  "Centrical",
  "UserEvidence",
  "Cube Software",
  "PebblePost",
  "TestBox",
  "Netenrich",
  "Commsor",
  "PathFactory",
  "Island.io",
];

export function Results() {
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
      id="results"
      className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden scroll-mt-20"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-bold text-[var(--reed-green)] uppercase tracking-widest">
            Track Record
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-foreground mt-4">
            RESULTS SPEAK
            <br />
            <span className="text-[var(--reed-green)]">LOUDER THAN WORDS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            We don&apos;t just talk about content strategy. We&apos;ve executed it at companies you&apos;ve heard of.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {results.map((result, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-2xl p-6 hover:border-[var(--reed-green)]/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] card-hover ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl font-display text-[var(--reed-green)] mb-3">
                {result.metric}
              </div>
              <h3 className="text-xl font-display text-foreground mb-1">
                {result.company}
              </h3>
              <p className="text-sm text-[var(--reed-green)] font-semibold mb-3">
                {result.role}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {result.achievement}
              </p>
            </div>
          ))}
        </div>

        {/* Client List */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8">
            Select Clients
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 lg:gap-x-12">
            {clients.map((client, i) => (
              <div 
                key={i}
                className="text-lg lg:text-xl font-display text-muted-foreground/60 hover:text-[var(--reed-green)] transition-all duration-300 hover:scale-110 cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
