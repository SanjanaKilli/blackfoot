import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
            <h2 className="mt-4">Login</h2>
            
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">EMAIL</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">PASSWORD</label>
                            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="userType" className="form-label">USER TYPE</label>
                            <select className="form-select" name="userType" value={formData.userType} onChange={handleChange} required>
                                <option value="" disabled>Select</option>
                                <option value="type1">Type 1</option>
                                <option value="type2">Type 2</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;