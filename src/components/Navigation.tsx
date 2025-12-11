"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#podcast", label: "Podcast" },
  { href: "#contact", label: "Contact" },
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

  // Close menu on escape key
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
          ? "bg-background border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex-shrink-0"
            aria-label="The Reeder - Home"
          >
            <Image
              src="/logo.png"
              alt="The Reeder"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:drop-shadow-[0_0_15px_rgba(74,222,80,0.5)] transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered & V-aligned */}
          <div className="hidden lg:flex items-center justify-center gap-10 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 hover:text-[var(--reed-green)] transition-colors duration-200 uppercase tracking-widest leading-none py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA - Cal.com link */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--reed-green)] text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[var(--reed-green-light)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,80,0.4)]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-[var(--reed-green)] transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu - Solid background */}
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
                className="block py-3 text-lg font-semibold text-foreground/80 hover:text-[var(--reed-green)] transition-colors uppercase tracking-widest text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 px-4">
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[var(--reed-green)] text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[var(--reed-green-light)] transition-all duration-300"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
