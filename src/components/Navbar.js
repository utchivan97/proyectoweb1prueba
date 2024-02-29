import React from 'react';
import '../App.css'; // Importa el archivo CSS principal desde el directorio src

function Navbar() {
  return (
    <div className="Navbar"> {/* Envuelve el contenido con un div y aplica la clase Navbar */}
      <nav>
        <h1>AR Security - Sistema de Creación de Horarios</h1>
        <div className="gold-line"></div> {/* Agrega una línea dorada */}
      </nav>
    </div>
  );
}

export default Navbar;
