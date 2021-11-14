import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async data => {

        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();




        await fetch('http://localhost:5500/addAppointment', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
                    
                    alert('Appointment Booked')
                    closeModal();   
            
                
        })

    };
  

  return (
    <div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">


        <h2 className="text-center"> {appointmentOn}</h2>
        <p className="text-secondary text-center"><small>On {date.toDateString()}</small></p>
        <form className="p-2" onSubmit={handleSubmit(onSubmit)}>

            <div class="mb-3 row">
                <div class="col-sm-10">
                    <input type="text" class="form-control-plaintext p-2" placeholder="Your Name" {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
            </div>

            <div class="mb-3 row">
                <div class="col-sm-10">
                    <input type="text" class="form-control-plaintext p-2" placeholder="Your Email" {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
            </div>

            <div class="mb-3 row">
                <div class="col-sm-10">
                    <input type="number" class="form-control-plaintext p-2" placeholder="Phone Number" {...register("number", { required: true })} />
                    {errors.number && <span className="text-danger">This field is required</span>}
                </div>
            </div>
    

    
            <div class="form-group row">
                <div className="col-4">
                    <select class="form-control p-2" aria-label="Default select example" {...register("gender", { required: true })}>
                        <option selected>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Not set">Other</option>
                    </select>
                    {errors.gender && <span className="text-danger">This field is required</span>}
                </div>
                <div class="col-4">
                    <input type="text" class="form-control-plaintext p-2" placeholder="Age" {...register("age", { required: true })} />
                    {errors.age && <span className="text-danger">This field is required</span>}
                </div>
                <div class="col-4">
                    <input type="text" class="form-control-plaintext p-2" placeholder="Weight"{...register("weight", { required: true })} />
                    {errors.weight && <span className="text-danger">This field is required</span>}
                </div>
            </div>


            <div className="form-group text-end">
                <button type="submit" className="btn btn-brand">Send</button>
            </div>
        </form>

      </Modal>

    </div>
  );
};

export default AppointmentForm;
