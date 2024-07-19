import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

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
        e.preventDefault();  // Prevent the default form submission
        
        try {
            // Make a POST request to log in the user
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            setAuth(response.data.token);  // Set the authentication token in the context
            navigate('/');  // Redirect to the home page
        } catch (error) {
            console.error(error);  // Log any errors
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                {/* Form for email and password inputs */}
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    {/* Input for email */}
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
                    />
                    {/* Input for password */}
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
                    />
                    {/* Submit button */}
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
