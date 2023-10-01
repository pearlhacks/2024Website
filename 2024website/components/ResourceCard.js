import React from "react";
import { Card, CardContent, Typography, Link } from "@mui/material";
import { styled } from "@mui/system"; // Import styled from @mui/system

const ResourceCardWrapper = styled(Card)(({ theme }) => ({
  background: "#FFFFF", // Set background color
  fontFamily: "ProximaNova", // Use ProximaNova font
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // Stretch card content vertically
  alignContent: "center",
  alignItems: "flex-start",
  borderRadius: ".5rem", // Smaller border radius
  margin: "1rem", // Add spacing between cards
  padding: "1rem", // Smaller padding
  boxShadow: "0 1px 3px rgba(0, 0, 0, .2)",
  transition: "all 0.2s ease-in-out",
  height: "90%", // Ensure cards take up all available vertical space
  textDecoration: "none",
  "&:hover": {
    transform: "scale(1.02)",
    cursor: "pointer",
  },
  "& img": {
    height: "2.5rem", // Smaller icon size
    marginBottom: "0.5rem", // Add spacing between icon and text
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
  const linkStyles = {
    textDecoration: "none", // Remove underline
    color: "inherit", // Set default link color to black
    display: "inline-block", // Make links inline-block elements
    transition: "color 0.3s", // Smooth color transition on hover
  };

  const linkHoverStyles = {
    color: "yellow", // Change link color to yellow on hover
  };

  return (
    <ResourceCardWrapper>
      <CardContent>
        <Typography variant="h6">{heading}</Typography>
        <ul style={{ listStyleType: "disc", marginLeft: "1rem" }}>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                target="_blank"
                style={linkStyles}
                hoverstyle={linkHoverStyles} // Apply hover style
              >
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
