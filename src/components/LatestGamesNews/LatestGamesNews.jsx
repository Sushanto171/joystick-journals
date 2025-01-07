import { useEffect, useState } from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import GameNewsCard from "./GamesNewsCard";

const LatestGamesNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://joystick-journals-server.vercel.app/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <Container>
      <div className="mt-8">
        <SectionTitle title={"Latest Games News"} />
        <div className="mx-auto space-y-4">
          {news.map((news, index) => (
            <GameNewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LatestGamesNews;
