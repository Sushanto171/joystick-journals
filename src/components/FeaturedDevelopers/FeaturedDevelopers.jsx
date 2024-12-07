import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const FeaturedDevelopers = () => {
  const developers = [
    {
      name: "John Doe",
      role: "Game Developer",
      bio: "Expert in Unreal Engine and Unity with 5+ years of experience.",
      avatar:
        "https://i.ibb.co.com/rtZYfpp/smiling-young-man-illustration-1308-174401.jpg",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Jane Smith",
      role: "3D Artist",
      bio: "Creating immersive 3D worlds for the latest gaming trends.",
      avatar:
        "https://i.ibb.co.com/VxY9gfv/smiling-redhaired-boy-illustration-1308-175803.jpg",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Jane Smith",
      role: "3D Artist",
      bio: "Creating immersive 3D worlds for the latest gaming trends.",
      avatar:
        "https://i.ibb.co.com/x6HC883/young-man-with-glasses-illustration-1308-174706.jpg",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Jane Smith",
      role: "3D Artist",
      bio: "Creating immersive 3D worlds for the latest gaming trends.",
      avatar:
        "https://i.ibb.co.com/Jd5QX1b/young-man-glasses-hoodie-1308-174658.jpg",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
  ];

  return (
    <div className="bg-base-200 rounded-md py-10">
      <h2 className="text-3xl font-bold text-center">Featured Developers</h2>
      <div className="border mb-12 max-w-72 mt-2 mx-auto"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {developers.map((dev, i) => (
          <div
            key={i}
            className="card bg-white shadow-md hover:shadow-xl transition duration-300"
          >
            <figure className="px-10 pt-5">
              <img
                src={dev.avatar}
                alt={dev.name}
                className="rounded-full w-24 h-24 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="text-xl font-semibold">{dev.name}</h3>
              <p className="text-gray-500">{dev.role}</p>
              <p className="text-gray-700 text-sm">{dev.bio}</p>
              <div className="mt-4 flex gap-4">
                <Link
                  to={dev.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-500 transition" />
                </Link>
                <Link to={dev.socials.twitter} target="_blank" rel="noreferrer">
                  <FaTwitter className="text-blue-400 text-2xl hover:text-blue-300 transition" />
                </Link>
                <Link to={dev.socials.github} target="_blank" rel="noreferrer">
                  <FaGithub className="text-gray-800 text-2xl hover:text-gray-600 transition" />
                </Link>
              </div>
              <button className="btn bg-[#4ade80] hover:bg-[#28AE4E] font-bold text-white border-0 btn-sm">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDevelopers;
