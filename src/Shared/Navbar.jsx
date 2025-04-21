import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = true; // Replace with actual auth logic
  const user = { name: "John Doe", photoURL: "https://i.pravatar.cc/40" }; // Replace with actual user
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact Us" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/menu", label: "Our Menu" },
    { to: "/shop", label: "Our Shop" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="bg-black/60 backdrop-blur-md text-white shadow-lg fixed top-0 w-11/12 rounded-lg z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-xl md:text-2xl font-bold tracking-widest text-yellow-400 cursor-pointer"
            whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            BISTRO BOSS RESTAURANT
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-white font-bold transition duration-300 relative group ${
                    isActive ? "text-yellow-400" : ""
                  }`
                }
              >
                <span className="group-hover:text-yellow-300">
                  {link.label}
                </span>
                <motion.div
                  layoutId="underline"
                  className="h-0.5 bg-yellow-400 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"
                />
              </NavLink>
            ))}

            <FaShoppingCart className="text-2xl hover:text-yellow-400 transition duration-300 cursor-pointer" />

            {isLoggedIn ? (
              <>
                <button
                  onClick={() => console.log("Sign Out")}
                  className="px-3 py-1 bg-yellow-400 text-black rounded-md font-semibold hover:scale-105 transition"
                >
                  Sign Out
                </button>
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-yellow-400 hover:scale-110 transition"
                  onClick={() => navigate("/profile")}
                />
              </>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-3 py-1 bg-yellow-400 text-black rounded-md font-semibold hover:scale-105 transition"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-2xl text-yellow-400" />
              ) : (
                <FaBars className="text-2xl text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 pt-2 rounded-b-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-white font-bold transition duration-300 ${
                    isActive ? "text-yellow-400" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <FaShoppingCart className="text-2xl hover:text-yellow-400 transition duration-300 cursor-pointer" />

            {isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    console.log("Sign Out");
                    setIsOpen(false);
                  }}
                  className="px-3 py-1 bg-yellow-400 text-black rounded-md font-semibold hover:scale-105 transition"
                >
                  Sign Out
                </button>
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-yellow-400 cursor-pointer hover:scale-110 transition"
                  onClick={() => {
                    navigate("/profile");
                    setIsOpen(false);
                  }}
                />
              </>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
                className="px-3 py-1 bg-yellow-400 text-black rounded-md font-semibold hover:scale-105 transition"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
