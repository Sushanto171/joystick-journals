import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import WatchListTable from "../../components/WacthListTable/WacthListTable";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchListIDs, setWatchListIDs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/watchList/${user?.email}`).then((res) =>
      res.json().then((data) => {
        const arrayOfIds = data.ids.join(",");
        fetch(`http://localhost:4000/reviews?arrayOfIds=${arrayOfIds}`)
          .then((res) => res.json())
          .then((data) => {
            setWatchListIDs(data);
          });
      })
    );
  }, []);

  if (watchListIDs.length === 0) {
    return <h1 className="my-10 ml-10 text-3xl">No data found.</h1>;
  }

  return (
    <>
      <div className="text-center my-8">
        <h3 className="text-2xl md:text-3xl font-semibold underline ">
          Game WatchList{watchListIDs.length}
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
