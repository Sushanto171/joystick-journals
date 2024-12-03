import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <div>home</div>;
};

export default Home;
