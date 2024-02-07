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
      style={{ marginTop: '-15vh'}}
    >
      
      <Container
        style={{
          position: "relative",
          paddingLeft: "50px", // Add padding for spacing
          paddingRight: "50px", // Add padding for spacing
          zIndex: 2,
        }}
      >
        <section className="container pb-5 pt-3 rounded" id="sponsorlogos">
          {/* Add your sponsor board here */}
          <Typography variant="h3" align="center" mt={5} mb={5}>
            Our 2024 Sponsors
          </Typography>
          <SponsorList isWideWindow={isWideWindow} style={{ zIndex: 3 }} />
        </section>
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

        
        
        
      </Container>
    </div>
  );
};

export default Sponsor;
