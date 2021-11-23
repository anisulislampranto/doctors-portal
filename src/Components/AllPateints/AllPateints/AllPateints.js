import React, { useEffect, useState } from 'react';
import AppointmentsDataTable from '../../Appointment/AppointmentsDataTable/AppointmentsDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPateints = () => {
    const [appointments, setAppointments] = useState([])

    console.log(appointments)

    useEffect(()=>{
        fetch('http://localhost:5500/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])


    return (
        <div className="container-fluid row">
            <Sidebar/>
            <div className='col-md-10 p-4 pr-5' style={{position: 'absolute', right:0}}>
                <h5>All Pateints</h5>
                <AppointmentsDataTable key={appointments._id} appointments={appointments} />
            </div>
        </div>
    );
};

export default AllPateints;