import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import mascotImage from "../public/images/PH2024_MainGraphic.svg";
import backgroundDark from "../public/images/WebsiteBG_Updated.svg";
import backgroundLight from "../public/images/Website_BG_Light.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { HeroButton } from "./CustomButton";
const HeroSection = ({ selectedTheme }) => {
  console.log(selectedTheme);
  return (
    <div
      style={{
        background:
          selectedTheme === "dark"
            ? `url(${backgroundDark.src})`
            : `url(${backgroundLight.src})`, // Set background image
        backgroundSize: "cover", // Make the background cover the entire element
        backgroundPositionX: "center", // Center the background horizontally
        backgroundPositionY: "top", // Move the background image to the top
        height: "120vh", // Set the height to 100% of the viewport height
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center content horizontally
        justifyContent: "center", // Center content vertically
      }}
    >
      {/* Hero Content */}
      <Container
        style={{ display: "flex", justifyContent: "center", padding: "50px" }}
      >
        <Grid container spacing={4}>
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
              style={{
                display: "block",
                margin: "0 auto",
                width: "100%",
                height: "auto",
                animation:
                  "flyInFromLeft 1s ease-in-out, bobble 0.5s alternate infinite, launch 1s ease-in-out",
              }}
            />
          </Grid>
          {/* create horizontal width */}
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", alignItems: "center" }}
          >
            {/* Text Content */}
            <div>
              <Typography
                variant="h3"
                component="h4"
                style={{
                  fontStyle: "italic",
                  color: selectedTheme === "dark" ? "#96d0ff" : "#1876bd",
                  marginBottom: "5px",
                }}
              >
                rise with
              </Typography>

              <Typography
                variant="h1"
                component="p"
                style={{ marginBottom: "5px" }}
              >
                PEARL HACKS
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: selectedTheme === "dark" ? "#96d0ff" : "#1876bd",
                  marginBottom: "5px",
                  fontWeight: "700",
                }}
              >
                <AccessTimeIcon style={{ marginRight: "8px" }} />
                February 23-25th, 2024
              </Typography>

              <HeroButton theme={selectedTheme}>
                <a
                  href="https://pearlhacks.us17.list-manage.com/subscribe?u=211594c9660fc6331ed123271&id=ebe9408826"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Register now
                </a>
              </HeroButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroSection;
