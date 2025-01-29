import React from 'react';

const MenuItem = ({ item, onAdd }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button onClick={() => onAdd(item)}>Add to Order</button>
    </div>
  );
};

export default MenuItem;