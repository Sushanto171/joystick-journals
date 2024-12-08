import React, { useEffect, useState } from "react";
import { LuArrowDownUp } from "react-icons/lu";
import { Triangle } from "react-loader-spinner";
import { useLoaderData } from "react-router";
import { successAlert } from "../../components/alert/SuccessAlert";
import AllReviewsCard from "../../components/allReviewsCard/allReviewsCard";

const AllReview = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (Array.isArray(data)) {
      setReviews(data);
    }
  }, [data]);

  if (reviews.length === 0) {
    return <h1 className="my-10 ml-10 text-3xl">No data found.</h1>;
  }

  // short
  const sortHandler = (condition) => {
    setLoading(true);
    fetch(
      `https://joystick-journals-server.vercel.app/reviews?sort=${condition}`
    )
      .then((res) => res.json())
      .then((data) => {
        Array.isArray(data);
        setReviews(data);
        successAlert(`Sorted ${condition} success!`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // filter
  const filterHandler = (condition) => {
    setLoading(true);
    fetch(
      `https://joystick-journals-server.vercel.app/reviews?filter=${condition}`
    )
      .then((res) => res.json())
      .then((data) => {
        Array.isArray(data);
        setReviews(data);
        successAlert(`Filter by ${condition} success!`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  return (
    <div className=" mx-auto my-5">
      <div className="flex justify-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter by Genres <LuArrowDownUp />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li className="mb-2">
              <button onClick={() => filterHandler("Action")}>Action</button>
            </li>
            <li>
              <button onClick={() => filterHandler("RPG")}>RPG</button>
            </li>
            <li>
              <button onClick={() => filterHandler("Adventure")}>
                Adventure
              </button>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort <LuArrowDownUp />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li className="mb-2">
              <button onClick={() => sortHandler("rating")}>Rating</button>
            </li>
            <li>
              <button onClick={() => sortHandler("publishingYear")}>
                Publishing Year
              </button>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-3xl text-center my-8 font-semibold mb-12">
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
