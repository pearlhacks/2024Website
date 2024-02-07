import React, { useState } from "react";
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
import logoSvg from "../public/images/logo.svg";
import CloseIcon from "@mui/icons-material/Close";
import SocialMediaIcons from "./SocialMediaIcons";
import DarkModeToggle from "./DarkModeToggle";
import MLHBadge from "./MLHBadge";

const Navbar = ({ backgroundColor, toggleTheme, selectedTheme, isWideWindow }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          zIndex: 1000,
        }}
      >
        <Container>
          <Toolbar style={{ display: "flex", alignItems: "center" }}>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              style={{ height: "100%" }}
            >
              {/* Left End: Logo, Pearl Hacks, and Social Media Icons */}
              <Grid
                item
                xs={6}
                style={{ textAlign: "left", alignItems: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    color="inherit"
                    style={{
                      color: selectedTheme === "dark" ? "#ffecac" : "#1876bd",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Link href="/">
                      <img
                        src={logoSvg.src}
                        alt="Logo"
                        style={{
                          height: "40px",
                          marginRight: "10px",
                          marginTop: "10px",
                        }}
                      />
                    </Link>

                    {isWideWindow && (
                      <Link
                        href="/"
                        color="inherit"
                        style={{
                          textDecoration: "none",
                          color:
                            selectedTheme === "dark" ? "#ffecac" : "#1876bd",
                          fontFamily: "CaviarDreams",
                          fontWeight: "700",
                          marginRight: "10px",
                        }}
                      >
                        Pearl Hacks
                      </Link>
                    )}
                  </Typography>
                  {isWideWindow && (
                    <SocialMediaIcons
                      color={selectedTheme === "dark" ? "#ffecac" : "#1876bd"}
                    />
                  )}
                </div>
              </Grid>

              

              {/* Right End: Links */}
              <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
  

  <div style={{ display: 'flex', alignItems: 'center' }}>
    {isWideWindow ? (
      <div style={{marginRight: 10}}>
        <Link
          href="/about"
          color="inherit"
          style={{
            textDecoration: "none",
            margin: "0 10px",
            color: selectedTheme === "dark" ? "#ffecac" : "#1876bd",
          }}
        >
          About
        </Link>
        <Link
          href="/schedule"
          color="inherit"
          style={{
            textDecoration: "none",
            margin: "0 10px",
            color: selectedTheme === "dark" ? "#ffecac" : "#1876bd",
          }}
        >
          Schedule
        </Link>
        <Link
          href="/faq"
          color="inherit"
          style={{
            textDecoration: "none",
            margin: "0 10px",
            color: selectedTheme === "dark" ? "#ffecac" : "#1876bd",
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
            color: selectedTheme === "dark" ? "#ffecac" : "#1876bd",
          }}
        >
          Resources
        </Link>
        {/* <Link
          href="/schedule"
          color="inherit"
          style={{
            textDecoration: "none",
            margin: "0 10px",
            color: selectedTheme === "dark" ? "#ffecac" : "#1876bd",
          }}
        >
          Schedule
        </Link> */}
        {/* Additional Links if any */}
      </div>
    ) : (
      <IconButton
        onClick={toggleMenu}
        style={{
          color: selectedTheme === 'dark' ? '#F5EDC9' : '#1876bd',
        }}
      >
        <MenuIcon />
      </IconButton>
    )}
    <MLHBadge isWideWindow={isWideWindow} />
  </div>
</Grid>

            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hamburger Menu */}
      {!isWideWindow && (
        <Drawer
          anchor="top"
          open={menuOpen}
          onClose={closeMenu}
          variant="temporary"
          PaperProps={{
            style: {
              background: "#1876bd",
              color: "#ffecac", // Text color
              paddingTop: "20px",
              boxShadow: "none", // Remove the shadow
            },
          }}
        >
          <IconButton
            style={{ position: "absolute", top: "5px", right: "5px" }}
            onClick={closeMenu}
          >
            <CloseIcon style={{ color: "#ffecac" }} /> {/* Close button (X) */}
          </IconButton>
          <List onClick={closeMenu}>
            <ListItem button>
              <Link overlay href="/about" color="inherit" underline="none">
                {" "}
                {/* Remove underline */}
                <ListItemText primary="About Us" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link overlay href="/schedule" color="inherit" underline="none">
                {" "}
                {/* Remove underline */}
                <ListItemText primary="Schedule" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link overlay href="/faq" color="inherit" underline="none">
                {" "}
                {/* Remove underline */}
                <ListItemText primary="FAQ" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link overlay href="/resources" color="inherit" underline="none">
                {" "}
                {/* Remove underline */}
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
