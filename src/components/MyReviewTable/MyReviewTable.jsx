import React from "react";
import { Link } from "react-router";
import { deleteAlert } from "../alert/deleteAlert";

const MyReviewTable = ({ data }) => {
  const { review, i } = data;
  const {
    description,
    gameTitle,
    genres,
    publishingYear,
    rating,
    thumbnail,
    _id,
  } = review;

  const deleteHandler = async (id, data, condition) => {
    deleteAlert(id, data, condition);
  };
  return (
    <tbody className={`${i % 2 === 0 || "bg-base-200"}`}>
      <tr>
        <th>{i + 1}.</th>
        <td className="">
          <div className="flex items-center gap-3 ">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={thumbnail} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold leading-relaxed">{gameTitle}</div>
              <div className="text-sm opacity-50">
                <span>Publishing year: </span>
                {publishingYear}
              </div>
              <div className="text-sm opacity-50">
                <span>Genres: </span>
                {genres}
              </div>
            </div>
          </div>
        </td>
        <td className=" hidden md:block">
          {description.slice(0, 150)}..
          <button className="underline">view</button>
        </td>
        <td className=" ">{rating}.0 Rating</td>
        <td className="">
          <div className="flex gap-1">
            <Link to={`/update-review/${_id}`}>
              <button className="btn btn-outline btn-xs block">Edit</button>
            </Link>
            <button
              onClick={() => deleteHandler(_id, data, "formReview")}
              className="btn btn-outline text-error btn-xs  block"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default MyReviewTable;
