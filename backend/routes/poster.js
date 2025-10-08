const express = require('express');
const router = express.Router();
const Poster = require('../models/Poster');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/upload', authMiddleware, async (req, res) => {
    try {
        const { title, description, price, category, imageURL } = req.body;

        const newPoster = new Poster({
            title,
            description,
            price,
            category,
            imageURL,
            CreatedBy: req.user.userId
        });

        await newPoster.save();
        res.status(201).json({ msg: 'Poster uploaded successfully!', poster: newPoster });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error uploading poster' });
    }
});

router.get('/', async (req, res) => {
    try {
        const posters = await Poster.find().populate('CreatedBy', 'name email');
        res.json(posters);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Error fetching posters' });
    }
});

router.get('/my-posters', authMiddleware, async (req, res) => {
    try {
        const posters = await Poster.find({ CreatedBy: req.user.userId }).populate('CreatedBy', 'name email');
        res.json(posters);
    } catch (err) {
        res.status(500).json({ msg: 'Error fetching user posters' });
    }
});

module.exports = router;
