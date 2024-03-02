import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { googleMapsApiKey } from 'AIzaSyDKonQDoI2Op7XIedQfLIcn75YebNMW3sI'; 


function ScheduleForm() {
  return (
    <div>
      <h3>Agregar Horario</h3>
      {/* Agrega el componente Map */}
      <Map
        google={this.props.google} // Proporciona la instancia de google
        zoom={14} // Establece el nivel de zoom inicial
        initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Establece el centro del mapa inicial
      />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: AIzaSyDKonQDoI2Op7XIedQfLIcn75YebNMW3sIy // API Key
})(ScheduleForm);
