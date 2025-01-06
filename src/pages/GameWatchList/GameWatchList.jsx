import React, { useContext, useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../../Providers/AuthProvider";
import WatchListTable from "../../components/WacthListTable/WacthListTable";
import Container from "../../components/shared/Container";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchListIDs, setWatchListIDs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    // Fetching the watchList
    fetch(`http://localhost:4000/watchList/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.ids?.length > 0) {
          const arrayOfIds = data.ids.join(",");

          fetch(`http://localhost:4000/reviews?arrayOfIds=${arrayOfIds}`)
            .then((res) => res.json())
            .then((reviews) => {
              setWatchListIDs(reviews);
            })
            .finally(() => setLoading(false));
        } else {
          setWatchListIDs([]);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [user?.email]);

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
    <Container>
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
    </Container>
  );
};

export default GameWatchList;
