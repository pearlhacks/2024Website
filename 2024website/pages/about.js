import React from "react";
import { Container, Typography, Button } from "@mui/material";
import aboutHeader from "../public/images/Header.svg";
import leftImage from "../public/images/Photo1.JPG"; // Add your left image path
import rightImage from "../public/images/Photo2.JPG"; // Add your right image path
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { PrimaryButton } from "../components/CustomButton";

const About = () => {
  return (
    <div>
      <Head>
        <title>Pearl Hacks</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <div
        style={{
          backgroundColor: "#ffecac",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Navbar backgroundColor={"#1876bd"} />
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src={aboutHeader.src}
            alt="About Header"
            style={{
              width: "100%",
              position: "relative",
              top: 0,
            }}
          />
          <Typography
            variant="h2"
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#F5EDC9",
            }}
          >
            About Us
          </Typography>
        </div>
        <Container style={{ padding: "0 100px", marginTop: "20px" }}>
          <div>
            {/* Left image */}
            <Typography
              variant="h3"
              color={"#eda901"}
              style={{ marginBottom: "20px" }}
            >
              Our Beginnings
            </Typography>

            <Typography
              variant="p"
              color={"#1876bd"}
              style={{ marginBottom: "20px" }}
            >
              <img
                src={leftImage.src}
                alt="Left Image"
                style={{
                  float: "right",
                  width: "50%", // Adjust the size as needed
                  marginLeft: "20px", // Add some margin between the images
                  marginBottom: "20px", // Add some margin below the image
                  borderRadius: "5px", // Add rounded corners
                }}
              />
              Pearl Hacks was first held in 2014 as one of the only
              beginner-friendly hackathons targeted towards women at the time.
              It was organized in response to the boom in college hackathons,
              where students got to spend a weekend bringing their technological
              ideas to life with the help of their peers and industry
              professionals.
              <br /> <br /> But while those hackathons were great at immersing
              students into tech, it was clear that the gender gap and the often
              intimidating environment at those events was stopping a lot of
              women of all skill levels from signing up. The first Pearl Hacks,
              organized by UNC alumni Maegan Clawges, brought in 250 female high
              school and college students in the hopes of providing them with a
              great hackathon experience that sidestepped these issues.
            </Typography>
            <br />
            <br />
            <Typography
              variant="p"
              color={"#1876bd"}
              style={{ marginBottom: "20px" }}
            >
              <img
                src={rightImage.src}
                alt="Right Image"
                style={{
                  float: "left",
                  width: "50%", // Adjust the size as needed
                  marginRight: "20px", // Add some margin between the images

                  marginBottom: "20px", // Add some margin below the image
                  borderRadius: "5px", // Add rounded corners
                }}
              />
              By growing and learning from the last eight years of Pearl Hacks
              (which has nearly tripled in size), we now strive to be an open
              and inclusive environment for gender minorities to experience
              hackathons, and hopefully dive deeper into the world of technology
              after experiencing a weekend with us.
              <br /> <br /> First-timers are welcomed to join no matter their
              level of experience. All that awaits you is a weekend of meeting
              amazing people, learning about technology, and free swag and
              prizes. We hope you join us at this wonderful event!
            </Typography>
            <div
              class="text-center pt-5"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                alignContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <PrimaryButton
                href="https://maeganclawges.com/web/pearlhacks.html"
                target="_blank" // Open the link in a new tab
              >
                Learn more
              </PrimaryButton>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            {/* Right image */}

            <Typography
              variant="h3"
              color={"#eda901"}
              style={{ marginBottom: "20px" }}
            >
              Inclusivity Statement
            </Typography>
            <Typography variant="p" color={"#1876bd"}>
              Pearl Hacks is an event designed to uplift and center women and
              gender non-conforming individuals in tech. We expect all of our
              mentors, volunteers, participants, directors, sponsors, judges,
              and visitors to be respectful of our participants’ gender
              identities and expressions.
            </Typography>
          </div>
        </Container>

        <Footer />
      </div>
    </div>
  );
};

export default About;
