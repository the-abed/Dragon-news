import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
    <div>
      <h1 className="font-semibold">Login With</h1>

      <div className="space-y-3 mt-3">
        {/* GitHub Login */}
        <button className="btn w-full bg-white text-primary border-black btn-outline btn-primary flex items-center justify-center gap-2">
          <FaGithub className="text-xl" />
          Login with GitHub
        </button>

        {/* Google Login */}
        <button className="btn w-full bg-white text-primary border-blue-400 btn-outline btn-secondary flex items-center justify-center gap-2">
          <FaGoogle className="text-xl text-blue-500" />
          Login with Google
        </button>
      </div>
    </div>
  );
};


export default SocialLogin;