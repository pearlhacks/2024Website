import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import mascotImage from "../public/images/PH2024_MainGraphic.png";
import background from "../public/images/WebsiteBG_Updated.svg";

const HeroSection = () => {
  return (
    <div
      style={{
        background: `url(${background.src})`, // Set background image
        backgroundSize: "cover", // Make the background cover the entire element
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center content horizontally
        justifyContent: "center", // Center content vertically
      }}
    >
      {/* Hero Content */}
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", alignItems: "center" }}
          >
            {/* Mascot Image */}
            <img
              src={mascotImage.src}
              alt="Mascot"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", alignItems: "center" }}
          >
            {/* Text Content */}
            <div>
              <Typography variant="h3" component="h4">
                Soar with
              </Typography>
              <Typography variant="h2" component="p">
                PEARL HACKS
              </Typography>
              <Typography variant="subtitle1" component="p">
                February 23-25th, 2024
              </Typography>
              <Button variant="contained" color="primary">
                Register now
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroSection;
