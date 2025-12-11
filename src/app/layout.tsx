import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thereeder.co"),
  title: {
    default: "The Reeder | B2B Content Strategy by Devin Reed",
    template: "%s | The Reeder",
  },
  description: "Content strategy for B2B companies that want to grow their audience, build their brand, and drive pipeline. From Devin Reed, former Head of Content at Gong.",
  keywords: [
    "B2B content strategy",
    "content marketing",
    "thought leadership",
    "SaaS marketing",
    "content consulting",
    "Devin Reed",
    "Gong content",
    "LinkedIn content",
    "B2B marketing",
    "demand generation",
  ],
  authors: [{ name: "Devin Reed", url: "https://linkedin.com/in/devinreed" }],
  creator: "Devin Reed",
  publisher: "The Reeder",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
  },
  openGraph: {
    title: "The Reeder | B2B Content Strategy by Devin Reed",
    description: "Content strategy for B2B companies that want to grow their audience, build their brand, and drive pipeline.",
    type: "website",
    locale: "en_US",
    siteName: "The Reeder",
    url: "https://thereeder.co",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Reeder - B2B Content Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Reeder | B2B Content Strategy",
    description: "Content strategy for B2B companies. By Devin Reed.",
    creator: "@deaborhood",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://thereeder.co",
  },
  category: "business",
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Reeder",
  description: "B2B Content Strategy & Consulting by Devin Reed",
  url: "https://thereeder.co",
  logo: "https://thereeder.co/logo.png",
  founder: {
    "@type": "Person",
    name: "Devin Reed",
    jobTitle: "Founder & CEO",
    sameAs: [
      "https://linkedin.com/in/devinreed",
      "https://twitter.com/deaborhood",
    ],
  },
  serviceType: ["Content Strategy", "Thought Leadership", "Content Consulting"],
  areaServed: "Worldwide",
  sameAs: [
    "https://linkedin.com/in/devinreed",
    "https://twitter.com/deaborhood",
    "https://youtube.com/@devinreed",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Security */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Mobile */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#4ADE50" />
        
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased">
        {/* Skip Link for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[var(--reed-green)] focus:text-black focus:rounded-full focus:font-bold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
