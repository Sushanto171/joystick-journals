import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestGames = () => {
  const [highest, setHighest] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/reviews`)
      .then((res) => res.json())
      .then((data) => {
        Array.isArray(data) && setHighest(data);
      });
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center ">🎮 Latest Games</h2>
      <div className="border mb-12 max-w-60 mt-2 mx-auto"></div>
      <div className="border py-2 mb-8 rounded-md ">
        <Marquee pauseOnHover={true}>
          {highest.length &&
            highest.slice(0, 6).map((game) => (
              <div
                key={game._id}
                className="card bg-base-100 mr-4 shadow hover:shadow-lg transition duration-200"
              >
                <figure>
                  <img
                    src={game.thumbnail}
                    alt={game.gameTitle}
                    className="h-16 sm:h-28 sm:w-44 object-cover"
                  />
                </figure>
                <div className="p-2">
                  <h3 className="text-lg font-bold">
                    {game.gameTitle.slice(0, 8)}
                  </h3>
                  <p className="text-sm text-gray-500">Published: 2024</p>
                </div>
              </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LatestGames;
