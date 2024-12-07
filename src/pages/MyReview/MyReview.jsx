import React, { useContext, useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../../Providers/AuthProvider";
import MyReviewTable from "../../components/MyReviewTable/MyReviewTable";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReviewList, setMyReviewList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:4000/reviews?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyReviewList(data);
        })
        .catch((error) => {
          // console.error("Error fetching reviews:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user.email, setLoading]);
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
  if (myReviewList.length === 0) {
    return <h1 className="my-10 ml-10 text-3xl">No data found.</h1>;
  }
  return (
    <>
      <div className="text-center my-8">
        <h3 className="text-2xl md:text-3xl font-semibold underline ">
          My Reviews
        </h3>
      </div>
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
            <MyReviewTable
              data={{ review, i, myReviewList, setMyReviewList }}
              key={review._id}
            />
          ))}
        </table>
      </div>
    </>
  );
};

export default MyReview;
