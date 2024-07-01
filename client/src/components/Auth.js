import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../actions/auth';


const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: ''});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formData));
        } else {
            dispatch(login(formData, navigate));
        }
    };
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit}>
                <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
                {isSignup && <input type="text" name="username" placeholder="Username" onChange={handleChange} required />}
                {isSignup && <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />}
                {isSignup && <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />}

                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />         
                {isSignup && <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />}

                <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
                <button type="button" onClick={switchMode}>
                    {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                </button>
            </form>
        </div>
    );
};

export default Auth;
