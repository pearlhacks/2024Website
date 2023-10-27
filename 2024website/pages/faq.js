import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import FAQCard from "../components/FAQCard"; // Import the FAQCard component
import faqData from "../public/data/faq.json"; // Import the faq data
import GenericLayout from "../components/GenericLayout";

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
      <GenericLayout
        isWideWindow={isWideWindow}
        selectedTheme={selectedTheme}
        title="FAQs"
      >
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
                  <FAQCard
                    question={faq.question}
                    answer={faq.answer}
                    color={selectedTheme == "light" ? "#1876bd" : "#F5EDC9"}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </GenericLayout>
    </div>
  );
};

export default FAQ;
