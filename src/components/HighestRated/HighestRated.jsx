import { useEffect, useState } from "react";
import HighestRatedCard from "../HighesRatedCard/HighesRatedCard";

const HighestRated = () => {
  const [highest, setHighest] = useState([]);
  useEffect(() => {
    fetch(`https://joystick-journals-server.vercel.app?rating="4"&limit="6"`)
      .then((res) => res.json())
      .then((data) => {
        Array.isArray(data) && setHighest(data);
      });
  }, []);
  return (
    <div className="container mx-auto px-4 mt-12 bg-base-200 rounded-md pb-10">
      <h2 className=" text-2xl sm:text-3xl font-semibold text-center pt-4">
        Highest Rated Games
      </h2>
      <div className="border mb-12 max-w-72 mt-2 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highest.map((list) => (
          <HighestRatedCard key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default HighestRated;
