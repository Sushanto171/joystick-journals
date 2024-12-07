import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner from "../../components/Banner/Banner";
import FeaturedDevelopers from "../../components/FeaturedDevelopers/FeaturedDevelopers";
import HighestRated from "../../components/HighestRated/HighestRated";
import LatestGame from "../../components/LatestGame/LatestGame";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Banner />

      <HighestRated />

      <LatestGame />

      <FeaturedDevelopers />
    </div>
  );
};

export default Home;
