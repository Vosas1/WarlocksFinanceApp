const Loan = require('../models/Loan');

const addLoan = async (req, res) => {
    const { amount, description } = req.body;
    if (!amount || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const loan = new Loan({ user: req.user.userId, amount, description });
        await loan.save();
        res.status(201).json({ message: 'Loan added successfully' });
    } catch (error) {
        console.error('Error adding loan:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

const getLoans = async (req, res) => {
    try {
        const loans = await Loan.find({ user: req.user.userId });
        res.json(loans);
    } catch (error) {
        console.error('Error fetching loans:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { addLoan, getLoans };
