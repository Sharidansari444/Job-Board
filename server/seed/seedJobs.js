const mongoose = require('mongoose');
const Job = require('../models/jobs');

mongoose.connect('mongodb://localhost:27017/jobboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Build user interfaces using React',
    type: 'Full-time',
  },
  {
    title: 'Backend Developer',
    company: 'CodeWorks',
    location: 'Delhi',
    description: 'API development with Node.js and MongoDB',
    type: 'Part-time',
  },
  {
    title: 'UI/UX Designer',
    company: 'Designify',
    location: 'Bangalore',
    description: 'Create mobile-first clean designs',
    type: 'Internship',
  },
];

async function seed() {
  await Job.deleteMany({});
  await Job.insertMany(jobs);
  console.log('Jobs seeded');
  mongoose.disconnect();
}

seed();
