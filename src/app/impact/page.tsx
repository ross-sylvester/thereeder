import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Results } from "@/components/sections/Results";
import { CookieConsent } from "@/components/CookieConsent";
import { BookCallButton } from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: "Impact | The Reeder - Proven B2B Content Results",
  description: "From $20M to $200M ARR at Gong. 700K+ LinkedIn followers. See the results we've delivered for B2B brands.",
};

export default function ImpactPage() {
  return (
    <main id="main-content" className="min-h-screen" role="main">
      <Navigation />
      <div className="pt-20">
        <Results />
      </div>
      <Footer />
      <CookieConsent />
      <BookCallButton />
    </main>
  );
}


