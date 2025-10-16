import React from "react";
import {
  FaBolt,
  FaHeadset,
  FaDollarSign,
  FaShieldAlt,
  FaCar,
  FaClock,
} from "react-icons/fa";
import img2 from "../../assets/girl.jpg";

const About = () => {
  const features = [
    {
      icon: <FaBolt className="text-yellow-400 text-3xl mb-2" />,
      title: "Fast Booking",
      desc: "Book your ride in seconds with our seamless interface.",
    },
    {
      icon: <FaHeadset className="text-yellow-400 text-3xl mb-2" />,
      title: "24/7 Support",
      desc: "Our friendly team is always here to help you anytime.",
    },
    {
      icon: <FaDollarSign className="text-yellow-400 text-3xl mb-2" />,
      title: "Affordable Pricing",
      desc: "Enjoy premium service at the most reasonable rates.",
    },
    {
      icon: <FaShieldAlt className="text-yellow-400 text-3xl mb-2" />,
      title: "Trusted Drivers",
      desc: "Our professional drivers ensure safe and reliable rides.",
    },
    {
      icon: <FaCar className="text-yellow-400 text-3xl mb-2" />,
      title: "Comfort Rides",
      desc: "Experience clean, comfortable, and air-conditioned vehicles.",
    },
    {
      icon: <FaClock className="text-yellow-400 text-3xl mb-2" />,
      title: "On-Time Service",
      desc: "We value your time — punctuality is our top priority.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-10 px-6 bg-cover min-h-[60vh] bg-center text-gray-100 flex items-center"
      style={{
        backgroundImage: `url(${img2})`,
      }}
    >
      {/* Dark Overlay */}
       {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 dark:bg-black/80 mix-blend-multiply"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold mb-1 text-yellow-400 tracking-wide uppercase drop-shadow-md">
          We Do Best
        </h2>
        <p className="text-base md:text-lg font-medium text-gray-100 mb-6 drop-shadow-sm">
          Thank You for Choosing Us
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-4 text-left hover:translate-y-[-3px] transform transition-all duration-300"
            >
              <div className="flex flex-col items-start">
                {item.icon}
                <h3 className="text-lg font-semibold text-yellow-400 mb-1 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-[14px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
