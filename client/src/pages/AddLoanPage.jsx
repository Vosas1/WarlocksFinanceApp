import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import '../Styles/AddLoanPage.css';

// AddLoanPage component: A form for adding loan entries
const AddLoanPage = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { auth } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // Use environment variable for API URL
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            await axios.post(
                `${API_URL}/api/loans/add`,
                { amount, description },
                { headers: { Authorization: `Bearer ${auth}` } }
            );
            setAmount('');
            setDescription('');
            setSuccess('Loan added successfully!');
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <Container component="main" maxWidth="xs" className="AddLoanPage">
            <Box className="container">
                <Typography component="h1" variant="h5">
                    Add Loan
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}
                <Box component="form" onSubmit={handleSubmit} className="form">
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
