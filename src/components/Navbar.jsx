import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-sm w-full">
          <div className=" mx-auto sm:px-6 py-0">
            <div className="flex justify-between h-16">
              <div>
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    <img
                      className="w-24 h-24"
                      src="https://res.cloudinary.com/dhpfskfem/image/upload/v1727855082/cooprtfolio/byc9o6ggj2yl5lxetm6f.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="#"
                  className="px-3 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="px-3 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  About Me
                </a>
                <a
                  href="#"
                  className="px-3 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Services
                </a>
               
                <a
                  href="#"
                  className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-400 hover:bg-blue-600"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar

