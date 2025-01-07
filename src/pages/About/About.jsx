import { useContext } from "react";
import { FaGamepad, FaNewspaper, FaStar, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/shared/SectionTitle";
import { AuthContext } from "../../Providers/AuthProvider";
const About = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <div>
      <section className="px-6 lg:px-24">
        <div className="container mx-auto text-center max-w-4xl">
          {/* Title */}
          <SectionTitle title={"About Us"} />

          {/* Description */}
          <p
            className={`${
              isDark ? "text-white" : "text-gray-600"
            } mb-8 leading-relaxed`}
          >
            Welcome to{" "}
            <span className="font-bold text-[#54d378]">Joystick Journals</span>,
            your ultimate destination for authentic, insightful, and engaging{" "}
            <strong>game reviews and updates</strong>. Whether you're a casual
            gamer, a dedicated enthusiast, or someone diving into the world of
            gaming for the first time, we've got you covered!
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 mb-8">
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
              <FaGamepad className="text-4xl text-blue-600 mb-2" />
              <h3 className="font-semibold text-lg mb-2">
                Honest Game Reviews
              </h3>
              <p className="text-sm text-center">
                Breaking down every aspect — graphics, gameplay, and replay
                value.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
              <FaStar className="text-4xl text-yellow-500 mb-2" />
              <h3 className="font-semibold text-lg mb-2">Top-Rated Picks</h3>
              <p className="text-sm text-center">
                Discover the highest-rated games handpicked by our community.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
              <FaNewspaper className="text-4xl text-green-500 mb-2" />
              <h3 className="font-semibold text-lg mb-2">Latest Gaming News</h3>
              <p className="text-sm text-center">
                Stay updated with announcements and industry insights.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
              <FaUsers className="text-4xl text-purple-500 mb-2" />
              <h3 className="font-semibold text-lg mb-2">
                Community Interaction
              </h3>
              <p className="text-sm text-center">
                Engage with fellow gamers and share your thoughts.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            <p
              className={`text-gray-600 mb-4 ${
                isDark ? "text-white" : "text-gray-600"
              } `}
            >
              Let’s press{" "}
              <span className="font-bold text-[#6ad889]">Start</span> and
              explore the world of gaming together!
            </p>
            <Link
              to="/about-us"
              className="btn bg-[#4ade80]  hover:bg-[#28AE4E] text-white px-6 py-2 rounded-md font-semibold  transition"
            >
              Join the Community 🚀
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
