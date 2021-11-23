import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <h2 className="text-center">Our Doctors: {doctors.length}</h2>
            <div className='row'>
                {
                    doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor} ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;