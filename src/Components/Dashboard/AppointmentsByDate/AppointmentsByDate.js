import React from 'react';

const AppointmentsByDate = ({apointments}) => {
    return (
        <div>
            <h3>apointments {apointments.length}</h3>
        </div>
    );
};

export default AppointmentsByDate;