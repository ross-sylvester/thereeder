"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Target, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "No Fluff. Just Results.",
    description: "I've built content engines at Gong and Clari. I know what works because I've done it at scale.",
  },
  {
    icon: Target,
    title: "Strategic, Not Just Tactical",
    description: "Tactics without strategy is noise. I help you create content that moves the needle on revenue.",
  },
  {
    icon: TrendingUp,
    title: "Built for Growth",
    description: "From thought leadership to demand gen. Every piece of content should serve your pipeline.",
  },
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
      id="about"
      aria-label="About Devin Reed"
      className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--reed-green)]/5 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Story Card */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="bg-card border border-border rounded-3xl p-10 lg:p-12">
                <div className="text-7xl lg:text-8xl font-display text-[var(--reed-green)]/20 mb-4">10X</div>
                <h3 className="text-3xl lg:text-4xl font-display text-foreground mb-6 leading-tight">
                  SCALED GONG FROM
                  <br />
                  $20M TO $200M ARR
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Not by accident. By building a content engine that actually drove pipeline.
                  Now I help other B2B companies do the same.
                </p>
              </div>

              {/* Quote card */}
              <div className="absolute -bottom-6 -right-6 bg-[var(--reed-green)] rounded-2xl p-6 max-w-[280px] transition-transform duration-300 hover:scale-105 shadow-lg shadow-[var(--reed-green)]/20">
                <p className="text-black font-semibold text-base leading-relaxed">
                  "The myth is execs don't want tactics. The truth is they don't want to look unprepared."
                </p>
                <p className="text-black/70 text-sm mt-3 font-medium">— Devin Reed</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="text-sm font-bold text-[var(--reed-green)] uppercase tracking-widest">
              The Short Version
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-foreground mt-4 mb-8 leading-none">
              I MAKE B2B
              <br />
              CONTENT THAT
              <br />
              <span className="text-[var(--reed-green)]">ACTUALLY WORKS</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Here's the thing nobody talks about—most content is created for content's sake.
              Vanity metrics. Checkbox exercises. <span className="text-foreground font-medium">That's not what I do.</span>
              <br /><br />
              I've led content at two of the fastest-growing SaaS companies. 
              Built thought leadership programs that execs actually read. 
              Created content that sales teams beg to share.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, i) => (
                <div
                  key={i}
                  className={`flex gap-5 items-start transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${(i + 3) * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-[var(--reed-green)]/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-[var(--reed-green)]/20 hover:scale-110">
                    <value.icon className="h-6 w-6 text-[var(--reed-green)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

