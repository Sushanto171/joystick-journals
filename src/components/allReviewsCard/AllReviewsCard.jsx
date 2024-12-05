import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const AllReviewsCard = ({ review }) => {
  const navigate = useNavigate();
  const { gameTitle, thumbnail, genres, rating, publishingYear, _id } = review;

  return (
    <>
      <div className="card w-full mx-auto h-full max-w-md bg-base-200 shadow rounded-lg overflow-hidden">
        <img
          className="w-full h-52 object-cover hover:scale-105 duration-200 ease-out"
          src={thumbnail}
          alt={`${thumbnail} thumbnail`}
        />
        <div className="p-4 flex flex-col justify-between ">
          <h2 className="text-lg font-bold ">{gameTitle}</h2>
          <p className="text-sm opacity-80 mt-2">
            Genres: <span className="font-medium">{genres}</span>
          </p>
          <p className="text-sm opacity-80 mt-1 flex items-center gap-1">
            Rating:
            <span className="font-medium">
              {Array.from({ length: 5 }).map((_, i) =>
                rating > i ? (
                  <FaStar
                    key={i}
                    className="inline-block text-yellow-400 mr-1"
                    size={20}
                  />
                ) : (
                  <FaRegStar key={i + 1} className="inline-block" size={20} />
                )
              )}
            </span>
          </p>
          <p className="text-sm opacity-80 mt-1">
            Published: <span className="font-medium">{publishingYear}</span>
          </p>
          <button
            onClick={() => navigate(`/review-details/${_id}`)}
            className="btn mt-6 text-white bg-[#4ade80] hover:bg-[#28AE4E] font-bold"
          >
            Explore Details
          </button>
        </div>
      </div>
    </>
  );
};

export default AllReviewsCard;
