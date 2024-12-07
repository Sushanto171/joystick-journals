import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AllReviewsCard from "../../components/allReviewsCard/allReviewsCard";

const AllReview = () => {
  const data = useLoaderData();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (Array.isArray(data)) {
      setReviews(data);
    }
  }, [data]);

  if (reviews.length === 0) {
    return <h1 className="my-10 ml-10 text-3xl">No data found.</h1>;
  }
  return (
    <div className=" mx-auto my-5">
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
