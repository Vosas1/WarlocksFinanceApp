const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        const contact = new Contact({ name, email, phone, message });
        await contact.save();
        res.status(201).json({ message: 'Contact request submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = { submitContactForm };
