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
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <main>
        <Navbar backgroundColor={"transparent"} />
        <HeroSection />
        <AboutUs />
        <Sponsor />
        <Footer backgroundColor={"#42A5CC"} />
      </main>
    </div>
  );
}
