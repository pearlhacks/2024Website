import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import transitionSvgDark from "../public/images/Transition.svg";
import transitionSvgLight from "../public/images/TransitionLight.svg";
import graphicSvg from "../public/images/Secondary Graphic no bg.svg";
import { SecondaryButton } from "./CustomButton";

const AboutUs = ({ selectedTheme }) => {
  return (
    <div
      style={{
        backgroundColor: selectedTheme == "dark" ? "#317fb0" : "#67afd3",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        <Container
          style={{
            position: "relative",
            padding: "100px", // Add padding for spacing
          }}
        >
          <Typography variant="h3" component="h1">
            What is Pearl Hacks?
          </Typography>
          <Typography
            variant="p"
            component="p"
            style={{ margin: "20px 0" }} // Add margin for spacing
          >
            Pearl Hacks is a hackathon for women and gender non-conforming
            individuals in tech. We especially cater to first-time hackers who
            are looking for a supportive environment to explore technology.
          </Typography>
          <Typography
            variant="p"
            component="p"
            style={{ margin: "20px 0" }} // Add margin for spacing
          >
            Participants work in teams to create incredible projects in 24 hours
            with the help of excellent mentors, workshops, and tech talks. All
            the while, they’ll get to meet some fantastic people, enjoy fun
            games, collect swag, and eat free food.
          </Typography>
          <Grid container spacing={2} marginBottom={"30px"}>
            <Grid item>
              <Link href="/about" passHref>
                <SecondaryButton>About Us</SecondaryButton>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://pearlhacks2023.devpost.com/" passHref>
                <SecondaryButton>Show Past Projects</SecondaryButton>
              </Link>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={"5px"}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center", // Center vertically
              }}
            >
              <img
                src={graphicSvg.src}
                alt="Your Image"
                style={{
                  width: "400px", // Adjust the width as needed
                  height: "auto", // Maintain aspect ratio
                  marginRight: "20px", // Add spacing between image and text
                }}
              />
              <div>
                <Typography variant="h4" component="p">
                  DON'T KNOW HOW TO CODE?
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  style={{ margin: "20px 0" }}
                >
                  Come anyway! We have workshops, mentors, and fun events for
                  all skill levels.
                </Typography>
                <Link href="/faq" passHref>
                  <SecondaryButton>More FAQs</SecondaryButton>
                </Link>
              </div>
            </div>
          </Grid>
        </Container>
      </div>
      <div
        style={{
          backgroundImage:
            selectedTheme == "dark"
              ? `url(${transitionSvgDark.src})`
              : `url(${transitionSvgLight.src})`,
          backgroundRepeat: "no-repeat",
          display: "flex",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          maxHeight: "800px",
          height: "500px",
        }}
      ></div>
    </div>
  );
};

export default AboutUs;
