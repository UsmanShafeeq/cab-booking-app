import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-wide">
          What Our Customers Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-white/20">
            <FaQuoteLeft className="text-yellow-400 text-4xl mb-4 mx-auto" />
            <p className="text-gray-200 italic mb-6 leading-relaxed">
              “Booking a ride was so easy and the driver was incredibly polite.
              The entire experience was smooth and professional.”
            </p>
            <div className="flex flex-col items-center">
              <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt="Sarah Khan"
                className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-md mb-3 object-cover"
              />
              <h4 className="font-semibold text-yellow-400 text-lg">
                Sarah Khan
              </h4>
              <span className="text-gray-300 text-sm">Marketing Executive</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-white/20">
            <FaQuoteLeft className="text-yellow-400 text-4xl mb-4 mx-auto" />
            <p className="text-gray-200 italic mb-6 leading-relaxed">
              “The best cab service I’ve used — comfortable cars, helpful
              drivers, and accurate arrival times. Highly recommend!”
            </p>
            <div className="flex flex-col items-center">
              <img
                src="https://randomuser.me/api/portraits/men/52.jpg"
                alt="Ahmed Ali"
                className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-md mb-3 object-cover"
              />
              <h4 className="font-semibold text-yellow-400 text-lg">
                Ahmed Ali
              </h4>
              <span className="text-gray-300 text-sm">Software Engineer</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-white/20">
            <FaQuoteLeft className="text-yellow-400 text-4xl mb-4 mx-auto" />
            <p className="text-gray-200 italic mb-6 leading-relaxed">
              “Exceptional experience! The live location tracking and support
              team make this cab service stand out from others.”
            </p>
            <div className="flex flex-col items-center">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Maria Fatima"
                className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-md mb-3 object-cover"
              />
              <h4 className="font-semibold text-yellow-400 text-lg">
                Maria Fatima
              </h4>
              <span className="text-gray-300 text-sm">Business Owner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
