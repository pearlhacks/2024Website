import React from 'react';
import { Typography } from '@mui/material';
import GenericLayout from '../components/GenericLayout.js';
import eventsData from '../public/data/schedule.json'; // Update the path to your JSON file
import { DayOfEventComponent, PreEventComponent } from '../components/EventCards.js';

const Schedule = ({ selectedTheme, isWideWindow }) => {
  return (
    <div>
      <GenericLayout
        isWideWindow={isWideWindow}
        selectedTheme={selectedTheme}
        title="Schedule"
      >
        <Typography
            variant="h3"
            color={"#eda901"}
            style={{ marginBottom: "20px" }}
          >
            Pre-events
          </Typography>
      <PreEventComponent events={eventsData} />
      <br />
      <br />
      <Typography
            variant="h3"
            color={"#eda901"}
            style={{ marginBottom: "20px" }}
          >
            Day-of schedule
          </Typography>
      <DayOfEventComponent events={eventsData} selectedTheme={selectedTheme} />
      </GenericLayout>
    </div>
  );
};

export default Schedule;
