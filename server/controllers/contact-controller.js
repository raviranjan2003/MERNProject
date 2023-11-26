const Contact = require('../models/contactModel');

const contactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            message
        })

        const details = await newContact.save();

        res.status(200).send(details);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = contactForm;