import React from 'react'
import { useParams } from 'react-router-dom';

const EmpEdit = () => {
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
              <h2 className='text-center'>Employee Edit</h2>
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
                      onMouseDown={e=>setValidation(true)}
                    />
                  {name.length==0 && validation && <span className='text-danger'>Enter The Name</span>}
                  </div>
                  <div className="form-group mt-3">
                    <label>Email:</label>
                    <input
                      className="form-control"
                      placeholder="Enter Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Phone:</label>
                    <input
                      className="form-control"
                      placeholder="Enter Phone"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
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
  )
}

export default EmpEdit