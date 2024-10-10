import React from 'react';
import { User, ExternalLink } from "lucide-react";


const Landing = () => {
  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
    <h2 className="text-4xl font-bold leading-7 text-gray-900 sm:text-5xl sm:truncate animate-fadeIn">
      Hello, I am
    </h2>
    <h1 className="mt-2 text-6xl font-extrabold text-gray-900 sm:text-7xl animate-slideInRight">
      Lakshmy Santhosh
    </h1>
    <p className="mt-3 text-xl text-gray-500 animate-fadeInDelay">
      Coo & General Manager - 369degree Group
    </p>
    <p className="mt-5 text-lg text-center text-gray-700 max-w-3xl mx-auto animate-fadeInLongDelay">
      Hello, I’m Lakshmy Santhosh. I’m a tech enthusiast who thrives on blending
      creativity with innovation. My journey is driven by a desire to innovate and make
      a difference, blending my enthusiasm for tech with a love for creative problem-solving.
      I’m excited by new challenges and always eager to connect and collaborate to bring
      fresh, impactful ideas to life.
    </p>
    <div className="mt-8 flex flex-wrap gap-4 justify-center">
      <a href="#timeline" className="px-3 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
        <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-600">
          Learn More About Me
        </button>
      </a>
      <a href="#getintouchcontact" className="px-3 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
        <button className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Get In Touch
        </button>
      </a>
    </div>


  </div>
  <div className="mt-5 flex lg:mt-0 lg:ml-4">
  <div className="flex-shrink-0 lg:flex animate-zoomIn">
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
              
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-6 lg:grid-cols-4">
  {[
    { img: "https://res.cloudinary.com/dhpfskfem/image/upload/v1728540021/cooprtfolio/u1jnnys9kvdx9eqtgxg7.jpg", label: "Entrepreneur" },
    { img: "https://res.cloudinary.com/dhpfskfem/image/upload/v1728060732/cooprtfolio/qqhdexuupdigjpjllmh6.jpg", label: "Advocate" },
    { img: "https://res.cloudinary.com/dhpfskfem/image/upload/v1727855082/cooprtfolio/mn4bwijl8xkzdrl92mxv.jpg", label: "Technology Enthusiast" },
    { img: "https://res.cloudinary.com/dhpfskfem/image/upload/v1728038884/cooprtfolio/kyww22ifncpoam3uppsc.jpg", label: "Fashion Innovator" },
  ].map((item, index) => (
    <div key={index} className="col-span-1 flex flex-col items-center bg-gray-50 p-4">
      <img
        className="h-32 w-full sm:h-40 sm:w-auto rounded-lg object-cover"
        src={item.img}
        alt={item.label}
      />
      <p className="mt-2 text-center font-semibold text-sm sm:text-base">{item.label}</p>
    </div>
  ))}
</div>


    </div>
  )
}

export default Landing
