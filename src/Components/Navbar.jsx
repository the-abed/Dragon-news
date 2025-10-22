import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = use(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(()=>{
            alert("You logged out successfully")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div className='left'></div>
            <div className='nav flex gap-5 text-accent justify-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Career</NavLink>
            </div>
            <div className='flex gap-5'>
                <img width={40} className='rounded-3xl' src={`${user ? user.photoURL:userIcon}`} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary px-10'>LogOut</button> : <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;