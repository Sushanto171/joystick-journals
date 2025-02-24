import React, { useContext, useEffect } from "react";
import { successAlert } from "../../components/alert/SuccessAlert";
import Container from "../../components/shared/Container";
import SectionTitle from "../../components/shared/SectionTitle";
import { AuthContext } from "../../Providers/AuthProvider";

const AddReview = () => {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    if (user?.email) {
      fetch(`https://joystick-journals-server.vercel.app/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) setUser(data);
        })
        .catch((error) => {
          // console.error("Error fetching user data:", error);
        });
    }
  }, [user?.email]);

  const genresArray = ["Action", "RPG", "Adventure"];
  const ratingArray = [1, 2, 3, 4, 5];
  const publishingYearArray = [
    2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
  ];

  // addReviewHandler
  const addReviewHandler = (e) => {
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
    const review = {
      gameTitle,
      thumbnail,
      description,
      genres,
      rating,
      userEmail,
      userName,
      publishingYear,
    };

    // add data to database
    fetch("https://joystick-journals-server.vercel.app/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        data.insertedId && successAlert("Add Review Success!");
        data.insertedId && form.reset();
      });
  };

  return (
    <Container>
      <div className="">
        <div className="w-10/12 max-w-4xl mx-auto text-center my-10">
          <SectionTitle
            title={
              "Add your review and contribute continuously to help others make informed decisions"
            }
          />
        </div>
        <div className="card bg-base-100 shrink-0 shadow rounded-md border-b-4 hover:border-[#28AE4E] hover:shadow-2xl">
          <form onSubmit={addReviewHandler} className="card-body">
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
                      defaultValue="Select one genres"
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
                      defaultValue="Select an rating"
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
                      defaultValue="Select year"
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
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddReview;
