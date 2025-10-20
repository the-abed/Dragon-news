import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div>
         <div className='flex flex-col justify-center items-center gap-3'>
              <img  src={logo} alt="" />
           <p className='text-accent'>Journalism without Fear or Favour</p>
           <p className='text-primary font-semibold'>{format(new Date(), "EEEE, MMMM MM, YYY")} </p>
         </div>
        </div>
    );
};

export default Header;