import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Atlanta,+Georgia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                LOCATION
              </h2>
              <p className="mt-1">
                Atlanta, Georgia
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                LINKS
              </h2>
              <a href="https://github.com/HomamZituni" target="_blank" rel="noopener noreferrer" className="text-indigo-400 leading-relaxed block">
                GitHub
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                RESUME
              </h2>
              <a href="/Zituni, Homam Resume 2026.pdf" download className="text-indigo-400 leading-relaxed">
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-gray-800 p-8 rounded-lg">
          <h2 className="text-white sm:text-4xl text-3xl mb-4 font-medium title-font">
            Get In Touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-400">
            Please reach out to me at either of the following:
          </p>
          <div className="mb-4">
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <a href="mailto:homamzituni@gmail.com" className="text-indigo-400 hover:text-indigo-300 text-lg">
              homamzituni@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/homamnzituni/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 text-lg break-all">
              linkedin.com/in/homamnzituni
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


