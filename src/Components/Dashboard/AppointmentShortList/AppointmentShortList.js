import React from 'react';

const AppointmentShortList = ({apointments}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className=' p-2'>Name</th>
                    <th className=' p-2'>Phone</th>
                    <th className=' p-2'>Email</th>
                </tr>
            </thead>

            <tbody>

                {
                    apointments.map(appointment => 
                    <tr>
                        <td className=' p-2'>{appointment.name}</td>
                        <td className=' p-2'>{appointment.number}</td>
                        <td className=' p-2'>{appointment.email}</td>
                    </tr>
                    )
                }
                
            </tbody>
        </table>
    );
};

export default AppointmentShortList;