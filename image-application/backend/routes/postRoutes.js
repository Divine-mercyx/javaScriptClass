const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



router.get('/test', (req, res) => {
    res.send('Post Route Test Working');
});


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }  
})


router.post('/', async (req, res) => {
    try {
        const { imageUrl, user } = req.body;

        if (!imageUrl || !user) {
            return res.status(404).json({ message: "no image uploaded" })
        }

        const newPost = new Post({
            image: imageUrl,
            user: user
        });

        await newPost.save();
        res.status(200).json({ message: "post created successfully", post: newPost });
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "post not found" })
        }
        await post.remove();
        res.json({ message: "post deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;