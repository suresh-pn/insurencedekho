// src/pages/ClaimPage.js
import React, { useState } from 'react';
import axios from 'axios';

const ClaimPage = () => {
  const [formData, setFormData] = useState({
    policyNumber: '',
    incidentDate: '',
    description: '',
    files: [],
  });

  const handleChange = (e) => {
    if (e.target.name === 'files') {
      setFormData({ ...formData, files: e.target.files });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('policyNumber', formData.policyNumber);
    data.append('incidentDate', formData.incidentDate);
    data.append('description', formData.description);
    for (let i = 0; i < formData.files.length; i++) {
      data.append('files', formData.files[i]);
    }

    try {
      const res = await axios.post('/api/claims', data);
      alert('Claim submitted successfully!');
    } catch (err) {
      alert('Error submitting claim.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>File an Insurance Claim</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Policy Number</label>
          <input type="text" name="policyNumber" className="form-control" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Incident Date</label>
          <input type="date" name="incidentDate" className="form-control" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" className="form-control" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Upload Files (photos, PDFs)</label>
          <input type="file" name="files" className="form-control" onChange={handleChange} multiple />
        </div>
        <button className="btn btn-success mt-3" type="submit">Submit Claim</button>
      </form>
    </div>
  );
};

export default ClaimPage;
