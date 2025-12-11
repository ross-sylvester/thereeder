'use client';

import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] max-w-sm bg-card border border-border rounded-2xl shadow-2xl shadow-black/50 animate-fade-in-up overflow-hidden"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      {/* Accent bar */}
      <div className="h-1 bg-[var(--reed-green)]" />
      
      <div className="p-5">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-[var(--reed-green)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[var(--reed-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3 id="cookie-consent-title" className="font-semibold text-foreground text-sm">
              Cookie Preferences
            </h3>
            <p id="cookie-consent-description" className="text-xs text-muted-foreground mt-1 leading-relaxed">
              We use cookies to improve your experience and analyze site traffic.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecline}
            className="flex-1 px-4 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground border border-border rounded-full hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--reed-green)]"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[var(--reed-green)] rounded-full hover:bg-[var(--reed-green-light)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--reed-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

