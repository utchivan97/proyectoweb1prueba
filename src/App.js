import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DevPage from './pages/DevPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<DevPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
