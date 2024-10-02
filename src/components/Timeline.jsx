import React from "react";

const TimelineItem = ({
  title,
  company,
  location,
  period,
  description,
  left,
}) => (
  <div
    className={`mb-8 flex justify-between items-center w-full md:w-[100%] ${
      left ? "md:flex-row-reverse" : "md:flex-row"
    } flex-col-reverse`}
  >
    {/* Content box */}
    <div className={`w-full md:w-5/12 ${left ? "text-right" : ""}`}>
      <div
        className={`bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out ${
          left ? "mr-6" : "ml-6"
        }`}
      >
        <h3 className="font-semibold text-2xl text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {company} | {location}
        </p>
        <p className="text-sm text-white bg-blue-600 rounded px-3 py-1 inline-block mb-4">
          {period}
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>

    {/* Bullet point */}
    <div className="z-20 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-full absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:translate-x-0"></div>

    {/* Empty box for spacing */}
    <div className="w-full md:w-5/12"></div>
  </div>
);

const Timeline = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 md:px-10">
      <div className="relative wrap overflow-hidden h-full">
        {/* Central vertical line */}
        <div className="border-2 absolute border-gray-200 h-full top-0 left-1/2 transform -translate-x-1/2 hidden md:block"></div>

        {/* Timeline Items */}
        <TimelineItem
          title="Founder"
          company="The Zaik"
          location="Irinjalakkuda,India"
          period="(2021 – Present"
          description="At The Zaik, I founded a fashion brand that marries traditional aesthetics with
contemporary design. As the driving force behind the brand, I oversee all aspects of its
creative direction and business strategy.
"
          left={false}
        />

        <TimelineItem
          title="COO & Partner"
          company="369degree Group"
          location="UAE, India"
          period="2022 – Present"
          description="As COO and Partner at 369degree Group, I spearhead our mission to lead in technology
and blockchain innovation. My role involves overseeing daily operations, driving strategic
initiatives, and ensuring the seamless integration of advanced technologies across our
projects. "
          left={true}
        />

        <TimelineItem
          title="Advocate,
          Corporate &  Civil Law"
        //   company="Facebook INC"
          location="Kerala"
          period="2019 – Present"
          description="As an advocate specialising in corporate, criminal, and civil law, I provide expert legal
guidance across various sectors. My practice encompasses advising businesses on
corporate compliance, handling complex criminal cases, and resolving civil disputes with
a focus on strategic solutions.."
          left={false}
        />

        <TimelineItem
          title="Managing Partner"
          company="EduTrade"
          location="India"
          period="2020 – Present"
          description="At EduTrade, I contribute to a platform dedicated to providing innovative trading
education. My role involves shaping educational content, driving strategic partnerships,
and ensuring the platform delivers valuable insights and practical knowledge to aspiring
traders."
          left={true}
        />
      </div>
    </div>
  );
};

export default Timeline;
