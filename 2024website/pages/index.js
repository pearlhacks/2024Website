import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Sponsor from "../components/Sponsor";
import Footer from "../components/Footer";
import accentDark from "../public/images/LandingPage_Accents.svg";

export default function Home({ selectedTheme }) {
  const containerStyle = {
    position: "relative",
    // Add more styles as needed
  };

  const accentStyle = {
    position: "absolute",
    backgroundSize: "cover",
    top: 0,
    left: 0,
    transform: "scale(1, 0.8)", // Scale both width and height (adjust as needed)
    zIndex: 1, // Ensure the accent is behind the content
    // Adjust other styles like width and height to fit your design
  };

  return (
    <div>
      <Head>
        <title>Pearl Hacks</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <main>
        <div style={containerStyle}>
          <HeroSection selectedTheme={selectedTheme} />

          <AboutUs selectedTheme={selectedTheme} />
          <Sponsor selectedTheme={selectedTheme} />
        </div>

        <Footer
          backgroundColor={selectedTheme === "dark" ? "#42A5CC" : "#BBDFED"}
          zIndex={2}
        />
      </main>
    </div>
  );
}
