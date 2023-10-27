import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Sponsor from "../components/Sponsor";
import Footer from "../components/Footer";
import accentDark from "../public/images/LandingPage_Accents.svg";

export default function Home({ selectedTheme }) {
  return (
    <div>
      <Head>
        <title>Pearl Hacks</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <main>
        <div>
          <HeroSection selectedTheme={selectedTheme} />

          <AboutUs selectedTheme={selectedTheme} />
          <Sponsor selectedTheme={selectedTheme} />
        </div>

        <Footer
          selectedTheme={"light"}
          backgroundColor={selectedTheme === "dark" ? "#42A5CC" : "#b2e0ef"}
          zIndex={2}
        />
      </main>
    </div>
  );
}
