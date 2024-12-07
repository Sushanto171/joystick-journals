import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { deleteAlert } from "../alert/deleteAlert";

const WatchListTable = ({ data }) => {
  const [tick, setTick] = useState(false);
  const { i, list } = data;
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
  } = list;
  const deleteHandler = async (id, data, condition) => {
    deleteAlert(id, data, condition);
  };
  return (
    <tr>
      <th className="border-r ">{i + 1}.</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-28 w-28">
              <img src={thumbnail} alt={gameTitle} />
            </div>
          </div>
          <div>
            <div className="font-bold">{gameTitle}</div>
            <div className="text-sm opacity-50">
              <span>Publishing year:</span> {publishingYear}
            </div>
            <div className="text-sm opacity-50">
              <span>Genres:</span> {genres}
            </div>
            <div className="text-sm opacity-50">
              <span>Rating:</span> {rating}
            </div>
            <div className="text-sm opacity-50">
              <span className="badge badge-ghost badge-sm">
                Reviewer: {userName}
              </span>
            </div>
            <div className="text-sm opacity-50">
              <span>Reviewer Email:</span> {userEmail}
            </div>
          </div>
        </div>
      </td>
      <td className="leading-relaxed">{description}</td>
      <th>
        <div className="flex gap-2">
          <button
            onClick={() => setTick(true)}
            className={`${
              tick && "btn-disabled"
            } btn btn-outline btn-xs text-success`}
          >
            {tick ? (
              <IoMdCheckmarkCircleOutline className="text-success" />
            ) : (
              "Done"
            )}
          </button>
          <button
            onClick={() => deleteHandler(_id, data, "formWatch")}
            className="btn btn-outline btn-xs text-error"
          >
            Delete
          </button>
        </div>
      </th>
    </tr>
  );
};

export default WatchListTable;
