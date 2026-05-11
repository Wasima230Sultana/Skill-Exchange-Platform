import React from 'react';

const ProviderData = ({provider}) => {
    const { providerName, rating, category, image } = provider;

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">

      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-56 object-cover"
          src={image}
          alt={providerName}
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {category || "Provider"}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3 text-center">

        {/* Name */}
        <h3 className="text-xl font-bold text-gray-800">
          {providerName}
        </h3>

        {/* Rating */}
        <p className="text-yellow-500 font-semibold">
          ⭐ {rating}
        </p>

        {/* Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300">
          View Details
        </button>

      </div>
    </div>
    );
};

export default ProviderData;