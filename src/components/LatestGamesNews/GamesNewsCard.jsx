import React from "react";
import { Link } from "react-router-dom";

const GameNewsCard = ({ title, thumbnail, description, source, date, _id }) => {
  return (
    <div className="bg-white flex flex-col sm:flex-row border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="w-full sm:w-1/3 h-full md:max-h-64">
        <img
          className="w-full h-full object-cover"
          src={thumbnail}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 gap-2 sm:gap-0">
          <span>📅 {date}</span>
          <span>🔗 {source}</span>
        </div>
        {/* Read More Button */}
        <Link
          to={`/news/${_id}`}
          className="btn w-fit mt-2 bg-[#4ade80] btn-sm sm:btn-md hover:bg-[#28AE4E] border-0 text-white text-xs sm:text-sm px-3 py-1 rounded-md transition-all duration-200"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default GameNewsCard;
