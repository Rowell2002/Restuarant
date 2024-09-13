import React, { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Menu from './Components/Menu';
import Orders from './Components/Orders';
import Reservations from './Components/Reservations';
import Sidebar from './Components/Sidebar';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [cart, setCart] = useState([]);

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to add items to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Render content based on activePage and login state
  const renderContent = () => {
    if (!isLoggedIn) {
      return <Login onLogin={handleLogin} />;
    }

    switch (activePage) {
      case 'dashboard':
        return <Dashboard addToCart={addToCart} cart={cart} />;
      case 'orders':
        return <Orders />;
      case 'menu':
        return <Menu />;
      case 'reservations':
        return <Reservations />;
      case 'foodOrder':
        return <Cart cart={cart} />;
      default:
        return <Dashboard addToCart={addToCart} cart={cart} />;
    }
  };

  return (
    <div className="app-container">
      {isLoggedIn && <Sidebar activePage={activePage} setActivePage={setActivePage} />}
      <div className="content-container">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;