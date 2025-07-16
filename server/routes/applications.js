const express = require('express');
const router = express.Router();
const Application = require('../models/applications');

// POST /applications
router.post('/', async (req, res) => {
  const newApp = new Application(req.body);
  await newApp.save();
  res.status(201).json({ message: 'Application submitted successfully' });
});

module.exports = router;
