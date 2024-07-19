import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { Button } from '@mui/material';

// LogoutButton component: A button that logs the user out and redirects to the login page.
const LogoutButton = () => {
    // Access the logout function from AuthContext
    const { logout } = useContext(AuthContext);
    
    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Function to handle the logout process
    const handleLogout = () => {
        logout(); // Call the logout function
        navigate('/login'); // Redirect to the login page
    };

    return (
        // MUI Button component styled with "inherit" color
        <Button color="inherit" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;
