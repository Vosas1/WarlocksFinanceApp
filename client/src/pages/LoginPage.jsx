import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../Styles/LoginPage.css';

// LoginPage component: A form for user login
const LoginPage = () => {
    // State variables for the form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Access the setAuth function from AuthContext
    const { setAuth } = useContext(AuthContext);
    
    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Use environment variable for API URL
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            // Make a POST request to log in the user
            const response = await axios.post(`${API_URL}/api/users/login`, { email, password });
            setAuth(response.data.token);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box className="container">
                {/* Page Title */}
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                {/* Form */}
                <Box component="form" onSubmit={handleSubmit} className="form">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{ className: 'inputField' }}
                        InputLabelProps={{ className: 'inputLabel' }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{ className: 'inputField' }}
                        InputLabelProps={{ className: 'inputLabel' }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;
