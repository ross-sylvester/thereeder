"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const rotatingWords = ["AUDIENCE", "BRAND", "PIPELINE", "REVENUE", "AUTHORITY"];

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(rotatingWords[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex];
    
    const type = () => {
      if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          timeoutRef.current = setTimeout(type, 40);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }
      } else {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          const speed = 70 + Math.random() * 50;
          timeoutRef.current = setTimeout(type, speed);
        } else {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            type();
          }, 2000);
        }
      }
    };

    if (isFirstLoad) {
      setIsFirstLoad(false);
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
        type();
      }, 2500);
    } else {
      timeoutRef.current = setTimeout(type, 100);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentWordIndex, displayText, isDeleting, isFirstLoad]);

  return (
    <section 
      aria-label="Welcome to The Reeder"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Effects */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--reed-green)]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--reed-green)]/5 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-3 px-5 py-2.5 bg-[var(--reed-green)]/10 border border-[var(--reed-green)]/30 rounded-full mb-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 bg-[var(--reed-green)] rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-[var(--reed-green)] uppercase tracking-wider">
              Strategy for B2B Marketers
            </span>
          </div>

          {/* Main Headline - Bold and impactful */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display leading-[0.95] tracking-tight text-foreground mb-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms", fontWeight: 400 }}
          >
            <span className="block">GROW YOUR</span>
            <span className="relative inline-flex items-baseline min-w-[240px] sm:min-w-[320px] md:min-w-[420px] lg:min-w-[520px]">
              <span 
                className="text-[var(--reed-green)] text-glow drop-shadow-[0_0_40px_rgba(74,222,80,0.6)]" 
                aria-live="polite" 
                aria-atomic="true"
                style={{ textShadow: '0 0 60px rgba(74,222,80,0.4)' }}
              >
                {displayText}
              </span>
              <span 
                className={`inline-block w-[3px] sm:w-[4px] md:w-[5px] bg-[var(--reed-green)] ml-1 transition-opacity duration-100 shadow-[0_0_20px_rgba(74,222,80,0.8)] ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
                style={{ height: '0.8em' }}
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Subheadline - Company focused */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Most B2B content is forgettable. Yours doesn&apos;t have to be.
            <br className="hidden sm:block" />
            <span className="text-foreground font-medium">We help SaaS companies create content that actually converts.</span>
          </p>

          {/* CTA Buttons - Premium styling */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--reed-green)] text-black font-bold text-base uppercase tracking-wider rounded-full hover:bg-[var(--reed-green-light)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,80,0.5)]"
            >
              Let&apos;s Talk
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="#podcast"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--reed-green)] text-[var(--reed-green)] font-bold text-base uppercase tracking-wider rounded-full hover:bg-[var(--reed-green)] hover:text-black transition-all duration-300 hover:scale-105"
            >
              <Play className="h-4 w-4" />
              Listen to the Podcast
            </Link>
          </div>

          {/* Social Proof - Punchy stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {[
              { value: "$20M→$200M", label: "ARR at Gong" },
              { value: "700K+", label: "LinkedIn Followers" },
              { value: "50K+", label: "Newsletter Subscribers" },
              { value: "100+", label: "Companies Advised" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="text-center group cursor-default"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-display text-[var(--reed-green)] transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-[var(--reed-green)] transition-all duration-500 group ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "600ms" }}
        aria-label="Scroll to About section"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">Explore</span>
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1 group-hover:border-[var(--reed-green)]">
          <div className="w-1.5 h-2.5 bg-current rounded-full animate-bounce group-hover:bg-[var(--reed-green)]" />
        </div>
      </a>
    </section>
  );
}

