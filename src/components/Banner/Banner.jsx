import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typewriter } from "react-simple-typewriter";
import img from "./../../../public/image.jpg";
import img1 from "./../../../public/image1.jpg";
import img2 from "./../../../public/images.jpg";
import img3 from "./../../../public/img.png";
import "./banner.css";
const Banner = () => {
  return (
    <div className="relative">
      <div className="h-full w-full absolute bg-black/40 z-10 flex items-center justify-center ">
        <div className=" w-4/5 relative ">
          <h1 className="text-left text-xl md:text-4xl font-bold absolute -top-5 sm:-top-20 text-white">
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
          <p className="mt-5 leading-relaxed text-xs sm:text-base text-center md:text-left hidden lg:w-5/6 sm:block ">
            Explore, share, and discover with Joystick Journals. Join our gaming
            community and dive into the world of reviews, ratings, and
            discussions. Level up your gaming experience today!"
          </p>
        </div>
      </div>
      <Carousel
        className="carousel"
        autoPlay={true}
        interval={5000}
        showThumbs={false}
        infiniteLoop={true}
      >
        <div>
          <img src={img3} alt="Slide 1" />
        </div>
        <div>
          <img src={img1} alt="Slide 2" />
        </div>
        <div>
          <img src={img2} alt="Slide 3" />
        </div>
        <div>
          <img src={img} alt="Slide 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
