import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ booking, date }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-4 text-center mt-5 mb-5" >
      <div className="card p-3">
        <div className="card-body text-center">
            <h4 className=" card-title text-brand">{booking.subject}</h4>
            <h5>{booking.visitingHour}</h5>
            <p>{booking.totalSpace} Spaces Available</p>
            <button onClick={openModal} className="btn btn-brand">Book Appointment</button>
            <AppointmentForm modalIsOpen={modalIsOpen} date={date} closeModal={closeModal} appointmentOn={booking.subject}/>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
