import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

// HomePage component: Displays the home page content
const HomePage = () => {
    return (
        <Container>
            <Box sx={{ marginTop: 8 }}>
                {/* Page title */}
                <Typography variant="h2" gutterBottom>
                    COMP229 Group Project
                </Typography>
                {/* Introduction and description */}
                <Typography variant="h4" paragraph>
                    This is your one-stop solution to track all your expenses, loans, and credits.
                    Use the navigation links to add new transactions and view an overview of all your financial activities.
                </Typography>
                {/* Description of the project stack */}
                <Typography variant="h4" paragraph>
                    The Expense Tracker is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js).
                </Typography>
                {/* Team introduction */}
                <Typography variant="h4" paragraph>
                    It is a collaborative project by the Financial Warlocks team.
                </Typography>
                {/* Team members list */}
                <Typography variant="h5" gutterBottom>
                    Team Members:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Derek" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Victor" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Lee" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Khyam" />
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
};

export default HomePage;
