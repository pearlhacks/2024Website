import React from "react";
import { Container, Typography, Link } from "@mui/material";

const Sponsor = () => {
  return (
    <div style={{ backgroundColor: "#42A5CC", minHeight: "100vh" }}>
      <Container
        style={{
          position: "relative",
          padding: "100px", // Add padding for spacing
        }}
      >
        <Typography variant="body1" align="center" pt={5}>
          Pearl Hacks would not be possible without help from our sponsors.
          Consider becoming a sponsor to support our efforts. For more
          information, email{" "}
          <Link href="mailto:sponsor@pearlhacks.com">
            sponsor@pearlhacks.com
          </Link>
          .
        </Typography>

        <section className="container pb-5 pt-3 rounded" id="sponsorlogos">
          <Typography variant="h3" align="center" mt={5}>
            Our 2023 Sponsors
          </Typography>
          {/* Add your sponsor board here */}
        </section>
      </Container>
    </div>
  );
};

export default Sponsor;
