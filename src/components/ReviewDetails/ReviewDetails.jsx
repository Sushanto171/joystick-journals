import { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";
import { successAlert } from "../alert/SuccessAlert";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const review = useLoaderData();
  const {
    gameTitle,
    thumbnail,
    description,
    genres,
    rating,
    userEmail,
    userName,
    publishingYear,
    _id,
  } = review;
  // console.log(_id);

  // watchListHandler
  const watchListHandler = () => {
    const watchListData = {
      email: user.email,
      user: user.name,
      id: _id,
    };
    fetch(`http://localhost:4000/watchList/${user.email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(watchListData),
    })
      .then((res) => res.json())
      .then((data) => {
        successAlert(
          data.message,
          `${
            data.message === "ID already exists in watchlist!"
              ? "warning"
              : "success"
          }`
        );
      });
  };
  return (
    <div className="card mx-auto h-full w-10/12 bg-base-200 shadow rounded-lg overflow-hidden my-10">
      <main className="p-2 sm:p-5 mb-5 flex flex-col">
        <div className="border-b-2 mb-5 space-y-2 pb-4">
          <h1 className="text-3xl font-semibold leading-relaxed">
            {gameTitle}
          </h1>
          <p className="price text-xl font-bold">
            Publishing Year: <span>{publishingYear}</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="font-medium">
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
            ({rating}.0 Rating)
          </div>
          <p>
            Genres: <span>{genres}</span>
          </p>
          <p>
            Writer: <span>{userName}</span>
          </p>
          <p className="">
            Email: <span className="">{userEmail}</span>
          </p>
        </div>
        <div>
          <div className="float-end w-full md:w-2/5 p-2">
            <img
              src={thumbnail}
              alt={gameTitle}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <p className="opacity-90 leading-relaxed">
            Description: <span>{description}</span>
          </p>
        </div>
        <div className="flex space-x-4 mt-8">
          <button
            onClick={watchListHandler}
            className="btn bg-[#4ade80] hover:bg-[#28AE4E] font-bold text-white"
          >
            Add to Game WatchList <IoGameController size={25} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ReviewDetails;
