import { useEffect, useState } from "react";
import HighestRatedCard from "../HighesRatedCard/HighesRatedCard";
import SectionTitle from "../shared/SectionTitle";

const HighestRated = () => {
  const [highest, setHighest] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/reviews?rating="4"&limit="6"`)
      .then((res) => res.json())
      .then((data) => {
        Array.isArray(data) && setHighest(data);
      });
  }, []);
  return (
    <div className=" mx-auto  pt-6  rounded-md pb-10">
      <SectionTitle title="Top Reviews Games" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-7">
        {highest.map((list) => (
          <HighestRatedCard key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default HighestRated;
