import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5500/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }



    return (
        <section className="container-fluid row">
            <Sidebar/>
            <div className='col-md-10 p-4 pr-5' style={{position: 'absolute', right: 0}}>
                <h3>Add Doctor</h3>    
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={e => setEmail(e.target.value)} type="email" name="email" className="form-control"  placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input onChange={e => setName(e.target.value)} type="text" name="name" className="form-control"  placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlFile1">Upload A Image</label>
                        <input onChange={e => setImage(e.target.files[0])} type="file" className="form-control" placeholder="Picture" />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </div>
        </section>
    );
};

export default AddDoctor;