import React from 'react';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Pizza', price: '$10.99', description: 'Cheese Pizza' },
    { id: 2, name: 'Pasta', price: '$8.99', description: 'Marinara Pasta' },
  ];

  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name} - {item.price}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;