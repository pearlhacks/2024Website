import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import aboutHeader from "../public/images/Header.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import {
  ResourceCardWithInfo,
  ResourceCardWithText,
} from "../components/ResourceCard"; // Import the ResourceCard components
import resourcesData from "../public/data/resources.json"; // Import the resources data

const Resources = () => {
  // Filter resources by category
  const beginnerResources = resourcesData.filter(
    (resource) => resource["Category"] === "Beginner Hackers"
  );
  const generalHackingResources = resourcesData.filter(
    (resource) => resource["Category"] === "General Hacking"
  );
  const nonTraditionalResources = resourcesData.filter(
    (resource) => resource["Category"] === "Non-Traditional Technologists"
  );
  const pastProjectsResources = resourcesData.filter(
    (resource) => resource["Category"] === "Past Pearl Hacks Projects"
  );

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
              color: "#ffecac",
            }}
          >
            Resources
          </Typography>
        </div>
        <Container style={{ padding: "0 100px" }}>
          {/* Display Beginner Hackers Resources */}
          <Typography variant="h3" component="h2" style={{ color: "#eda901" }}>
            Beginner Hackers
          </Typography>
          <Grid container spacing={2} direction="row">
            {beginnerResources.map((resource, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ResourceCardWithText
                  heading={resource["Title"]}
                  text={resource["More Info"]}
                  links={[
                    {
                      text: "Learn More",
                      url: resource["Link"],
                    },
                  ]}
                />
              </Grid>
            ))}
          </Grid>

          {/* Display General Hacking Resources */}
          <Typography variant="h3" component="h2" style={{ color: "#eda901" }}>
            General Hacking
          </Typography>
          <Grid container spacing={2} direction="row">
            {generalHackingResources.map((resource, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ResourceCardWithText
                  heading={resource["Title"]}
                  text={resource["More Info"]}
                  links={[
                    {
                      text: "Learn More",
                      url: resource["Link"],
                    },
                  ]}
                />
              </Grid>
            ))}
          </Grid>

          {/* Display Non-Traditional Technologists Resources */}
          <Typography variant="h3" component="h2" style={{ color: "#eda901" }}>
            Non-Traditional Technologists
          </Typography>
          <Grid container spacing={2} direction="row">
            {nonTraditionalResources.map((resource, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ResourceCardWithText
                  heading={resource["Title"]}
                  text={resource["More Info"]}
                  links={[
                    {
                      text: "Learn More",
                      url: resource["Link"],
                    },
                  ]}
                />
              </Grid>
            ))}
          </Grid>

          {/* Display Past Pearl Hacks Projects */}
          {pastProjectsResources.map((resource, index) => (
            <ResourceCardWithInfo
              key={index}
              title={resource["Title"]}
              link={resource["Link"]}
              icon={resource.icon}
            />
          ))}
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default Resources;
