import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Sponsor from "../components/Sponsor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pearl Hacks</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <HeroSection />
        <AboutUs />
        <Sponsor />
        <Footer />
      </main>
    </div>
  );
}
