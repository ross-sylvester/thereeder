import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";
import { CookieConsent } from "@/components/CookieConsent";
import { BookCallButton } from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: "About | The Reeder - B2B Content Consultancy",
  description: "The Reeder is a content consultancy for B2B brands that are done playing it safe. Led by Devin Reed, the strategist behind Gong and Clari's growth.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen" role="main">
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
      <CookieConsent />
      <BookCallButton />
    </main>
  );
}


