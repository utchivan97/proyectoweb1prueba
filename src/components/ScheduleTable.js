import React from 'react';

const ScheduleTable = ({ workplaces }) => {
  return (
    <div>
      <h2 style={{ marginTop: '20px' }}>Horarios</h2>
      <table style={{ margin: '20px auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Lugar de Trabajo</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Empleado</th>
          </tr>
        </thead>
        <tbody>
          {workplaces.map((workplace, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{workplace.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
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
