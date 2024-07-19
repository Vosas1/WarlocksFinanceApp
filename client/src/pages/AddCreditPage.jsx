import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

// AddCreditPage component: A form for adding credit entries
const AddCreditPage = () => {
    // State variables for the form inputs and messages
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    // Access the auth state from AuthContext
    const { auth } = useContext(AuthContext);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent the default form submission
        setError('');  // Reset error message
        setSuccess('');  // Reset success message

        try {
            // Make a POST request to add the credit entry
            await axios.post(
                'http://localhost:5000/api/credits/add',
                { amount, description },
                { headers: { Authorization: `Bearer ${auth}` } }  // Include the authorization header
            );
            setAmount('');  // Clear the amount input
            setDescription('');  // Clear the description input
            setSuccess('Credit added successfully!');  // Set success message
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || 'An error occurred');  // Set error message
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
                    Add Credit
                </Typography>
                {/* Display error message if any */}
                {error && <Alert severity="error">{error}</Alert>}
                {/* Display success message if any */}
                {success && <Alert severity="success">{success}</Alert>}
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    {/* Input for amount */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="amount"
                        label="Amount"
                        name="amount"
                        type="number"
                        autoComplete="off"
                        autoFocus
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    {/* Input for description */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        autoComplete="off"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {/* Submit button */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default AddCreditPage;
