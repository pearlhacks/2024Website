import React from "react";
import {
  Container,
  Grid,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import footerSvg from "../public/Footer.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundImage: `url(${footerSvg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#42A5CC",
        width: "100%",
        height: "600px",
      }}
    >
      <Container>
        <Grid container spacing={3} pt={5} pb={3}>
          {/* Column 1: Keep up with us */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary">
              KEEP UP WITH US
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Join our mailing list!
            </Typography>
            <input
              type="email"
              placeholder="email address"
              style={{ width: "100%", padding: "8px" }}
            />
          </Grid>

          {/* Column 2: Administration */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary">
              ADMINISTRATION
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Pearl Hacks abides by the MLH Code of Conduct.
            </Typography>
            <Typography variant="body1" color="textPrimary">
              For questions or feedback, contact us at{" "}
              <a href="mailto:questions@pearlhacks.com">
                questions@pearlhacks.com
              </a>
              .
            </Typography>
          </Grid>

          {/* Column 3: Inclusivity Statement */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary">
              INCLUSIVITY STATEMENT
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Pearl Hacks is an event designed to uplift and center women and
              gender non-conforming individuals in tech. We expect all of our
              mentors, volunteers, participants, directors, sponsors, judges,
              and visitors to be respectful of our participants’ gender
              identities and expressions.
            </Typography>
          </Grid>
        </Grid>
        {/* Horizontal Divider */}
        <Divider sx={{ mt: 1, mb: 1 }} />

        {/* Made with love */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between" // To place items at either end
        >
          <Grid item>
            <Typography variant="body1" color="textPrimary">
              Made with{" "}
              <FavoriteIcon sx={{ verticalAlign: "middle", color: "red" }} /> by
              Pearl Hacks
            </Typography>
          </Grid>
          <Grid item>
            {/* Social Media Icons */}
            <IconButton color="primary">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary">
              <InstagramIcon />
            </IconButton>
            <IconButton color="primary">
              <TwitterIcon />
            </IconButton>
            <IconButton color="primary">
              <EmailIcon />
            </IconButton>
            <IconButton color="primary">
              <GitHubIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
