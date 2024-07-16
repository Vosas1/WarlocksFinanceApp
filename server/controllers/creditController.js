const Credit = require('../models/Credit');

const addCredit = async (req, res) => {
    const { amount, description } = req.body;
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

const getCredits = async (req, res) => {
    try {
        const credits = await Credit.find({ user: req.user.userId });
        res.json(credits);
    } catch (error) {
        console.error('Error fetching credits:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { addCredit, getCredits };
