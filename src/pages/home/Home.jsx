import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return <div>home</div>;
};

export default Home;
