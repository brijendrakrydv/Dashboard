// ApiData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.example.com/data') // Replace with actual API URL
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>API Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiData;
