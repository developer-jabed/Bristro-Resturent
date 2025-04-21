import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white mt-16 px-6 rounded-lg py-12 md:px-20"
    >
      <div className="grid md:grid-cols-4 gap-10 text-sm">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">🍽️ Bistro Restaurant</h2>
          <p>
            Serving delicious meals made from fresh ingredients. Experience
            comfort dining with a touch of elegance, right at your table.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Email: contact@bistroresto.com</p>
          <p>Phone: +1 555 123 4567</p>
          <p>Address: 123 Culinary Ave, Food City</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <p>Join our mailing list for updates and special offers.</p>
          <form className="mt-3 flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded text-black"
            />
            <button
              type="submit"
              className="bg-white text-black rounded px-3 py-2 hover:bg-gray-200 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-6 mt-8 gap-4 text-xs">
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:scale-110 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <FaLinkedinIn />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Bistro Restaurant. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
