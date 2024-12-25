// ApiDataWithSearch.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiDataWithSearch = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div>
      <h2>API Data with Search</h2>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by name"
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page * rowsPerPage >= filteredData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ApiDataWithSearch;
