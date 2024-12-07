import { useEffect, useState } from "react";
import HighestRatedCard from "../HighesRatedCard/HighesRatedCard";

const HighestRated = () => {
  const [highest, setHighest] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/reviews?rating="4"&limit="6"`)
      .then((res) => res.json())
      .then((data) => {
        Array.isArray(data) && setHighest(data);
      });
  }, []);
  console.log(highest);
  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Highest Rated Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highest.map((list) => (
          <HighestRatedCard key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default HighestRated;
