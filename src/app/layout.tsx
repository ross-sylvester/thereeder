import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter - clean, modern, used by top tech companies
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const basePath = process.env.NODE_ENV === 'production' ? '/thereeder' : '';
const siteUrl = process.env.NODE_ENV === 'production' 
  ? 'https://ross-sylvester.github.io/thereeder' 
  : 'http://localhost:3000';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

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

// Structured Data for SEO
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "The Reeder",
    description: "B2B Content Strategy & Consulting by Devin Reed.",
    url: siteUrl,
    founder: {
      "@type": "Person",
      name: "Devin Reed",
      jobTitle: "Founder & CEO",
    },
    serviceType: ["Content Strategy", "LinkedIn Growth", "Content Marketing"],
    areaServed: "Worldwide",
    foundingDate: "2017",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="dns-prefetch" href="https://open.spotify.com" />
        <link rel="dns-prefetch" href="https://podcasts.apple.com" />
        <link rel="manifest" href={`${basePath}/manifest.json`} />
      </head>
      <body className="min-h-screen antialiased bg-background text-foreground">
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
