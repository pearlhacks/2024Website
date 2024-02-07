import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import Link from "next/link";
import transitionSvgDark from "../public/images/Transition.svg";
import transitionSvgLight from "../public/images/TransitionLight.svg";
import AccentLight1 from "../public/images/AccentLight1.svg";
import AccentLight3 from "../public/images/AccentLight3.svg";
import AccentDark1 from "../public/images/AccentDark1.svg";
import AccentDark3 from "../public/images/AccentDark3.svg";
import HackerL from "../public/images/HackerL.svg"
import HackerD from "../public/images/HackerD.svg"
import { SecondaryButton } from "./CustomButton";
import AchievementBanner from "./AchievementBanner";
import Carousel from "./Carousel";
import testimonies from '../public/data/testimonies.json'

const Anniversary = ({ selectedTheme, isWideWindow }) => {
  return (
    <div
      style={{
        backgroundColor: selectedTheme == "dark" ? "#247fad" : "#67afd3",
        minHeight: "100vh",
        display: "flex",

        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          position: "relative",
          paddingLeft: isWideWindow ? "100px" : "35px",
          paddingRight: isWideWindow ? "100px" : "35px",
        }}
      >
        {isWideWindow ? 
        (<div><img
          src={selectedTheme == "light" ? AccentLight1.src : AccentDark1.src} // Replace with the path to your left overlay SVG
          alt="Left Overlay"
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            zIndex: 2, // Adjust the z-index as needed
            width: "auto", // Adjust the width as needed
            height: "30vh", // Maintain aspect ratio
          }}
        />
        <img
          src={selectedTheme === "light" ? AccentLight3.src : AccentDark3.src} // Replace with the path to your right overlay SVG
          alt="Right Overlay"
          style={{
            position: "absolute",
            height: "60vh",
            width: "auto",
            left: "0",
            bottom: "-20vh",
            zIndex: 1, // Adjust the z-index as needed
          }}
        /></div>) : null}
        <Container
          style={{
            position: "relative",
            paddingTop: "200px", // Add padding for spacing
            padding: isWideWindow ? "50px" : '20px', // Add padding for spacing
            textAlign: "center",
            alignContent: "center",
            zIndex: 1000,
          }}
        >
         
          <br />
          <br />
          <br />
          <Typography variant="h3" component="h1">
            Join Us to Celebrate Pearl Hacks's
          </Typography>
          <br />
          <br />
          <img
          src={selectedTheme === "light" ? HackerL.src : HackerD.src} // Replace with the path to your right overlay SVG
          style = {{
            width: "100%"
          }}
          alt="Right Overlay" />
          <br />
          <br />
 
          <Typography
            variant="p"
            component="p"
            style={{ margin: "20px 0" }} // Add margin for spacing
          >
            Pearl Hacks is a hackathon for women and gender non-conforming
            individuals in tech. We especially cater to first-time hackers who
            are looking for a supportive environment to explore technology. Participants work in teams to create incredible projects in 24 hours
            with the help of excellent mentors, workshops, and tech talks. All
            the while, they’ll get to meet some fantastic people, enjoy fun
            games, collect swag, and eat free food.
          </Typography>
          
          <Grid container spacing={2} marginBottom={"30px"} justifyContent="center">
            <Grid item>
              <Link href="/about" passHref>
                <SecondaryButton>About Us</SecondaryButton>
              </Link>
            </Grid>
            <Grid item>
              <Link underline='none' href="https://pearlhacks2023.devpost.com/" passHref>
                <SecondaryButton>Show Past Projects</SecondaryButton>
              </Link>
            </Grid>
          </Grid>
          <br />
          <br />

          <Typography variant="h3" component="h1">
            Our Achievements
          </Typography>
          <br />
          <Grid container justifyContent="center" spacing={isWideWindow ? 8 : 0} marginBottom={"30px"}>
            <Grid item>
              <AchievementBanner selectedTheme={selectedTheme} text={"30+ sponsors"} />
            </Grid>
            <Grid item>
              <AchievementBanner selectedTheme={selectedTheme} text={"1000+ hackers"} />
            </Grid>
            <Grid item>
              <AchievementBanner selectedTheme={selectedTheme} text={"70+ projects"} />
            </Grid>
          </Grid>
          <br />
          <br />

          <Typography variant="h3" component="h1">
            Testimonies
          </Typography>
          <br />
          <Carousel selectedTheme={selectedTheme} isWideWindow={isWideWindow} items={testimonies} />
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
          backgroundPositionX: "center",
          backgroundSize: "cover",
          backgroundPositionY: "-20",
          width: "100%",
          maxHeight: "600px",
          height: "100vh",
        }}
      ></div>
    </div>
  );
};

export default Anniversary;
