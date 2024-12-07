import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner from "../../components/Banner/Banner";
import HighestRated from "../../components/HighestRated/HighestRated";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Banner />

      <HighestRated />
    </div>
  );
};

export default Home;
