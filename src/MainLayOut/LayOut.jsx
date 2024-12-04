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
    <div>
      {/* navbar */}
      <Navbar />

      {/* dynamic */}
      <Outlet />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default LayOut;
