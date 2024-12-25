import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Reports.css';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/posts') // Replace with your actual reports API URL
      .then(response => {
        setReports(response.data);
      })
      .catch(error => console.error('Error fetching reports:', error));
  }, []);

  return (
    <div className="reports">
      <h2>Reports</h2>
      <div className="report-list">
        {reports.length > 0 ? (
          reports.map((report, index) => (
            <div key={index} className="report-item">
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              <Link to={`/report-details/${report.id}`} className="view-report-link">
                View Report
              </Link>
            </div>
          ))
        ) : (
          <p>No reports available</p>
        )}
      </div>
    </div>
  );
};

export default Reports;
