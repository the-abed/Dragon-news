import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold my-4">Find Us On</h2>

      <div className="flex flex-col border-b-1">
        {/* Facebook */}
        <button className="btn flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 border-none">
          <FaFacebookF /> Facebook
        </button>

        {/* Twitter */}
        <button className="btn flex items-center gap-2 bg-sky-500 text-white hover:bg-sky-600 border-none">
          <FaTwitter /> Twitter
        </button>

        {/* Instagram */}
        <button className="btn flex items-center gap-2 bg-pink-500 text-white hover:bg-pink-600 border-none">
          <FaInstagram /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
