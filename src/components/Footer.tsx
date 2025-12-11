import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Twitter, Music } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt="The Reeder"
                width={56}
                height={56}
                className="w-12 h-12 object-contain group-hover:drop-shadow-[0_0_15px_rgba(74,222,80,0.5)] transition-all duration-300"
              />
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
                href="https://twitter.com/deaborhood"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[var(--reed-green)]/20 hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground" />
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
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#results", label: "Results" },
                { href: "#podcast", label: "Podcast" },
                { href: "#contact", label: "Contact" },
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
                  Twitter/X
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

