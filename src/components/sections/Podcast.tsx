"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Play, Headphones, Music, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  { 
    name: "Apple Podcasts", 
    url: "https://podcasts.apple.com/us/podcast/reed-between-the-lines/id1736811325", 
    Icon: Headphones,
  },
  { 
    name: "Spotify", 
    url: "https://open.spotify.com/show/5u2UnlSJjYE7YVQZpLCJza", 
    Icon: Music,
  },
  { 
    name: "YouTube", 
    url: "https://www.youtube.com/results?search_query=reed+between+the+lines+devin+reed", 
    Icon: Youtube,
  },
];

const recentEpisodes = [
  {
    title: "How to Stand Out and Win Over Your Audience",
    guest: "Heike Young",
    duration: "54 min",
    url: "https://open.spotify.com/show/5u2UnlSJjYE7YVQZpLCJza",
  },
  {
    title: "The #1 Mistake Brands Make with B2B Content",
    guest: "Solo Episode",
    duration: "38 min",
    url: "https://open.spotify.com/show/5u2UnlSJjYE7YVQZpLCJza",
  },
  {
    title: "Why Playing It Safe Kills Your Content",
    guest: "Kyle Lacy",
    duration: "51 min",
    url: "https://open.spotify.com/show/5u2UnlSJjYE7YVQZpLCJza",
  },
];

export function Podcast() {
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
      id="podcast"
      className="py-24 lg:py-32 bg-background relative overflow-hidden scroll-mt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[var(--reed-green)]/5 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Podcast Info */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="text-sm font-bold text-[var(--reed-green)] uppercase tracking-widest">
              The Podcast
            </span>
            
            {/* Podcast Logo - Matching the exact brand style */}
            <div className="mt-6 mb-8">
              <div className="flex items-start gap-3">
                {/* REED in bold green */}
                <span className="text-6xl lg:text-7xl xl:text-8xl font-display text-[var(--reed-green)] leading-none drop-shadow-[0_0_30px_rgba(74,222,80,0.4)]">
                  REED
                </span>
                {/* Right side stack */}
                <div className="flex flex-col justify-center pt-1">
                  <span className="text-xl lg:text-2xl xl:text-3xl font-display text-white leading-tight">
                    BETWEEN
                  </span>
                  <span className="text-xl lg:text-2xl xl:text-3xl font-display text-white leading-tight border-2 border-[var(--reed-green)] px-2 py-0.5 inline-block my-1">
                    THE LINES
                  </span>
                  <span className="text-xl lg:text-2xl xl:text-3xl font-display text-white leading-tight">
                    PODCAST
                  </span>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Raw conversations with the sharpest minds in B2B marketing.
              No fluff. No corporate speak. Just real talk about what actually works.
              <br /><br />
              <span className="text-foreground font-medium">
                I turned a basketball court into a recording studio and made smart people talk to me for an hour.
              </span>
            </p>

            {/* Listen Platforms - Using Lucide Icons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {platforms.map((platform, i) => (
                <Link
                  key={i}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full hover:border-[var(--reed-green)] hover:bg-[var(--reed-green)]/10 transition-all duration-300 group"
                >
                  <platform.Icon className="h-4 w-4 text-muted-foreground group-hover:text-[var(--reed-green)] transition-colors" />
                  <span className="text-sm font-semibold group-hover:text-[var(--reed-green)] transition-colors">{platform.name}</span>
                </Link>
              ))}
            </div>

            <Button asChild size="lg">
              <Link href="https://open.spotify.com/show/5u2UnlSJjYE7YVQZpLCJza" target="_blank" rel="noopener noreferrer">
                <Headphones className="mr-2 h-5 w-5" />
                Listen Now
              </Link>
            </Button>
          </div>

          {/* Right - Recent Episodes */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-4">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">
                Recent Episodes
              </p>
              {recentEpisodes.map((episode, i) => (
                <Link
                  key={i}
                  href={episode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block bg-card border border-border rounded-2xl p-6 hover:border-[var(--reed-green)]/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] card-hover ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(i + 2) * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--reed-green)]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--reed-green)] group-hover:scale-110 transition-all duration-300">
                      <Play className="h-5 w-5 text-[var(--reed-green)] group-hover:text-black transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-[var(--reed-green)] transition-colors">
                        {episode.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{episode.guest}</span>
                        <span>•</span>
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
