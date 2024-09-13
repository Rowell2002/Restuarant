import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

// Import components
import Cart from './Components/Cart';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Menu from './Components/Menu';
import Orders from './Components/Orders';
import PaymentPage from './Components/PaymentPage';
import Reservations from './Components/Reservations';
import Sidebar from './Components/Sidebar';
import ThankYouPage from './Components/ThankYouPage';

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
      case 'payment':
        return <PaymentPage />;
      default:
        return <Dashboard addToCart={addToCart} cart={cart} />;
    }
  };

  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && <Sidebar activePage={activePage} setActivePage={setActivePage} />}
        <div className="content-container">
          <Routes>
            <Route path="/" element={renderContent()} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;