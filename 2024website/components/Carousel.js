import React, { useState } from 'react';
import { IconButton, Box, Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import carouselData from '../public/data/testimonies.json'; // make sure the path is correct
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const CarouselItem = ({ item, isWideWindow }) => {
  return (
    <Card elevation={0} sx={{maxWidth: '100%', 
    margin: 'auto', 
    overflow: 'visible', 
    backgroundColor: '#F5EDC9', 
    border: '2px solid #E29600'}} // Adds an outline with the specified color
    >
      <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} sx = {{              paddingTop: isWideWindow ? 0 : 5,}} sm={4} container justifyContent="center">
          <Avatar
            alt={item.name}
            src={item['photoURL']}
            sx={{ 
              width: isWideWindow ? 200 : 100, 
              height: isWideWindow ? 200 : 100, 
              display: 'block', 
              border: '2px solid #E29600'
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8} container>
          <Grid item xs={12} sm={6} sx={{ borderRight: isWideWindow ? '2px dashed #E29600' : 'None', borderBottom: isWideWindow ? 'None' : '2px dashed #E29600', padding: 2, alignContent: 'left'}}>
            <CardContent >
              <Typography textAlign={'left'} color="#E29600" variant="h4">Name</Typography>
              <Typography textAlign={'left'} color='#1876bd' variant="h3">{item.name}</Typography>
              <br />
              <Typography textAlign={'left'} color="#E29600" variant="h4">From</Typography>
              <Typography textAlign={'left'} color='#1876bd' variant="h3">{item.from}</Typography>
              <br />

              <Typography textAlign={'left'}  color="#E29600" variant="h4">Project</Typography>
              <Grid container alignItems="center">
              <Typography textAlign={'left'} color='#1876bd' variant="h3">{item.projectTitle}</Typography>
              <IconButton
                  component="a"
                  href={item.devpost}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: '#E29600' }}
                >
                  <OpenInNewIcon />
                </IconButton>
              </Grid>
              <Typography textAlign={'left'} color="#1876bd" variant="body1">{item.projectDescription}</Typography>
              
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ padding: 2 }}>
            <CardContent>
            <Typography  textAlign={'left'} color="#E29600" variant="h4">Thoughts on Pearl Hacks</Typography>
              <Typography  textAlign={'left'} color="#1876bd" variant="body1">{item.experience}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

const Carousel = ({item, isWideWindow, selectedTheme}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {/* Left arrow */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '-50px', // Moves the arrow outside the CarouselItem
          backgroundColor:'#E29600',
          color: '#F5EDC9', // Sets the color of the icon
          zIndex: 2 // Ensures the arrow is above the CarouselItem
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* CarouselItem */}
      <CarouselItem isWideWindow={isWideWindow} item={carouselData[activeIndex]} />

      {/* Right arrow */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-50px', // Moves the arrow outside the CarouselItem
          backgroundColor:'#E29600',
          color: '#F5EDC9', // Sets the color of the icon
          zIndex: 2 // Ensures the arrow is above the CarouselItem
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
