const Expense = require('../models/Expense');

// Function to add an expense
const addExpense = async (req, res) => {
    const { type, amount, description } = req.body;

    // Check if all required fields are present
    if (!type || !amount || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create a new expense entry
        const expense = new Expense({ user: req.user.userId, type, amount, description });
        await expense.save();  // Save the expense entry to the database
        res.status(201).json({ message: 'Expense added successfully' });  // Respond with success message
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).json({ message: 'Server error', error });  // Respond with server error
    }
};

// Function to get all expenses for a user
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.userId });  // Find expenses by user ID
        res.json(expenses);  // Respond with the list of expenses
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ message: 'Server error', error });  // Respond with server error
    }
};

// Function to delete an expense
const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        await Expense.findByIdAndDelete(id);  // Find and delete the expense by ID
        res.status(200).json({ message: 'Expense deleted successfully' });  // Respond with success message
    } catch (error) {
        console.error('Error deleting expense:', error);
        res.status(500).json({ message: 'Server error', error });  // Respond with server error
    }
};

// Function to update an expense
const updateExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, description } = req.body;
        await Expense.findByIdAndUpdate(id, { amount, description });  // Find and update the expense by ID
        res.status(200).json({ message: 'Expense updated successfully' });  // Respond with success message
    } catch (error) {
        console.error('Error updating expense:', error);
        res.status(500).json({ message: 'Server error', error });  // Respond with server error
    }
};

module.exports = { addExpense, getExpenses, deleteExpense, updateExpense };
