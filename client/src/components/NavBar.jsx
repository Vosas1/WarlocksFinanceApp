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
                    <Button 
                        color="inherit" 
                        component={Link} 
                        to="/" 
                        sx={{ 
                            '&:hover': { 
                                color: 'limegreen' 
                            }
                        }}
                    >
                        Home
                    </Button>
                    <Button 
                        color="inherit" 
                        component={Link} 
                        to="/add-credit" 
                        sx={{ 
                            '&:hover': { 
                                color: 'limegreen' 
                            }
                        }}
                    >
                        Add Credit
                    </Button>
                    <Button 
                        color="inherit" 
                        component={Link} 
                        to="/add-loan" 
                        sx={{ 
                            '&:hover': { 
                                color: 'limegreen' 
                            }
                        }}
                    >
                        Add Loan
                    </Button>
                    <Button 
                        color="inherit" 
                        component={Link} 
                        to="/add-expense" 
                        sx={{ 
                            '&:hover': { 
                                color: 'limegreen' 
                            }
                        }}
                    >
                        Add Expense
                    </Button>
                    <Button 
                        color="inherit" 
                        component={Link} 
                        to="/overview" 
                        sx={{ 
                            '&:hover': { 
                                color: 'limegreen' 
                            }
                        }}
                    >
                        Overview
                    </Button>
                    {/* Conditional rendering based on authentication status */}
                    {auth ? (
                        // Show LogoutButton if authenticated
                        <LogoutButton />
                    ) : (
                        // Show Register and Login buttons if not authenticated
                        <>
                            <Button 
                                color="inherit" 
                                component={Link} 
                                to="/register" 
                                sx={{ 
                                    '&:hover': { 
                                        color: 'limegreen' 
                                    }
                                }}
                            >
                                Register
                            </Button>
                            <Button 
                                color="inherit" 
                                component={Link} 
                                to="/login" 
                                sx={{ 
                                    '&:hover': { 
                                        color: 'limegreen' 
                                    }
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
