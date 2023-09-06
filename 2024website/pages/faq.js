import React from "react";
import { Container, Typography } from "@mui/material";
import aboutHeader from "../public/images/Header.svg"; // Import the SVG image
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Pearl Hacks</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <div
        style={{
          backgroundColor: "#ffecac", // Set the background color
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative", // Add this to allow absolute positioning of text
        }}
      >
        <Navbar backgroundColor={"#1876bd"} />
        <div
          style={{
            position: "relative",
            zIndex: 1, // Set a higher z-index value to place text above the image
          }}
        >
          <img
            src={aboutHeader.src}
            alt="About Header"
            style={{
              width: "100%",
              position: "relative",
              top: 0,
            }}
          />
          <Typography
            variant="h3" // Adjust the variant and styles as needed
            style={{
              position: "absolute",
              top: "35%", // Center vertically
              left: "50%", // Center horizontally
              transform: "translate(-50%, -50%)", // Center the text
              color: "#ffecac", // Text color
            }}
          >
            Pearl Hacks FAQs
          </Typography>
        </div>
        <Container style={{ padding: "0 100px" }}>
          {/* Your content for the About Page */}
          <Typography variant="h3" component="h1" style={{ color: "#267FAD" }}>
            About Pearl Hacks
          </Typography>
          <Typography variant="body1" style={{ color: "#267FAD" }}>
            This is some information about Pearl Hacks.
          </Typography>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default About;
