import React from 'react';

const Cart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2);
  };
//hcbchgffcfc
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x {item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;