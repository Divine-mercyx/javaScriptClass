const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const protectedRoute = require('./routes/postRoutes');

connectDB();
require('./models/User');
require('./models/Post');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Single express.json() call

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api', protectedRoute);
app.use('/api/cloud-signature', require('./routes/cloudinarySignature')); // Ensure this route exists

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));