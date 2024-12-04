import { createBrowserRouter } from "react-router";
import LayOut from "./../MainLayOut/LayOut";
import AddReview from "./../pages/addReview/AddReview";
import AllReview from "./../pages/allReview/AllReview";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import GameWatchList from "./../pages/GameWatchList/GameWatchList";
import Home from "./../pages/home/Home";
import MyReview from "./../pages/MyReview/MyReview";
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
        element: <AddReview />,
      },
      {
        path: "/my-reviews",
        element: <MyReview />,
      },
      {
        path: "/game-watchlist",
        element: <GameWatchList />,
      },
    ],
  },
]);

export default router;
