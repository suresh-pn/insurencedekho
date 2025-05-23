import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPasswordForm = ({ switchTo }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('/api/auth/forgot-password', { email });
      toast.success(res.data.message || 'Password reset link sent!');
      switchTo('login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send reset link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleForgotPassword}>
      <h4 className="mb-3">Forgot Password</h4>
      <input
        type="email"
        className="form-control mb-2"
        placeholder="Enter your registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-warning w-100" disabled={loading}>
        {loading ? 'Sending...' : 'Send Reset Link'}
      </button>
      <div className="mt-3 text-center">
        <button type="button" className="btn btn-link" onClick={() => switchTo('login')}>
          Back to Login
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
