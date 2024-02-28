import React, { useState } from 'react';
import ScheduleTable from '../components/ScheduleTable';

const DevPage = () => {
  const employeeList = [
    'Juan Pérez', 'María García', 'Pedro López',
    'Laura Martínez', 'Carlos Rodríguez', 'Ana Fernández',
    'Miguel Sánchez', 'Elena Gómez', 'Sara González',
    'David Ramírez', 'Lucía Díaz', 'Andrés Torres',
    'Daniel Vázquez', 'Luisa Muñoz', 'Carmen Ruiz'
  ];

  const [workplaces, setWorkplaces] = useState([
    { name: 'Level', employees: [] },
    { name: 'TheNormal', employees: [] },
    { name: 'PatioMamitas', employees: [] },
    { name: 'Republica', employees: [] },
    { name: 'Hi', employees: [] },
  ]);

  const [newEmployee, setNewEmployee] = useState('');
  const [selectedWorkplace, setSelectedWorkplace] = useState('');

  const handleAddEmployee = () => {
    if (!newEmployee || !selectedWorkplace) return;
    const updatedWorkplaces = [...workplaces];
    const index = updatedWorkplaces.findIndex(place => place.name === selectedWorkplace);
    if (index !== -1) {
      updatedWorkplaces[index].employees.push(newEmployee);
      setWorkplaces(updatedWorkplaces);
      setNewEmployee('');
      setSelectedWorkplace('');
    }
  };

  const handleGenerateSchedule = () => {
    const shuffledEmployees = [...employeeList].sort(() => Math.random() - 0.5);
    const updatedWorkplaces = [...workplaces];
    let currentIndex = 0;
    updatedWorkplaces.forEach(workplace => {
      workplace.employees = [];
      for (let i = currentIndex; i < currentIndex + Math.ceil(employeeList.length / updatedWorkplaces.length); i++) {
        if (shuffledEmployees[i]) {
          workplace.employees.push(shuffledEmployees[i]);
        }
      }
      currentIndex += Math.ceil(employeeList.length / updatedWorkplaces.length);
    });
    setWorkplaces(updatedWorkplaces);
};

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Generador de Horarios</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <ScheduleTable workplaces={workplaces} />
        <div style={{ marginLeft: '20px' }}>
          <button onClick={handleGenerateSchedule}>Generar Horario</button>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Agregar Nuevo Empleado</h2>
        <input type="text" value={newEmployee} onChange={(e) => setNewEmployee(e.target.value)} placeholder="Nombre del Empleado" />
        <select value={selectedWorkplace} onChange={(e) => setSelectedWorkplace(e.target.value)} style={{ marginLeft: '10px' }}>
          <option value="">Seleccionar Lugar de Trabajo</option>
          {workplaces.map((workplace, index) => (
            <option key={index} value={workplace.name}>{workplace.name}</option>
          ))}
        </select>
        <button onClick={handleAddEmployee} style={{ marginLeft: '10px' }}>Agregar Empleado</button>
      </div>
    </div>
  );
};

export default DevPage;
