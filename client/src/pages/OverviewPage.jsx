import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

// OverviewPage component: Displays an overview of all transactions
const OverviewPage = () => {
    // State variables for transactions and editing dialogs
    const [transactions, setTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [open, setOpen] = useState(false);
    const [editAmount, setEditAmount] = useState('');
    const [editDescription, setEditDescription] = useState('');

    // Access the auth state from AuthContext
    const { auth } = useContext(AuthContext);

    // Fetch transactions data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [expensesResponse, loansResponse, creditsResponse] = await Promise.all([
                    axios.get('http://localhost:5000/api/expenses', {
                        headers: { Authorization: `Bearer ${auth}` },
                    }),
                    axios.get('http://localhost:5000/api/loans', {
                        headers: { Authorization: `Bearer ${auth}` },
                    }),
                    axios.get('http://localhost:5000/api/credits', {
                        headers: { Authorization: `Bearer ${auth}` },
                    }),
                ]);
                setTransactions([
                    ...expensesResponse.data.map((expense) => ({ ...expense, type: 'Expense' })),
                    ...loansResponse.data.map((loan) => ({ ...loan, type: 'Loan' })),
                    ...creditsResponse.data.map((credit) => ({ ...credit, type: 'Credit' })),
                ]);
            } catch (error) {
                console.error(error);
            }
        };

        if (auth) {
            fetchData();
        }
    }, [auth]);

    // Handle delete transaction
    const handleDelete = async (transaction) => {
        const urlMap = {
            'Expense': `http://localhost:5000/api/expenses/${transaction._id}`,
            'Loan': `http://localhost:5000/api/loans/${transaction._id}`,
            'Credit': `http://localhost:5000/api/credits/${transaction._id}`
        };

        try {
            await axios.delete(urlMap[transaction.type], {
                headers: { Authorization: `Bearer ${auth}` },
            });
            setTransactions(transactions.filter(t => t._id !== transaction._id));
        } catch (error) {
            console.error(error);
        }
    };

    // Handle edit transaction
    const handleEdit = (transaction) => {
        setSelectedTransaction(transaction);
        setEditAmount(transaction.amount);
        setEditDescription(transaction.description);
        setOpen(true);
    };

    // Close the edit dialog
    const handleClose = () => {
        setOpen(false);
    };

    // Handle update transaction
    const handleUpdate = async () => {
        const urlMap = {
            'Expense': `http://localhost:5000/api/expenses/${selectedTransaction._id}`,
            'Loan': `http://localhost:5000/api/loans/${selectedTransaction._id}`,
            'Credit': `http://localhost:5000/api/credits/${selectedTransaction._id}`
        };

        try {
            await axios.put(urlMap[selectedTransaction.type], {
                amount: editAmount,
                description: editDescription,
            }, {
                headers: { Authorization: `Bearer ${auth}` },
            });
            setTransactions(transactions.map(transaction => 
                transaction._id === selectedTransaction._id 
                    ? { ...transaction, amount: editAmount, description: editDescription } 
                    : transaction
            ));
            handleClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <Box sx={{ marginTop: 8 }}>
                <Typography variant="h4" gutterBottom>
                    Overview
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map((transaction) => (
                                <TableRow key={transaction._id}>
                                    <TableCell>{transaction.type}</TableCell>
                                    <TableCell>${transaction.amount}</TableCell>
                                    <TableCell>{transaction.description}</TableCell>
                                    <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            onClick={() => handleEdit(transaction)}
                                            sx={{ mr: 1 }}
                                        >
                                            Edit
                                        </Button>
                                        <Button 
                                            variant="contained" 
                                            color="secondary" 
                                            onClick={() => handleDelete(transaction)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Transaction</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Amount"
                        type="number"
                        fullWidth
                        value={editAmount}
                        onChange={(e) => setEditAmount(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        fullWidth
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default OverviewPage;
