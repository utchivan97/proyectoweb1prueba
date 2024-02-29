import React from 'react';
import '../App.css'; // Importa los estilos CSS para ScheduleTable

const ScheduleTable = ({ workplaces }) => {
  return (
    <div className="schedule-table-container">
      <h2>Horarios</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Lugar de Trabajo</th>
            <th>Empleado</th>
          </tr>
        </thead>
        <tbody>
          {workplaces.map((workplace, index) => (
            <tr key={index}>
              <td>{workplace.name}</td>
              <td>
                {workplace.employees.map((employee, i) => (
                  <span key={i}>{employee}{i !== workplace.employees.length - 1 && ', '}</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
