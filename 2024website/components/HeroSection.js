import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import mascotImage from "../public/PH2024_MainGraphic.png";
import background from "../public/WebsiteBG_Updated.svg";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#267FAD", // Set background color to #267FAD
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center content horizontally
        justifyContent: "center", // Center content vertically
      }}
    >
      {/* Hero Content */}
      <div
        style={{
          background: `url(${background.src})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center top",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Navbar />
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
                <Typography variant="h3" component="h1">
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
    </div>
  );
};

export default HeroSection;
