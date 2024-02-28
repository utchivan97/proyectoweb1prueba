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
