const Expense = require('../models/Expense');

const addExpense = async (req, res) => {
    const { type, amount, description } = req.body;
    if (!type || !amount || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const expense = new Expense({ user: req.user.userId, type, amount, description });
        await expense.save();
        res.status(201).json({ message: 'Expense added successfully' });
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.userId });
        res.json(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        await Expense.findByIdAndDelete(id);
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        console.error('Error deleting expense:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

const updateExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, description } = req.body;
        await Expense.findByIdAndUpdate(id, { amount, description });
        res.status(200).json({ message: 'Expense updated successfully' });
    } catch (error) {
        console.error('Error updating expense:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { addExpense, getExpenses, deleteExpense, updateExpense };
