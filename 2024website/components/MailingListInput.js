import React from "react";

export function MailingListInput() {
  const containerStyle = {
    position: "relative",
  };

  const inputStyle = {
    width: "100%",
    fontFamily: "ProximaNova",
    padding: "8px",
    paddingLeft: "15px",
    borderRadius: "25px", // Make it rounder
    backgroundColor: "#ffffff", // Change the background color
    border: "1px solid #eda901", // Change the border color
    boxSizing: "border-box", // Ensure padding doesn't affect width
  };

  const buttonStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100px", // Adjust the button width as needed
    height: "100%",
    fontFamily: "ProximaNova",
    padding: "8px",
    borderRadius: "0 25px 25px 0", // Make it rounder
    backgroundColor: "#eda901", // Change the background color
    color: "#ffffff", // Change the text color
    border: "none", // Remove the border
    cursor: "pointer", // Add pointer cursor
  };

  return (
    <form
      action="https://pearlhacks.us17.list-manage.com/subscribe?u=211594c9660fc6331ed123271&id=ebe9408826"
      method="POST"
      style={containerStyle}
    >
      <input
        type="email"
        name="EMAIL" // Add a name attribute for the email input
        placeholder="Email Address"
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Subscribe
      </button>
    </form>
  );
}
