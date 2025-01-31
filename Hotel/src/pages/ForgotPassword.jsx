import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ForgotPassword.css';  // Import the CSS file for styling
import HomePage from './HomePage';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const formRef = useRef(null);
  const navigate = useNavigate();

  // Function to handle outside click to close the form
  const handleOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      navigate('/'); // Redirect to home page if clicked outside the form
    }
  };

  // Handle form submission
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', {
        email,
      });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
      setMessage('');
      console.error(err);
    }
  };

  return (
    <div className="forgot-password-page">
      {/* Render Home component in the background */}
      <HomePage />
      <div className="overlay" onClick={handleOutsideClick}>
        <div className="forgot-password-form" ref={formRef}>
          <h2>Forgot Password</h2>
          
          {/* Display Error or Success Message */}
          {error && <p className="error">{error}</p>}
          {message && <p className="success">{message}</p>}
          
          {/* Forgot Password Form */}
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
            <button type="submit" className="submit-button">
              Reset Password
            </button>
          </form>
          
          <div className="form-links">
            <p>
              Remember your password? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
