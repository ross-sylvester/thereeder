"use client";

import { useEffect, useRef, useState } from "react";
import { Megaphone, Users, PenTool, Linkedin } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Content Marketing",
    description: "Strategic content that stops the scroll, builds trust at scale, and turns awareness into pipeline.",
    highlights: ["Content Strategy Design (12-week)", "Marketing Advising", "Influencer Marketing"],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Growth",
    description: "Transform executives into thought leaders. Build audiences that convert into pipeline.",
    highlights: ["LinkedIn Strategy for CEOs", "B2B Leaders Training", "Virtual Cohort Training"],
  },
  {
    icon: PenTool,
    title: "Thought Leadership",
    description: "Position your brand as the go-to voice in your space. The kind of content that gets shared in Slack.",
    highlights: ["Executive Ghostwriting", "POV Development", "Speaking Prep"],
  },
  {
    icon: Users,
    title: "Advisory & Coaching",
    description: "Strategic guidance for content leaders. Think of me as your content co-pilot.",
    highlights: ["1:1 Coaching", "Strategy Reviews", "Team Workshops"],
  },
];

export function Services() {
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
      id="services"
      className="py-24 lg:py-32 bg-background relative overflow-hidden scroll-mt-20"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--reed-green)]/5 rounded-full blur-[200px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-bold text-[var(--reed-green)] uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-foreground mt-4">
            CONTENT THAT
            <br />
            <span className="text-[var(--reed-green)]">CONVERTS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            No fluff. Just content that stops the scroll, builds trust at scale, 
            and turns awareness into pipeline.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-[var(--reed-green)]/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] card-hover ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--reed-green)]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-[var(--reed-green)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--reed-green)]/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-[var(--reed-green)]" />
                </div>
                <h3 className="text-2xl font-display text-foreground mb-3 group-hover:text-[var(--reed-green)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[var(--reed-green)]/10 text-[var(--reed-green)] rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
