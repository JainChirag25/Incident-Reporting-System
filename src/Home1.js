import React from "react";
import { useNavigate } from "react-router-dom";
const Home1 = () => {
  const navigate = useNavigate();
  const handleonclick = () => {
    navigate("/homepage");
  };
  return (
    <div className="bg-gradient-to-b from-purple-800 via-purple-600 to-purple-400 min-h-screen flex flex-col justify-center items-center">
      {/* Brand Name */}
      <h1 className="text-6xl font-extrabold mb-8 text-white">YourBrand</h1>

      {/* Description */}
      <p className="text-lg text-white mb-12 text-center max-w-lg">
        Welcome to YourBrand. Discover amazing things here and unleash your
        creativity!
      </p>

      {/* Call to Action Button */}
      <button
        className="bg-white hover:bg-gray-200 text-purple-800 font-bold py-3 px-6 rounded-full transition duration-300 "
        onClick={handleonclick}
      >
        Explore Now
      </button>
    </div>
  );
};

export default Home1;
