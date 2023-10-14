import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import aboutHeader from "../public/images/Header.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import FAQCard from "../components/FAQCard"; // Import the FAQCard component
import faqData from "../public/data/faq.json"; // Import the faq data

const FAQ = ({ toggleTheme, selectedTheme }) => {
  // Create an object to group FAQs by category
  const groupedFaqs = faqData.reduce((acc, item) => {
    const category = item["Category"];
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({
      question: item["Question"],
      answer: item["Answer"],
    });
    return acc;
  }, {});

  const [isWideWindow, setIsWideWindow] = useState(true);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsWideWindow(window.innerWidth >= 500); // Adjust the breakpoint as needed
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

  return (
    <div>
      <Head>
        <title>Pearl Hacks</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <div
        style={{
          backgroundColor: "#ffecac",
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
            src={aboutHeader.src}
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
            FAQs
          </Typography>
        </div>
        <Container style={{ padding: isWideWindow ? "0 100px" : "0 50px" }}>
          {/* Display FAQs by category */}
          {Object.entries(groupedFaqs).map(([category, faqs]) => (
            <div
              key={category}
              style={{
                marginBottom: "50px",
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                style={{
                  color: "#eda901",
                  marginBottom: "20px",
                }}
              >
                {category}
              </Typography>
              <Grid container spacing={2}>
                {faqs.map((faq, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <FAQCard question={faq.question} answer={faq.answer} />
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
