import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        // Ensure passwords match
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('User Data: ', formData);
    };

    return (
        <div>
            <Navbar />
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
                                <label htmlFor="confirmPassword" className="form-label">CONFIRM PASSWORD</label>
                                <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="userType" className="form-label">USER TYPE</label>
                                <select className="form-select" name="userType" value={formData.userType} onChange={handleChange} required>
                                    <option value="" disabled>Select</option>
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                </select>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
