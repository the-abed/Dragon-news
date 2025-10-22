import { useState } from "react";
import { FaEye, FaStar, FaRegStar, FaBookmark, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { Link, Links } from "react-router";

const NewsCard = ({ news }) => {
  
  const {
    id,
    title,
    author,
    thumbnail_url,
    total_view,
    rating,
    details,
    tags,
  } = news;

  return (
    <div className="card w-full bg-base-200 shadow-lg border border-gray-300 hover:shadow-2xl transition-all duration-300 p-4 rounded-2xl">
      
      {/* Top Bar: Author + Actions */}
      <div className="flex items-center justify-between mb-3">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full border-2 border-primary"
          />
          <div>
            <p className="font-semibold text-sm text-gray-800">{author?.name}</p>
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <MdOutlineDateRange />
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Bookmark & Share Icons */}
        <div className="flex items-center gap-3 text-gray-600 text-lg">
          <button className="hover:text-primary transition-colors">
            <FaRegBookmark></FaRegBookmark>
          </button>
          <button className="hover:text-primary transition-colors">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Image */}
      <figure className="h-64 w-full overflow-hidden rounded-xl">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="mt-4">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>

        {/* Details */}
        <p className="text-sm text-gray-700 mt-3 leading-relaxed">
          {details.slice(0, 200) + "..." }
        </p>

        {/* Read More Button */}
        <Link to={`/news-details/${id}`}
          className="btn btn-sm btn-outline btn-primary w-fit mt-3"
        >
          Read More
        </Link>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-outline badge-primary">
              #{tag}
            </div>
          ))}
        </div>

        {/* Rating & Views (Bottom) */}
        <div className="flex items-center justify-between border-t pt-3 mt-4 text-gray-700">
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }, (_, i) =>
              i < rating?.number ? (
                <FaStar key={i} />
              ) : (
                <FaRegStar key={i} />
              )
            )}
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            <span className="text-sm">{total_view} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
