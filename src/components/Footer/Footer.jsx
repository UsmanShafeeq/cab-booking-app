import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Top 24/7 Call Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-8 text-center">
        <p className="text-lg font-semibold uppercase tracking-wide">
          We are ready to take your call 24 hours, 7 days!
        </p>
        <div className="flex justify-center items-center gap-3 mt-3">
          <FaPhoneAlt className="text-2xl text-black animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-black drop-shadow-lg">
            +123 4567 8900
          </h2>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-yellow-400 text-3xl font-bold mb-4">CabCoucher</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Experience hassle-free cab booking anytime, anywhere. Safe, fast,
              and comfortable rides — powered by technology and trust.
            </p>
            <div className="flex gap-3 mt-5">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full transition transform hover:scale-110 shadow-md"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              {["Home", "About Us", "Services", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">
              Our Services
            </h4>
            <ul className="space-y-3 text-gray-400">
              {[
                "City Rides",
                "Airport Transfers",
                "Corporate Cabs",
                "Outstation Trips",
                "Hourly Rentals",
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">
              Contact Info
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400" />{" "}
                123 Main Street, Lahore, Pakistan
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-400" /> +123 4567 8900
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" /> support@cabcoucher.com
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-yellow-400" /> Open 24/7
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-yellow-400">CabCoucher</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
