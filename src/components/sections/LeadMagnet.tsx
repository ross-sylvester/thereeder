"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, FileText, CheckCircle2, Mail, Loader2 } from "lucide-react";

export function LeadMagnet() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);
    
    // Store email locally
    localStorage.setItem("reeder_guide_email", email);
    localStorage.setItem("reeder_guide_date", new Date().toISOString());
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section
      ref={sectionRef}
      id="free-guide"
      className="py-16 lg:py-20 bg-gradient-to-br from-[var(--reed-green)]/5 via-background to-[var(--reed-green)]/5 relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--reed-green)]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[var(--reed-green)]/10 rounded-full blur-[80px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[var(--reed-green)] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-display text-foreground mb-3">You&apos;re In!</h3>
              <p className="text-muted-foreground mb-6">
                Check your inbox for the LinkedIn Growth Guide.
              </p>
              <a
                href="https://www.thereeder.co/free-guides/linkedin-growth-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--reed-green)] text-black font-bold rounded-full hover:bg-[var(--reed-green-light)] transition-all duration-300"
              >
                Access Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[var(--reed-green)] rounded-2xl flex items-center justify-center shadow-lg">
                  <FileText className="h-10 w-10 text-black" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow text-center lg:text-left">
                <div className="text-sm font-bold text-[var(--reed-green)] uppercase tracking-widest mb-2">
                  Free Guide
                </div>
                <h2 className="text-2xl lg:text-3xl font-display text-foreground mb-3">
                  LINKEDIN GROWTH GUIDE
                </h2>
                <p className="text-muted-foreground mb-4">
                  The playbook I used to build 700K+ LinkedIn followers. No fluff. Just what works.
                </p>
                
                {/* Benefits */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6 lg:mb-0">
                  {["Instant access", "No fluff", "Real frameworks"].map((item, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4 text-[var(--reed-green)]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Email Form */}
              <div className="flex-shrink-0 w-full lg:w-auto">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="Enter your email"
                      className={`w-full lg:w-72 pl-12 pr-4 py-3.5 bg-background border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--reed-green)] focus:border-transparent transition-all text-base ${
                        error ? "border-red-400" : "border-border"
                      }`}
                      disabled={isSubmitting}
                    />
                    {error && (
                      <p className="absolute -bottom-5 left-0 text-red-500 text-xs">{error}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--reed-green)] text-black font-bold rounded-xl hover:bg-[var(--reed-green-light)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Instant Access
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
                <p className="text-xs text-muted-foreground text-center lg:text-left mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

