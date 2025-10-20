import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
         <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
      <div className="card-body">
        <fieldset className="fieldset text-bold">
          <label className="label">Name</label>
          <input type="email" className="input bg-base-200 border-none" placeholder="Your Name" />
          <label className="label">Photo</label>
          <input type="email" className="input bg-base-200 border-none" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" className="input bg-base-200 border-none" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input bg-base-200 border-none" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='mt-5 text-center font-semibold'> Have An Account ?  
            <Link to="/auth/login" className='text-secondary'> Log In</Link>
          </p>
        </fieldset>
      </div>
      </div>
        </div>
    );
};

export default Register;