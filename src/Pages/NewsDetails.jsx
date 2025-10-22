import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../HomeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../Components/NewsDetailsCard';

const NewsDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [news,setNews] = useState({})
    
    useEffect(()=>{
        const filteredNews = data.find(news=> news.id == id);
        setNews(filteredNews);
    },[data,id])
   
    return (
        <div>
           <header>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'> 
            <section className='col-span-9'>
                <h2 className='font-semibold'>News Details</h2>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetails;