import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function ApiMaps(props) {
  if (!props || !props.google) {
    return null; // Maneja el caso en el que las props no estén definidas correctamente
  }

  return (
    <div>
      <h3>Agregar Horario</h3>
      {/* Utiliza props.google directamente */}
      <Map
        google={props.google}
        zoom={14}
        initialCenter={{ lat: 28.6353, lng: -106.0889 }}
      />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDKonQDoI2Op7XIedQfLIcn75YebNMW3sI'
})(ApiMaps);
