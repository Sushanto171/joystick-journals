import React from "react";
import { useLoaderData } from "react-router";
import AllReviewsCard from "../../components/allReviewsCard/allReviewsCard";

const AllReview = () => {
  const reviews = useLoaderData();

  return (
    <div className="w-10/12 mx-auto my-5">
      <h2 className="text-3xl text-center my-8 font-semibold">
        All Game Reviews: Explore the Best in Gaming
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {reviews.map((review, i) => (
          <AllReviewsCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AllReview;
