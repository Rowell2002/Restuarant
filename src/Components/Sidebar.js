import React from 'react';
import '../App.css'; // import your CSS file

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul className="sidebar-menu">
        <li className={activePage === 'dashboard' ? 'active' : ''} onClick={() => setActivePage('dashboard')}>Dashboard</li>
        <li className={activePage === 'foodOrder' ? 'active' : ''} onClick={() => setActivePage('foodOrder')}>Food Order</li>
        <li className={activePage === 'favorite' ? 'active' : ''} onClick={() => setActivePage('favorite')}>Favorite</li>
        <li className={activePage === 'message' ? 'active' : ''} onClick={() => setActivePage('message')}>Message</li>
        <li className={activePage === 'orderHistory' ? 'active' : ''} onClick={() => setActivePage('orderHistory')}>Order History</li>
        <li className={activePage === 'bills' ? 'active' : ''} onClick={() => setActivePage('bills')}>Bills</li>
        <li className={activePage === 'setting' ? 'active' : ''} onClick={() => setActivePage('setting')}>Setting</li>
      </ul>
      <div className="sidebar-footer">
        <p>Upgrade your Account to Get Free Voucher</p>
        <button className="upgrade-btn">Upgrade</button>
      </div>
    </div>
  );
};

export default Sidebar;