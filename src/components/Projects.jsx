// components/Portfolio.js
import React from "react";

const portfolioData = {
    projects: [
    {
      name: "Job Tracker App",
      link: "https://career-track.netlify.app/",
      image: "./project_images/job_tracker_app.png",
    },
    {
      name: "React Training",
      link: "https://mariaashwini.github.io/react-training/",
      image: "./project_images/react_training.png",
    },
  ],
  websites: [
    {
      name: "GlobalEdico",
      link: "https://www.globaledico.com/",
      image: "./project_images/globaledico.png",
    },
    {
      name: "Friends In Christ",
      link: "https://friendsinchrist.in/",
      image: "./project_images/friends_in_christ.png",
    },
  ],
  logos: [
    {
      name: "Time 2 Trip",
      image: "./project_images/time2trip.png",
    },
    {
      name: "Travel Time",
      image: "./project_images/travel_time.png",
    },
  ],
  banners: [
    {
      name: "Time 2 Trip",
      image: "./project_images/time2trip_banner.jpg",
    },
  ],
  // brochures: [
  //   {
  //     name: "Sai Impex",
  //     image: "/images/portfolio/brochure-1.png",
  //     file: "/brochure_11.pdf",
  //   },
  //   {
  //     name: "Seal Grip Pack",
  //     image: "/images/portfolio/brochure-2.png",
  //     file: "/brochure_2.pdf",
  //   },
  // ],
};

const Section = ({ title, items, type }) => (
  <>
    <div className="w-full mb-4">
      <h4 className="text-xl font-semibold text-gray-700">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-6 mb-8">
      {items.map((item, index) => (
        <div key={index} className="responsive-box">
          <div className="shadow-lg p-4 rounded-lg bg-white">
            <div className="mb-2">
              {type === "projects" && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[426px] h-[200px]"
                  />
                </a>
              )}
              {type === "website" && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[426px] h-[200px]"
                  />
                </a>
              )}
              {type === "logo" && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[300px] h-[200px]"
                />
              )}
              {type === "banner" && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[300px] h-[200px]"
                />
              )}
              {type === "brochure" && (
                <a href={item.file} download>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto"
                  />
                </a>
              )}
            </div>
            <h5 className="text-center font-medium">{item.name}</h5>
          </div>
        </div>
      ))}
    </div>
  </>
);

const Projects = () => {
  return (
    <section
      className="animate-slide-section ml-60 w-[calc(100%-15rem)] min-h-screen py-10 px-4 bg-[#f2f2fc]"
      id="portfolio"
    >
      <div className="section-title flex-none w-full max-w-full mb-[60px]">
        <h2 className="text-[40px] text-[#302E4D] font-bold relative ">
          Projects
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-left mb-10">
          <h2 className="text-2xl font-medium text-[#302e4d] mt-2">
            My Last Projects:
          </h2>
        </div>
         <Section
          title="Projects"
          items={portfolioData.projects}
          type="projects"
        />
        <Section
          title="Websites"
          items={portfolioData.websites}
          type="website"
        />
        <Section title="Logos" items={portfolioData.logos} type="logo" />
        <Section title="Banner" items={portfolioData.banners} type="banner" />
        {/* <Section
          title="Brochures"
          items={portfolioData.brochures}
          type="brochure"
        /> */}
      </div>
    </section>
  );
};

export default Projects;
