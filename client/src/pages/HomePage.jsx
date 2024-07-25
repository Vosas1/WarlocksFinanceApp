import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../assets/Images/financial warlocks logo.jpg';
import Lee from '../assets/Images/Lee.png';
import Victor from '../assets/Images/Victor.png';
import Derek from '../assets/Images/Derek.png';
import Khyam from '../assets/Images/Khyam.png';
import '../Styles/HomePage.css';

// HomePage component: Displays the home page content
const HomePage = () => {
    return (
        <Box 
            sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: 'calc(100vh - 64px - 64px)',
                padding: '2rem',
                boxSizing: 'border-box'
            }}
        >
            {/* Container for the logo */}
            <Box className="logo-container">
                <Box
                    component="img"
                    src={logo}
                    alt="Financial Warlocks Logo"
                    className="logo"
                />
            </Box>
            
            {/* Container for the text and images */}
            <Box 
                sx={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '50%',
                    height: '100%',
                }}
            >
                {/* Text container */}
                <Box className="text-container">
                    <Typography variant="h4" gutterBottom>
                        Welcome back!
                    </Typography>
                    <Typography variant="h5" paragraph>
                        The Financial Warlocks are here to help.
                    </Typography>
                    <Typography variant="h5" paragraph>
                        Follow the links in the navigation bar to begin tracking your credit cards, loans, and expenses.
                    </Typography>
                    <Typography variant="h5" paragraph>
                        Hover your mouse over the images below to learn more about the developers.
                    </Typography>
                </Box>
                
                {/* New container for images */}
                <Box className="image-container">
                    <Box component="img" src={Lee} alt="Lee" className="image" />
                    <Box component="img" src={Victor} alt="Victor" className="image" />
                    <Box component="img" src={Derek} alt="Derek" className="image" />
                    <Box component="img" src={Khyam} alt="Khyam" className="image" />
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
