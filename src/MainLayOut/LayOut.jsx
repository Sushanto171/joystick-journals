import { Outlet } from "react-router";

const LayOut = () => {
  return (
    <div>
      <h1>Main Lay out</h1>
      <Outlet />
    </div>
  );
};

export default LayOut;
