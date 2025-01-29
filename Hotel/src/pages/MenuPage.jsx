import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MenuItem from '../components/MenuItem';

const MenuPage = () => {
  const { tableId } = useParams();
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState({ items: [], totalPrice: 0 });

  useEffect(() => {
    // Fetch menu items from the backend
    axios.get('http://localhost:5000/api/menu')
      .then((response) => setMenu(response.data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  const handleAddItem = (item) => {
    setOrder((prev) => ({
      items: [...prev.items, item],
      totalPrice: prev.totalPrice + item.price,
    }));
  };

  const handleSubmitOrder = () => {
    const orderPayload = {
      tableId: parseInt(tableId),
      items: order.items,
      totalPrice: order.totalPrice,
      orderTime: new Date(),
    };

    axios.post('http://localhost:5000/api/orders', orderPayload)
      .then(() => {
        alert('Order placed successfully!');
        setOrder({ items: [], totalPrice: 0 }); // Reset order
      })
      .catch((error) => console.error('Error placing order:', error));
  };

  return (
    <div className="menu-page">
      <h1>Menu for Table {tableId}</h1>
      <div className="menu-items">
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} onAdd={handleAddItem} />
        ))}
      </div>
      <div className="order-summary">
        <h2>Your Order</h2>
        {order.items.map((item, index) => (
          <div key={index}>
            {item.name} - ${item.price}
          </div>
        ))}
        <h3>Total: ${order.totalPrice.toFixed(2)}</h3>
        <button onClick={handleSubmitOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default MenuPage;