import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Sponsor from "../components/Sponsor";
import Footer from "../components/Footer";
import transitionSvgDark from '../public/images/HeroTransition_Dark.svg';
import transitionSvgLight from '../public/images/HeroTransition_Light.svg';

export default function Home({ selectedTheme, isWideWindow }) {
  return (
    <div>
      <Head>
        <title>Pearl Hacks</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <main>
        <div>
          <HeroSection isWideWindow={isWideWindow} selectedTheme={selectedTheme} />
          <AboutUs isWideWindow={isWideWindow} selectedTheme={selectedTheme} />
          <Sponsor isWideWindow={isWideWindow} selectedTheme={selectedTheme} />
          {
            isWideWindow ? <img
            src={selectedTheme === "light" ? transitionSvgDark.src : transitionSvgLight.src}
            alt="Hero Transition"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              zIndex: 1,
            }}
          /> : null
          }
          
        </div>

        <Footer
          selectedTheme={"light"}
          backgroundColor={selectedTheme === "dark" ? "#42A5CC" : "#b2e0ef"}
          zIndex={1}
          isWideWindow={isWideWindow}
        />
      </main>
    </div>
  );
}
