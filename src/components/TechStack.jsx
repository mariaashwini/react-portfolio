import React from "react";

const skills = [
  { name: "React", percent: 85 },
  { name: "Tailwind CSS", percent: 80 },
  { name: "PHP", percent: 90 },
  { name: "PYTHON", percent: 75 },
  { name: "Bootstrap", percent: 85 },
  { name: "Javascript", percent: 80 },
  { name: "Wordpress", percent: 50 },
  { name: "MySQL", percent: 85 },
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 80 },
];

const TechStack = () => {
  return (
    <section className="animate-slide-section ml-60 w-[calc(100%-15rem)] min-h-screen py-10 px-4 bg-[#f2f2fc]">
      <div className="section-title flex-none w-full max-w-full mb-[60px]">
        <h2 className="text-[40px] text-[#302E4D] font-bold relative ">
          Tech Stack
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-lg">
            <div className="flex justify-between">
               <h5 className="text-lg font-medium mb-2">{skill.name}</h5>
              <div className="text-base font-semibold text-gray-700 h-full flex items-center">
                {skill.percent}%
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 relative">
              <div
                className="bg-[#ec1839] h-4 rounded-full transition-all duration-500"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
