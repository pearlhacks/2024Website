import React from "react";
import { Container, Typography } from "@mui/material";
import aboutHeader from "../public/images/Header.svg";
import Footer from "../components/Footer";
import darkHeader from "../public/images/HeaderDark.svg";
import Head from "next/head";

const GenericLayout = ({ selectedTheme, title, children, isWideWindow }) => {
  
  return (
    <div>
      <Head>
        <title>Pearl Hacks</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <div
        style={{
          backgroundColor: selectedTheme == "light" ? "#ffecac" : "#0D4968",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src={selectedTheme == "light" ? aboutHeader.src : darkHeader.src}
            alt="About Header"
            style={{
              width: "100%",
              position: "relative",
              top: 0,
            }}
          />
          <Typography
            variant={isWideWindow ? "h2" : "h3"}
            style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>
        </div>
        <Container
          style={{
            padding: isWideWindow ? "0 100px" : "0 50px",
            marginTop: "20px",
          }}
        >
          <div>{children}</div>
        </Container>
      </div>
      <Footer
        backgroundColor={selectedTheme == "light" ? "#ffecac" : "#0D4968"}
        selectedTheme={selectedTheme}
        isWideWindow={isWideWindow}
      />
    </div>
  );
};

export default GenericLayout;
