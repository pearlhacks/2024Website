import React from "react";
import {
  AppBar,
  Container,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import logoSvg from "../public/logo.svg";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
        width: "100%", // Cover 100% of the page width
      }}
    >
      <Container>
        <Toolbar>
          <div
            alignItems="center"
            justifyContent="space-between"
            style={{ height: "100%", alignItems: "center" }}
          ></div>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            style={{ height: "100%" }} // Center vertically
          >
            {/* Left End: Logo, Pearl Hacks, and Social Media Icons */}
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center", // Center vertically
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  color="inherit"
                  style={{ color: "#ffecac" }} // Set text color to ffecac
                >
                  <img
                    src={logoSvg.src}
                    alt="Logo"
                    style={{
                      height: "40px",
                      marginRight: "10px",
                    }}
                  />
                  <Link
                    href="/"
                    color="inherit"
                    style={{
                      textDecoration: "none",
                      color: "#ffecac", // Set text color to ffecac
                    }}
                  >
                    Pearl Hacks 2024
                  </Link>
                </Typography>
                <Grid
                  item
                  xs={6}
                  style={{
                    textAlign: "right",
                    color: "#ffecac", // Set text color to ffecac
                  }}
                >
                  <IconButton color="inherit">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <EmailIcon />
                  </IconButton>
                  <IconButton color="inherit">
                    <GitHubIcon />
                  </IconButton>
                </Grid>
              </div>
            </Grid>

            {/* Right End: Links */}
            <Grid item xs={12} style={{ textAlign: "right" }}>
              <Link
                href="/about"
                color="inherit"
                style={{
                  textDecoration: "none",
                  margin: "0 10px",
                  color: "#ffecac", // Set link text color to ffecac
                }}
              >
                About Us
              </Link>
              <Link
                href="/faq"
                color="inherit"
                style={{
                  textDecoration: "none",
                  margin: "0 10px",
                  color: "#ffecac", // Set link text color to ffecac
                }}
              >
                FAQ
              </Link>
              <Link
                href="/resources"
                color="inherit"
                style={{
                  textDecoration: "none",
                  margin: "0 10px",
                  color: "#ffecac", // Set link text color to ffecac
                }}
              >
                Resources
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
