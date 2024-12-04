import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/log-in" />
    </div>
  );
};

export default PrivateRoute;
