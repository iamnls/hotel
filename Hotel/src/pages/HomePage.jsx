import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleScan = () => {
    // Simulate scanning a QR code for Table 1
    navigate('/menu/table/1');
  };

  return (
    <div className="home-page">
      <h1>Welcome to SCAN & DINE</h1>
      <p>Scan the QR code at your table to view the menu.</p>
      <img
        src="/scan_.png"
        alt="QR Code"
        onClick={handleScan}
        style={{ cursor: 'pointer', width: '200px' }}
      />
      <p>Click the QR code to simulate scanning.</p>
    </div>
  );
};

export default HomePage;