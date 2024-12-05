import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();
  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate state={{ form: pathname }} to="/log-in" />
    </div>
  );
};

export default PrivateRoute;
