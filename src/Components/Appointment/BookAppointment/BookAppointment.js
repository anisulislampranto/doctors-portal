import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10,
        id: 1
    },
    {
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10,
        id:2
    },
    {
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10,
        id: 3
    },
    {
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10,
        id: 4
    },
    {
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10,
        id: 5
    },
    {
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10,
        id: 6
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-brand">Availabe Appoinment On {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date}/>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;