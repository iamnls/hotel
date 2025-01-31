import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ClientPage.css';

const ClientPage = () => {
  const { tableNumber } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch menu items from your API or mock data
    const fetchedMenuItems = [
      { id: 1, name: 'Pizza', price: 12, description: 'Delicious cheese pizza', image: '/images/pizza.png' },
      { id: 2, name: 'Burger', price: 8, description: 'Juicy beef burger', image: '/images/burger.png' },
      { id: 3, name: 'Pasta', price: 10, description: 'Pasta with marinara sauce', image: '/images/pasta.png' },
    ];
    setMenuItems(fetchedMenuItems);
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleCheckout = () => {
    // Implement checkout process
    alert('Proceeding to checkout');
  };

  return (
    <div className="client-page">
      <h1>Welcome to Table {tableNumber}</h1>
      
      <div className="menu">
        <h2>Menu</h2>
        <div className="menu-items">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <div className="total">
          <strong>Total: ${cart.reduce((total, item) => total + item.price, 0)}</strong>
        </div>
        <button onClick={handleCheckout} disabled={cart.length === 0}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default ClientPage;
