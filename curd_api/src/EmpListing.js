import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmpListing = () => {
  const [employees, setEmployees] = useState([]);

  const empData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/employees`);
      console.log(response.data)
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  useEffect(() => {
    empData();
  }, []);

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-title'>
          <h2  className='text-center'>Employee Listing</h2>
        </div>
        <div className='card-body'>
            <div className='d-flex ml-auto'>
            <Link to="employee/create" className='btn btn-info text-white' >Create (+)</Link> 
            </div>
          <table className='table table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>
                   <a onClick={()=>{handleView(item.id)}} className='btn btn-primary m-1'> View</a>
                   <a onClick={()=>{handleEdit(item.id)}} className='btn btn-success m-1'> Edit</a>
                   <a onClick={()=>{handleDelete(item.id)}} className='btn btn-danger m-1'> Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;