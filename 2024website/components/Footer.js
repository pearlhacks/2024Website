import React from "react";
import {
  Container,
  Grid,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import footerSvg from "../public/images/Footer.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // Changed to outline heart icon
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { MailingListInput } from "./MailingListInput";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = ({ backgroundColor }) => {
  return (
    <div
      fullWidth
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundImage: `url(${footerSvg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxWidth: "100%",
        backgroundColor: backgroundColor,
        backgroundPosition: "center",
        position: "relative",
        bottom: 0, // Stick to the bottom of the page
        minHeight: "900px",
        paddingBottom: "100px", // Added padding at the bottom
        paddingLeft: "100px",
        paddingRight: "100px",
        width: "100%", // Ensure the width matches the background image
      }}
    >
      <Container>
        <Grid container spacing={3} pt={5} pb={3}>
          {/* Column 1: Keep up with us */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" color={"#F5EDC9"}>
              KEEP UP WITH US
            </Typography>
            <Typography variant="p" color={"#366DA9"}>
              Join our mailing list!
            </Typography>
            <MailingListInput />
          </Grid>

          {/* Column 2: Administration */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" color={"#F5EDC9"}>
              ADMINISTRATION
            </Typography>
            <Typography variant="p" color={"#366DA9"}>
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
            <Typography variant="h4" color={"#F5EDC9"}>
              INCLUSIVITY STATEMENT
            </Typography>
            <Typography variant="p" color={"#366DA9"}>
              Pearl Hacks is an event designed to uplift and center women and
              gender non-conforming individuals in tech. We expect all of our
              mentors, volunteers, participants, directors, sponsors, judges,
              and visitors to be respectful of our participants’ gender
              identities and expressions.
            </Typography>
          </Grid>
        </Grid>
        {/* Horizontal Divider */}
        <Divider sx={{ mt: 1, mb: 1 }} color="#1876bd" />

        {/* Made with love */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between" // To place items at either end
        >
          <Grid item>
            <Typography variant="body1" color="#366DA9">
              {" "}
              {/* Changed text color */}
              Made with{" "}
              <FavoriteBorderIcon
                sx={{
                  verticalAlign: "middle",
                  color: "#366DA9", // Changed heart color
                }}
              />{" "}
              by Pearl Hacks
            </Typography>
          </Grid>
          <Grid item>
            <SocialMediaIcons color="#366DA9" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
