import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromise);
    console.log(categories)
    return (
        <div>
            <h1 className='font-bold'>All Category ({categories.length}) </h1>
           <div className='grid grid-cols-1 gap-3 mt-4'>
             {
                categories.map(category => <NavLink key={category.id} className="text-accent px-5 bg-base-100 hover:underline font-semibold"
                to={`/category/${category.id}`}>{category.name}</NavLink>)
            }
           </div>
        </div>
    );
};

export default Categories;