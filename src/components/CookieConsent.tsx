'use client';

import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem('cookieConsent');
    setHasConsent(!!consent);
    
    // Show banner if no consent, hide if consent exists
    setShowBanner(!consent);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    setHasConsent(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    setHasConsent(true);
  };

  const openPreferences = () => {
    setShowBanner(true);
  };

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Cookie Preferences button - always visible in bottom left */}
      <button
        onClick={openPreferences}
        className={`fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-[var(--reed-green)] transition-all duration-300 shadow-lg ${
          showBanner ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Cookie Preferences"
      >
        <Cookie className="h-4 w-4" />
        <span className="hidden sm:inline">Cookie Preferences</span>
      </button>

      {/* Cookie Consent Banner with green top bar */}
      {showBanner && (
        <div 
          className="fixed bottom-6 left-6 z-50 w-[calc(100%-3rem)] max-w-sm bg-card border border-border rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          {/* Green accent bar at top */}
          <div className="h-1.5 bg-[var(--reed-green)]" />
          
          <div className="p-5">
            {/* Close button */}
            <button
              onClick={() => setShowBanner(false)}
              className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-[var(--reed-green)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-[var(--reed-green)]" />
              </div>
              <div className="flex-1 min-w-0 pr-6">
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
                className="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-muted-foreground border border-border rounded-full hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--reed-green)]"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[var(--reed-green)] rounded-full hover:bg-[var(--reed-green-light)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--reed-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
