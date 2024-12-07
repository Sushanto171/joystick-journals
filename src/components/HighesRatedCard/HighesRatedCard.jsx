import React from "react";
import { useNavigate } from "react-router";

const HighestRatedCard = ({ list }) => {
  const { gameTitle, gameDescription, rating, thumbnail, _id } = list;
  const navigate = useNavigate();
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      <figure>
        <img
          src={thumbnail}
          alt={gameTitle}
          className="object-cover w-full h-48"
        />
      </figure>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{gameTitle}</h3>
        <p className="text-gray-600 text-sm mb-4">{gameDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-yellow-500 text-lg">{rating} / 5 rating</span>
          <button
            onClick={() => navigate(`/review-details/${_id}`)}
            className="btn mt-6 text-white bg-[#4ade80] hover:bg-[#28AE4E] font-bold border-0"
          >
            Explore Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighestRatedCard;
