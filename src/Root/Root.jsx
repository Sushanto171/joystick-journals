import { createBrowserRouter } from "react-router";
import LogIn from "../pages/logIn/LogIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LayOut from "./../MainLayOut/LayOut";
import AddReview from "./../pages/addReview/AddReview";
import AllReview from "./../pages/allReview/AllReview";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Home from "./../pages/home/Home";
import Register from "./../pages/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-reviews",
        element: <AllReview />,
      },
      {
        path: "/add-review",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/game-watchlist",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/log-in",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
