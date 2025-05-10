import React from "react";
import logo from "./images/Logo.png"
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-6 w-auto" />
        
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 text-sm text-gray-600 font-medium">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">Service</li>
        <li className="hover:text-black cursor-pointer">Feature</li>
        <li className="hover:text-black cursor-pointer">Product</li>
        <li className="hover:text-black cursor-pointer">Testimonial</li>
        <li className="hover:text-black cursor-pointer">FAQ</li>
      </ul>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-green-500 font-medium text-sm hover:underline">Login</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
