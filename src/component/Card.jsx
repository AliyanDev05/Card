import React from "react";

const Card = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white p-6 rounded-2xl w-72 text-center">
        <img
          src="aliyan.png"
          alt=""
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h1 className="text-lg font-semibold text-gray-900 mt-2">
          Syed Aliyan Abbas
        </h1>
        <h2 className="text-sm font-semibold ">Software Engineer</h2>
        <p className="text-sm mt-2">
          Frontend Developer Love to work and Design Websites
        </p>
      </div>
    </div>
  );
};

export default Card;
