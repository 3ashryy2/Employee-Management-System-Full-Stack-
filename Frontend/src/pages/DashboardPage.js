import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [summary, setSummary] = useState({
    numCompanies: 0,
    numEmployees: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const companiesResponse = await axios.get('/api/companies');
        const employeesResponse = await axios.get('/api/employees');
        setSummary({
          numCompanies: companiesResponse.data.length,
          numEmployees: employeesResponse.data.length,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchSummary();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Number of Companies: {summary.numCompanies}</p>
      <p>Number of Employees: {summary.numEmployees}</p>
    </div>
  );
};

export default DashboardPage;
