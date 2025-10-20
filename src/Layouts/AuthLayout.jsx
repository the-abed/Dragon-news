import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <header className='py-4 bg-base-200'>
            <Navbar></Navbar>
           </header>
           <main className='my-5'>
            <Outlet></Outlet>
           </main>
        </div>
    );
};

export default AuthLayout;