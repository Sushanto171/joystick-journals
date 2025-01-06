import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner from "../../components/Banner/Banner";
import FeaturedDevelopers from "../../components/FeaturedDevelopers/FeaturedDevelopers";
import HighestRated from "../../components/HighestRated/HighestRated";
import LatestGame from "../../components/LatestGame/LatestGame";
import Container from "../../components/shared/Container";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Banner />
      <Container>
        <HighestRated />

        <LatestGame />

        <FeaturedDevelopers />
      </Container>
    </div>
  );
};

export default Home;
