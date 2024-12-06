import React from "react";
import { GiArrowWings } from "react-icons/gi";
import { useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="bg-error-page-bg h-screen bg-cover bg-no-repeat flex justify-center items-center">
      <div className="bg-white/20 w-6/12 mx-auto min-h-40 md:min-h-80 flex flex-col gap-5 text-center items-center justify-center p-10 shadow-inner shadow-green-400">
        <h2 className="text-3xl md:text-5xl text-error font-semibold">Oops!</h2>
        <p className="text-xl text-black sm:text-white sm:text-3xl">
          {error.status === 404
            ? "404 Page Not Found"
            : error.status === 500
            ? "500 Internal Server Error"
            : error.message || "Something went wrong"}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="relative btn font-bold scale-75 sm:scale-100 w-40 flex group gap-2 transition-all duration-200 btn-success mt-5"
        >
          <span className="text-lg pr-12"> Go back</span>
          <GiArrowWings className="absolute right-8 text-2xl group-hover:text-3xl group-hover:right-5 transition-all ease-in-out duration-200 text-white animate__animated animate__headShake" />
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
