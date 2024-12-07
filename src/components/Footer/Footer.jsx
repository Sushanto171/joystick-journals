import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#28313C] mt-10 pt-10 pb-5 flex justify-center flex-col">
      <div className="flex justify-center text-center text-white flex-col items-center">
        <h2 className="text-3xl font-semibold my-2">Let❜s connect!</h2>
        <p className="opacity-60 w-10/12 mx-auto">
          Employers & Recruiters stay up to date with the latest coupon or
          voucher updates & announcements
        </p>
        <div className="relative w-10/12 mx-auto md:w-96 mt-5">
          <input
            type="email"
            placeholder="type your e-mail here..."
            className="min-w-42 w- p-2 px-4 w-full rounded-full text-black bg-white outline-none"
          />
          <button className="absolute btn right-2 top-1 rounded-full px-6 bg-red-500 border-0 font-bold btn-sm hover:bg-red-700  text-white">
            Join
          </button>
        </div>
        <div className="sm:flex items-center flex-row-reverse justify-around w-full mt-10 ">
          <div className="flex gap-4 text-gray-400 justify-center items-center">
            <a
              href="https://www.facebook.com/Sushantochandrasharkar.me/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <button>
                <FaFacebook size={25} />
              </button>
            </a>
            {/* <a href="#" rel="noopener noreferrer" target="_blank"> <button><FaYoutube size={25} /></button></a> */}
            {/* <a href="https://www.google.com" rel="noopener noreferrer" target="_blank"> <button><FaGooglePlusG size={25}  /></button></a> */}
            <a
              href="https://www.linkedin.com/in/sushanto-chandra-sharkar-144b95339/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <button>
                <FaLinkedin size={25} />
              </button>
            </a>
            <a
              href="https://x.com/sushanto171/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <button>
                <FaTwitter size={25} />
              </button>
            </a>
          </div>
          <p className="text-gray-400 text-xs sm:text-base my-3">
            Joystick journals &copy; All Right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
