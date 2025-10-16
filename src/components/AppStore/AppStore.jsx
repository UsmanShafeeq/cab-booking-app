import React from "react";
import img1 from "../../assets/car2.png";
import img2 from "../../assets/car2.png";
import img3 from "../../assets/car2.png";

const AppStore = () => {
  const cars = [
    {
      image: img1,
      title: "Economy Class",
      desc: "Affordable rides for your everyday travel — comfort meets value.",
      price: "$10 / Km",
    },
    {
      image: img2,
      title: "Business Class",
      desc: "Luxury rides with premium comfort and professional drivers.",
      price: "$20 / Km",
    },
    {
      image: img3,
      title: "VIP Class",
      desc: "Experience ultimate comfort and style in our top-tier cars.",
      price: "$35 / Km",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-20 px-6 text-center"
    >
      {/* Section Heading */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 uppercase tracking-wider mb-4 drop-shadow-lg">
          Choose Best Cab
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Pick from our range of comfortable and affordable ride options —
          designed for every journey with safety, comfort, and speed in mind.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cars.map((car, index) => (
          <div
            key={index}
            className="relative bg-gray-800/70 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 
                       hover:scale-105 hover:shadow-yellow-400/30 transition-all duration-500 group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-56 object-contain bg-gradient-to-b from-gray-900 to-gray-800 
                           group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2 uppercase tracking-wide">
                {car.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {car.desc}
              </p>

              <span className="inline-block bg-yellow-400 text-black font-bold px-5 py-2 rounded-full shadow-md 
                               group-hover:bg-yellow-500 transition-colors duration-300">
                {car.price}
              </span>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/5 transition-all duration-500 rounded-3xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppStore;
