import React from "react";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialMediaIcons = ({ color }) => {
  const iconStyle = {
    color: color,
    transition: "color 0.3s ease", // Add transition for smooth hover effect
  };

  const iconHoverStyle = {
    color: "#F5EDC9", // Change color on hover
  };

  return (
    <div style={{ color: color }}>
      <IconButton
        color="inherit"
        onClick={() =>
          window.open("https://facebook.com/pearlhackathon", "_blank")
        }
        style={iconStyle}
        onMouseEnter={(e) => (e.target.style = iconHoverStyle)}
        onMouseLeave={(e) => (e.target.style = iconStyle)}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() =>
          window.open("https://instagram.com/pearlhacks", "_blank")
        }
        style={iconStyle}
        onMouseEnter={(e) => (e.target.style = iconHoverStyle)}
        onMouseLeave={(e) => (e.target.style = iconStyle)}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => window.open("mailto:questions@pearlhacks.com")}
        style={iconStyle}
        onMouseEnter={(e) => (e.target.style = iconHoverStyle)}
        onMouseLeave={(e) => (e.target.style = iconStyle)}
      >
        <EmailIcon />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => window.open("https://github.com/pearlhacks", "_blank")}
        style={iconStyle}
        onMouseEnter={(e) => (e.target.style = iconHoverStyle)}
        onMouseLeave={(e) => (e.target.style = iconStyle)}
      >
        <GitHubIcon />
      </IconButton>
    </div>
  );
};

export default SocialMediaIcons;
