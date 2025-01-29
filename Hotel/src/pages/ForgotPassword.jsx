import React, { useState } from 'react';
import axios from 'axios';
import '../styles/global.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', {
        email,
      });
      setMessage(response.data.message);
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="auth-page">
      <h1>Forgot Password</h1>
      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>
        Remember your password? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default ForgotPassword;