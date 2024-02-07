import React, { useState } from 'react';
import { Tabs, Tab, Grid, Typography, Avatar } from '@mui/material';
import teamData from '../public/data/directors.json'

// export async function getStaticProps() {
//     const firestore = firebase.firestore();
//     const teamCollection = await firestore.collection('directors').get();
//     const teamData = teamCollection.docs.map(doc => doc.data());

//     // Pass teamData to the page via props
//     return { props: { teamData } };
// }

const Team = ({ selectedTheme, isWideWindow }) => {
    const [selectedTab, setSelectedTab] = useState('All');

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const filteredData = teamData.filter(member => selectedTab === 'All' || member['Team'] === selectedTab);
    return (
        <>
            <Tabs value={selectedTab} onChange={handleTabChange} variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                    // Responsive styling can go here
                    '.MuiTab-root': { // Targeting the Tab component
                        width: isWideWindow ? "20%" : '100%',
                        padding: 1, // Adjust padding as needed
                        // Add any additional styling you need for the tabs
                    }

                }}
                TabIndicatorProps={{
                    style: {
                        backgroundColor: selectedTheme === 'dark' ? '#ffecac' : '#1B62B1',
                    }
                }}
                textColor={selectedTheme === 'dark' ? '#96d0ff' : '#1876bd'}
                indicatorColor={selectedTheme === 'dark' ? '#ffecac' : '#1B62B1'}
            >
                {['All', 'Experience', 'Marketing', 'Logistics', 'Sponsorship'].map((label) => (
                    <Tab
                        key={label}
                        label={label}
                        value={label}
                        sx={{
                            fontWeight: selectedTab === label ? 'bold' : 'normal',
                            color: selectedTab === label ? (selectedTheme === 'dark' ? '#ffecac' : '#1B62B1') : (selectedTheme === 'dark' ? '#96d0ff' : '#1876bd') // Change the highlight color as needed
                        }}

                    />
                ))}
            </Tabs>
            <br />
            <br />
            <Grid container spacing={2}>
                {filteredData.map(member => (
                    <Grid item xs={12} sm={2} md={4} key={member.Name} style={{ textAlign: 'center' }}>
                        <Avatar
                            src={member['Headshot URL']}
                            alt={member['Name']}
                            style={{ width: isWideWindow ? '200px' : '150px', height: isWideWindow ? '200px' : '150px', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center', alignContent: 'end'}}
                        />
                        <Typography variant="h4" color={"#eda901"} marginTop={3} >
                            {member['Name']}
                        </Typography>
                        <Typography variant="p" color={selectedTheme == "light" ? "#1876bd" : "#F5EDC9"}>
                            {member['Title']}
                            <br />
                            {member['Pronouns']}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Team;
