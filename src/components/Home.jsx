import { ReactTyped } from "react-typed";
export default function Home() {
  return (
    <section
      className="animate-slide-section ml-60 w-[calc(100%-15rem)] min-h-screen flex items-center justify-center px-4 bg-[#f2f2fc]"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <div className="max-w-4xl w-full flex flex-col gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h3 className="text-[28px] font-semibold text-[#302E4D]">
            Hello, my name is{" "}
            <span
              className="text-[#ec1839]"
              style={{ fontFamily: "Clicker Script,cursive" }}
            >
              Maria Ashwini
            </span>
          </h3>
          <h3 className="text-3xl font-semibold text-[#302E4D]">
            I’m a{" "}
            <ReactTyped
              strings={[
                "Front End Developer",
                "Full Stack Developer",
                "Coding Teacher",
              ]}
              typeSpeed={50}
              backSpeed={30}
              className="typed-text text-[#ec1839]"
              loop
            />
            {/* <span className="animate-pulse ml-1">|</span> */}
          </h3>
          <p className="text-[#504e70] text-xl">
            With over 8.2 years of hands-on experience, I specialize in building clean, responsive, and user-friendly web interfaces. My work spans
            frontend development, UI/UX design, and mentoring aspiring
            developers through effective, practical coding instruction.
          </p>
          <p className="text-[#504e70] text-xl">
            I bring a strong eye for design, a passion for crafting intuitive
            user experiences, and a deep understanding of web technologies.
            Whether it's building modern web apps or guiding learners to code
            confidently — I do it with creativity, structure, and heart.
          </p>
          <a
            href="/Maria_Ashwini_CV.docx"
            download
            className="inline-block bg-[#ec1839] text-white text-base font-medium py-[12px] px-[35px] rounded-[40px] transition-all duration-300 ease-in-out hover:scale-105"
          >
            Download CV
          </a>
        </div>

        {/* Image (Optional) */}
        {/* 
        <div className="home-img">
          <img src="/images/hero.jpg" alt="Maria Ashwini" className="rounded-lg shadow-lg" />
        </div> 
        */}
      </div>
    </section>
  );
}
