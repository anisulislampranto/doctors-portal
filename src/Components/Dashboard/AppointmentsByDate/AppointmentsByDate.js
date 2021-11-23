import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({apointments}) => {
    console.log(apointments)
    return (
        <div>
            <h3 className="text-brand text-center">Appointments</h3>
            {
                apointments.length ? <AppointmentShortList key={apointments._key} apointments={apointments} /> : 
                <div className='p-5'>
                    <h5 className='lead text-center'>No Appointments available for selected date</h5>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;