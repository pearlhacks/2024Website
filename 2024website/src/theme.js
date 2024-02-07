import { createTheme } from "@mui/material/styles";

// Define your custom colors

export const lightTheme = createTheme({
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
      color: "#ffecac", // Use the custom color here
    },
    h3: {
      fontFamily: "CaviarDreams",
      fontSize: "1.75rem",
      color: "#1876bd",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.25rem",
      fontFamily: "CaviarDreams",
      color: "#F5EDC9", // Use the custom color here
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
    primary: {
      main: "#ffecac", // Specify the main color
    },
    secondary: {
      main: "#eda901",
    },
    accent: {
      main: "#96d0ff",
    },
  },
});

// Create a theme instance.
export const darkTheme = createTheme({
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
    primary: {
      main: "#F5EDC9", // Specify the main color
    },
    secondary: {
      main: "#96d0ff",
    },
    accent: {
      main: "#9bb159",
    },
  },
});
