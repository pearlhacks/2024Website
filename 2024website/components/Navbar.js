import React, { useState, useEffect } from "react";
import {
  AppBar,
  Container,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import logoSvg from "../public/images/logo.svg";

const Navbar = ({ backgroundColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWideWindow, setIsWideWindow] = useState(true);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsWideWindow(window.innerWidth >= 768); // Adjust the breakpoint as needed
    };

    // Add an event listener to check the window width
    window.addEventListener("resize", checkWindowWidth);

    // Initial check
    checkWindowWidth();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <AppBar
        position="absolute"
        style={{
          backgroundColor: backgroundColor,
          boxShadow: "none",
          width: "100%",
          zIndex: 2,
        }}
      >
        <Container>
          <Toolbar>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              style={{ height: "100%" }}
            >
              {/* Left End: Logo, Pearl Hacks, and Social Media Icons */}
              <Grid item xs={6} style={{ textAlign: "left" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    color="inherit"
                    style={{
                      color: "#ffecac",
                      display: "flex",
                      alignItems: "center",
                    }}
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
                        color: "#ffecac",
                      }}
                    >
                      Pearl Hacks
                    </Link>
                  </Typography>
                  {isWideWindow && (
                    <div style={{ marginLeft: "10px", color: "#ffecac" }}>
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
                    </div>
                  )}
                </div>
              </Grid>

              {/* Right End: Links */}
              <Grid item xs={6} style={{ textAlign: "right" }}>
                {isWideWindow ? (
                  <>
                    <Link
                      href="/about"
                      color="inherit"
                      style={{
                        textDecoration: "none",
                        margin: "0 10px",
                        color: "#ffecac",
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
                        color: "#ffecac",
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
                        color: "#ffecac",
                      }}
                    >
                      Resources
                    </Link>
                  </>
                ) : (
                  <IconButton
                    color="inherit"
                    onClick={toggleMenu}
                    style={{ display: "block", marginLeft: "auto" }}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hamburger Menu */}
      {!isWideWindow && (
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={closeMenu}
          variant="temporary"
        >
          <List onClick={closeMenu}>
            <ListItem button>
              <Link href="/about" color="inherit">
                <ListItemText primary="About Us" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/faq" color="inherit">
                <ListItemText primary="FAQ" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/resources" color="inherit">
                <ListItemText primary="Resources" />
              </Link>
            </ListItem>
          </List>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
