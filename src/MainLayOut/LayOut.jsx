import { Outlet } from "react-router";
import Footer from "./../components/Footer/Footer";
import Navbar from "./../components/Navbar/Navbar";

const LayOut = () => {
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
