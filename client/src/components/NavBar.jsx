import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import LogoutButton from './LogoutButton';
import '../Styles/NavBar.css';

// NavBar component: The navigation bar for the application.
const NavBar = () => {
    // State and context hooks
    const { auth } = useContext(AuthContext);
    const location = useLocation();
    const [glow, setGlow] = useState(false);

    // Effect to handle the glow animation on location change
    useEffect(() => {
        setGlow(false);
        const timer = setTimeout(() => setGlow(true), 50); 
        return () => clearTimeout(timer);
    }, [location.pathname]);

    // Helper function to determine active route
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Application title with glow effect */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    className={glow ? 'glow-text' : ''}
                >
                    Financial Warlocks' Expense Tracker
                </Typography>
                
                {/* Navigation buttons container */}
                <Box>
                    {/* Navigation buttons to different routes */}
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                        className={isActive('/')}
                        sx={{
                            '&.active': { fontWeight: 'bold', color: 'yellow' },
                            '&:hover': { color: 'limegreen' },
                        }}
                    >
                        Home
                    </Button>
                    {auth ? (
                        <>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/add-credit"
                                className={isActive('/add-credit')}
                                sx={{
                                    '&.active': { fontWeight: 'bold', color: 'yellow' },
                                    '&:hover': { color: 'limegreen' },
                                }}
                            >
                                Add Credit
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/add-loan"
                                className={isActive('/add-loan')}
                                sx={{
                                    '&.active': { fontWeight: 'bold', color: 'yellow' },
                                    '&:hover': { color: 'limegreen' },
                                }}
                            >
                                Add Loan
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/add-expense"
                                className={isActive('/add-expense')}
                                sx={{
                                    '&.active': { fontWeight: 'bold', color: 'yellow' },
                                    '&:hover': { color: 'limegreen' },
                                }}
                            >
                                Add Expense
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/overview"
                                className={isActive('/overview')}
                                sx={{
                                    '&.active': { fontWeight: 'bold', color: 'yellow' },
                                    '&:hover': { color: 'limegreen' },
                                }}
                            >
                                Overview
                            </Button>
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/register"
                                className={isActive('/register')}
                                sx={{
                                    '&.active': { fontWeight: 'bold', color: 'yellow' },
                                    '&:hover': { color: 'limegreen' },
                                }}
                            >
                                Register
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/login"
                                className={isActive('/login')}
                                sx={{
                                    '&.active': { fontWeight: 'bold', color: 'yellow' },
                                    '&:hover': { color: 'limegreen' },
                                }}
                            >
                                Login
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
