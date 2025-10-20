import React from 'react';
import swimmingImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playGroundImg from '../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 my-3 p-2'>
          <h2 className="font-semibold my-4">Q-Zone</h2>  
          <div className='space-y-5'>
            <img src={swimmingImg} alt="" />
            <img src={classImg} alt="" />
            <img src={playGroundImg} alt="" />
          </div>
        </div>
    );
};

export default QZone;