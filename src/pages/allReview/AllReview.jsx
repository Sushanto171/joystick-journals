import React, { useEffect, useState } from "react";
import { LuArrowDownUp } from "react-icons/lu";
import { Triangle } from "react-loader-spinner";
import { useLoaderData } from "react-router";
import AllReviewsCard from "../../components/allReviewsCard/allReviewsCard";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";

const AllReview = () => {
  const data = useLoaderData() || [];
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    if (Array.isArray(data)) {
      setReviews(data);
    }
  }, [data]);

  const fetchReviews = (queryParam, condition) => {
    setLoading(true);
    fetch(
      `https://joystick-journals-server.vercel.app/reviews?${queryParam}=${condition}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setReviews(data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (filter) {
      fetchReviews("filter", filter);
      if (sort) {
        fetchReviews("sort", sort);
      }
    }
  }, [filter, sort]);

  if (reviews.length === 0 && !loading) {
    return <h1 className="my-10 ml-10 text-3xl">No data found.</h1>;
  }

  return (
    <Container>
      <div className="mx-auto mb-5 pt-5">
        {/* Controls */}
        <div className="flex flex-wrap justify-end items-center gap-2">
          {/* Filter Dropdown */}
          <button
            onClick={() => [setFilter(" "), setSort(" ")]}
            className="btn btn-sm"
          >
            Reset
          </button>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              {filter ? "filtered by " + filter : " Filter by Genres"}
              <LuArrowDownUp />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button onClick={() => setFilter("Action")}>Action</button>
              </li>
              <li>
                <button onClick={() => setFilter("RPG")}>RPG</button>
              </li>
              <li>
                <button onClick={() => setFilter("Adventure")}>
                  Adventure
                </button>
              </li>
            </ul>
          </div>

          {/* Sort Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">
              {sort ? "sorted by " + sort : " sort by  year"}
              <LuArrowDownUp />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button onClick={() => setSort("rating")}>Rating</button>
              </li>
              <li>
                <button onClick={() => setSort("publishingYear")}>
                  Publishing Year
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Title */}

        <SectionTitle title={"All Game Reviews: Explore the Best in Gaming"} />

        {/* Loader */}
        {loading && (
          <div className="flex justify-center my-5">
            <Triangle visible={true} height="50" width="50" color="#4fa94d" />
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-2 mt-12 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-7">
          {reviews.map((review, i) => (
            <AllReviewsCard key={i} review={review} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllReview;
