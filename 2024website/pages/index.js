import Head from "next/head";
import HeroSection from "../components/HeroSection";
// import AboutUs from '../components/AboutUs'
import Anniversary from "../components/Anniversary";
import Sponsor from "../components/Sponsor";
import Footer from "../components/Footer";
import { useRef } from 'react';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ExpandMore';
import transitionSvgDark from '../public/images/HeroTransition_Dark.svg';
import transitionSvgLight from '../public/images/HeroTransition_Light.svg';

export default function Home({ selectedTheme, isWideWindow }) {
  const aboutUsRef = useRef(null); // Reference to the AboutUs component

  // Function to scroll to the AboutUs section
  const scrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Head>
        <title>Pearl Hacks</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>

      <main>
        <div style={{backgroundColor: selectedTheme === "dark" ? "#42A5CC" : "#b2e0ef",}}>
          <HeroSection isWideWindow={isWideWindow} selectedTheme={selectedTheme} />
          {/* Bouncing Arrow */}
        <motion.div
          initial={{ y: -30 }}
          animate={{ y: -20 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1
          }}
          style={{
            position: 'absolute',
            bottom: isWideWindow ? '70px' : '15px', // adjust as needed
            left: '50%',
            cursor: 'pointer',
            zIndex: 2,
            transform: 'translateX(-50%)', // Center the icon horizontally
          }}
          onClick={scrollToAboutUs}
        >
          <ArrowDownwardIcon style={{  color: selectedTheme === 'light' ? '#f7cf68' : '#1876BD', fontSize: '25px' }} />
        </motion.div>
        {<img
            src={selectedTheme === "light" ? transitionSvgDark.src : transitionSvgLight.src}
            alt="Hero Transition"
            style={{
              position: "absolute",
              bottom: -10,
              left: 0,
              backgroundSize: 'contain',
              width: "100%",
              zIndex: 1,
            }}
          />}
        <div ref={aboutUsRef}>
          {/* <AboutUs isWideWindow={isWideWindow} selectedTheme={selectedTheme} /> */}
          <Anniversary isWideWindow={isWideWindow} selectedTheme={selectedTheme} />
        </div>
          <Sponsor isWideWindow={isWideWindow} selectedTheme={selectedTheme} />
          
          
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
