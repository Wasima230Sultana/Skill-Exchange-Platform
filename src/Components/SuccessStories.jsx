import React from 'react';

const SuccessStories = () => {
     const stories = [
    {
      name: "Rahim",
      text: "I learned web development and got my first freelance job!",
    },
    {
      name: "Ayesha",
      text: "Improved my English speaking confidence in just 2 months.",
    },
    {
      name: "Karim",
      text: "Started teaching guitar and earning side income.",
    }
  ];

    return (
        <div className="max-w-6xl mx-auto my-4 bg-blue-300 p-2 rounded-sm py-4">

      <h2 className="text-4xl font-bold text-center mb-10">
        Success Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {stories.map((s, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <p className="text-gray-700 mb-4">
              "{s.text}"
            </p>

            <h4 className="font-bold text-blue-600">
              - {s.name}
            </h4>
          </div>
        ))}

      </div>
    </div>
    );
};

export default SuccessStories;