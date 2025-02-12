const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes');
const { connect } = require('mongoose');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})