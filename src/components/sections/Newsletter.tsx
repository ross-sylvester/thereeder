"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

export function Newsletter() {
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
      className="py-24 lg:py-32 bg-[var(--reed-green)] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20" aria-hidden="true" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-black" />
            <span className="text-sm font-bold text-black uppercase tracking-wider">
              50,000+ Subscribers
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display text-black mb-6 leading-none">
            THE WEEKLY PLAYBOOK
            <br />
            FOR B2B CONTENT
          </h2>
          
          <p className="text-lg text-black/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every week I share frameworks, tactics, and real examples from my work 
            scaling content at Gong, Clari, and beyond. 
            <span className="font-semibold text-black"> No fluff. Just what works.</span>
          </p>

          {/* Newsletter CTA */}
          <div 
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <a
              href="https://www.thereeder.co/content-hub/newsletter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 h-14 px-8 bg-black text-white rounded-full font-bold uppercase tracking-wider hover:bg-black/80 transition-all duration-300 hover:scale-105 active:scale-100"
            >
              <Mail className="h-5 w-5" />
              Subscribe to The Reeder
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p 
            className={`text-sm text-black/60 mt-6 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Join 50,000+ B2B marketers. Weekly insights. No fluff.
          </p>
        </div>
      </div>
    </section>
  );
}

