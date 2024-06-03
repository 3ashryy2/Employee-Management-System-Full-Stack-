import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditEmployeePage = ({ match, history }) => {
  const [employee, setEmployee] = useState({
    company: '',
    department: '',
    status: '',
    name: '',
    email: '',
    mobile_number: '',
    address: '',
    designation: '',
    hired_on: '',
  });
  const [companies, setCompanies] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/api/employees/${match.params.id}`);
        setEmployee(response.data);
        fetchDepartments(response.data.company);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('/api/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchDepartments = async (companyId) => {
      try {
        const response = await axios.get(`/api/departments?company=${companyId}`);
        setDepartments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployee();
    fetchCompanies();
  }, [match.params.id]);

  const handleCompanyChange = async (e) => {
    const companyId = e.target.value;
    setEmployee({ ...employee, company: companyId });
    try {
      const response = await axios.get(`/api/departments?company=${companyId}`);
      setDepartments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/employees/${match.params.id}`, employee);
      history.push('/employees');
    } catch (error) {
      console.error(error);
      alert('Failed to update employee');
    }
  };

  return (
    <div>
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <select required value={employee.company} onChange={handleCompanyChange}>
          <option value="">Select Company</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
        <select required value={employee.department} onChange={(e) => setEmployee({ ...employee, department: e.target.value })}>
          <option value="">Select Department</option>
          {departments.map((department) => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Name"
          required
          value={employee.name}
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={employee.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          required
          value={employee.mobile_number}
          onChange={(e) => setEmployee({ ...employee, mobile_number: e.target.value })}
        />
        <input
          type="text"
          placeholder="Designation"
          required
          value={employee.designation}
          onChange={(e) => setEmployee({ ...employee, designation: e.target.value })}
        />
        <input
          type="date"
          placeholder="Hired On"
          value={employee.hired_on}
          onChange={(e) => setEmployee({ ...employee, hired_on: e.target.value })}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditEmployeePage;
