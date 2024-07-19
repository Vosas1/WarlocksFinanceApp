const Credit = require('../models/Credit');

// Function to add a credit
const addCredit = async (req, res) => {
    const { amount, description } = req.body;

    // Check if all required fields are present
    if (!amount || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create a new credit entry
        const credit = new Credit({ user: req.user.userId, amount, description });
        await credit.save();  // Save the credit entry to the database
        res.status(201).json({ message: 'Credit added successfully' });  // Respond with success message
    } catch (error) {
        console.error('Error adding credit:', error);
        res.status(500).json({ message: 'Server error', error });  // Respond with server error
    }
};

// Function to get all credits for a user
const getCredits = async (req, res) => {
    try {
        const credits = await Credit.find({ user: req.user.userId });  // Find credits by user ID
        res.json(credits);  // Respond with the list of credits
    } catch (error) {
        console.error('Error fetching credits:', error);
        res.status(500).json({ message: 'Server error', error });  // Respond with server error
    }
};

module.exports = { addCredit, getCredits };
