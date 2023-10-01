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

// Client-side cache shared for the whole session
// of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [activeTheme, setActiveTheme] = useState(darkTheme);
  const [selectedTheme, setSelectedTheme] = useState("dark");
  function getActiveTheme(themeMode) {
    return themeMode === "light" ? lightTheme : darkTheme;
  }
  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);
  const toggleTheme = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";
    setSelectedTheme(desiredTheme);
  };

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
        />
        <Component
          {...pageProps}
          toggleTheme={toggleTheme}
          selectedTheme={selectedTheme}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
