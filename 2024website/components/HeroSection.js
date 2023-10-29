import React, { useState, useEffect } from "react";
import { Container, Typography, IconButton, Grid } from "@mui/material";
import mascotImage from "../public/images/PH2024_MainGraphic.svg";
import backgroundDark from "../public/images/Website_BG_Dark.svg";
import backgroundLight from "../public/images/Website_BG_Light.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { HeroButton } from "./CustomButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../styles/animation.module.css";
import { motion } from "framer-motion";


const scrollToContent = () => {
  window.scrollTo({
    top: 1000, // Scroll to 20px from the top
    behavior: "smooth",
  });
};

const HeroSection = ({ selectedTheme }) => {
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      x: -100, // Start from the left
    },
    animate: {
      opacity: 1,
      x: 0, // Move to its original position
      transition: {
        duration: 1, // Animation duration
        ease: "easeOut", // Easing function
      },
    },
  };
  return (
    <div
      style={{
        background: `url(${
          selectedTheme === "dark" ? backgroundDark.src : backgroundLight.src
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Hero Content */}
      <Container
        style={{ display: "flex", justifyContent: "center", padding: "50px", zIndex:2 }}
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
                width: "90%",
                height: "auto",
              }}
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
                  Join mailing list
                </a>
              </HeroButton>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container style={{zIndex: 2,}}>
        <IconButton
          aria-label="scroll down"
          color="accent" // Change to "primary" if "accent" doesn't work
          onClick={scrollToContent}
          style={{ position: "relative", top: "50px", left: "50%" }}
          id="downIndicator"
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Container>
      
    </div>
  );
};

export default HeroSection;
