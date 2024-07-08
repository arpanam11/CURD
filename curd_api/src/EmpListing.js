import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const EmpListing = () => {
  const [employees, setEmployees] = useState([]);
const navigate = useNavigate();
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
const handleView=(id)=>{
  navigate("/employee/details/"+id)
}
const handleEdit=(id)=>{
  navigate("/employee/edit/"+id)
}
const handleDelete = async (id) => {
  if (window.confirm('Do you want to delete this employee?')) {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      setEmployees(employees.filter(employee => employee.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  }
};
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-title'>
          <h2  className='text-center mt-4'>Employee Listing</h2>
        </div>
        <div className='card-body'>
            <div className='d-flex justify-content-end mb-4'>
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
                   <a onClick={()=>{handleView(employee.id)}} className='btn btn-primary m-1'> View</a>
                   <a onClick={()=>{handleEdit(employee.id)}} className='btn btn-success m-1'> Edit</a>
                   <a onClick={()=>{handleDelete(employee.id)}} className='btn btn-danger m-1'> Delete</a>
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