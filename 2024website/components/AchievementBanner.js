import React from 'react';
import { Box, Typography } from '@mui/material';
import AB_Blue from '../public/images/AB_Blue.svg';
import AB_Yellow from '../public/images/AB_Yellow.svg';

function AchievementBanner({ text, selectedTheme }) {
  const bannerImage = selectedTheme === "dark" ? AB_Blue.src : AB_Yellow.src;

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover', // This will ensure the banner covers the entire Box
        backgroundPosition: 'center',
        width: 300, // Fixed width, adjust as needed
        height: 150, // Fixed height, adjust as needed to maintain aspect ratio
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden' // This will hide any overflowing text
      }}
    >
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{
          color: "#1876bd", 
          position: 'absolute', // Positioning text absolutely to overlay on the banner
          width: '100%', // Full width of the Box
          textAlign: 'center', // Center align the text
          marginBottom: 5
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default AchievementBanner;
