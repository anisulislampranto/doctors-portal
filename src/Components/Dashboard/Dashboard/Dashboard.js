import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';


const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [apointments, setApointments] = useState([])

    console.log(apointments)

        const handleDateChange = date => {
            setSelectedDate(date);
            
        };

        useEffect(()=>{
            fetch(`http://localhost:5500/appointmentByDate`, {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({selectedDate}),
                    })
                    .then(response => response.json())
                    .then(data => setApointments(data))
                    .catch((error) => {
                    console.error('Error:', error);
                    });
        },[selectedDate])

    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-5">
                    <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate apointments={apointments}/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;