const Credit = require('../models/Credit');

// Function to add a credit
const addCredit = async (req, res) => {
    const { amount, description } = req.body;

    // Check if all required fields are present
    if (!amount || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const credit = new Credit({ user: req.user.userId, amount, description });
        await credit.save();
        res.status(201).json({ message: 'Credit added successfully' });
    } catch (error) {
        console.error('Error adding credit:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

// Function to get all credits for a user
const getCredits = async (req, res) => {
    try {
        const credits = await Credit.find({ user: req.user.userId });
        res.json(credits);
    } catch (error) {
        console.error('Error fetching credits:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

//delete function
const deleteCredit = async (req, res) => {
    try {
        const { id } = req.params;
        await Credit.findByIdAndDelete(id);
        res.status(200).json({ message: 'Credit deleted successfully' });
    } catch (error) {
        console.error('Error deleting credit:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

//update function
const updateCredit = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, description } = req.body;
        await Credit.findByIdAndUpdate(id, { amount, description });
        res.status(200).json({ message: 'Credit updated successfully' });
    } catch (error) {
        console.error('Error updating credit:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { addCredit, getCredits, deleteCredit, updateCredit };
