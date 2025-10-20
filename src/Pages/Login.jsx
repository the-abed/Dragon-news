import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset text-bold">
            <label className="label">Email</label>
            <input
              type="email"
              className="input bg-base-200 border-none"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input bg-base-200 border-none"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="mt-5 text-center font-semibold">
              Dont’t Have An Account ?
              <Link to="/auth/register" className="text-secondary">
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
