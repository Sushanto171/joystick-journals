import React, { useState } from "react";
import { FaEyeSlash, FaFacebook, FaGithub, FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const registerFormHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const terms = form.terms.checked;
    console.log({ email, password, name, photo, terms });
  };
  return (
    <div className="flex flex-col justify-center items-center bg-base-100">
      <h2 className="my-5 text-2xl md:text-3xl font-semibold">Register Now</h2>
      <div className="card w-full rounded-md border-b-4 border-gray-50 hover:border-green-400 max-w-lg shrink-0 shadow hover:shadow-2xl">
        <form className="card-body pb-0 " onSubmit={registerFormHandler}>
          <div className="md:grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
                name="photo"
              />
            </div>
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
            </div>
            <div className="h-3 relative mb-5">
              <p className="text-xs absolute text-error top-1">Error</p>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label justify-end gap-2">
                <span className="label-text">Accept our terms.</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-success rounded-full"
                  name="terms"
                />
              </label>
            </div>
          </div>
          <div className="form-control">
            <button className="btn bg-[#4ade80] hover:bg-[#28AE4E] font-bold">
              Register now
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
            Already have an account?
            <Link to="/log-in" className="underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
