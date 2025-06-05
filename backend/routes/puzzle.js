const express = require('express');
const router = express.Router();
const puzzles = require('../data/puzzles.json');

router.get('/today', (req, res) => {
    const today = new Date().toISOString().slice(0, 10); // e.g., '2025-05-21'
    const puzzle = puzzles.find(p => p.date === today);
    if (puzzle) {
        res.json(puzzle);
    } else {
        res.status(404).json({ error: 'Puzzle not found for today' });
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const puzzle = puzzles.find(p => p.id === id);
    if (puzzle) {
        res.json(puzzle);
    } else {
        res.status(404).json({ error: 'Puzzle not found' });
    }
});

module.exports = router;
