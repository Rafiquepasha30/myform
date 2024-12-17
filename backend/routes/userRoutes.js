const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Create a user
router.post('/', async (req, res) => {
    const {
        name,
        email
    } = req.body;
    try {
        const newUser = new User({
            name,
            email
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({
            message: 'Error saving user',
            error
        });
    }
});

module.exports = router;