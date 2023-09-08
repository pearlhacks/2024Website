import React from "react";
import TextField from "@mui/material/TextField";

function mailing() {
  return (
    <TextField
      type="email"
      label="Email Address"
      variant="outlined"
      fullWidth
      sx={{
        borderRadius: "25px", // Make it rounder
        backgroundColor: "lightgray", // Change the background color
      }}
    />
  );
}

export default YourComponent;
