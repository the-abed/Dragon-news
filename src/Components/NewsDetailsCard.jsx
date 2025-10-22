import React from 'react';
import { Link } from 'react-router';


const NewsDetailsCard = ({ news }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-4 p-6">
      
      {/* News Image */}
      <img 
        src={news.image_url} 
        alt={news.title} 
        className="w-full h-96 rounded-t-md"
      />

      {/* News Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-bold mb-2">{news.title}</h2>

        {/* Details */}
        <p className="text-gray-600  mb-4">
          {news.details
          }
        </p>

        {/* Link to all categories */}
        <Link 
          to={`/category/${news.category_id}`} 
          className="inline-block px-4 py-2 bg-secondary text-white rounded-lg"
        >
          All Categories
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
