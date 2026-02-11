// src/components/About.js
import React from "react";

export default function About() {
  return (
    <section id="home">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Homam Zituni - AppSec Analyst & Full Stack Developer
          </h1>
          <p className="mb-2 text-xl text-gray-300">
            Building secure web applications
          </p>
          <p className="mb-8 leading-relaxed">
            Full Stack Developer | React, Node.js, Security
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              View Projects
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Chat With Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-2/5 md:w-1/4 w-1/3">
          <img
            className="object-cover object-center rounded-full"
            alt="Homam Zituni"
            src="/Homam photo.jpg"
          />
        </div>
      </div>
    </section>
  );
}




