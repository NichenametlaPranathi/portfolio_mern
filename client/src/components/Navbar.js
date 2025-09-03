import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white p-4 shadow-md flex justify-center space-x-6 z-50">
      <a href="#home" className="hover:text-yellow-400">Home</a>
      <a href="#about" className="hover:text-yellow-400">About</a>
      <a href="#projects" className="hover:text-yellow-400">Projects</a>
      <a href="#skills" className="hover:text-yellow-400">Skills</a>
      <a href="#contact" className="hover:text-yellow-400">Contact</a>
    </nav>
  );
}
