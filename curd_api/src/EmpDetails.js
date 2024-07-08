import React, { useEffect, useState } from 'react';
import { useParams ,Link } from 'react-router-dom';
import axios from 'axios';
const EmpDetails = () => {
  const { empid } = useParams();
  const [empdata, setEmpdata] = useState({});

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/employees/${empid}`);
        console.log(response.data);
        setEmpdata(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, [empid]);

  return (
    <div>
      <div className='row'>
        <div className='offset-lg-4 col-lg-4'>
          <div className='card'>
            <div className='card-title'>
              <h2 className='text-center mt-4'>Employee Details</h2>
            </div>
            <div className='card-body'>
              <div className="container">
                {empdata && (
                  <div>
                    <h4>The Employee name is <b className='text-success'>{empdata.name}</b></h4>

                    <br></br>
                    <h4>Contact Details</h4>
                    <p> Email Id : <b className='text-success'>{empdata.email}</b></p>
                    <p> Phone No : <b className='text-success'>{empdata.phone}</b></p>

                    <div className='mt-4'>
                    <Link to='/' className='btn btn-info m-1 text-white'>Back</Link>
                      </div>
                  </div>
                
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpDetails;
