import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { HeroButton, PrimaryButton } from './CustomButton';
import {Box} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import Grid from '@mui/material/Grid'; // Import Grid
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material';


export const tabOptions = [
  {
      'name':'Participant',
      'description': 'Participants work in teams to create incredible projects in 24 hours with the help of excellent mentors, workshops, and tech talks. All the while, they’ll get to meet some fantastic people, enjoy fun games, collect swag, and eat free food.',
      'link':'https://form.typeform.com/to/p3a1q8aW'
  },
  {
      'name':'Mentor',
      'description': 'Anyone of any gender can mentor at PH24. As a mentor, you’ll play a crucial role in supporting hackers throughout the hackathon, offering guidance, assisting with debugging, and providing valuable advice.',
      'link':'https://form.typeform.com/to/npRfkOWE'
  },
  {
      'name':'Volunteer',
      'description': 'Anyone of any gender can volunteer at PH24. As a volunteer, you’ll be assisting the Pearl Hacks team in various activities such as transporting goods, directing the flow of hackers/mentors, solving last minute physical problems, and so much more!',
      'link':'https://form.typeform.com/to/B0dlVXo3'
  }
]

export const OptionTab = ({ selectedTheme }) => {
  return (
    <Grid container spacing={2}>
      {tabOptions.map(option => (
        <Grid item xs={12} sm={4} key={option['name']} style={{ textAlign: 'center' }}>
          <Box style={{ marginBottom: '10px' }} color="#E29600">
            <Typography variant='h4' color="#E29600">
              <u>{option['name']}</u>
            </Typography>
          </Box>
          <Box style={{ marginBottom: '20px' }}>
            <Typography variant="body1" color={"#1876bd"}>
              {option['description']}
            </Typography>
          </Box>
          <Box > {/* Adjust height as needed */}
            <PrimaryButton href={option['link']} style={{ height: '100%' }}>
              Register now
            </PrimaryButton>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

function RegisterButton({selectedTheme, isWideWindow}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <HeroButton theme={selectedTheme} onClick={handleClickOpen}>
        Register Now
      </HeroButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{background: '#F5EDC9', color:"#E29600"}} variant='h3'>{'Do you want to join as a ...'}</DialogTitle>
        <IconButton
          onClick={handleClose}
          style={{ position: 'absolute', right: 8, top: 8,  color: "#E29600" }}

          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <DialogContent style={{background: '#F5EDC9'}}>
          <DialogContentText>
            <OptionTab selectedTheme={selectedTheme} isWideWindow={isWideWindow}/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default RegisterButton;
