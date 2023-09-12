import React from "react";
import { Card, CardContent, Typography, Link } from "@mui/material";
import { styled } from "@mui/system"; // Import styled from @mui/system

const ResourceCardWrapper = styled(Card)(({ theme }) => ({
  background: "#FFFFF", // Set background color
  fontFamily: "ProximaNova", // Use ProximaNova font
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: ".5rem", // Smaller border radius
  margin: "1rem", // Add spacing between cards
  padding: "1rem", // Smaller padding
  boxShadow: "0 1px 3px rgba(0, 0, 0, .2)",
  transition: "all 0.2s ease-in-out",
  height: "auto",
  gridAutoRows: "1fr",
  textDecoration: "none",
  "&:hover": {
    transform: "scale(1.02)",
    cursor: "pointer",
  },
  "& img": {
    height: "2rem", // Smaller icon size
    width: "auto",
    marginBottom: "0.5rem", // Smaller margin
  },
}));

const ResourceCardWithInfo = ({ icon, title, link }) => {
  return (
    <ResourceCardWrapper component={Link} href={link} target="_blank">
      <CardContent>
        {icon && <img src={icon} alt="Resource Icon" />}
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </ResourceCardWrapper>
  );
};

const ResourceCardWithText = ({ heading, text, links }) => {
  return (
    <ResourceCardWrapper>
      <CardContent>
        <Typography variant="h6">{heading}</Typography>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.url} target="_blank">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <Typography variant="body1">{text}</Typography>
      </CardContent>
    </ResourceCardWrapper>
  );
};

export { ResourceCardWithInfo, ResourceCardWithText };
