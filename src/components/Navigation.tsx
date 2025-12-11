"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/impact", label: "Impact" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled || isOpen
          ? "bg-background border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
          {/* Logo - Squircle with actual R logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--reed-green)] focus-visible:ring-offset-2 rounded-lg z-10"
            aria-label="The Reeder - Home"
          >
            <div className="relative">
              <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border border-[var(--reed-green)]/30 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="R"
                  width={40}
                  height={40}
                  className="w-9 h-9 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-wide uppercase">
                THE REEDER
              </span>
              <span className="text-[var(--reed-green)] text-xs font-medium tracking-wider uppercase">
                Content Strategy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 ml-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-[var(--reed-green)] transition-colors duration-200 py-2 group"
              >
                {link.label}
                <span 
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[var(--reed-green)] group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex flex-1" />

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--reed-green)] text-black font-bold text-sm rounded-full hover:bg-[var(--reed-green-light)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,80,0.4)]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-[var(--reed-green)] transition-colors z-10"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-background ${
            isOpen ? "max-h-[400px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 border-t border-border">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-lg font-medium text-foreground/80 hover:text-[var(--reed-green)] transition-colors text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 px-4">
              <Link
                href="/start"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[var(--reed-green)] text-black font-bold text-sm rounded-full hover:bg-[var(--reed-green-light)] transition-all duration-300"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
