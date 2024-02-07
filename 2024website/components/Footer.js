import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import footerSvg from "../public/images/Footer.svg";
import darkFooter from "../public/images/FooterDark.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // Changed to outline heart icon
import { MailingListInput } from "./MailingListInput";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = ({ backgroundColor, selectedTheme, isWideWindow }) => {
  return (
    <div
      fullWidth
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundImage:
          selectedTheme == "light"
            ? `url(${footerSvg.src})`
            : `url(${darkFooter.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "100%",
        backgroundColor: backgroundColor,
        backgroundPositionX: "center",
        backgroundPositionY: "-40",
        position: "relative",
        bottom: 0, // Stick to the bottom of the page
        minHeight: isWideWindow ? "900px" : "1200px", // Added min height
        paddingBottom: isWideWindow ? "100px" : "50px", // Added padding at the bottom
        paddingLeft: isWideWindow ? "100px" : "50px",
        paddingRight: isWideWindow ? "100px" : "50px",
        width: "100%", // Ensure the width matches the background image
      }}
    >
      <Container>
        <Grid container spacing={3} pt={5} pb={3}>
          {/* Column 1: Keep up with us */}

          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              color={selectedTheme == "light" ? "#F5EDC9" : "#eda901"}
            >
              KEEP UP WITH US
            </Typography>
            <Typography
              variant="p"
              color={selectedTheme == "light" ? "#366DA9" : "#F5EDC9"}
            >
              Join our mailing list!
            </Typography>
            <MailingListInput />
          </Grid>

          {/* Column 2: Administration */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              color={selectedTheme == "light" ? "#F5EDC9" : "#eda901"}
            >
              ADMINISTRATION
            </Typography>
            <Typography
              variant="p"
              color={selectedTheme == "light" ? "#366DA9" : "#F5EDC9"}
            >
              Pearl Hacks abides by the MLH Code of Conduct. For questions or
              feedback, contact us at{" "}
              <a
                href="mailto:questions@pearlhacks.com"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#eda901",
                  color: "#F5EDC9",
                  padding: "2px 5px",
                  borderRadius: "15px",
                }}
              >
                questions@pearlhacks.com
              </a>
              .
            </Typography>
          </Grid>

          {/* Column 3: Inclusivity Statement */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              color={selectedTheme == "light" ? "#F5EDC9" : "#eda901"}
            >
              INCLUSIVITY STATEMENT
            </Typography>
            <Typography
              variant="p"
              color={selectedTheme == "light" ? "#366DA9" : "#F5EDC9"}
            >
              Pearl Hacks is an event designed to uplift and center women and
              gender non-conforming individuals in tech. We expect all of our
              mentors, volunteers, participants, directors, sponsors, judges,
              and visitors to be respectful of our participants’ gender
              identities and expressions.
            </Typography>
          </Grid>
        </Grid>
        {/* Horizontal Divider */}
        <Divider
          sx={{ mt: 1, mb: 1 }}
          color={selectedTheme == "light" ? "#366DA9" : "#F5EDC9"}
        />

        {/* Made with love */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between" // To place items at either end
        >
          <Grid item>
            <Typography
              variant="body1"
              color={selectedTheme == "light" ? "#366DA9" : "#F5EDC9"}
            >
              {" "}
              {/* Changed text color */}
              Made with{" "}
              <FavoriteBorderIcon
                sx={{
                  verticalAlign: "middle",
                  color: selectedTheme == "light" ? "#366DA9" : "#F5EDC9", // Changed heart color
                }}
              />{" "}
              by Pearl Hacks
            </Typography>
          </Grid>
          <Grid item>
            <SocialMediaIcons
              color={selectedTheme == "light" ? "#366DA9" : "#F5EDC9"}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
