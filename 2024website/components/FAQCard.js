import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { alpha } from "@mui/material";

const FAQCard = ({ question, answer, color }) => {
  const [expanded, setExpanded] = useState(false);
  const [processedAnswer, setProcessedAnswer] = useState([]);

  const accordionStyle = {
    background: "transparent", // Set the Accordion background to transparent
    color: color, // Set the text color to #1876bd
    boxShadow: "none", // Remove the shadow
  };

  const expandIcon = expanded ? (
    <RemoveIcon sx={{color:alpha(color,0.6)}} />
  ) : (
    <AddIcon sx={{color:alpha(color,0.6)}} />
  );

  useEffect(() => {
    const parseText = (inputText) => {
      const linkRegex = /\[([^[]+)\]\((.*?)\)/g;
      const listRegex = /^- (.*)/;
    
      return inputText.split('\n').map((line, index) => {
        if (listRegex.test(line)) {
          const listItem = line.match(listRegex)[1];
          return <li key={`li-${index}`}>{parseLine(listItem)}</li>;
        } else {
          return <span key={`span-${index}`}>{parseLine(line)}</span>;
        }
      });
    };
    
    const parseLine = (line) => {
      const linkRegex = /\[([^[]+)\]\((.*?)\)/g;
      let elements = [];
      let lastIndex = 0;
    
      line.replace(linkRegex, (match, text, url, index) => {
        elements.push(line.substring(lastIndex, index));
        elements.push(<a href={url} key={url} style={{
          textDecoration: "none",
          color: "#F5EDC9",
          backgroundColor: "#eda901",
          padding: "2px 5px",
          borderRadius: "15px",
        }}>{text}</a>);
        lastIndex = index + match.length;
      });
    
      elements.push(line.substring(lastIndex));
      return elements;
    };

    setProcessedAnswer(parseText(answer));
  }, [answer]);

  return (
    <Accordion
      style={accordionStyle}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography variant="h6">{question}</Typography>
        <IconButton
          aria-label={expanded ? "Collapse" : "Expand"}
          onClick={(e) => {
            e.stopPropagation(); // Prevent Accordion from toggling when clicking the icon
            setExpanded(!expanded);
          }}
          size="small"
          sx={{ marginLeft: "auto" }}
          color={color}
        >
          {expandIcon}
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="body1" component="div">
    {processedAnswer.map((element, index) => (
      <React.Fragment key={index}>{element}</React.Fragment>
    ))}
  </Typography>

      </AccordionDetails>
    </Accordion>
  );
};

export default FAQCard;
