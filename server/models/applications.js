const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  job_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
  },
  name: String,
  email: String,
  resume_link: String,
  cover_letter: String,
});

module.exports = mongoose.model('Application', ApplicationSchema);
