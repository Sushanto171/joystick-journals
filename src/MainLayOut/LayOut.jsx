import { useContext } from "react";
import { Triangle } from "react-loader-spinner";
import { Outlet } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import Footer from "./../components/Footer/Footer";
import Navbar from "./../components/Navbar/Navbar";

const LayOut = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  return (
    <div className="relative">
      {/* navbar */}
      <div className="sticky top-0 z-20 w-full">
        <Navbar />
      </div>

      {/* dynamic */}
      <div className="max-w-screen-xl min-h-[calc(100vh-450px)] pb-12 bg-base-100 mx-auto ">
        <Outlet />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default LayOut;
