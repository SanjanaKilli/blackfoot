import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        dateOfBirth: '',
        userType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Data: ', formData);
    };

    return (
        <div className="container">
                       
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <h2 className="mt-4">Create New Account</h2>
                    <p>Already Registered? <Link to="/login">Login</Link></p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">NAME</label>
                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">EMAIL</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">PASSWORD</label>
                            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="dateOfBirth" className="form-label">DATE OF BIRTH</label>
                            <input type="date" className="form-control" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="userType" className="form-label">USER TYPE</label>
                            <select className="form-select" name="userType" value={formData.userType} onChange={handleChange} required>
                                <option value="" disabled>Select</option>
                                <option value="type1">Type 1</option>
                                <option value="type2">Type 2</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
