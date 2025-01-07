import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../shared/SectionTitle";

const UpComingGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/upcoming-games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <div className="mt-8 ">
      <SectionTitle title={"Upcoming Games"} />
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4.5 },
        }}
        // navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {games.map((game) => (
          <SwiperSlide
            key={game._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-1"
          >
            <img
              src={game.thumbnail}
              alt={game.gameTitle}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1 whitespace-nowrap">
                {game.gameTitle}
              </h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                {game.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Genre: {game.genres}</span>
                <span className="flex items-center gap-1">
                  <FaRegStar className="text-yellow-400" /> {game.rating}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Publishing Year: {game.publishingYear}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UpComingGames;
