import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ApplyForm from './ApplyForm';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
   <div className="max-w-2xl mx-auto p-4">
  <h2 className="text-2xl font-bold">{job.title}</h2>
  <p className="mt-2"><strong>Company:</strong> {job.company}</p>
  <p><strong>Location:</strong> {job.location}</p>
  <p><strong>Description:</strong> {job.description}</p>
  <p><strong>Type:</strong> {job.type}</p>

  <div className="mt-6">
    <ApplyForm jobId={job._id} />
  </div>

  <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">← Back to Job List</Link>
</div>

  );
};

export default JobDetail;
