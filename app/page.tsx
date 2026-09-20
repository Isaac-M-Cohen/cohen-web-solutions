import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee
          items={[
            "Free 15-minute site audit",
            "Fixed pricing, no surprises",
            "Live in weeks, not months",
            "You own everything",
            "Built in Miami",
          ]}
        />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
