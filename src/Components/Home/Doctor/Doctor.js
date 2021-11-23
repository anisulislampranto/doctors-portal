import React from 'react';

const Doctor = ({doctor}) => {
    const { name, image } = doctor;
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" style={{ width: '200px', height: '200px' }} src={`data:image/png;base64,${image}`} alt=""/>
            <h4>{name}</h4>
        </div>
    );
};

export default Doctor;