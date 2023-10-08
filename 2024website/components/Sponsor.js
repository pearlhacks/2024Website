import React from "react";
import { Container, Typography, Link } from "@mui/material";
import SponsorList from "./SponsorList";

const Sponsor = ({ selectedTheme }) => {
  return (
    <div
      style={{
        backgroundColor: selectedTheme === "dark" ? "#42A5CC" : "#b2e0ef",
        minHeight: "100vh",
      }}
    >
      <Container
        style={{
          position: "relative",
          padding: "100px", // Add padding for spacing
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
          <SponsorList style={{ zIndex: 1 }} />
        </section>
      </Container>
    </div>
  );
};

export default Sponsor;
