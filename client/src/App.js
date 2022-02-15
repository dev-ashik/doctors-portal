import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Header from './components/Home/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
