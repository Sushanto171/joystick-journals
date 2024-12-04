import React, { useState } from "react";
import { FaEyeSlash, FaFacebook, FaGithub, FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const logInFormHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="my-5 text-2xl md:text-3xl font-semibold">Log in Now</h2>
      <div className="card bg-base-100 w-full rounded-md border-b-4 border-gray-50 hover:border-green-400 max-w-sm shrink-0 shadow hover:shadow-2xl">
        <form className="card-body pb-0 " onSubmit={logInFormHandler}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="password"
                className="input input-bordered w-full"
                required
                name="password"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute top-4 right-5"
              >
                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="h-3 relative">
              <p className="text-xs absolute text-error top-1">Error</p>
            </div>
            <label className="label">
              <button className="label-text-alt link link-hover">
                Forgot password?
              </button>
            </label>
          </div>
          <div className="form-control">
            <button className="btn bg-green-300 hover:bg-green-400 font-bold">
              Login
            </button>
            <div className="divider">OR</div>
          </div>
        </form>
        <div className="mb-2 px-10">
          <div className="flex justify-center items-center gap-3 mb-3">
            <button className="btn btn-sm rounded-full">
              <FcGoogle />
            </button>
            <button className="btn btn-sm rounded-full">
              <FaFacebook />
            </button>
            <button className="btn btn-sm rounded-full">
              <FaGithub />
            </button>
          </div>
          <p className="text-sm">
            Don't have an account?
            <Link to="/register" className="underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
