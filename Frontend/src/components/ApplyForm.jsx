import React, { useState } from 'react';
import axios from 'axios';

const ApplyForm = ({ jobId }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    resume_link: '',
    cover_letter: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/applications', {
        ...form,
        job_id: jobId
      });
      setMessage('Application submitted successfully!');
      setForm({ name: '', email: '', resume_link: '', cover_letter: '' });
    } catch (err) {
      setMessage('Failed to submit application');
      console.log(err)
    }
  };

  return (
   <form onSubmit={handleSubmit} className="mt-6 bg-gray-100 p-4 rounded shadow space-y-4">
  <h3 className="text-xl font-semibold">Apply Now</h3>

  <input
    name="name"
    placeholder="Your Name"
    value={form.name}
    onChange={handleChange}
    required
    className="w-full p-2 border rounded"
  />
  <input
    name="email"
    placeholder="Your Email"
    value={form.email}
    onChange={handleChange}
    required
    className="w-full p-2 border rounded"
  />
  <input
    name="resume_link"
    placeholder="Resume Link"
    value={form.resume_link}
    onChange={handleChange}
    required
    className="w-full p-2 border rounded"
  />
  <textarea
    name="cover_letter"
    placeholder="Cover Letter"
    value={form.cover_letter}
    onChange={handleChange}
    required
    className="w-full p-2 border rounded h-24"
  ></textarea>
  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Submit
  </button>

  {message && (
    <p className="text-green-600 font-medium mt-2">{message}</p>
  )}
</form>

  );
};

export default ApplyForm;
