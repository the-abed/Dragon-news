import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='left'></div>
            <div className='nav flex gap-5 text-accent justify-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Career</NavLink>
            </div>
            <div className='flex gap-5'>
                <img src={user} alt="" />
                <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;