import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer'; 

// Layout component: Defines the overall layout structure of the application
const Layout = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Navigation Bar */}
            <NavBar />
            {/* Main Content Area */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Outlet />
            </Box>
            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default Layout;
