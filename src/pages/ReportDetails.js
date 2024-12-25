// src/pages/ReportDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ReportDetails.css';  

const ReportDetails = () => {
  const { id } = useParams();  
  const [report, setReport] = useState(null);

  useEffect(() => {

    axios.get(`https://jsonplaceholder.org/posts/${id}`) // Replace with your actual report API URL
      .then(response => {
        setReport(response.data);
      })
      .catch(error => console.error('Error fetching report details:', error));
  }, [id]);

  if (!report) {
    return <div>Loading...</div>;
  }

  return (
    <div className="report-details">
      <h2>{report.title}</h2>
      <p>{report.description}</p>
      <div className="report-content">
        <h3>Details</h3>
        <p>{report.details}</p>

      </div>
    </div>
  );
};

export default ReportDetails;
