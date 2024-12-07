import { createBrowserRouter } from "react-router";
import ReviewDetails from "../components/ReviewDetails/ReviewDetails";
import UpdateReview from "../components/UpdateReview/UpdateReview";
import LogIn from "../pages/logIn/LogIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LayOut from "./../MainLayOut/LayOut";
import AddReview from "./../pages/addReview/AddReview";
import AllReview from "./../pages/allReview/AllReview";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import GameWatchList from "./../pages/GameWatchList/GameWatchList";
import Home from "./../pages/home/Home";
import MyReview from "./../pages/MyReview/MyReview";
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
        loader: () =>
          fetch("https://joystick-journals-server.vercel.app/reviews"),
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
        path: "/review-details/:id",
        loader: async ({ params }) =>
          await fetch(
            `https://joystick-journals-server.vercel.app/reviews/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ReviewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-review/:id",
        loader: ({ params }) =>
          fetch(
            `https://joystick-journals-server.vercel.app/reviews/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/game-watchlist",
        element: (
          <PrivateRoute>
            <GameWatchList />
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
