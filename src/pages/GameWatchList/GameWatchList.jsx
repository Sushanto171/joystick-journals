import React, { useContext, useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { AuthContext } from "../../Providers/AuthProvider";
import WatchListTable from "../../components/WacthListTable/WacthListTable";
import Container from "../../components/shared/Container";

const GameWatchList = () => {
  const { user, isDark } = useContext(AuthContext);
  const [watchListIDs, setWatchListIDs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    // Fetching the watchList
    fetch(`https://joystick-journals-server.vercel.app/watchList/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.ids?.length > 0) {
          const arrayOfIds = data.ids.join(",");

          fetch(
            `https://joystick-journals-server.vercel.app/reviews?arrayOfIds=${arrayOfIds}`
          )
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

  return (
    <Container>
      {watchListIDs.length === 0 ? (
        <h1
          className={`${
            isDark ? "text-white" : "text-gray-600"
          }  my-16 ml-10 text-3xl `}
        >
          No data found.
        </h1>
      ) : (
        <div className={`${isDark ? "text-white" : "text-gray-600"} `}>
          <div
            className={`text-center my-8 ${
              isDark ? "text-white" : "text-gray-600"
            } `}
          >
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
          </div>{" "}
        </div>
      )}
    </Container>
  );
};

export default GameWatchList;
