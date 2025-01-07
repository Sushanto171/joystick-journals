import { useContext } from "react";
import { FaChartLine, FaGamepad, FaSearch, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/shared/SectionTitle";
import { AuthContext } from "../../Providers/AuthProvider";
const Service = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <div>
      <section className=" py-12 px-6 lg:px-24">
        <div className="container mx-auto text-center max-w-4xl">
          {/* Title */}
          <SectionTitle title={" Our Services"} />
          <p
            className={`text-gray-600 mb-12 leading-relaxed ${
              isDark ? "text-white" : "text-gray-600"
            } `}
          >
            At{" "}
            <span className="font-bold text-[#4ade80] ">Joystick Journals</span>
            , we provide a range of services to enhance your gaming experience.
            From reviews to news, we’ve got everything a gamer needs.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-700">
            {/* Service 1 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
              <FaGamepad className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">In-Depth Reviews</h3>
              <p className="text-sm text-center">
                Get detailed breakdowns of the latest games, covering every
                aspect from gameplay to graphics.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
              <FaSearch className="text-4xl text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Game Discovery</h3>
              <p className="text-sm text-center">
                Find hidden gems and the hottest upcoming releases before anyone
                else.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
              <FaChartLine className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Industry Insights</h3>
              <p className="text-sm text-center">
                Stay informed with the latest trends and analytics from the
                gaming world.
              </p>
            </div>

            {/* Service 4 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center">
              <FaUsers className="text-4xl text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Community Hub</h3>
              <p className="text-sm text-center">
                Connect with fellow gamers, share experiences, and join the
                conversation.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <p
              className={`text-gray-600 mb-4 ${
                isDark ? "text-white" : "text-gray-600"
              } `}
            >
              Explore our services and level up your gaming journey today!
            </p>
            <Link
              to="/services"
              className="btn text-white px-6 py-2 rounded-md font-semibold bg-[#4ade80]  hover:bg-[#28AE4E] transition"
            >
              Get Started 🚀
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
