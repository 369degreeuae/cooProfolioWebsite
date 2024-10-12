import React from 'react';


const MovetoTop = () => {

  return (
 
      <>
  {/* Scroll-to-top button */}
  <div>
<a href="#top">
  <button
 
    className="scroll-to-top fixed bottom-4 right-4 
    bg-blue-700 text-white rounded-full 
    transition duration-300 hover:bg-gray-700 
                 hover:text-gray-200"
  >
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40    ">
    <path d="M12 4l-8 8h5v4h6v-4h5l-8-8z" fill="currentColor"/>
</svg>

  </button>
  </a>
      </div>
      
</>
  )
}

export default MovetoTop
