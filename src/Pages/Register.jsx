import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // Basic validation
    if (!name || !photo || !email || !password) {
      setError("All fields are required.");
      return;
    }

    // Password length validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({displayName:name, photoURL: photo}).then(()=>{

          setUser({...user,displayName:name, photoURL: photo});
          navigate("/")
        })
        .catch((error) => {
          console.log(error);
          setUser(user);
});
        // console.log(user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
        <h2 className="font-semibold text-2xl text-center">Register your account</h2>
        <div className="card-body">
          {error && <p className="text-red-500 text-center mb-3">{error}</p>}
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset text-bold">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input bg-base-200 border-none"
                placeholder="Your Name"
              />

              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input bg-base-200 border-none"
                placeholder="Photo URL"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-base-200 border-none"
                placeholder="Your Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input bg-base-200 border-none"
                placeholder="Password"
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>

              <p className="mt-5 text-center font-semibold">
                Have an account?{" "}
                <Link to="/auth/login" className="text-secondary hover:underline">
                  Log In
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
