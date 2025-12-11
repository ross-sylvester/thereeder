import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Music } from "lucide-react";

// Custom X (Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border border-[var(--reed-green)]/30 overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="R"
                    width={36}
                    height={36}
                    className="w-8 h-8 object-contain"
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
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              Content strategy for B2B companies that want to grow their audience, 
              build their brand, and drive pipeline.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <Link
                href="https://linkedin.com/in/devinreed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[var(--reed-green)]/20 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground" />
              </Link>
              <Link
                href="https://x.com/deaborhood"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[var(--reed-green)]/20 hover:scale-110 transition-all duration-300"
                aria-label="X"
              >
                <XIcon className="h-4 w-4 text-muted-foreground" />
              </Link>
              <Link
                href="https://open.spotify.com/show/5u2UnlSJjYE7YVQZpLCJza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[var(--reed-green)]/20 hover:scale-110 transition-all duration-300"
                aria-label="Spotify Podcast"
              >
                <Music className="h-4 w-4 text-muted-foreground" />
              </Link>
              <Link
                href="mailto:devin@thereeder.co"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[var(--reed-green)]/20 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 text-muted-foreground" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/work", label: "Work" },
                { href: "/impact", label: "Impact" },
                { href: "/insights", label: "Insights" },
                { href: "/about", label: "About" },
                { href: "/start", label: "Get Started" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[var(--reed-green)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://linkedin.com/in/devinreed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[var(--reed-green)] transition-colors duration-200"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/deaborhood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[var(--reed-green)] transition-colors duration-200"
                >
                  X (Twitter)
                </Link>
              </li>
              <li>
                <Link
                  href="https://open.spotify.com/show/5u2UnlSJjYE7YVQZpLCJza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[var(--reed-green)] transition-colors duration-200"
                >
                  Podcast (Spotify)
                </Link>
              </li>
              <li>
                <Link
                  href="https://podcasts.apple.com/us/podcast/reed-between-the-lines/id1736811325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[var(--reed-green)] transition-colors duration-200"
                >
                  Podcast (Apple)
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:devin@thereeder.co"
                  className="text-muted-foreground hover:text-[var(--reed-green)] transition-colors duration-200"
                >
                  devin@thereeder.co
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/60 text-sm">
            © {new Date().getFullYear()} The Reeder. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground/60">
            <Link href="#" className="hover:text-[var(--reed-green)] transition-colors duration-200">
              Privacy
            </Link>
            <Link href="#" className="hover:text-[var(--reed-green)] transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
