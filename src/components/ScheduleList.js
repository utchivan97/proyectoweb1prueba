import React from 'react';

const ScheduleList = ({ schedules }) => {
    return (
        <ul>
            {schedules.map((schedule, index) => (
                <li key={index}>
                    <span>Fecha: {schedule.date}</span>
                    <span>Turno: {schedule.shift}</span>
                    <span>Empleado: {schedule.employee}</span>
                </li>
            ))}
        </ul>
    );
};

export default ScheduleList;
