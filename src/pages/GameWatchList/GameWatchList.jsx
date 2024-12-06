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
    return <h1>No data found.</h1>;
  }

  return <div>GameWatchList :{watchListIDs.length}</div>;
};

export default GameWatchList;
