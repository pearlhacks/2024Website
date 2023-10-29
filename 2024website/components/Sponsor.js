import React from "react";
import { Container, Typography, Link } from "@mui/material";
import SponsorList from "./SponsorList";
import AccentLight2 from "../public/images/AccentLight2.svg";
import AccentDark2 from "../public/images/AccentDark2.svg";
import AccentLight4 from "../public/images/AccentLight4.svg";
import AccentDark4 from "../public/images/AccentDark4.svg";

const Sponsor = ({ selectedTheme, isWideWindow }) => {

  return (
    <div
      style={{
        backgroundColor: selectedTheme === "dark" ? "#42A5CC" : "#b2e0ef",
        minHeight: "100vh",
      }}
    >
      {isWideWindow ? (
        <div>
          <img
        src={selectedTheme == "light" ? AccentLight4.src : AccentDark4.src} // Replace with the path to your left overlay SVG
        alt="Left Overlay"
        style={{
          position: "absolute",
          right: "0",
          top: "280vh", // Adjust the top value to move it down
          zIndex: 1, // Adjust the z-index as needed
          width: "auto", // Adjust the width as needed
          height: "60vh", // Maintain aspect ratio
        }}
      />
      <img
        src={selectedTheme === "light" ? AccentLight2.src : AccentDark2.src} // Replace with the path to your right overlay SVG
        alt="Right Overlay"
        style={{
          position: "absolute",
          height: "80vh",
          width: "auto",
          top: "300vh", // Adjust the top value to move it down
          left: "0",
          zIndex: 1, // Adjust the z-index as needed
        }}
      />
        </div>
      ) : null}
      
      <Container
        style={{
          position: "relative",
          padding: "50px", // Add padding for spacing
          zIndex: 2,
        }}
      >
        <Typography
          body1="p"
          color={selectedTheme === "dark" ? "#F5EDC9" : "#1876bd"}
          align="center"
          pt={5}
        >
          Pearl Hacks would not be possible without help from our sponsors.
          Consider becoming a sponsor to support our efforts. For more
          information, email{" "}
          <Link
            color="#F5EDC9"
            href="mailto:sponsor@pearlhacks.com"
            style={{
              textDecoration: "none",
              backgroundColor: "#eda901",
              padding: "2px 5px",
              borderRadius: "15px",
            }}
          >
            sponsor@pearlhacks.com
          </Link>
          .
        </Typography>

        <section className="container pb-5 pt-3 rounded" id="sponsorlogos">
          {/* Add your sponsor board here */}
          <Typography variant="h3" align="center" mt={5} mb={5}>
            Our 2023 Sponsors
          </Typography>
          <SponsorList isWideWindow={isWideWindow} style={{ zIndex: 3 }} />
        </section>
      </Container>
    </div>
  );
};

export default Sponsor;
