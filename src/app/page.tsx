import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Results } from "@/components/sections/Results";
import { Podcast } from "@/components/sections/Podcast";
import { Newsletter } from "@/components/sections/Newsletter";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen" role="main">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Results />
      <Podcast />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
