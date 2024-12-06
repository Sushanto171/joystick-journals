import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchListIDs, setWatchListIDs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/watchList/${user?.email}`).then((res) =>
      res.json().then((data) => {
        setWatchListIDs(data.ids);
      })
    );
  }, []);

  if (watchListIDs === undefined) {
    return <h1 className="my-10 ml-10 text-3xl">No data found.</h1>;
  }

  return (
    <>
      <div>GameWatchList :{watchListIDs.length}</div>
      <div></div>
    </>
  );
};

export default GameWatchList;
