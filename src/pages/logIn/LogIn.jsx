import React, { useContext, useState } from "react";
import { FaEyeSlash, FaFacebook, FaGithub, FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";
import { successAlert } from "../../components/alert/SuccessAlert";

const LogIn = () => {
  const { logInWithGoogle, logInWithGithub, signInWithEmailPass, setUser } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log(location);

  const logInFormHandler = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailPass(email, password)
      .then((res) => {
        const user = res.user;
        fetch(
          `https://joystick-journals-server.vercel.app/users/${user?.email}`
        )
          .then((res) => user && res.json())
          .then((data) => {
            setUser(data);
            form.reset();
            successAlert("Log in success!");
            navigate("/");
          });
      })
      .catch((error) => {
        setError(error.code);
        form.password.value = "";
      });
  };

  // logInWithGoogleHandler
  const logInWithGoogleHandler = () => {
    setError("");
    logInWithGoogle()
      .then((res) => {
        const name = res.user.displayName;
        const email = res.user.email;
        const photo = res.user.photoURL;
        const data = { name, email, photo };
        fetch(`https://joystick-journals-server.vercel.app/users/${email}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            successAlert("Log in success");
            navigate("/");
          });
      })
      .catch((error) => {
        setError(
          error.code === "auth/account-exists-with-different-credential"
            ? "This email already exist!"
            : error.code
        );
      });
  };

  // logInWithGithub
  const logInWithGithubHandler = () => {
    setError("");
    logInWithGithub()
      .then((res) => {
        const name = res.user.displayName;
        const email = res.user.email;
        const photo = res.user.photoURL;
        const data = { name, email, photo };
        fetch(`https://joystick-journals-server.vercel.app/users/${email}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            successAlert("Log in success");
            navigate("/");
          });
      })
      .catch((error) => {
        setError(
          error.code === "auth/account-exists-with-different-credential"
            ? "This email already exist!"
            : error.code
        );
      });
  };
  return (
    <div className="flex flex-col justify-center items-center bg-base-100">
      <h2 className="my-5 text-2xl md:text-3xl font-semibold">Log in Now</h2>
      <div className="card w-full rounded-md border-b-4 hover:border-[#28AE4E] max-w-sm shrink-0 shadow hover:shadow-2xl">
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
                {!showPassword ? <FaRegEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="h-3 relative">
              <p className="text-xs absolute text-error top-1">{error}</p>
            </div>
            <label className="label">
              <button className="label-text-alt link link-hover">
                Forgot password?
              </button>
            </label>
          </div>
          <div className="form-control">
            <button className="btn bg-[#4ade80] hover:bg-[#28AE4E] font-bold text-white">
              Login
            </button>
            <div className="divider">OR</div>
          </div>
        </form>
        <div className="mb-2 px-10">
          <div className="flex justify-center items-center gap-3 mb-3">
            <button
              onClick={logInWithGoogleHandler}
              className="btn btn-sm rounded-full"
            >
              <FcGoogle size={20} />
            </button>
            <button className="btn btn-sm rounded-full">
              <FaFacebook size={20} />
            </button>
            <button
              onClick={logInWithGithubHandler}
              className="btn btn-sm rounded-full"
            >
              <FaGithub size={20} />
            </button>
          </div>
          <p className="text-sm py-4 sm:py-0">
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
