import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useNavigate } from "react-router";

const HighestRatedCard = ({ list }) => {
  const { gameTitle, description, rating, thumbnail, _id, genres } = list;

  const navigate = useNavigate();
  return (
    <div className="card bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
      <figure className="h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden">
        <img
          src={thumbnail}
          alt={gameTitle}
          className="w-full h-full object-cover object-top"
        />
      </figure>
      <div className="p-3 sm:p-4 flex flex-col justify-between gap-2">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">
            {gameTitle}
            {gameTitle.length > 40 && "..."}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
            {description}
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">{genres}</p>
        </div>
        <div className="flex justify-between flex-wrap items-center mt-2 gap-1">
          <span className="text-yellow-500 flex items-center gap-0.5 text-xs sm:text-sm font-medium">
            <MdOutlineStarPurple500 className="text-lg" />
            {rating} / 5
          </span>
          <button
            onClick={() => navigate(`/review-details/${_id}`)}
            className="btn bg-[#4ade80] btn-sm sm:btn-md hover:bg-[#28AE4E] border-0 text-white text-xs sm:text-sm px-3 py-1 rounded-md transition-all duration-200"
          >
            Explore Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighestRatedCard;
