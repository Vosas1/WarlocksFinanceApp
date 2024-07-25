import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; 

// Footer component: Displays the footer content
const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 2,
                textAlign: 'center',
                width: '100%'
            }}
        >
            {/* Footer Text */}
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} Financial Warlocks. All rights reserved.
            </Typography>
            {/* Contact Us Link */}
            <Typography variant="body2">
                <Link 
                    component={RouterLink} 
                    to="/contact" 
                    color="inherit" 
                    sx={{ 
                        textDecoration: 'none', 
                        ml: 1, 
                        padding: '0.5rem', 
                        borderRadius: '4px', 
                        '&:hover': { 
                            color: 'limegreen',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)'
                        }
                    }}
                >
                    Contact Us
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
