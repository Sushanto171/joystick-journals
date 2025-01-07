import React, { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import FeaturedDevelopers from "../../components/FeaturedDevelopers/FeaturedDevelopers";
import HighestRated from "../../components/HighestRated/HighestRated";
import LatestGame from "../../components/LatestGame/LatestGame";
import Container from "../../components/shared/Container";
import UpComingGames from "../../components/UpComingGames/UpComingGames";
import { AuthContext } from "../../Providers/AuthProvider";
import About from "../About/About";
import Service from "../Service/Service";
import NewsSection from "./NewsSection";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Banner />
      <Container>
        <HighestRated />

        <LatestGame />

        <UpComingGames />

        <NewsSection />

        <FeaturedDevelopers />

        <About />

        <Service />
      </Container>
    </div>
  );
};

export default Home;
