// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import ApiDataPage from './pages/ApiDataPage'; 
import Reports from './pages/Reports';
import ReportDetails from './pages/ReportDetails';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openNav = () => {
    setIsSidebarOpen(true);
  };

  const closeNav = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <div id="mySidenav" className={`sidenav ${isSidebarOpen ? 'open' : ''}`}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <Link to="/dashboard" onClick={closeNav}>Dashboard</Link>
          <Link to="/api-data" onClick={closeNav}>Api Data</Link>
          <Link to="/reports" onClick={closeNav}>Reports</Link>
        </div>

        <div className="main-content">
          <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>
            &#9776;
          </span>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/api-data" element={<ApiDataPage />} /> 
            <Route path="/reports" element={<Reports />} />
            <Route path="/report-details/:id" element={<ReportDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
