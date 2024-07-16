import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const OverviewPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [open, setOpen] = useState(false);
    const [editAmount, setEditAmount] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const { auth } = useContext(AuthContext);

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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/expenses/${id}`, {
                headers: { Authorization: `Bearer ${auth}` },
            });
            setTransactions(transactions.filter(transaction => transaction._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (transaction) => {
        setSelectedTransaction(transaction);
        setEditAmount(transaction.amount);
        setEditDescription(transaction.description);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/expenses/${selectedTransaction._id}`, {
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
                                            onClick={() => handleDelete(transaction._id)}
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
