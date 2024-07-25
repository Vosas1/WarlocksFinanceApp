import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';
import '../Styles/ContactUsPage.css';

// ContactUsPage component: A form for contacting the support team
const ContactUsPage = () => {
    // State variables for the form inputs and messages
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');

        try {
            // Make a POST request to submit the contact form
            const response = await axios.post('http://localhost:5000/api/contact', { name, email, phone, message });
            setSuccess(response.data.message);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <Container component="main" maxWidth="sm">
            <Box className="container">
                <Typography component="h1" variant="h5">
                    Contact Us
                </Typography>
                {success && <Alert severity="success" className="alert">{success}</Alert>}
                {error && <Alert severity="error" className="alert">{error}</Alert>}
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
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        InputProps={{ className: 'inputField' }}
                        InputLabelProps={{ className: 'inputLabel' }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="message"
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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
                        Send
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ContactUsPage;
