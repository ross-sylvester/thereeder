import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Podcast } from "@/components/sections/Podcast";
import { Newsletter } from "@/components/sections/Newsletter";
import { CookieConsent } from "@/components/CookieConsent";
import { BookCallButton } from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: "Insights | The Reeder - Podcast & Newsletter",
  description: "Reed Between the Lines podcast and The Reeder Newsletter. Raw conversations and weekly insights for B2B marketers.",
};

export default function InsightsPage() {
  return (
    <main id="main-content" className="min-h-screen" role="main">
      <Navigation />
      <div className="pt-20">
        <Podcast />
        <Newsletter />
      </div>
      <Footer />
      <CookieConsent />
      <BookCallButton />
    </main>
  );
}


