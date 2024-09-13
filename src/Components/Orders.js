import React from 'react';

const Orders = () => {
  const orders = [
    { id: 1, customer: 'Alice', items: 'Pizza, Coke', status: 'Pending' },
    { id: 2, customer: 'Bob', items: 'Pasta, Salad', status: 'Completed' },
  ];

  return (
    <div className="orders">
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.items}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;