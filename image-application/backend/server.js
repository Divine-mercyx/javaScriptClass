const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const { cloudinary } = require('./utils/cloudinary');

connectDB();
require('./models/User');
require('./models/Post');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
