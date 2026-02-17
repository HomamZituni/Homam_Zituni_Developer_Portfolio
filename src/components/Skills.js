import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        
        <div className="flex flex-wrap lg:w-4/5 mx-auto">
          {/* Frontend */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <h2 className="text-2xl font-medium text-white mb-4 text-center">Frontend</h2>
            {skills.frontend.map((skill) => (
              <div key={skill} className="bg-gray-800 rounded flex p-4 mb-2 items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            ))}
          </div>

          {/* Backend */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <h2 className="text-2xl font-medium text-white mb-4 text-center">Backend</h2>
            {skills.backend.map((skill) => (
              <div key={skill} className="bg-gray-800 rounded flex p-4 mb-2 items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            ))}
          </div>

          {/* Infrastructure */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <h2 className="text-2xl font-medium text-white mb-4 text-center">Infrastructure</h2>
            {skills.infrastructure.map((skill) => (
              <div key={skill} className="bg-gray-800 rounded flex p-4 mb-2 items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
