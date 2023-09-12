import { createTheme } from "@mui/material/styles";

// Define your custom colors
const customColors = {
  primary: {
    main: "#eda901", // Define your primary color
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
      color: "#ffecac",
    },
    h2: {
      fontFamily: "CaviarDreams",
      fontSize: "3em",
      fontWeight: 700,
      lineHeight: "3rem",
      color: "#F5EDC9", // Use the custom color here
    },
    h3: {
      fontFamily: "CaviarDreams",
      fontSize: "1.75rem",
      color: "#f7cf68",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.25rem",
      fontFamily: "CaviarDreams",
      color: "#f7cf68", // Use the custom color here
      fontWeight: 700,
    },
    p: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      color: "#F5EDC9", // Use the custom color here
    },
  },
  palette: {
    primary: customColors.primary,
    secondary: customColors.secondary,
    accent: customColors.accent,
  },
});

export default theme;
