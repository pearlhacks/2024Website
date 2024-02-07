import React from 'react';
import { Grid, TableHead, Card, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { styled } from "@mui/system"; // Import styled from @mui/system
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Import LocationOn icon

const EventCardWrapper = styled(Card)(({ theme }) => ({
    background: "#FFFFF", // Set background color
    fontFamily: "ProximaNova", // Use ProximaNova font
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Stretch card content vertically
    alignContent: "center",
    alignItems: "flex-start",
    borderRadius: "1rem", // Smaller border radius
    margin: "1rem", // Add spacing between cards
    padding: "1rem", // Smaller padding
    boxShadow: "0 1px 3px rgba(0, 0, 0, .2)",
    transition: "all 0.2s ease-in-out",
    height: "90%", // Ensure cards take up all available vertical space
    textDecoration: "none",
    "&:hover": {
      transform: "scale(1.02)",
      cursor: "pointer",
    },
    "& img": {
      height: "3rem", // Smaller icon size
    },
  })); 

  export const PreEventComponent = ({ events }) => {
    return (
      <Grid container spacing={2}> {/* Grid container with spacing */}
        {events.filter(event => event.Type === 'Pre-event').map((event, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}> {/* Grid item for each card */}
            <EventCardWrapper>
              <Typography variant="h4" color="#1876bd">
                {event.Event}
              </Typography>
              <Typography variant="body1">{event.Day} | {event["Start Time"]} - {event["End Time"]}</Typography>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon color="secondary" />
                <Typography variant="body1">{event.Location}</Typography>
              </div>
            </EventCardWrapper>
          </Grid>
        ))}
      </Grid>
    );
};

export const DayOfEventComponent = ({ events, selectedTheme }) => {
    const dayOfEvents = events.filter(event => event.Type === 'Day-of');
  
    // Group events by day
    const groupedEvents = dayOfEvents.reduce((acc, event) => {
      acc[event.Day] = acc[event.Day] || [];
      acc[event.Day].push(event);
      return acc;
    }, {});
  
    return (
      <>
        {Object.keys(groupedEvents).map(day => (
          <div key={day}>
            <Typography variant="h4" color={selectedTheme === 'light' ? "#1876bd" : "#96d0ff"}>
                {day}
              </Typography>
            <br />
            <TableContainer style={{ boxShadow: 'none' }}>
              <Table aria-label={`Events on ${day}`} style={{ borderSpacing: '0 10px', borderCollapse: 'separate' }}>
                <TableBody>
                  {groupedEvents[day].map((event, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ width: '20%', fontWeight: 'bold', borderBottom: '2px solid white', color: selectedTheme == "light" ? "#1876bd" : "#F5EDC9"}}><Typography variant='body1'> {`${event["Start Time"]} - ${event["End Time"]}`}</Typography></TableCell>
                      <TableCell style={{ width: '40%', fontWeight: 'bold', borderBottom: '2px solid white', color: selectedTheme == "light" ? "#1876bd" : "#F5EDC9" }}><Typography variant='body1'>{event.Event}</Typography></TableCell>
                      <TableCell style={{ width: '40%', borderBottom: '2px solid white', color: selectedTheme == "light" ? "#1876bd" : "#F5EDC9" }}><Typography variant='body1'>{event.Location}</Typography></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <br />
          </div>
        ))}
      </>
    );
};