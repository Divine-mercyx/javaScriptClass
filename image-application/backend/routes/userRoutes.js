const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.get('/test', (req, res) => {
    res.send('User Route Test Working');
});


router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


router.post('/signup', async (req, res) => {
    try {
        const { name, email, password} = req.body;
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const existingUser = await User.findOne({ trimmedEmail });
        if (existingUser) {
            return res.status(400).json({ message: "user already exists" });
        }

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(trimmedPassword, salt);
        const newUser = User({ name, email, password: hashedPassword });
        await newUser.save();
        const userResponse = { id: newUser._id, name: newUser.name, email: newUser.email }
        res.status(201).json({ message: "User created successfully", user: userResponse })
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({ message: "user not found" })
        }
        
        const isPasswordValid = await bcrypt.compare(trimmedPassword, existingUser.password);
        console.log(isPasswordValid)
        if (!isPasswordValid) {
            return res.status(400).json({ message: "invalid credentials" });
        }

        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const userResponse = { id: existingUser._id, name: existingUser.name, email: existingUser.email}
        res.status(200).json({ token, user: userResponse });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});




module.exports = router;