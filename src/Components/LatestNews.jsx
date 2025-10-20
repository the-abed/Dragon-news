import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-2'>
            <p className='btn text-base-100 bg-secondary px-5 py-2 font-semibold'>Latest</p>
            <Marquee className='flex gap-5'   pauseOnHover={true} speed={50}>
               <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p> 
               <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p> 
            </Marquee>
            
        </div>
    );
};

export default LatestNews;