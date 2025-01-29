import React, { useState } from 'react';

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Pizza', price: 10, description: 'Cheesy pizza', image: '' },
    { id: 2, name: 'Burger', price: 8, description: 'Juicy burger', image: '' },
  ]);

  return (
    <section id="menu-management">
      <h2>Menu Management</h2>
      <div>
        {menuItems.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuManagement;