import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/menu/table/1" className="nav-link">Menu</Link>
      <Link to="/signup" className="nav-link">Sign Up</Link>
      <Link to="/login" className="nav-link">Login</Link>
    </nav>
  );
};

export default Navbar;