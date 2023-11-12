import React, { useState } from "react";
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
        <Typography variant="body1">{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQCard;
