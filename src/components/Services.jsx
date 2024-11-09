import React from 'react'
import { FaShoppingBag } from "react-icons/fa";


const Services = ({id}) => {
  return (
    <div>
      <>
  {/* component */}
  <div
    id={id}
    className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-gray-950"
  >
    <div className="container xl:max-w-6xl mx-auto px-4">
      {/* Heading start */}
      <header className="text-center mx-auto mb-12 lg:px-20">
        <h2 className="text-2xl leading-normal mb-2 font-bold text-slate-100">
          What I Offer for you
        </h2>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 60"
          style={{ margin: "0 auto", height: 35 }}
          xmlSpace="preserve"
        >
          <circle
            cx="50.1"
            cy="30.4"
            r={5}
            className="stroke-primary"
            style={{
              fill: "transparent",
              strokeWidth: 2,
              strokeMiterlimit: 10
            }}
          />
          <line
            x1="55.1"
            y1="30.4"
            x2={100}
            y2="30.4"
            className="stroke-primary"
            style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
          />
          <line
            x1="45.1"
            y1="30.4"
            x2={0}
            y2="30.4"
            className="stroke-primary"
            style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
          />
        </svg>
        
      </header>
      {/* End heading */}
      {/* row */}
      <div className="flex flex-wrap flex-row mx-4 text-center">
        <div
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInUp"
          }}
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-900 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-100 mb-4">
              {/* icon */}
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="2rem"
  height="2rem"
  fill="currentColor"
  className="bi bi-file-earmark-text"
  viewBox="0 0 16 16"
>
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM9.5 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5.5H10a.5.5 0 0 1-.5-.5V1z"/>
  <path d="M6 8h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1zm0 2h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1zm0 2h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
</svg>

            </div>
            <h3 className="text-lg leading-normal mb-2 font-semibold text-gray-200">
            Content Creation
            </h3>
            <p className="text-gray-300">
            Crafting SEO-optimised, engaging content for digital platforms to enhance online
            presence
            </p>
          </div>
          {/* end service block */}
        </div>
        <div
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.1s",
            animationName: "fadeInUp"
          }}
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-900 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-100 mb-4">
              {/* icon */}
              <svg
  xmlns="http://www.w3.org/2000/svg"
  width="2rem"
  height="2rem"
  fill="currentColor"
  className="bi bi-laptop"
  viewBox="0 0 16 16"
>
  <path d="M12.5 3h-9A1.5 1.5 0 0 0 2 4.5v7A1.5 1.5 0 0 0 3.5 13h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 3zm0 1A.5.5 0 0 1 13 4.5v7a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h9z"/>
  <path d="M0 12.5A.5.5 0 0 1 .5 12h15a.5.5 0 0 1 .5.5v.5a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 13v-.5zM3 13a1.5 1.5 0 0 0 1.415 1h7.17A1.5 1.5 0 0 0 13 13H3z"/>
</svg>

            </div>
            <h3 className="text-lg leading-normal mb-2 font-semibold text-gray-100">
            Software & Web Development
            </h3>
            <p className="text-gray-300">
            Leading the development of software solutions, blockchain applications
            </p>
          </div>
          {/* end service block */}
        </div>
        <div
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.3s",
            animationName: "fadeInUp"
          }}
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-900 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-100 mb-4">
              {/* icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                className="bi bi-wallet2"
                viewBox="0 0 16 16"
              >
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
              </svg> 

            </div>
            <h3 className="text-lg leading-normal mb-2 font-semibold text-gray-100">
            Legal Services
            </h3>
            <p className="text-gray-300">
            Offering corporate and civil law services, with a focus on contract management
and business law.

            </p>
          </div>
          {/* end service block */}
        </div>
        <div
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInUp"
          }}
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-900 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-100 mb-4">
              {/* icon */}
              <FaShoppingBag className="text-3xl" />
            </div>
            <h3 className="text-lg leading-normal mb-2 font-semibold text-gray-100">
            Fashion Innovation
            </h3>
            <p className="text-gray-300">
            Creating unique, high-end fashion that blends traditional aesthetics with modern design.
            </p>
          </div>
          {/* end service block */}
        </div>
        <div
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.1s",
            animationName: "fadeInUp"
          }}
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-900 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-100 mb-4">
              {/* icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                className="bi bi-wallet2"
                viewBox="0 0 16 16"
              >
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
              </svg>
            </div>
            <h3 className="text-lg leading-normal mb-2 font-semibold text-gray-100">
            Design, Marketing & Branding
            </h3>
            <p className="text-gray-300">
            Crafting compelling identities through design and branding..</p>
          </div>
          {/* end service block */}
        </div>
        <div
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.3s",
            animationName: "fadeInUp"
          }}
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-900 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-100 mb-4">
              {/* icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                className="bi bi-funnel"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
              </svg>
            </div>
            <h3 className="text-lg leading-normal mb-2 font-semibold text-gray-100">
            Business Strategy:
            </h3>
            <p className="text-gray-300">
            Providing strategic insights and planning to optimise business operations and drive
            growth
            </p>
          </div>
          {/* end service block */}
        </div>
      </div>
      {/* end row */}
    </div>
  </div>
</>

    </div>
  )
}

export default Services
