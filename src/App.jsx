import { useState } from "react";
import { User, ExternalLink } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import GetinTouch from "./components/GetinTouch.jsx";
import Timeline from "./components/Timeline";
import Services from "./components/Services";

import "./App.css";

function App() {

  return (
    <>
      <div className="w-full bg-gray-50 mt-[-38px]">  
    <Navbar/>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-4xl font-bold leading-7 text-gray-900 sm:text-5xl sm:truncate">
                Hello, I am
              </h2>
              <h1 className="mt-2 text-6xl font-extrabold text-gray-900 sm:text-7xl">
                Lakshmy Santhosh
              </h1>
              <p className="mt-3 text-xl text-gray-500">
                Coo & General Manager - 369degree Group
              </p>
              <p className="mt-5 text-lg text-gray-700 max-w-3xl">
                Hello, I’m Lakshmy Santhosh. I’m a tech enthusiast who thrives
                on blending creativity with innovation. My journey is driven by
                a desire to innovate and make a difference, blending my
                enthusiasm for tech with a love for creative problem-solving.
                I’m excited by new challenges and always eager to connect and
                collaborate to bring fresh, impactful ideas to life
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
              <a
                  href="#timeline"
                  className="px-3 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-600">
                  Learn More About Me
                </button>
                </a>
                <a
                  href="#getintouchcontact"
                  className="px-3 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                <button className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Get In Touch
                  {/* Projects{" "} */}
                  <ExternalLink className="inline-block ml-2 w-4 h-4" />
                </button>
                </a>
              </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              <div className="flex-shrink-0 lg:flex">
                <img
                  className="h-96 w-56 rounded-full"
                  src="https://res.cloudinary.com/dhpfskfem/image/upload/v1727858839/cooprtfolio/afa5uruzbmaki3spjenb.jpg"
                  alt="Profile"
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center justify-between">
              <span className="bg-orange-100 text-orange-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium">
                <User className="mr-1 h-4 w-4" />
                Chief Operating Officer
              </span>
              <span className="text-gray-500">100+ Projects Done</span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-5 sm:grid-cols-6 lg:grid-cols-4 ">
            <div className="col-span-1 flex flex-col items-center  bg-gray-50">
              <img
                className="h-32 rounded-lg"
                src="https://res.cloudinary.com/dhpfskfem/image/upload/v1727855082/cooprtfolio/jkmh0q5gfxyb7hqxekyz.jpg"
                alt={`Technology Enthusiast`}
              />
            <p className="mt-2 text-center font-semibold">Entrepreneur</p>
            </div>
            <div className="col-span-1 flex flex-col items-center  bg-gray-50">
              <img
                className="h-32 rounded-lg"
                src="https://res.cloudinary.com/dhpfskfem/image/upload/v1727855083/cooprtfolio/yftqtknbnxfgc4d5qvzj.jpg"
                alt="Advocate"
              />
              <p className="mt-2 text-center font-semibold">Advocate</p>
            </div>


            <div className="col-span-1 flex flex-col items-center  bg-gray-50">
              <img
                className="h-32 rounded-lg"
                src="https://res.cloudinary.com/dhpfskfem/image/upload/v1727855082/cooprtfolio/mn4bwijl8xkzdrl92mxv.jpg"
                alt="Entrepreneur"
              />
              <p className="mt-2 font-semibold text-center">Techonology Enthusiast</p>
            </div>

            <div className="col-span-1 flex flex-col items-center   bg-gray-50">
              <img
                className="h-32 rounded-lg"
                src="https://res.cloudinary.com/dhpfskfem/image/upload/v1727855083/cooprtfolio/h29dsawbajwexa1fal4r.jpg"
                alt={`Fashion Innovator`}
              />
              <p className="mt-2 items-center font-semibold">Fashion Innovator</p>
            </div>
          </div>
          <Timeline id="timeline" />
          <Services id="services" />
          <GetinTouch id="getintouchcontact" />
        </main>
      </div>
    </>
  );
}

export default App;
