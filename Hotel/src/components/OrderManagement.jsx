import React, { useState } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, tableNumber: 1, items: ['Pizza', 'Burger'], status: 'Pending' },
    { id: 2, tableNumber: 2, items: ['Pasta'], status: 'On Progress' },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <section id="order-management">
      <h2>Order Management</h2>
      <div>
        {orders.map(order => (
          <div key={order.id}>
            <h3>Table {order.tableNumber}</h3>
            <p>Items: {order.items.join(', ')}</p>
            <p>Status: {order.status}</p>
            <button onClick={() => handleStatusChange(order.id, 'On Progress')}>On Progress</button>
            <button onClick={() => handleStatusChange(order.id, 'Served')}>Served</button>
            <button onClick={() => handleStatusChange(order.id, 'Cancelled')}>Cancel</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderManagement;