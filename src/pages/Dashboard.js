import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-overview">
        <div className="stat-box">
          <h3>Total Users</h3>
          <p>1,234</p>
        </div>
        <div className="stat-box">
          <h3>Total Sales</h3>
          <p>$50,000</p>
        </div>
        <div className="stat-box">
          <h3>Active Sessions</h3>
          <p>45</p>
        </div>
      </div>
      <div className="dashboard-reports">
        <h3>Recent Reports</h3>
        <ul>
          <li>Sales Report - Q1</li>
          <li>User Activity - November</li>
          <li>Revenue Trends - 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
