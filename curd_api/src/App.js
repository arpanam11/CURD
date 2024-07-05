import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<EmpListing />} />
      <Route path="/employee/create" element={<EmpCreate />} />
      <Route path="/employee/details/:empid" element={<EmpDetails />} />
      <Route path="/employee/edit/:empid" element={<EmpEdit />} />

    </Routes>
  </BrowserRouter>
    </div>
  );

}

export default App;
