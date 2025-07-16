const express = require('express');
const router = express.Router();
const Job = require('../models/jobs');

// GET /jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// GET /jobs/:id
router.get('/:id', async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

module.exports = router;
