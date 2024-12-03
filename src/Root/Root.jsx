import { createBrowserRouter } from "react-router";
import LayOut from "./../MainLayOut/LayOut";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Home from "./../pages/home/Home";
import LogIn from "./../pages/logIn/LogIn";
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
        path: "/logIn",
        element: <LogIn />,
      },
    ],
  },
]);

export default router;
