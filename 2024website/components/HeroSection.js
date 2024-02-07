import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import mascotImage from "../public/images/PH2024_MainGraphic.svg";
import backgroundDark from "../public/images/Website_NoBG_Dark.svg";
import backgroundLight from "../public/images/Website_NoBG_Light.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion } from "framer-motion";
import StarAnimation from "./StarAnimation";
import RegisterButton from "./RegisterButton";


const HeroSection = ({ selectedTheme, isWideWindow }) => {
  
  return (
    <div
      style={{
        background: `url(${selectedTheme === "dark" ? backgroundDark.src : backgroundLight.src
          })`,
        backgroundSize: selectedTheme === "dark" ? 'cover' : "cover",
        backgroundPosition: "center top",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Hero Content */}
      <Container
        style={{ display: "flex", justifyContent: "center", padding: "50px", zIndex: 3 }}
      >
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", alignItems: "center" }}
          >
            {/* Mascot Image */}

            {/* <img
              src={mascotImage.src}
              alt="Mascot"
              style={{
                display: "block",
                margin: "0 auto",
                width: "100%",
                height: "auto",
              }}
              id="animate-right"
            /> */}
            <motion.img
              src={mascotImage.src}
              alt="Mascot"
              style={{
                display: "block",
                margin: "0 auto",
                width: "100%",
                height: "auto",
              }}
              initial={{ opacity: 0, x: -100 }} // start from the left and faded out
              animate={{ opacity: 1, x: 0 }} // animate to fully visible and in position
              transition={{ duration: 1 }} // adjust duration as needed
              id="animate-right"
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
                style={{ marginBottom: "5px", color: "#ffecac" }}
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
                February 24-25th, 2024
              </Typography>

              <RegisterButton selectedTheme={selectedTheme} />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* <Container style={{zIndex: 2,}}>
        <IconButton
          aria-label="scroll down"
          color="accent" // Change to "primary" if "accent" doesn't work
          onClick={scrollToContent}
          style={{ position: "relative", top: "50px", left: "50%" }}
          id="downIndicator"
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Container> */}
      <StarAnimation />
    </div>
  );
};

export default HeroSection;
