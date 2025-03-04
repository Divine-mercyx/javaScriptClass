const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Middleware to check token
const authenticate = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]; // Extract token from Bearer header

    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET); // Attach user data to request
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};

// 🔹 Protected route
router.get("/protected", authenticate, (req, res) => {
    res.json({ message: "You have accessed protected data!", user: req.user });
});

module.exports = router;
