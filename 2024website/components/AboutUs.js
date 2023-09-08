import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import transitionSvg from "../public/images/Transition.svg";
import graphicSvg from "../public/images/Secondary Graphic no bg.svg";
import { SecondaryButton } from "./CustomButton";

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundColor: "#267FAD",
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
              <SecondaryButton>About Us</SecondaryButton>
            </Grid>
            <Grid item>
              <SecondaryButton>Show Past Projects</SecondaryButton>
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
                <SecondaryButton>More FAQ</SecondaryButton>
              </div>
            </div>
          </Grid>
        </Container>
      </div>
      <div
        style={{
          backgroundImage: `url(${transitionSvg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "300px",
        }}
      ></div>
    </div>
  );
};

export default AboutUs;
