import { faFacebook, faLinkedin, faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 md:gap-32 gap-8">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo.png"
              className="h-16"
              alt="Quick fund 247 Logo"
            />
          </Link>
          <ul className="flex gap-16 items-center">
            <li><Link to="https://facebook.com/" className="text-[#00d1a9] text-4xl hover:opacity-60 transition-all"><FontAwesomeIcon icon={faSquareFacebook} /></Link></li>
            <li><Link to="https://instagram.com/" className="text-[#00d1a9] text-4xl hover:opacity-60 transition-all"><FontAwesomeIcon icon={faSquareInstagram} /></Link></li>
            <li><Link to="https://linkedin.com/" className="text-[#00d1a9] text-4xl hover:opacity-60 transition-all"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
          </ul>
          <ul className="flex uppercase flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about-us" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline me-4 md:me-6">
                faq
              </Link>
            </li>
            <li>
              <Link to="/apply" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="https://flowbite.com/" className="hover:underline">
            QUICK FUND 247™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
