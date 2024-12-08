import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";
import { successAlert } from "../alert/SuccessAlert";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const review = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    gameTitle,
    genres,
    publishingYear,
    rating,
    thumbnail,
    description,
  } = review;

  const genresArray = ["Action", "RPG", "Adventure"];
  const ratingArray = [1, 2, 3, 4, 5];
  const publishingYearArray = [
    2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
  ];

  //   updateReviewHandler

  const updateReviewHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const gameTitle = form.gameTitle.value;
    const thumbnail = form.thumbnail.value;
    const description = form.description.value;
    const genres = form.genres.value;
    const rating = form.rating.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const publishingYear = form.publishingYear.value;
    const updatedReview = {
      gameTitle,
      thumbnail,
      description,
      genres,
      rating,
      userEmail,
      userName,
      publishingYear,
    };

    fetch(`https://joystick-journals-server.vercel.app/reviews/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          form.reset();
          successAlert("Review update success!");
          navigate(-1);
        }
      });
  };
  return (
    <div>
      <div className="my-5">
        <div className="w-10/12 max-w-4xl mx-auto text-center my-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Update Your Review
          </h2>
        </div>
        <div className="card bg-base-100 shrink-0 shadow rounded-md border-b-4 hover:border-[#28AE4E] hover:shadow-2xl">
          <form onSubmit={updateReviewHandler} className="card-body">
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Game Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Game title here"
                  className="input input-bordered"
                  required
                  name="gameTitle"
                  defaultValue={gameTitle}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Game cover image</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                  name="thumbnail"
                  defaultValue={thumbnail}
                />
              </div>

              <div className="form-control col-span-2 sm:col-span-1">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Description</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-36"
                    placeholder="type review description... "
                    name="description"
                    defaultValue={description}
                  ></textarea>
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4 col-span-2 sm:col-span-1">
                <div className="form-control">
                  <label className="">
                    <div className="label">
                      <span className="label-text">Genres</span>
                    </div>
                    <select
                      name="genres"
                      className="select select-bordered w-full max-w-xs"
                      defaultValue={genres}
                    >
                      <option disabled>Select one genres</option>
                      {genresArray.map((genres) => (
                        <option key={genres}>{genres}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="form-control">
                  <label className="">
                    <div className="label">
                      <span className="label-text">Rating</span>
                    </div>
                    <select
                      name="rating"
                      className="select select-bordered w-full max-w-xs"
                      defaultValue={rating}
                    >
                      <option disabled>Select an rating</option>
                      {ratingArray.map((rating) => (
                        <option key={rating}>{rating}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="form-control">
                  <label className="">
                    <div className="label">
                      <span className="label-text ">Publishing year</span>
                    </div>
                    <select
                      name="publishingYear"
                      className="select select-bordered w-full max-w-xs"
                      defaultValue={publishingYear}
                    >
                      <option disabled>Select year</option>
                      {publishingYearArray.map((year) => (
                        <option key={year}>{year}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User name"
                  className="input input-bordered"
                  required
                  name="userName"
                  readOnly
                  defaultValue={user?.name}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="userEmail"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#4ade80] hover:bg-[#28AE4E] font-bold text-white">
                Update Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
