import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

// Define a custom styled button
const HeroButton = styled(Button)(({ theme }) => ({
  borderRadius: "80px",
  backgroundColor: theme === "dark" ? "#1876BD" : "#FFECAC",
  color: theme == "dark" ? "#FFECAC" : "#1876BD",
  border: theme == "dark" ? "2px solid #96D0FF" : "2px solid #1876BD",
  fontFamily: "CaviarDreams",
  fontWeight: 700,
  padding: "5px 15px", // Add padding to the button
  boxShadow: "none",
  "&:hover": {
    backgroundColor: theme == "dark" ? "#96D0FF" : "#1876BD", // Adjust opacity on hover
    color: theme == "dark" ? "#1876BD" : "#FFECAC",
    border: `2px solid #1876BD`, // Add border on hover
    boxShadow: "none", // Remove the shadow on hover
  },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  borderRadius: "80px",
  backgroundColor: "#eda901",
  color: "#F5EDC9",
  fontFamily: "CaviarDreams",
  fontWeight: 700,
  padding: "5px 15px", // Add padding to the button
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "rgba(155, 177, 89, 0.5)", // Adjust opacity on hover
    border: `2px solid #eda901`, // Add border on hover
    boxShadow: "none", // Remove the shadow on hover
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  borderRadius: "80px",
  backgroundColor: "#F5EDC9",
  color: "#1876bd",
  fontFamily: "CaviarDreams",
  fontWeight: 700,
  border: "2px solid #1876BD",
  padding: "5px 15px", // Add padding to the button
  boxShadow: "none",
  "&:hover": {
    border: `2px solid #96d0ff`, // Add border on hover
    color: "#F5EDC9",
    boxShadow: "none", // Remove the shadow on hover
  },
}));

export { PrimaryButton, SecondaryButton, HeroButton };
