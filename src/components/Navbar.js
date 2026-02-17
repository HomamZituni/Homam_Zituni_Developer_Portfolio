import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Photo and Name */}
        <a href="#about" className="flex items-center title-font font-medium text-white mb-4 md:mb-0">
          <img src="/Homam photo.jpg" alt="Homam Zituni" className="w-10 h-10 rounded-full object-cover" />
          <span className="ml-3 text-xl">Homam Zituni</span>
        </a>
        
        {/* Nav Links */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">About</a>
          <a href="#skills" className="mr-5 hover:text-white">Skills</a>
          <a href="#projects" className="mr-5 hover:text-white">Projects</a>
          <a href="https://github.com/HomamZituni" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-white">GitHub</a>
          <a href="/Homam_Zituni_Resume_2026.pdf" download className="mr-5 hover:text-white">Resume</a>
        </nav>
        
        {/* Contact Button */}
        <a href="#contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

