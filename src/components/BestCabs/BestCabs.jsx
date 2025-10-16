import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import carImg from "../../assets/carbooking.png";
import playImg from "../../assets/website/play_store.png";
import appImg from "../../assets/website/app_store.png";

const BestCabs = () => {
  return (
    <section
      id="bestcabs"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden"
    >
      {/* Glowing Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        
  {/* Left Content */}
  <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Book Your <span className="text-yellow-400">CAB Instantly</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
            Download the{" "}
            <span className="font-semibold text-yellow-300">
              CabCoucher App
            </span>{" "}
            and get free rides, live tracking, and instant cab bookings at your fingertips. 
            Fast. Reliable. Affordable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-6">
            <a
              href="#"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-2xl flex items-center gap-3 shadow-lg transition-transform transform hover:scale-105"
            >
              <img src={appImg} alt="App Store" className="h-10 w-auto" />
              <span>App Store</span>
            </a>

            <a
              href="#"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-2xl flex items-center gap-3 shadow-lg transition-transform transform hover:scale-105"
            >
              <img src={playImg} alt="Google Play" className="h-10 w-auto" />
              <span>Google Play</span>
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
  <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end relative"
        >
          {/* Floating Yellow Glow */}
          <div className="absolute -z-10 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-20 top-0 right-5 animate-pulse"></div>

          {/* Car Image */}
          <motion.img
            src={carImg}
            alt="Cab Service"
            className="w-[90%] max-w-md drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
  </motion.div>
      </div>
    </section>
  );
};

export default BestCabs;
