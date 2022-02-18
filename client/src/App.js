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

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Router>
  );
}

export default App;
