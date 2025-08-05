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

const About = () => {
  return (
    <section
      id="about"
      className="animate-slide-section ml-60 w-[calc(100%-15rem)] min-h-screen py-10 px-4 bg-[#f2f2fc]"
    >
      <div className="section-title flex-none w-full max-w-full mb-[60px]">
        <h2 className="text-[40px] text-[#302E4D] font-bold relative ">
          About Me
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h3 className="text-[#302e4d] text-2xl font-bold">
            I'm Maria Ashwini and I'm a{" "}
            <span className="text-[#ec1839]">Front End Developer</span>
          </h3>
          <p className="mt-4 text-base text-[#504e70] leading-[25px]">
            I’m a passionate frontend developer with 8+ years of experience. I
            specialize in React, Tailwind CSS, and building clean, performant
            UIs that work across all devices. I’m driven by problem-solving and
            constantly learning new ways to create better user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Personal Info</h4>
            <div className="flex-none basis-full max-w-full">
              <p className="font-semibold text-base text-[#302e4d] border-b border-[#e8dfec] py-[10px]">
                Website:
                <span className="font-normal text-[#504e70] ml-[4px] inline-block">
                  webfocus.globalmultitechno.com
                </span>
              </p>
            </div>
            <div className="flex-none basis-full max-w-full">
              <p className="font-semibold text-base text-[#302e4d] border-b border-[#e8dfec] py-[10px]">
                Email:
                <span className="font-normal text-[#504e70] ml-[4px] inline-block">
                  mariaashwini06@gmail.com
                </span>
              </p>
            </div>
            <div className="flex-none basis-full max-w-full">
              <p className="font-semibold text-base text-[#302e4d] border-b border-[#e8dfec] py-[10px]">
                Contact No:
                <span className="font-normal text-[#504e70] ml-[4px] inline-block">
                  +91 9566194164
                </span>
              </p>
            </div>
            <div className="flex-none basis-full max-w-full">
              <p className="font-semibold text-base text-[#302e4d] border-b border-[#e8dfec] py-[10px]">
                Qualification:
                <span className="font-normal text-[#504e70] ml-[4px] inline-block">
                  B.E.
                </span>
              </p>
            </div>
            <div className="flex-none basis-full max-w-full">
              <p className="font-semibold text-base text-[#302e4d] border-b border-[#e8dfec] py-[10px]">
                City:
                <span className="font-normal text-[#504e70] ml-[4px] inline-block">
                  Chennai
                </span>
              </p>
            </div>
            <div className="mt-4">
              <a
                href="#contact"
                className="inline-block bg-[#ec1839] text-white text-base font-medium py-[12px] px-[35px] rounded-[40px] transition-all duration-300 ease-in-out hover:scale-105"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Skills</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map(({ name, percent }, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{name}</span>
                    <span>{percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#ec1839] rounded-full w-[95%]">
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div>
            <h3 className="text-2xl text-[#302e4d] font-bold mb-4">Education</h3>
            <div className="space-y-6 border-l-4 border-[#ec1839] bg-white p-4 rounded shadow-lg">
              <div>
                <h4 className="text-lg font-semibold">M.D.C.A</h4>
                <p>
                  Trained on core technologies at Bharat Sevak Samaj (B.S.S)
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  B.E. in Electronics and Communication
                </h4>
                <p>
                  Graduated from P.M.R Institute of Technology, Anna University
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-[#302e4d] font-bold mb-4">Experience</h3>
            <div className="space-y-6 border-l-4 border-[#ec1839] bg-white p-4 rounded shadow-lg">
              <div>
                <h4 className="text-lg font-semibold">Freelancer</h4>
                <p className="text-sm text-gray-500">Dec 2021 – Present</p>
                <p>Worked with clients like:</p>
                <ul className="list-disc list-inside ml-4 text-sm">
                  <li>SkillIsHere</li>
                  <li>Global Multi Technologies</li>
                  <li>Dr.Curro</li>
                  <li>S.G.Pack</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold">
                  Coding Instructor at Campk12
                </h4>
                <p className="text-sm text-gray-500">Jun 2020 – Dec 2021</p>
                <ul className="list-disc list-inside ml-4 text-sm">
                  <li>Website Development</li>
                  <li>App Development</li>
                  <li>Artificial Intelligence</li>
                  <li>Scratch</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Freelancer</h4>
                <p className="text-sm text-gray-500">Oct 2019 – Jun 2020</p>
                <p>Clients:</p>
                <ul className="list-disc list-inside ml-4 text-sm">
                  <li>Yogam Housing</li>
                  <li>Global Edico</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold">
                  Senior Software Engineer at Infiniti Software Solutions
                </h4>
                <p className="text-sm text-gray-500">Mar 2014 – Jul 2018</p>
                <p>
                  Worked on multiple web application projects with
                  cross-functional teams.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold">
                  Customer Service Professional at SITEL India
                </h4>
                <p className="text-sm text-gray-500">Aug 2011 – Jul 2012</p>
                <p>Provided tech support for US and UK clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
