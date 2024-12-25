// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        ☰
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Dashboard</h2>
          <button className="close-btn" onClick={toggleSidebar}>
            &times;
          </button>
        </div>
        <ul className="sidebar-links">
          <li><Link to="/dashboard" className="sidebar-link" onClick={toggleSidebar}>Dashboard</Link></li>
          <li><Link to="/api-data" className="sidebar-link" onClick={toggleSidebar}>API Data</Link></li>
          <li><Link to="/reports" className="sidebar-link" onClick={toggleSidebar}>Reports</Link></li>
          <li><Link to="/report-details/1" className="sidebar-link" onClick={toggleSidebar}>Report Details</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
