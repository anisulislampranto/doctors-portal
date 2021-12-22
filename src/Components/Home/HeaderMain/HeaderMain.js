import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';
import './HeaderMain.css'


const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3a4256'}}>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, molestias. Ut neque est quam delectus.</p>
                <Link to="/appointment">
                    <button className=" btn btn-primary">Get Appointment</button>
                </Link>
            </div>
            <div className="col-md-6 chair-image">
                    <img width="100%" src={chair} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;