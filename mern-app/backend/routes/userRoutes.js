const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/test', (req, res) => {
    res.send('User routes are working!');
});



router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const { name, email, password} = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ message: "an error occurred", error: err.message });
    }
});


router.post('/login', async (req, res) => {
    
});


module.exports = router;