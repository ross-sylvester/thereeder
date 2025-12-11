"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

export function BookCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-[var(--reed-green)] text-black font-bold rounded-full shadow-lg hover:bg-[var(--reed-green-light)] hover:scale-105 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
      aria-label="Book a call"
    >
      <Calendar className="h-5 w-5" />
      <span className="hidden sm:inline">Book a Call</span>
    </a>
  );
}

