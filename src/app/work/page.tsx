import { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/sections/Services";
import { CookieConsent } from "@/components/CookieConsent";
import { BookCallButton } from "@/components/BookCallButton";

export const metadata: Metadata = {
  title: "Work | The Reeder - Content Strategy & LinkedIn Growth",
  description: "Content Strategy Design, Marketing Advising, Influencer Marketing, and LinkedIn Growth programs for B2B SaaS companies.",
};

export default function WorkPage() {
  return (
    <main id="main-content" className="min-h-screen" role="main">
      <Navigation />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <CookieConsent />
      <BookCallButton />
    </main>
  );
}


