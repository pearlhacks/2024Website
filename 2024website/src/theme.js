import { createTheme } from "@mui/material/styles";

// Define your custom colors
const customColors = {
  primary: {
    main: "#ffecac", // Define your primary color
  },
  secondary: {
    main: "#96d0ff", // Define your secondary color
  },
  accent: {
    main: "#9bb159", // Define your accent color
  },
};

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "ProximaNova",
    h1: {
      fontFamily: "CaviarDreams",
      fontSize: "3rem",
      fontWeight: "bold",
      lineHeight: "3rem",
    },
    h2: {
      fontFamily: "CaviarDreams",
      fontSize: "3em",
      fontWeight: 700,
      lineHeight: "3rem",
      color: "#ffecac", // Use the custom color here
    },
    h3: {
      fontSize: "1.75rem",
      color: "#ffecac",
    },
    h4: {
      fontSize: "1.25rem",
      fontStyle: "italic",
      color: "#ffecac", // Use the custom color here
      fontWeight: 300,
    },
    p: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },
  palette: {
    primary: customColors.primary,
    secondary: customColors.secondary,
    accent: customColors.accent,
  },
});

export default theme;
