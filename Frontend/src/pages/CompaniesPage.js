import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('/api/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name} 
            <button onClick={() => window.location.href = `/company/${company.id}`}>View</button>
            <button onClick={() => window.location.href = `/company/edit/${company.id}`}>Edit</button>
            <button onClick={() => axios.delete(`/api/companies/${company.id}`).then(() => setCompanies(companies.filter(c => c.id !== company.id)))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompaniesPage;
