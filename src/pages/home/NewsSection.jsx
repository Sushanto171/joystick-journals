import React, { useEffect, useState } from "react";
import GameNewsCard from "../../components/LatestGamesNews/GamesNewsCard";
import SectionTitle from "../../components/shared/SectionTitle";

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://joystick-journals-server.vercel.app/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="mt-8">
      <SectionTitle title={"Latest Games News"} />
      <div className="mx-auto space-y-4">
        {news.slice(0, 3).map((news, index) => (
          <GameNewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
