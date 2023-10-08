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

const Resources = ({ toggleTheme, selectedTheme }) => {
  const beginnerResources = resourcesData["Beginner Hackers"];
  const generalHackingResources = resourcesData["General Hacking"];
  const nonTraditionalResources =
    resourcesData["Non-Traditional Technologists"];
  const mentalHealthResources = resourcesData["Social & Mental Resources"];
  const pastProjectsResources = resourcesData["Pearl Hacks Projects"];

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
              color: "#FFFFFF",
            }}
          >
            Resources
          </Typography>
        </div>
        <Container style={{ padding: "0 100px" }}>
          {/* Display Past Projects */}
          <Typography variant="h3" component="h2" style={{ color: "#eda901" }}>
            Past Projects
          </Typography>
          <Grid container spacing={2} direction="row">
            {pastProjectsResources.map((resource, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ResourceCardWithInfo
                  title={resource["Title"]}
                  link={resource["Link"]}
                  icon={resource["Icon"]}
                />
              </Grid>
            ))}
          </Grid>
          <br />
          <br />
          <br />
          {/* Display Beginner Hackers Resources */}
          <Typography variant="h3" component="h2" style={{ color: "#eda901" }}>
            Useful Tools & Articles
          </Typography>
          <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={6}>
              <ResourceCardWithText
                heading={"Beginner Hackers"}
                links={beginnerResources.map((resource, index) => ({
                  text: resource["Title"],
                  url: resource["Link"],
                }))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ResourceCardWithText
                heading={"General Hacking"}
                links={generalHackingResources.map((resource, index) => ({
                  text: resource["Title"],
                  url: resource["Link"],
                }))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ResourceCardWithText
                heading={"Non-Traditional Technologists"}
                links={nonTraditionalResources.map((resource, index) => ({
                  text: resource["Title"],
                  url: resource["Link"],
                }))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ResourceCardWithText
                heading={"Social & Mental Resources"}
                links={mentalHealthResources.map((resource, index) => ({
                  text: resource["Title"],
                  url: resource["Link"],
                }))}
              />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default Resources;
