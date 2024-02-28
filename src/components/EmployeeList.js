// EmployeeList.js
import React from 'react';

const EmployeeList = ({ workplace, employees }) => (
  <div>
    <h3>{workplace}</h3>
    <ul>
      {employees.map((employee, index) => (
        <li key={index}>{employee.name}</li>
      ))}
    </ul>
  </div>
);

export default EmployeeList;
