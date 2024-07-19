import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import LogoutButton from './LogoutButton';

// NavBar component: The navigation bar for the application.
const NavBar = () => {
    // Access the auth state from AuthContext
    const { auth } = useContext(AuthContext);

    return (
        // AppBar component from MUI for the navigation bar
        <AppBar position="static">
            <Toolbar>
                {/* Application title */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Financial Warlocks' Expense Tracker
                </Typography>
                {/* Navigation buttons container */}
                <Box>
                    {/* Navigation buttons to different routes */}
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/add-credit">
                        Add Credit
                    </Button>
                    <Button color="inherit" component={Link} to="/add-loan">
                        Add Loan
                    </Button>
                    <Button color="inherit" component={Link} to="/add-expense">
                        Add Expense
                    </Button>
                    <Button color="inherit" component={Link} to="/overview">
                        Overview
                    </Button>
                    {/* Conditional rendering based on authentication status */}
                    {auth ? (
                        // Show LogoutButton if authenticated
                        <LogoutButton />
                    ) : (
                        // Show Register and Login buttons if not authenticated
                        <>
                            <Button color="inherit" component={Link} to="/register">
                                Register
                            </Button>
                            <Button color="inherit" component={Link} to="/login">
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
