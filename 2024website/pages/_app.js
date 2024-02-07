// _app.js

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { BackToTopButton } from "../components/BackToTopButton";
// Client-side cache shared for the whole session
// of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [isVisible, setIsVisible] = useState(false);

  // Function to get the active theme based on selectedTheme
  function getActiveTheme(themeMode) {
    return themeMode === "light" ? lightTheme : darkTheme;
  }

  // Function to toggle the theme
  const toggleTheme = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";
    // setSelectedTheme('desiredTheme');
    setSelectedTheme('desiredTheme')
  };

  // Function to check if the user has scrolled down
  const toggleVisibility = () => {
    const scrolled = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercent = (scrolled / (documentHeight - windowHeight)) * 100;
    if (scrollPercent > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Automatically change the theme based on time
  useEffect(() => {
    const currentTime = new Date().getHours();
    const isDayTime = currentTime >= 6 && currentTime < 17; // You can adjust the time range as needed
    setSelectedTheme(isDayTime ? "light" : "dark");
  }, []);

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  const [isWideWindow, setIsWideWindow] = useState(true);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsWideWindow(window.innerWidth >= 600); // Adjust the breakpoint as needed
    };

    // Add an event listener to check the window width
    window.addEventListener("resize", checkWindowWidth);

    // Initial check
    checkWindowWidth();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={activeTheme}>
        {/* CssBaseline kickstart an elegant,
        consistent, and simple baseline to
        build upon. */}
        <CssBaseline />
        <Navbar
          backgroundColor={"transparent"}
          toggleTheme={toggleTheme}
          selectedTheme={selectedTheme}
          isWideWindow={isWideWindow}
        />
        <Component
          {...pageProps}
          toggleTheme={toggleTheme}
          selectedTheme={selectedTheme}
          isWideWindow={isWideWindow}
        />
        {isVisible && <BackToTopButton isWideWindow={isWideWindow} />}
        
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
