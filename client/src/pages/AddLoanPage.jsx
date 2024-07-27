import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import '../Styles/AddLoanPage.css';

// AddLoanPage component: A form for adding loan entries
const AddLoanPage = () => {
    // State variables for the form inputs and messages
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    // Access the auth state from AuthContext
    const { auth } = useContext(AuthContext);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // Make a POST request to add the loan entry
            await axios.post(
                'http://localhost:5000/api/loans/add',
                { amount, description },
                { headers: { Authorization: `Bearer ${auth}` } }
            );
            // Clear input fields after successful submission
            setAmount('');
            setDescription('');
            setSuccess('Loan added successfully!');
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
                    Add Loan Entry
                </Typography>
                {/* Display error message if any */}
                {error && <Alert severity="error">{error}</Alert>}
                {/* Display success message if any */}
                {success && <Alert severity="success">{success}</Alert>}
                {/* Form */}
                <Box component="form" onSubmit={handleSubmit} className="form">
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
                        InputProps={{ className: 'inputField' }}
                        InputLabelProps={{ className: 'inputLabel' }}
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
                        InputProps={{ className: 'inputField' }}
                        InputLabelProps={{ className: 'inputLabel' }}
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

export default AddLoanPage;
