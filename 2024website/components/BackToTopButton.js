import React from 'react';
import Fab from '@mui/material/Fab';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { styled } from '@mui/material/styles';

const StyledFab = styled(Fab)(({ theme}) => ({
  borderRadius: "80px",
  width: "18%",
  backgroundColor: "#eda901",
  color: "#F5EDC9",
  fontFamily: "CaviarDreams",
  fontWeight: 700,
  padding: "10px 20px", // Adjusted padding for a larger button
  boxShadow: "none",
  display: 'flex', // Enable flex container
  justifyContent: 'center', // Center items horizontally
  alignItems: 'center', // Center items vertically
  "&:hover": {
    backgroundColor: "rgba(155, 177, 89, 0.5)", // Adjust opacity on hover
    border: `2px solid #eda901`, // Add border on hover
    boxShadow: "none", // Remove the shadow on hover
  },
  // Adjust the size of the Fab directly if needed
  // You can also adjust the size here with width and height properties
}));

export const BackToTopButton = ({isWideWindow}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <StyledFab
      color="secondary"
      size="large" // Set to 'large' for a larger button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <ExpandLessIcon />
      {isWideWindow && <span style={{ marginLeft: '8px' }}>Back to top</span>
      }
    </StyledFab>
  );
}
