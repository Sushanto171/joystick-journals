import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Typewriter } from "react-simple-typewriter";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import img from "./../../../public/image.jpg";
import img1 from "./../../../public/image1.jpg";
import img2 from "./../../../public/images.jpg";
import img3 from "./../../../public/img.png";
import "./banner.css";

const Banner = () => {
  const title = (
    <>
      <div className="absolute z-10 inset-0 flex flex-col justify-center items-center bg-black/40">
        <h1 className="text-xl md:text-4xl font-bold text-white text-center mb-20 sm:mb-32">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              "Joystick Journals: Your Portal to Game Reviews",
              "Explore the Chill Side of Gaming",
              "Dive Into the World of Gaming Experiences",
              "Share, Discover, and Relive Epic Gaming Moments",
              "Game On: Unwind with Honest Reviews",
            ]}
          />
        </h1>
        <p className="leading-relaxed text-xs sm:text-base !text-center md:text-left absolute w-5/6 sm:w-4/6 sm:block text-white bottom-10 sm:bottom-28 md:bottom-36 lg:bottom-44">
          Explore, share, and discover with Joystick Journals. Join our gaming
          community and dive into the world of reviews, ratings, and
          discussions. Level up your gaming experience today!
        </p>
      </div>
    </>
  );
  return (
    <div className="relative overflow-hidden">
      {/* Typewriter Overlay */}

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="h-60 sm:h-80 md:h-96 lg:h-[450px] "
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {title}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-60 sm:h-80 md:h-96 lg:h-[450px]"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {title}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-60 sm:h-80 md:h-96 lg:h-[450px] "
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {title}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-60 sm:h-80 md:h-96 lg:h-[450px] "
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {title}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
