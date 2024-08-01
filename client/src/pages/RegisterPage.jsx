import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/RegisterPage.css';

// RegisterPage component: A form for user registration
const RegisterPage = () => {
    // State variables for the form inputs and error message
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Use environment variable for API URL
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            // Make a POST request to register the user
            await axios.post(`${API_URL}/api/users/register`, { name, email, password });
            navigate('/login');
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box className="container">
                {/* Page Title */}
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                {/* Display error message if any */}
                {error && <Alert severity="error" className="alert">{error}</Alert>}
                {/* Form */}
                <Box component="form" onSubmit={handleSubmit} className="form">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputProps={{ className: 'inputField' }}
                        InputLabelProps={{ className: 'inputLabel' }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
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
                        Register
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default RegisterPage;
