import React from "react";
import {Typography} from "@mui/material";
import leftImage from "../public/images/Photo1.JPG"; // Add your left image path
import rightImage from "../public/images/Photo2.JPG"; // Add your right image path
import { PrimaryButton } from "../components/CustomButton";
import GenericLayout from "../components/GenericLayout";
import Team from "../components/Team";

const About = ({ selectedTheme, isWideWindow }) => {
  return (
    <div>
      <GenericLayout
        title="About Us"
        isWideWindow={isWideWindow}
        selectedTheme={selectedTheme}
      >
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
            color={selectedTheme == "light" ? "#1876bd" : "#F5EDC9"}
            style={{ marginBottom: "20px" }}
          >
            <img
              src={leftImage.src}
              alt="Left Image"
              style={
                isWideWindow
                  ? {
                      float: "right",
                      width: "50%", // Adjust the size as needed
                      marginLeft: "20px", // Add some margin between the images
                      marginBottom: "20px", // Add some margin below the image
                      borderRadius: "5px", // Add rounded corners
                    }
                  : {
                      width: "100%", // Make the image take up the full width on narrow screens
                      marginBottom: "20px", // Add some margin below the image
                      borderRadius: "5px", // Add rounded corners
                    }
              }
            />
            Pearl Hacks was first held in 2014 as one of the only
            beginner-friendly hackathons targeted towards women at the time. It
            was organized in response to the boom in college hackathons, where
            students got to spend a weekend bringing their technological ideas
            to life with the help of their peers and industry professionals.
            <br /> <br /> But while those hackathons were great at immersing
            students into tech, it was clear that the gender gap and the often
            intimidating environment at those events was stopping a lot of women
            of all skill levels from signing up. The first Pearl Hacks,
            organized by UNC alumni Maegan Clawges, brought in 250 female high
            school and college students in the hopes of providing them with a
            great hackathon experience that sidestepped these issues.
          </Typography>
          <br />
          <br />
          <br />
          <Typography
            variant="p"
            color={selectedTheme == "light" ? "#1876bd" : "#F5EDC9"}
            style={{ marginBottom: "20px" }}
          >
            <img
              src={rightImage.src}
              alt="Right Image"
              style={
                isWideWindow
                  ? {
                      float: "left",
                      width: "50%", // Adjust the size as needed
                      marginRight: "20px", // Add some margin between the images

                      marginBottom: "20px", // Add some margin below the image
                      borderRadius: "5px", // Add rounded corners
                    }
                  : {
                      width: "100%", // Make the image take up the full width on narrow screens
                      marginBottom: "20px", // Add some margin below the image
                      borderRadius: "5px", // Add rounded corners
                    }
              }
            />
            By growing and learning from the last eight years of Pearl Hacks
            (which has nearly tripled in size), we now strive to be an open and
            inclusive environment for gender minorities to experience
            hackathons, and hopefully dive deeper into the world of technology
            after experiencing a weekend with us.
            <br /> <br /> First-timers are welcomed to join no matter their
            level of experience. All that awaits you is a weekend of meeting
            amazing people, learning about technology, and free swag and prizes.
            We hope you join us at this wonderful event!
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
          <br />
          <br />
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
          <Typography
            variant="p"
            color={selectedTheme == "light" ? "#1876bd" : "#F5EDC9"}
          >
            Pearl Hacks is an event designed to uplift and center women and
            gender non-conforming individuals in tech. We expect all of our
            mentors, volunteers, participants, directors, sponsors, judges, and
            visitors to be respectful of our participants’ gender identities and
            expressions.
          </Typography>
        </div>
        <div style={{ marginTop: "20px" }}>
          {/* Right image */}
          <br />
          <br />
          <Typography
            variant="h3"
            color={"#eda901"}
            style={{ marginBottom: "20px" }}
          >
            Our Team
          </Typography>
          <Team selectedTheme={selectedTheme} isWideWindow={isWideWindow}  />
        </div>
      </GenericLayout>
    </div>
  );
};

export default About;
