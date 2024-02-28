// EmployeeForm.js
import React, { useState } from 'react';

const EmployeeForm = ({ workplaces, onAddEmployee }) => {
  const [name, setName] = useState('');
  const [workplace, setWorkplace] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleWorkplaceChange = (e) => setWorkplace(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEmployee({ name, workplace });
    setName('');
    setWorkplace('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Nombre" />
      <select value={workplace} onChange={handleWorkplaceChange}>
        {workplaces.map((workplace, index) => (
          <option key={index} value={workplace}>{workplace}</option>
        ))}
      </select>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default EmployeeForm;
