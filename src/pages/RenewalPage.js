import React, { useState } from 'react';
import axios from 'axios';

const RenewalPage = () => {
  const [policyNumber, setPolicyNumber] = useState('');
  const [policy, setPolicy] = useState(null);
  const [message, setMessage] = useState('');

  const fetchPolicy = async () => {
    setMessage('');
    try {
      const res = await axios.get(`/api/renewal/${policyNumber}`);
      setPolicy(res.data);
    } catch (err) {
      setMessage('❌ Policy not found.');
      setPolicy(null);
    }
  };

  const renewPolicy = async () => {
    try {
      const res = await axios.post('/api/renewal/renew', { policyNumber });
      setMessage('✅ Policy renewed successfully!');
      setPolicy(res.data.policy);
    } catch (err) {
      setMessage('❌ Failed to renew policy.');
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Renew Your Policy</h2>

      <div className="card p-4 shadow-sm">
        <div className="form-group mb-3">
          <label htmlFor="policyNumber" className="form-label">Enter Policy Number</label>
          <input
            type="text"
            id="policyNumber"
            className="form-control"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            placeholder="e.g. POL123456"
          />
        </div>
        <button className="btn btn-primary mb-2" onClick={fetchPolicy}>
          Fetch Policy
        </button>

        {message && <div className="alert alert-info mt-3">{message}</div>}

        {policy && (
          <div className="mt-4">
            <h5 className="mb-3">Policy Details</h5>
            <ul className="list-group mb-3">
              <li className="list-group-item"><strong>Policy Number:</strong> {policy.policyNumber}</li>
              <li className="list-group-item"><strong>Status:</strong> {policy.status}</li>
              <li className="list-group-item"><strong>Expiry Date:</strong> {new Date(policy.expiryDate).toLocaleDateString()}</li>
            </ul>
            <button className="btn btn-success" onClick={renewPolicy}>
              Renew Policy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RenewalPage;
