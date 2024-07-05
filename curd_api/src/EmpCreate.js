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
                  <div className="form-group">
                    <label>ID:</label>
                    <input
                      className="form-control"
                      placeholder="Enter ID"
                      value={id}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      className="form-control"
                      placeholder="Enter Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      className="form-control"
                      placeholder="Enter Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone:</label>
                    <input
                      className="form-control"
                      placeholder="Enter Phone"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="checkbox">
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