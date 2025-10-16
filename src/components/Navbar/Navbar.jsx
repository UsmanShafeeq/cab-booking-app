import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-gray-900 dark:text-white">Cab</span>
          <span className="text-yellow-500">Booking</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`relative px-3 py-2 transition duration-300 ${
                  active === item.id
                    ? "text-yellow-500"
                    : "text-gray-800 dark:text-gray-200"
                } hover:text-yellow-500`}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-yellow-500 transition-all duration-300 ${
                    active === item.id ? "w-full" : "w-0"
                  } group-hover:w-full`}
                ></span>
              </a>
            </li>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-gray-800 dark:text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-lg text-center overflow-hidden transition-all duration-500 ${
          open ? "max-h-[400px] opacity-100 py-5" : "max-h-0 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => {
              setActive(item.id);
              setOpen(false);
            }}
            className={`block py-2 font-medium transition-colors duration-300 ${
              active === item.id
                ? "text-yellow-500"
                : "text-gray-800 dark:text-gray-200"
            } hover:text-yellow-500`}
          >
            {item.label}
          </a>
        ))}

        {/* Theme Toggle for Mobile */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
