import React from 'react';
import '../App.css'; // Importa el archivo CSS principal desde la raíz del proyecto


function Footer() {
  return (
    <div className="Footer"> {/* Envuelve el contenido con un div y aplica la clase Footer */}
      <footer>
        <p>© 2024 AR Security - Sistema de Creación de Horarios</p>
        <div className="silver-line"></div> {/* Agrega una línea plateada */}
      </footer>
    </div>
  );
}

export default Footer;
