import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Importa el archivo CSS principal
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DevPage from './pages/DevPage';
import { GoogleApiWrapper } from 'google-maps-react';
import ApiMaps from './components/ApiMaps'; 

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

function App() {
  return (
    <div className="App">
      <h1>Mi Aplicación con Mapa</h1>
      <ApiMaps />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDKonQDoI2Op7XIedQfLIcn75YebNMW3sI'
})(App);