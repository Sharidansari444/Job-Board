import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
   <div className="max-w-2xl mx-auto p-4">
  <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
  <ul className="space-y-4">
    {jobs.map(job => (
      <li key={job._id} className="border p-4 rounded shadow hover:bg-gray-50 transition">
        <Link to={`/jobs/${job._id}`} className="text-blue-600 hover:underline">
          <strong>{job.title}</strong> - {job.company} ({job.location})
        </Link>
      </li>
    ))}
  </ul>
</div>

  );
};

export default JobList;
