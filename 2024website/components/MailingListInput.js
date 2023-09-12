import React from "react";

export function MailingListInput() {
  return (
    <input
      type="email"
      placeholder="Email Address"
      style={{
        width: "100%",
        fontFamily: "ProximaNova",
        padding: "8px",
        paddingLeft: "15px",
        borderRadius: "25px", // Make it rounder
        backgroundColor: "#ffffff", // Change the background color
        border: "1px solid #eda901", // Change the border color
        boxSizing: "border-box", // Ensure padding doesn't affect width
      }}
    />
  );
}
