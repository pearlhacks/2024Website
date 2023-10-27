import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import {
  ResourceCardWithInfo,
  ResourceCardWithText,
} from "../components/ResourceCard"; // Import the ResourceCard components
import resourcesData from "../public/data/resources.json"; // Import the resources data
import GenericLayout from "../components/GenericLayout";

const Resources = ({ toggleTheme, selectedTheme }) => {
  const beginnerResources = resourcesData["Beginner Hackers"];
  const generalHackingResources = resourcesData["General Hacking"];
  const nonTraditionalResources =
    resourcesData["Non-Traditional Technologists"];
  const mentalHealthResources = resourcesData["Social & Mental Resources"];
  const pastProjectsResources = resourcesData["Pearl Hacks Projects"];

  const [isWideWindow, setIsWideWindow] = useState(true);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsWideWindow(window.innerWidth >= 500); // Adjust the breakpoint as needed
    };

    // Add an event listener to check the window width
    window.addEventListener("resize", checkWindowWidth);

    // Initial check
    checkWindowWidth();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);
  return (
    <div>
      <GenericLayout
        isWideWindow={isWideWindow}
        selectedTheme={selectedTheme}
        title="Resources"
      >
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
      </GenericLayout>
    </div>
  );
};

export default Resources;
