import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Restaurant Management Dashboard</h1>
      <nav>
        <ul>
          <li><a href="#order-management">Order Management</a></li>
          <li><a href="#menu-management">Menu Management</a></li>
          <li><a href="#order-history">Order History</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><button>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;