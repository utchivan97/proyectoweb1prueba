import React, { useState } from 'react';

const ScheduleForm = ({ onSubmit }) => {
    const [date, setDate] = useState('');
    const [shift, setShift] = useState('');
    const [employee, setEmployee] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ date, shift, employee });
        setDate('');
        setShift('');
        setEmployee('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Turno"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Empleado"
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
                required
            />
            <button type="submit">Agregar Horario</button>
        </form>
    );
};

export default ScheduleForm;
