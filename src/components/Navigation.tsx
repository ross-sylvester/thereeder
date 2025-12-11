"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
          {/* Logo - R icon only (pixel-perfect match to Devin's brand) */}
          <Link 
            href="/" 
            className="group"
            aria-label="The Reeder - Home"
          >
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 100 100" 
              className="sm:w-14 sm:h-14 group-hover:drop-shadow-[0_0_15px_rgba(74,222,80,0.4)] transition-all duration-300"
              aria-hidden="true"
            >
              {/* Background */}
              <rect x="0" y="0" width="100" height="100" rx="12" fill="#3a3a3a" className="group-hover:fill-[#454545] transition-colors duration-300" />
              {/* R letter - bold italic style matching Devin's brand */}
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
              {/* ® symbol */}
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
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-[var(--reed-green)] transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild size="sm">
              <Link href="#contact">Get Started</Link>
            </Button>
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

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-border">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-lg font-medium text-foreground/70 hover:text-[var(--reed-green)] transition-colors uppercase tracking-wider"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

