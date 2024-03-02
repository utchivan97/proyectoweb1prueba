import React from 'react';

function ScheduleList({ employees }) {
  return (
    <div>
      <h2>Lista de Horarios</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee.name} - {employee.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default ScheduleList;

// En el componente DevPage.js

import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function DevPage() {
  // Configura las opciones del mapa, como el centro y el nivel de zoom
  const mapStyles = {
    width: '100%',
    height: '400px',
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Generador de Horarios</h1>
      {/* Agrega el componente de Google Maps */}
      <Map
        google={window.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.774929,
          lng: -122.419416
        }}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Agregar Nuevo Empleado</h2>
        {/* Agrega el formulario para agregar un nuevo empleado */}
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 
})(DevPage);

