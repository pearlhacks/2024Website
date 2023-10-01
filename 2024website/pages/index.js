import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Sponsor from "../components/Sponsor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home({ selectedTheme }) {
  return (
    <div>
      <Head>
        <title>Pearl Hacks</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <main>
        <HeroSection selectedTheme={selectedTheme} />
        <AboutUs selectedTheme={selectedTheme} />
        <Sponsor selectedTheme={selectedTheme} />
        <Footer
          backgroundColor={selectedTheme === "dark" ? "#42A5CC" : "#BBDFED"}
        />
      </main>
    </div>
  );
}
