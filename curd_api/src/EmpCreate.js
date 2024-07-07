import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmpCreate = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);
  const [validation, setValidation] = useState({ name: false, phone: false });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ id, name, email, phone, active });
    const empData = { name, email, phone, active };
    try {
      await axios.post('http://localhost:5000/employees', empData);
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className='row'>
        <div className='offset-lg-4 col-lg-4'>
          <div className='card'>
            <div className='card-title'>
              <h2 className='text-center'>Employee Create</h2>
            </div>
            <div className='card-body'>
              <div className="container">
                <form onSubmit={handleSubmit}>
                  
                  <div className="form-group mt-3">
                    <label>Name:</label>
                    <input
                        required
                      className="form-control"
                      placeholder="Enter Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      onMouseDown={() => setValidation(prev => ({ ...prev, name: true }))}
                    />
                    {name.length === 0 && validation.name && <span className='text-danger'>Enter The Name</span>}
                  </div>
                  <div className="form-group mt-3">
                    <label>Email:</label>
                    <input
                       type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Phone:</label>
                    <input
                       type='text'
                      className="form-control"
                      placeholder="Enter Phone"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      onMouseDown={() => setValidation(prev => ({ ...prev, phone: true }))}
                      />
                      {phone.length !== 10 && validation.phone && <span className='text-danger'>Enter a valid 10-digit phone number</span>}
                  </div>
                  <div className="checkbox mt-3">
                    <label>
                      <input
                        type="checkbox"
                        className="remember"
                        checked={active}
                        onChange={e => setActive(e.target.checked)}
                      />
                      Active
                    </label>
                  </div>
                  <Link to='/' className='btn btn-info m-1 text-white'>Back</Link>
                  <button type="submit" className="btn btn-success m-1">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;