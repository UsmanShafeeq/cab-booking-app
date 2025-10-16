import React from "react";
import cabImg from "../../assets/yellow-cab.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center text-center bg-cover bg-center min-h-[75vh] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 dark:bg-black/80 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-10 px-6 mt-20 text-center animate-fadeIn">
        <h3 className="text-yellow-400 text-lg md:text-2xl font-semibold mb-3 tracking-[4px] uppercase">
          Book Your Cab Now
        </h3>

        <h1 className="text-4xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
          +91 9876 54321
        </h1>

        <p className="text-gray-100 text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
          Fast. Reliable. Affordable — Ride with comfort and class anytime,
          anywhere.
        </p>

        <a
          href="#booking"
          className="inline-block px-8 py-3 bg-yellow-500 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-transform transform hover:scale-105"
        >
          Book Your Ride
        </a>
      </div>

      {/* Cab Image Overlapping Yellow Section */}
      <div className="relative z-20 mt-10 md:mt-16">
        <img
          src={cabImg}
          alt="Cab"
          className="w-64 md:w-[420px] mx-auto drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] relative bottom-[-20px] animate-bounce-slow"
        />
      </div>

      {/* Curved Yellow Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44C170.33 72.3 0 120 0 120h1200V0s-86.39 22.36-203.87 43.94C878.7 69.02 733.15 89.34 577.52 78.55 465.6 71.17 375.45 51.35 321.39 56.44z"
            className="fill-yellow-400"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
