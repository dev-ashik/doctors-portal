import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Header from './components/Home/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients';
import RecentAppontments from './components/Dashboard/RecentAppontments/RecentAppointments';
import AddDoctor from './components/AddDoctor/AddDoctor';
import { createContext, useState } from 'react';
import Privateroute from './components/PrivateRoute/Privateroute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          {/* <Privateroute path="/patient/appointment">
            <Route element={<Dashboard />} />
          </Privateroute> */}
          <Route path="/login" element={<Login />} />
          <Route path="/allpatients" element={<AllPatients />} />
          <Route path="/recentappointments" element={<RecentAppontments />} />
          <Route path="/adddoctor" element={<AddDoctor />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
