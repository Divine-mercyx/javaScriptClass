const crypto = require('crypto');
const express = require('express');
const router = express.Router();

// Route to generate a signature for Cloudinary upload
router.get('/', (req, res) => {
    try {
        const timestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
        const params = {
            timestamp: timestamp,
            upload_preset: 'ml_default' // Your signed upload preset name
        };

        // Generate the signature using your Cloudinary API secret
        const signature = crypto
            .createHash('sha1')
            .update(`timestamp=${params.timestamp}&upload_preset=${params.upload_preset}${process.env.CLOUDINARY_API_SECRET}`)
            .digest('hex');

        res.json({
            signature,
            timestamp,
            api_key: process.env.CLOUDINARY_API_KEY // Your Cloudinary API key
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;