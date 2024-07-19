const Loan = require('../models/Loan');

// Function to add a loan
const addLoan = async (req, res) => {
    const { amount, description } = req.body;

    // Check if all required fields are present
    if (!amount || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create a new loan entry
        const loan = new Loan({ user: req.user.userId, amount, description });
        await loan.save();  // Save the loan entry to the database
        res.status(201).json({ message: 'Loan added successfully' });  // Respond with success message
    } catch (error) {
        console.error('Error adding loan:', error);
        res.status(500).json({ message: 'Server error', error });  // Respond with server error
    }
};

// Function to get all loans for a user
const getLoans = async (req, res) => {
    try {
        const loans = await Loan.find({ user: req.user.userId });  // Find loans by user ID
        res.json(loans);  // Respond with the list of loans
    } catch (error) {
        console.error('Error fetching loans:', error);
        res.status(500).json({ message: 'Server error', error });  // Respond with server error
    }
};

module.exports = { addLoan, getLoans };
