import React, { useContext, useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../../Providers/AuthProvider";
import WatchListTable from "../../components/WacthListTable/WacthListTable";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchListIDs, setWatchListIDs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/watchList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (
          !data.ids === undefined ||
          !data.message === "No data found" ||
          data.ids.length > 0
        ) {
          const ids = data?.ids;
          const arrayOfIds = ids.join(",");
          fetch(`http://localhost:4000/reviews?arrayOfIds=${arrayOfIds}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setWatchListIDs(data);
            })
            .finally(() => {
              setLoading(false);
            });
        } else {
          setLoading(false);
          setWatchListIDs([]);
        }
      });
  }, []);

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

  if (watchListIDs.length === 0) {
    return <h1 className="my-10 ml-10 text-3xl">No data found.</h1>;
  }

  return (
    <>
      <div className="text-center my-8">
        <h3 className="text-2xl md:text-3xl font-semibold underline ">
          Game WatchList
        </h3>
      </div>
      <div>
        <div className="overflow-x-auto my-10">
          <table className="table ">
            {/* head */}
            <thead className="bg-base-300 text-xl">
              <tr>
                <th className="border-r">#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {watchListIDs.map((list, i) => (
                <WatchListTable
                  key={i}
                  data={{ i, list, setWatchListIDs, watchListIDs, user }}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GameWatchList;
