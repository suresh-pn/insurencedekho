import React, { useState } from 'react';
import { submitClaim } from '../services/api';

const Claims = () => {
  const [formData, setFormData] = useState({
    userId: '',
    insuranceId: '',
    claimAmount: '',
    claimReason: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitClaim(formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message || 'Claim submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="userId" placeholder="User ID" onChange={handleChange} required />
      <input type="text" name="insuranceId" placeholder="Insurance ID" onChange={handleChange} required />
      <input type="number" name="claimAmount" placeholder="Claim Amount" onChange={handleChange} required />
      <textarea name="claimReason" placeholder="Claim Reason" onChange={handleChange} required />
      <button type="submit">Submit Claim</button>
    </form>
  );
};

export default Claims;