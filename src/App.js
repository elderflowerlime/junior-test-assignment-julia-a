import React from 'react';
import Navbar from './components/Navbar.js';
import PLP from "./components/PLP.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
 <> 
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<PLP />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;

