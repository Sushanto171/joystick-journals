import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyReviewTable from "../../components/MyReviewTable/MyReviewTable";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReviewList, setMyReviewList] = useState([]);

  useEffect(() => {
    fetch(` http://localhost:4000/reviews?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviewList(data);
      });
  }, []);

  if (myReviewList.length === 0) {
    return <h1 className="my-10 ml-10 text-3xl">No data found.</h1>;
  }
  return (
    <>
      <div className="my-10 overflow-x-auto overscroll-y-auto">
        <table className="table min-w-[450px]  ">
          {/* head */}
          <thead>
            <tr className="bg-base-300 text-xl ">
              <th>#</th>
              <th>Title</th>
              <th className="hidden md:block">Description</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          {myReviewList.map((review, i) => (
            <MyReviewTable review={review} key={review._id} i={i} />
          ))}
        </table>
      </div>
    </>
  );
};

export default MyReview;
