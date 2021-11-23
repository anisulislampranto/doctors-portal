import React from 'react';

const AppointmentsDataTable = ({appointments}) => {
    console.log(appointments)
    return (
        <table>
        <thead>
            <tr>
                <th className=' p-2'>Sr No</th>
                <th className=' p-2'>Name</th>
                <th className=' p-2'>Phone</th>
                <th className=' p-2'>Email</th>
                <th className=' p-2'>Gender</th>
                <th className=' p-2'>Age</th>
                <th className=' p-2'>Weight</th>
            </tr>
        </thead>

        <tbody>

            {
                appointments.map((appointment, index) => 
                <tr>
                    <td className=' p-2'>{index + 1}</td>
                    <td className=' p-2'>{appointment.name}</td>
                    <td className=' p-2'>{appointment.number}</td>
                    <td className=' p-2'>{appointment.email}</td>
                    <td className=' p-2'>{appointment.gender}</td>
                    <td className=' p-2'>{appointment.age}</td>
                    <td className=' p-2'>{appointment.weight}</td>
                </tr>
                )
            }
            
        </tbody>
    </table>
    );
};

export default AppointmentsDataTable;