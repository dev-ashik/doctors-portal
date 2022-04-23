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


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/dashboard/appointment" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allpatients" element={<AllPatients />} />
          <Route path="/recentappointments" element={<RecentAppontments />} />
          <Route path="/adddoctior" element={<AddDoctor />} />
        </Routes>
      </Router>
  );
}

export default App;
