import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
