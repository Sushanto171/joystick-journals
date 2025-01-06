import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const AllReviewsCard = ({ review }) => {
  const navigate = useNavigate();
  const { gameTitle, thumbnail, genres, rating, publishingYear, _id } = review;

  return (
    <>
      <div className="card w-full mx-auto h-full max-w-md bg-white shadow rounded-lg overflow-hidden">
        <img
          className="w-full h-28 sm:h-36 md:h-52 object-cover hover:scale-105 duration-200 ease-out"
          src={thumbnail}
          alt={`${thumbnail} thumbnail`}
        />
        <div className="p-2 flex flex-col justify-between ">
          <h2 className="text-md sm:text-lg font-semibold truncate">
            {gameTitle}
          </h2>

          <p className="text-sm opacity-80 flex items-center gap-1">
            <span className="hidden sm:block">Rating:</span>
            <span className="text-sm sm:text-xl sm:font-medium flex items-center">
              {Array.from({ length: 5 }).map((_, i) =>
                rating > i ? (
                  <FaStar
                    key={i}
                    className="inline-block text-yellow-400 mr-1"
                  />
                ) : (
                  <FaRegStar key={i + 1} className="inline-block" />
                )
              )}
            </span>
          </p>
          <p className="text-sm opacity-80 mt-1">
            Genres: <span className="font-medium">{genres}</span>
          </p>
          <p className="text-sm opacity-80">
            Published: <span className="font-medium">{publishingYear}</span>
          </p>
          <button
            onClick={() => navigate(`/review-details/${_id}`)}
            className="btn btn-sm sm:btn-md mt-2 text-white bg-[#4ade80] hover:bg-[#28AE4E] font-bold"
          >
            Explore Details
          </button>
        </div>
      </div>
    </>
  );
};

export default AllReviewsCard;
