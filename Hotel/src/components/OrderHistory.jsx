import React from 'react';

const OrderHistory = () => {
  const orders = [
    { id: 1, tableNumber: 1, items: ['Pizza', 'Burger'], total: 18 },
    { id: 2, tableNumber: 2, items: ['Pasta'], total: 12 },
  ];

  return (
    <section id="order-history">
      <h2>Order History</h2>
      <div>
        {orders.map(order => (
          <div key={order.id}>
            <h3>Table {order.tableNumber}</h3>
            <p>Items: {order.items.join(', ')}</p>
            <p>Total: ${order.total}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderHistory;