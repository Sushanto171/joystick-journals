import React, { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const LatestGames = () => {
  const [highest, setHighest] = useState([]);
  useEffect(() => {
    fetch(`https://joystick-journals-server.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => {
        Array.isArray(data) && setHighest(data);
      });
  }, []);
  console.log(highest);
  return (
    <div className="max-w-7xl mx-auto latest">
      <SectionTitle title={"🎮 Latest Games"} />
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {highest.map((game) => (
          <SwiperSlide key={game._id}>
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="h-40 sm:h-56">
                <img
                  src={game.thumbnail}
                  alt={game.gameTitle}
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-md font-medium mb-2 truncate">
                  {game.gameTitle}
                </h2>
                <p className="text-xs sm:text-sm mb-4">
                  {game.description.slice(0, 70)}...
                </p>
                <div className="text-sm">
                  <p>
                    <strong>Genre:</strong> {game.genres}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestGames;
