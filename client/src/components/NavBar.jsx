import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Financial Warlocks' Expense Tracker
                </Typography>
                <Box>
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
                    <Button color="inherit" component={Link} to="/register">
                        Register
                    </Button>
                    <Button color="inherit" component={Link} to="/login">
                        Login
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
