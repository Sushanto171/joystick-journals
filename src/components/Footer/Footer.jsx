import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/image-removebg-preview (3).png";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-10 px-6 md:px-16 lg:px-24">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 border-b border-gray-700 pb-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/">
            <img
              src={logo}
              alt="Joystick Journals Logo"
              className="w-48 mb-3"
            />
          </Link>
          <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
            Your one-stop platform for the latest game news, reviews, and
            industry insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
            Quick Links
          </h3>
          <ul className="flex flex-col items-center md:items-start gap-2">
            <li>
              <Link to="/latest-games-news" className="hover:text-green-400">
                Latest Games News
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-green-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-green-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-auto">
          <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
            Stay Updated
          </h3>
          <p className="text-gray-400 text-sm mb-3 text-center md:text-left">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="relative w-full md:w-72">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 pl-4 rounded-full text-gray-800 outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 px-4 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-gray-400 text-sm gap-4">
        {/* Social Links */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://www.facebook.com/Sushantochandrasharkar.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/sushanto-chandra-sharkar-144b95339/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a
            href="https://x.com/sushanto171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-500 transition" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center">
          © {new Date().getFullYear()} Joystick Journals. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
