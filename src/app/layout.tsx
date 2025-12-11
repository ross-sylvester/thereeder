import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NODE_ENV === 'production' ? '/thereeder' : '';
const siteUrl = process.env.NODE_ENV === 'production' 
  ? 'https://ross-sylvester.github.io/thereeder' 
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    "Reed Between the Lines",
  ],
  authors: [{ name: "Devin Reed", url: "https://linkedin.com/in/devinreed" }],
  creator: "Devin Reed",
  publisher: "The Reeder",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "32x32" },
      { url: `${basePath}/icon-192.png`, sizes: "192x192", type: "image/png" },
      { url: `${basePath}/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
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
    url: siteUrl,
    images: [
      {
        url: `${basePath}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "The Reeder - B2B Content Strategy by Devin Reed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Reeder | B2B Content Strategy",
    description: "Content strategy for B2B companies. By Devin Reed.",
    creator: "@deaborhood",
    images: [`${basePath}/og-image.png`],
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
    canonical: siteUrl,
  },
  category: "business",
};

// Structured Data for SEO & AEO (LLM-friendly)
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "The Reeder",
    description: "B2B Content Strategy & Consulting by Devin Reed. Content consultancy for B2B brands that are done playing it safe.",
    url: "https://ross-sylvester.github.io/thereeder",
    logo: "https://ross-sylvester.github.io/thereeder/og-image.png",
    image: "https://ross-sylvester.github.io/thereeder/og-image.png",
    founder: {
      "@type": "Person",
      name: "Devin Reed",
      jobTitle: "Founder & CEO",
      description: "The strategist behind Gong and Clari's top-of-funnel growth",
      sameAs: [
        "https://linkedin.com/in/devinreed",
        "https://twitter.com/deaborhood",
      ],
    },
    serviceType: ["Content Strategy", "LinkedIn Growth", "Thought Leadership", "Content Marketing", "B2B Marketing Consulting"],
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "California",
      addressCountry: "US",
    },
    foundingDate: "2017",
    numberOfEmployees: "2-10",
    sameAs: [
      "https://linkedin.com/in/devinreed",
      "https://twitter.com/deaborhood",
      "https://open.spotify.com/show/5u2UnlSJjYE7YVQZpLCJza",
      "https://podcasts.apple.com/us/podcast/reed-between-the-lines/id1736811325",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Devin Reed",
    jobTitle: "Founder & CEO of The Reeder",
    description: "B2B content strategist. Former Head of Content at Gong (scaled $0 to $200M+ ARR), Director of Content at Clari. Creator of Reed Between the Lines podcast.",
    url: "https://linkedin.com/in/devinreed",
    sameAs: [
      "https://linkedin.com/in/devinreed",
      "https://twitter.com/deaborhood",
    ],
    worksFor: {
      "@type": "Organization",
      name: "The Reeder",
    },
    knowsAbout: ["B2B Content Strategy", "LinkedIn Growth", "Thought Leadership", "SaaS Marketing", "Content Marketing"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Podcast",
    name: "Reed Between the Lines",
    description: "A podcast about B2B content strategy, marketing, and thought leadership by Devin Reed",
    url: "https://open.spotify.com/show/5u2UnlSJjYE7YVQZpLCJza",
    author: {
      "@type": "Person",
      name: "Devin Reed",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does The Reeder offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Reeder offers Content Marketing (Content Strategy Design, Marketing Advising, Influencer Marketing), LinkedIn Growth (CEO Strategy, B2B Leaders Training, Virtual Cohort Training), and Thought Leadership services (Executive Ghostwriting, POV Development, Speaking Prep).",
        },
      },
      {
        "@type": "Question",
        name: "Who is Devin Reed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Devin Reed is the founder of The Reeder and a B2B content strategist. He was the Head of Content at Gong where he helped scale the company from $0 to $200M+ ARR, and was Director of Content at Clari. He hosts the Reed Between the Lines podcast.",
        },
      },
      {
        "@type": "Question",
        name: "What is The Reeder's approach to content?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Reeder's approach is 'No fluff. Just content that stops the scroll, builds trust at scale, and turns awareness into pipeline.' They focus on creating unforgettable content that converts for B2B SaaS companies.",
        },
      },
      {
        "@type": "Question",
        name: "What companies has The Reeder worked with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Select clients include Notion, Wiz, FloQast, Centrical, UserEvidence, Cube Software, PebblePost, TestBox, Netenrich, Commsor, PathFactory, and Island.io.",
        },
      },
    ],
  },
];

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
        
        {/* Preconnect for fonts - improves performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://open.spotify.com" />
        <link rel="dns-prefetch" href="https://podcasts.apple.com" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        
        {/* AEO - LLM Context File */}
        <link rel="alternate" type="text/plain" href={`${basePath}/llms.txt`} title="LLM Context" />
        
        {/* Additional Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
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
