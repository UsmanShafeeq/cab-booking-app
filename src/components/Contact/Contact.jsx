import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#ffb400] min-h-[60vh] flex items-center justify-center py-10"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-black space-y-5">
          <h4 className="text-sm font-semibold uppercase tracking-wide">
            Best In City
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-sm">
            TRUSTED CAB SERVICES IN NEW YORK
          </h2>
          <p className="text-gray-900 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            magnam! Tenetur odio quo et maxime? Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <button className="bg-black text-white px-6 py-2 mt-3 rounded-md shadow-md hover:bg-gray-800 transition">
            Read More
          </button>
        </div>

        {/* Right Booking Form */}
        <div className="bg-white rounded-lg shadow-xl max-w-sm mx-auto transform hover:scale-105 transition duration-300">
          <div className="bg-black text-white py-3 px-5 rounded-t-lg text-center font-semibold">
            BOOK A CAB
          </div>
          <form className="p-6 space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Start"
                className="w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="End"
                className="w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option>Choose Vehicle</option>
              <option>Economy</option>
              <option>Premium</option>
              <option>Luxury</option>
            </select>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
